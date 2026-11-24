import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { mapsUrl, siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Make IT Work about cloud solutions, Microsoft 365, Dynamics GP, hardware, IT support, software or web development.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your technology."
        intro="Send us an enquiry, message us on WhatsApp, or use our contact details below. Looking for pricing? Use our quotation form."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <Section tone="mist">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div className="space-y-8">
            <ContactDetails />
          </div>
          <div className="rounded-3xl bg-paper p-6 shadow-[var(--shadow-card)] sm:p-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">Send us an enquiry</h2>
            <p className="mt-2 text-subtle">
              Need a price? <Link href="/quote" className="font-semibold text-ink underline underline-offset-2">Request a quote</Link> instead.
            </p>
            <div className="mt-8">
              <EnquiryForm kind="contact" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Location */}
      <section aria-labelledby="map-title" className="bg-paper pb-20">
        <Container>
          <h2 id="map-title" className="sr-only">Our location</h2>
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-ink text-white">
            <div aria-hidden className="tech-grid absolute inset-0 [mask-image:none]" />
            <div className="relative px-6 text-center">
              <MapPin aria-hidden className="mx-auto size-10 text-brand-bright" />
              <p className="mt-4 font-heading text-xl font-semibold">{siteConfig.contact.address}</p>
              <a
                href={mapsUrl(siteConfig.contact.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold transition-colors hover:border-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
