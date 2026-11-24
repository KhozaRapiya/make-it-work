import { NextResponse } from "next/server";
import {
  escapeHtml,
  sanitize,
  serviceOptions,
  validateEnquiry,
  LIMITS,
  type EnquiryInput,
} from "@/lib/enquiry";
import { clientIp, rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/enquiry — quote and contact form submissions.
 *
 * INTEGRATION POINT: delivery uses the Resend email API when RESEND_API_KEY,
 * ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL are set. Swap `deliver()` for another
 * provider (SMTP, SendGrid, Supabase insert, CRM webhook) without touching the form.
 * When delivery is not configured the route returns 503 — it never pretends an
 * enquiry was delivered.
 */
export async function POST(req: Request) {
  const ip = clientIp(req);
  const rl = rateLimit(`enquiry:${ip}`, 5, 10 * 60 * 1000);
  if (!rl.ok) {
    return NextResponse.json(
      { message: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const data: EnquiryInput = {
    kind: body.kind === "contact" ? "contact" : "quote",
    fullName: sanitize(body.fullName, LIMITS.name),
    company: sanitize(body.company, LIMITS.company),
    email: sanitize(body.email, LIMITS.email),
    phone: sanitize(body.phone, LIMITS.phone),
    service: sanitize(body.service, 60),
    subject: sanitize(body.subject, LIMITS.subject),
    budget: sanitize(body.budget, 60),
    message: sanitize(body.message, LIMITS.message),
    contactMethod: sanitize(body.contactMethod, 20),
    consent: body.consent === true,
    website: sanitize(body.website, 200),
    startedAt: typeof body.startedAt === "number" ? body.startedAt : 0,
  };

  // Spam protection: honeypot filled, or submitted implausibly fast.
  // Respond with success so bots learn nothing, but deliver nothing.
  const tooFast = !data.startedAt || Date.now() - data.startedAt < 3000;
  if (data.website || tooFast) {
    return NextResponse.json({ message: "Thank you. Your enquiry has been received." });
  }

  const errors = validateEnquiry(data);
  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const result = await deliver(data);
  if (!result.ok) {
    return NextResponse.json({ message: result.message }, { status: result.status });
  }
  return NextResponse.json({
    message: "Our team will review your requirements and get back to you using your preferred contact method.",
  });
}

async function deliver(d: EnquiryInput): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.warn("[enquiry] Delivery not configured: set RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL.");
    return {
      ok: false,
      status: 503,
      message: "Online enquiries are not yet connected on this site, so your message could not be delivered.",
    };
  }

  const serviceLabel = serviceOptions.find((o) => o.value === d.service)?.label ?? "Not specified";
  const rows: [string, string][] = [
    ["Type", d.kind === "quote" ? "Quotation request" : "General enquiry"],
    ["Full name", d.fullName],
    ["Company", d.company || "—"],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Service", serviceLabel],
    ["Subject", d.subject],
    ["Estimated budget", d.budget || "—"],
    ["Preferred contact", d.contactMethod],
  ];
  const html = `
    <h2 style="font-family:Arial,sans-serif">New ${d.kind === "quote" ? "quotation request" : "enquiry"} — Make IT Work website</h2>
    <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="color:#666"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <h3 style="font-family:Arial,sans-serif">Requirements</h3>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(d.message)}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nRequirements:\n${d.message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: d.email,
        subject: `[Website ${d.kind === "quote" ? "Quote" : "Enquiry"}] ${d.subject}`.slice(0, 180),
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[enquiry] Email provider error", res.status, await res.text().catch(() => ""));
      return { ok: false, status: 502, message: "We could not send your enquiry right now. Please try again shortly." };
    }
    return { ok: true };
  } catch (err) {
    console.error("[enquiry] Email delivery failed", err);
    return { ok: false, status: 502, message: "We could not send your enquiry right now. Please try again shortly." };
  }
}
