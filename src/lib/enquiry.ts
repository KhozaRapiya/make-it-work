/** Shared enquiry schema + validation, used by the form (client) and the API route (server). */
import { services } from "./services";

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "it-support-contract", label: "Ongoing IT Support & Maintenance" },
  { value: "other", label: "Other / Not sure yet" },
];

export const budgetOptions = [
  "Not sure yet",
  "Under R10 000",
  "R10 000 – R50 000",
  "R50 000 – R150 000",
  "R150 000 – R500 000",
  "Over R500 000",
];

export const contactMethods = ["Email", "Phone", "WhatsApp"] as const;

export type EnquiryInput = {
  kind: "quote" | "contact";
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  budget: string;
  message: string;
  contactMethod: string;
  consent: boolean;
  // anti-spam
  website: string; // honeypot, must stay empty
  startedAt: number; // ms timestamp when the form rendered
};

export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts SA and international formats: +27 82 123 4567, 082-123-4567, (011) 123 4567
const PHONE_RE = /^\+?[\d\s()-]{9,20}$/;

export const LIMITS = { name: 100, company: 120, email: 160, phone: 25, subject: 150, message: 4000 };

export function validateEnquiry(d: EnquiryInput): FieldErrors {
  const e: FieldErrors = {};
  if (!d.fullName.trim()) e.fullName = "Please enter your full name.";
  else if (d.fullName.length > LIMITS.name) e.fullName = "Name is too long.";

  if (!d.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(d.email.trim()) || d.email.length > LIMITS.email)
    e.email = "Please enter a valid email address, e.g. name@company.co.za.";

  if (!d.phone.trim()) e.phone = "Please enter a contact number.";
  else if (!PHONE_RE.test(d.phone.trim()) || d.phone.replace(/\D/g, "").length < 9)
    e.phone = "Please enter a valid phone number, e.g. +27 82 123 4567.";

  if (d.company.length > LIMITS.company) e.company = "Company name is too long.";

  if (d.kind === "quote" && !d.service) e.service = "Please choose the service you need.";
  if (d.service && !serviceOptions.some((o) => o.value === d.service)) e.service = "Please choose a valid service.";

  if (!d.subject.trim()) e.subject = "Please add a short subject.";
  else if (d.subject.length > LIMITS.subject) e.subject = "Subject is too long.";

  if (d.budget && !budgetOptions.includes(d.budget)) e.budget = "Please choose a budget range.";

  if (!d.message.trim() || d.message.trim().length < 10)
    e.message = "Please describe your requirements (at least 10 characters).";
  else if (d.message.length > LIMITS.message) e.message = "Description is too long.";

  if (!contactMethods.includes(d.contactMethod as (typeof contactMethods)[number]))
    e.contactMethod = "Please choose how we should contact you.";

  if (!d.consent) e.consent = "Please confirm that we may use your details to respond.";
  return e;
}

/** Strip control characters and angle brackets; trim. Output is also HTML-escaped where rendered. */
export function sanitize(s: unknown, max = 4000): string {
  if (typeof s !== "string") return "";
  return s
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

export function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
