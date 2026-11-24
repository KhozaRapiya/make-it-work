"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, ChevronDown } from "lucide-react";
import {
  budgetOptions,
  contactMethods,
  serviceOptions,
  validateEnquiry,
  LIMITS,
  type EnquiryInput,
  type FieldErrors,
} from "@/lib/enquiry";
import { whatsappUrl } from "@/lib/site";
import { cx } from "./ui";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "block w-full rounded-xl border bg-paper px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none focus:ring-4 focus:ring-ink/5";

function Field({
  id,
  label,
  required,
  optional,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-strong" aria-hidden>*</span>}
        {optional && <span className="ml-1.5 font-normal text-subtle">(optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-subtle">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-brand-strong">
          <AlertCircle aria-hidden className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({ kind = "quote", defaultService = "" }: { kind?: "quote" | "contact"; defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryInput, boolean>>>({});
  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Submit stays disabled until the form is interactive, so a pre-hydration
  // click can never fall back to a native submission.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    startedAt.current = Date.now();
    setReady(true);
    // Pre-select the service from ?service=<slug> (links from service pages).
    const requested = new URLSearchParams(window.location.search).get("service");
    const select = formRef.current?.querySelector<HTMLSelectElement>('select[name="service"]');
    if (!defaultService && requested && select && serviceOptions.some((o) => o.value === requested)) {
      select.value = requested;
    }
  }, [defaultService]);

  const read = (form: HTMLFormElement): EnquiryInput => {
    const f = new FormData(form);
    const s = (k: string) => String(f.get(k) ?? "");
    return {
      kind,
      fullName: s("fullName"),
      company: s("company"),
      email: s("email"),
      phone: s("phone"),
      service: s("service"),
      subject: s("subject"),
      budget: s("budget"),
      message: s("message"),
      contactMethod: s("contactMethod"),
      consent: f.get("consent") === "on",
      website: s("website"),
      startedAt: startedAt.current,
    };
  };

  const onBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLElement).getAttribute("name") as keyof EnquiryInput | null;
    if (!name || !formRef.current) return;
    setTouched((t) => ({ ...t, [name]: true }));
    const v = validateEnquiry(read(formRef.current));
    setErrors((prev) => ({ ...prev, [name]: v[name] }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = read(form);
    const v = validateEnquiry(data);
    setErrors(v);
    setTouched(Object.fromEntries(Object.keys(data).map((k) => [k, true])));
    const firstError = Object.keys(v)[0];
    if (firstError) {
      const el = form.querySelector<HTMLElement>(`[name="${firstError}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { message?: string; errors?: FieldErrors };
      if (res.ok) {
        setStatus("success");
        setServerMessage(json.message ?? "Thank you. Your enquiry has been sent.");
        form.reset();
      } else {
        if (json.errors) setErrors(json.errors);
        setStatus("error");
        setServerMessage(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("We could not reach the server. Check your connection and try again.");
    }
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  const err = (k: keyof EnquiryInput) => (touched[k] ? errors[k] : undefined);
  const aria = (k: keyof EnquiryInput, hint = false) => ({
    "aria-invalid": err(k) ? true : undefined,
    "aria-describedby": err(k) ? `${k}-error` : hint ? `${k}-hint` : undefined,
  });
  const border = (k: keyof EnquiryInput) => (err(k) ? "border-brand-strong" : "border-line");

  if (status === "success") {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-line bg-paper p-8 text-center focus:outline-none sm:p-12"
      >
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-brand-strong" />
        <h2 className="mt-5 text-2xl font-semibold">Thank you. We have your enquiry.</h2>
        <p className="mx-auto mt-3 max-w-md text-subtle">{serverMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 min-h-11 cursor-pointer rounded-full border border-ink/20 px-6 text-sm font-semibold hover:border-ink"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} method="post" noValidate onSubmit={onSubmit} onBlur={onBlur} className="space-y-6" aria-describedby="form-note">
      <p id="form-note" className="text-sm text-subtle">
        Fields marked <span className="text-brand-strong">*</span> are required.
      </p>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={err("fullName")}>
          <input id="fullName" name="fullName" type="text" autoComplete="name" maxLength={LIMITS.name} className={cx(inputBase, border("fullName"))} {...aria("fullName")} />
        </Field>
        <Field id="company" label="Company Name" optional={kind === "contact"} error={err("company")}>
          <input id="company" name="company" type="text" autoComplete="organization" maxLength={LIMITS.company} className={cx(inputBase, border("company"))} {...aria("company")} />
        </Field>
        <Field id="email" label="Email Address" required error={err("email")}>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={LIMITS.email} className={cx(inputBase, border("email"))} {...aria("email")} />
        </Field>
        <Field id="phone" label="Contact Number" required error={err("phone")} hint="Include your country code if outside South Africa.">
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={LIMITS.phone} placeholder="+27 82 123 4567" className={cx(inputBase, border("phone"))} {...aria("phone", true)} />
        </Field>
        <Field id="service" label="Service Required" required={kind === "quote"} optional={kind === "contact"} error={err("service")}>
          <div className="relative"><select id="service" name="service" defaultValue={defaultService} className={cx(inputBase, border("service"), "appearance-none pr-10")} {...aria("service")}>
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select><ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink/60" /></div>
        </Field>
        {kind === "quote" ? (
          <Field id="budget" label="Estimated Budget" optional error={err("budget")}>
            <div className="relative"><select id="budget" name="budget" defaultValue="" className={cx(inputBase, border("budget"), "appearance-none pr-10")} {...aria("budget")}>
              <option value="">Select a range</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select><ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink/60" /></div>
          </Field>
        ) : (
          <input type="hidden" name="budget" value="" />
        )}
        <Field id="subject" label="Project or Enquiry Subject" required error={err("subject")} className="sm:col-span-2">
          <input id="subject" name="subject" type="text" maxLength={LIMITS.subject} placeholder="e.g. 15 business laptops for new office" className={cx(inputBase, border("subject"))} {...aria("subject")} />
        </Field>
        <Field id="message" label="Description of Requirements" required error={err("message")} className="sm:col-span-2" hint="Quantities, timelines, current systems and anything else that helps us prepare an accurate response.">
          <textarea id="message" name="message" rows={6} maxLength={LIMITS.message} className={cx(inputBase, border("message"), "resize-y")} {...aria("message", true)} />
        </Field>
      </div>

      <fieldset aria-describedby={err("contactMethod") ? "contactMethod-error" : undefined}>
        <legend className="mb-3 text-sm font-semibold text-ink">
          Preferred Contact Method<span className="ml-0.5 text-brand-strong" aria-hidden>*</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {contactMethods.map((m, i) => (
            <label key={m} className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-line px-4 text-sm font-medium has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white">
              <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="size-4 accent-brand-strong" />
              {m}
            </label>
          ))}
        </div>
        {err("contactMethod") && (
          <p id="contactMethod-error" role="alert" className="mt-1.5 text-sm text-brand-strong">{err("contactMethod")}</p>
        )}
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-subtle">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-5 shrink-0 accent-brand-strong"
            aria-invalid={err("consent") ? true : undefined}
            aria-describedby={err("consent") ? "consent-error" : undefined}
          />
          <span>
            I agree that Make IT Work may use the information I have provided to respond to this enquiry, in line with
            the{" "}
            <Link href="/privacy-policy" className="font-medium text-ink underline underline-offset-2">
              Privacy Policy
            </Link>
            .<span className="ml-0.5 text-brand-strong" aria-hidden>*</span>
          </span>
        </label>
        {err("consent") && (
          <p id="consent-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-brand-strong">
            <AlertCircle aria-hidden className="size-4" />
            {err("consent")}
          </p>
        )}
      </div>

      {status === "error" && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="rounded-xl border border-brand/30 bg-brand-soft p-4 text-sm text-ink focus:outline-none">
          <p className="font-semibold">Your enquiry was not sent.</p>
          <p className="mt-1">{serverMessage}</p>
          <p className="mt-2">
            You can also reach us on{" "}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              WhatsApp
            </a>{" "}
            or via the contact details on this page.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={!ready || status === "submitting"}
        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-strong px-8 text-base font-semibold text-white transition-colors hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden className="size-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            {kind === "quote" ? "Request a Quote" : "Send Enquiry"}
            <Send aria-hidden className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
