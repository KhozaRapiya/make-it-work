import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { getService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { ButtonLink, Container, Eyebrow, IconBadge, Section, SectionHeading } from "@/components/ui";
import { CtaBand, Faq, PageHero, ProcessTimeline, ServiceCard } from "@/components/sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} Services`,
    description: s.summary,
    keywords: s.seoKeywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.name} | Make IT Work`, description: s.summary, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const Icon = s.icon;
  const related = s.related.map((r) => getService(r)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      description: s.summary,
      serviceType: s.name,
      provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      areaServed: "ZA",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. Hero */}
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        intro={s.hero.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/quote?service=${s.slug}`} arrow>
            Request a Quote
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline-light">
            Talk to Our Team
          </ButtonLink>
        </div>
      </PageHero>

      {/* 2. Explanation + 3. Challenges */}
      <Section labelledBy="overview-title">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <IconBadge>
                <Icon aria-hidden className="size-6" strokeWidth={1.75} />
              </IconBadge>
              <Eyebrow>Overview</Eyebrow>
            </div>
            <h2 id="overview-title" className="mt-6 text-3xl font-semibold sm:text-4xl">
              What {s.name} from Make IT Work covers
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-subtle">
              {s.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside aria-labelledby="challenges-title" className="reveal self-start rounded-2xl bg-mist p-8">
            <h2 id="challenges-title" className="text-xl font-semibold">Business challenges we address</h2>
            <ul className="mt-6 space-y-4">
              {s.challenges.map((c) => (
                <li key={c} className="flex gap-3 leading-relaxed text-ink/85">
                  <AlertTriangle aria-hidden className="mt-1 size-4 shrink-0 text-brand-strong" />
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </Section>

      {/* 4. Capabilities */}
      <Section tone="mist" labelledBy="cap-title">
        <Container>
          <SectionHeading id="cap-title" eyebrow="Key features" title="Capabilities" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.capabilities.map((c, i) => (
              <li key={c.title} className="reveal rounded-2xl border border-line bg-paper p-6">
                <span aria-hidden className="font-heading text-sm font-semibold text-brand-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-subtle">{c.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5. Benefits + 6. Technologies */}
      <Section labelledBy="benefits-title">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="benefits-title" eyebrow="Business benefits" title="What it means for your business" />
            <ul className="mt-8 space-y-4">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-lg leading-relaxed">
                  <CheckCircle2 aria-hidden className="mt-1 size-5 shrink-0 text-brand-strong" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal self-start rounded-2xl bg-ink p-8 text-white sm:p-10">
            <Eyebrow dark>Relevant products & technologies</Eyebrow>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.technologies.map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/90">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-subtle-dark">
              Product availability and specifications are confirmed on each quotation.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Implementation approach */}
      <Section tone="dark" labelledBy="impl-title">
        <Container>
          <SectionHeading dark id="impl-title" eyebrow="Implementation approach" title={`How we deliver ${s.shortName}`} />
          <div className="mt-16">
            <ProcessTimeline steps={s.approach} dark />
          </div>
        </Container>
      </Section>

      {/* 8. FAQ */}
      <Section labelledBy="faq-title">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            intro="Can't find your answer? Contact our team or message us on WhatsApp."
          />
          <Faq items={s.faqs} />
        </Container>
      </Section>

      {/* 9. Related services */}
      <Section tone="mist" labelledBy="related-title">
        <Container>
          <SectionHeading id="related-title" eyebrow="Related services" title="Often combined with" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <ServiceCard service={r} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 10. Quote CTA */}
      <CtaBand
        title={`Ready to discuss ${s.name}?`}
        text="Share your requirements and our team will prepare a practical recommendation and quotation."
        primary={{ label: "Request a Quote", href: `/quote?service=${s.slug}` }}
      />
    </>
  );
}
