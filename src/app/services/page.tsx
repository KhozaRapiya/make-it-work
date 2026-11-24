import type { Metadata } from "next";
import { services } from "@/lib/services";
import { Container, Section } from "@/components/ui";
import { CtaBand, PageHero, ServiceCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "ICT Services – Cloud, Microsoft 365, Dynamics GP, Hardware & IT Support",
  description:
    "Comprehensive ICT solutions under one roof: cloud solutions, Microsoft Dynamics GP, Microsoft 365, hardware, IT support, software, custom development and web design.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive ICT Solutions Under One Roof"
        intro="From everyday IT support to enterprise technology implementation, we provide solutions that help your business operate smarter."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Section tone="mist">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <ServiceCard service={s} index={i} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand
        title="Not sure which service you need?"
        text="Tell us about your business and the challenge you're facing. We'll recommend a practical solution that fits your requirements and budget."
        secondary={{ label: "Request a Consultation", href: "/contact" }}
      />
    </>
  );
}
