import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/lib/industries";
import { getService } from "@/lib/services";
import { Container, IconBadge, Section } from "@/components/ui";
import { CtaBand, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "ICT solutions for SMEs, corporate organisations, government and public sector, education, professional services, startups and home office users.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology Solutions for Every Business Environment"
        intro="Different organisations have different technology needs. We tailor our ICT solutions to the way your sector works."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <Section tone="mist">
        <Container>
          <ul className="grid gap-5 lg:grid-cols-2">
            {industries.map(({ icon: Icon, name, text, needs, services }) => (
              <li key={name} className="reveal flex flex-col rounded-2xl border border-line bg-paper p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <IconBadge>
                    <Icon aria-hidden className="size-6" strokeWidth={1.75} />
                  </IconBadge>
                  <div>
                    <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                    <p className="mt-2 leading-relaxed text-subtle">{text}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Common needs</h3>
                    <ul className="mt-3 space-y-2">
                      {needs.map((n) => (
                        <li key={n} className="flex gap-2 text-[0.95rem]">
                          <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand-strong" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Relevant services</h3>
                    <ul className="mt-3 space-y-2">
                      {services.map((slug) => {
                        const s = getService(slug);
                        return s ? (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              className="group inline-flex items-center gap-1.5 text-[0.95rem] font-medium hover:text-brand-strong"
                            >
                              {s.name}
                              <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
