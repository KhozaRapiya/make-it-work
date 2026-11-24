import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { partnerGroups } from "@/lib/partners";
import { Container, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero, PartnerTile } from "@/components/sections";

export const metadata: Metadata = {
  title: "Partners & Technology",
  description:
    "The technology manufacturers, distribution partners and enterprise software platforms behind Make IT Work's ICT solutions: Microsoft, Lenovo, HP, Dell, Acer, Adobe, Sage, Mustek, Pinnacle, Rectron, Axiz, Tarsus and more.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & Technology"
        title="Powered by Trusted Technology Brands"
        intro="We work with established technology manufacturers, vendors, and distribution partners to provide reliable technology products and solutions."
        crumbs={[{ label: "Home", href: "/" }, { label: "Partners & Technology" }]}
      />

      {partnerGroups.map((group, gi) => {
        const id = `group-${gi}`;
        return (
          <Section key={group.title} tone={gi % 2 ? "mist" : "light"} labelledBy={id}>
            <Container>
              <SectionHeading id={id} eyebrow={`0${gi + 1}`} title={group.title} intro={group.intro} />
              <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.partners.map((p) => (
                  <li key={p.name} className="reveal flex flex-col rounded-2xl border border-line bg-paper p-5">
                    <PartnerTile name={p.name} short={p.short} logo={p.logo} />
                    <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-subtle">{p.description}</p>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ink hover:text-brand-strong"
                      >
                        Visit official website
                        <ExternalLink aria-hidden className="size-3.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Container>
          </Section>
        );
      })}

      <Section tone="dark" labelledBy="eco-title">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            dark
            id="eco-title"
            eyebrow="How the ecosystem helps you"
            title="One partner. Access to the brands you rely on."
          />
          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Through our technology and distribution ecosystem, we help clients access the products, software, and
              services needed to support their ICT environments.
            </p>
            <p>
              Manufacturer hardware supports our <strong className="text-white">hardware</strong> and{" "}
              <strong className="text-white">device configuration</strong> services; Microsoft platforms underpin our{" "}
              <strong className="text-white">cloud, Microsoft 365 and Dynamics GP</strong> work; and software vendors
              such as Adobe and Sage support our <strong className="text-white">software solutions</strong>.
            </p>
            <p className="text-sm text-subtle-dark">
              Brand names and logos are the property of their respective owners and are shown to indicate the products
              and technologies Make IT Work works with.
            </p>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Need a specific brand or product?"
        text="Tell us what you're looking for and we'll source options through our technology and distribution partners."
      />
    </>
  );
}
