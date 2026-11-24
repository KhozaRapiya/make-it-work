import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/chat-knowledge";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { siteConfig, whatsappUrl } from "@/lib/site";

/**
 * POST /api/chat — Make IT Work Assistant.
 * Server-side only: the API key never reaches the browser.
 * Env: ANTHROPIC_API_KEY (required), CHAT_MODEL (optional, default claude-opus-5-5).
 */
const MODEL = process.env.CHAT_MODEL ?? "claude-opus-5-5";
const SYSTEM = buildSystemPrompt();
const FALLBACK = `I can't answer that right now. Please [request a quote](/quote), visit our [contact page](/contact), or [chat with our team on WhatsApp](${whatsappUrl()}).`;

let client: Anthropic | null = null;
function getClient() {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ??= new Anthropic();
  return client;
}

type InMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!siteConfig.assistantEnabled) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
  const rl = rateLimit(`chat:${clientIp(req)}`, 20, 5 * 60 * 1000);
  if (!rl.ok) {
    return NextResponse.json(
      { reply: "You've sent quite a few messages. Please wait a moment, or [contact our team](/contact) directly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const list = (raw as { messages?: unknown })?.messages;
  if (!Array.isArray(list) || list.length === 0) {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  // Validate, trim and cap the history. Conversation must start with a user turn.
  const messages: Anthropic.Beta.BetaMessageParam[] = (list as InMsg[])
    .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-16)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "Invalid conversation." }, { status: 400 });
  }

  const anthropic = getClient();
  if (!anthropic) {
    return NextResponse.json(
      {
        reply: `Our virtual assistant isn't switched on yet. In the meantime you can browse our [services](/services), [request a quote](/quote), or [chat with our team on WhatsApp](${whatsappUrl()}).`,
      },
      { status: 503 },
    );
  }

  try {
    const response = await anthropic.beta.messages.create({
      model: MODEL,
      max_tokens: 2048,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      messages,
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: FALLBACK });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: reply || FALLBACK });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      console.warn("[chat] rate limited by API");
    } else if (err instanceof Anthropic.AuthenticationError) {
      console.error("[chat] invalid ANTHROPIC_API_KEY");
    } else if (err instanceof Anthropic.APIError) {
      console.error(`[chat] API error ${err.status}:`, err.message);
    } else {
      console.error("[chat] unexpected error", err);
    }
    return NextResponse.json({ reply: FALLBACK }, { status: 502 });
  }
}
