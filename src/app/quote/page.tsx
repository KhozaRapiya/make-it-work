import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quotation from Make IT Work for hardware, Microsoft 365, cloud solutions, Dynamics GP, IT support, software development or web design.",
  alternates: { canonical: "/quote" },
};

const steps = [
  "We review your requirements",
  "We may contact you to clarify details",
  "You receive a recommendation and quotation",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need. We'll make it work."
        intro="The more detail you share about quantities, timelines and current systems, the more accurate our quotation will be."
        crumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      />
      <Section tone="mist">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="rounded-3xl bg-paper p-6 shadow-[var(--shadow-card)] sm:p-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">Quotation request</h2>
            <div className="mt-8">
              <EnquiryForm kind="quote" />
            </div>
          </div>
          <aside className="space-y-8">
            <div className="rounded-2xl bg-ink p-7 text-white">
              <h2 className="text-lg font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-white/85">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-strong font-heading text-xs font-semibold">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-6 flex gap-2 border-t border-white/10 pt-5 text-sm text-subtle-dark">
                <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                Pricing, availability and warranty terms are confirmed in your formal quotation.
              </p>
            </div>
            <ContactDetails />
          </aside>
        </Container>
      </Section>
    </>
  );
}
