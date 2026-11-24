import Link from "next/link";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import type { Service } from "@/lib/services";
import { showcasePartners } from "@/lib/partners";
import { ButtonLink, Container, Eyebrow, IconBadge, Section, cx } from "./ui";

/* ---------------- Service card ---------------- */
export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <article className="reveal group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-7 shadow-[var(--shadow-card)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex items-start justify-between">
        <IconBadge>
          <Icon aria-hidden className="size-6" strokeWidth={1.75} />
        </IconBadge>
        {typeof index === "number" && (
          <span aria-hidden className="font-heading text-sm font-medium text-ink/25">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-semibold">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
          {service.name}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-subtle">{service.summary}</p>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand-strong">
          Learn more
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
        <Link
          href={`/quote?service=${service.slug}`}
          className="relative z-10 rounded-full px-3 py-1.5 text-xs font-semibold text-subtle transition-colors hover:bg-brand-soft hover:text-brand-strong"
        >
          Request a quote
        </Link>
      </div>
    </article>
  );
}

/* ---------------- Inner page hero ---------------- */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="tech-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -right-40 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-subtle-dark">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight aria-hidden className="size-3.5" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/90">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- CTA band ---------------- */
export function CtaBand({
  title = "Let's Make Technology Work for You.",
  text = "Whether you need reliable IT support, enterprise software, cloud solutions, hardware, or a complete digital transformation partner, Make IT Work is ready to assist.",
  primary = { label: "Request a Quote", href: "/quote" },
  secondary = { label: "Contact Our Team", href: "/contact" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-paper py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden className="tech-grid absolute inset-0" />
          <div aria-hidden className="absolute -left-24 -top-24 size-80 rounded-full bg-brand/25 blur-[110px]" />
          <div aria-hidden className="absolute bottom-0 right-0 h-1 w-1/3 bg-brand" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow dark>Make IT Work – because it should.</Eyebrow>
              <h2 id="cta-title" className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{text}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href={primary.href} arrow>
                {primary.label}
              </ButtonLink>
              <ButtonLink href={secondary.href} variant="outline-light">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Process timeline ---------------- */
export function ProcessTimeline({
  steps,
  dark = false,
}: {
  steps: { title: string; text: string }[];
  dark?: boolean;
}) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
      {/* desktop horizontal rail */}
      <span
        aria-hidden
        className={cx("absolute left-0 right-0 top-6 hidden h-px md:block", dark ? "bg-white/15" : "bg-line")}
      />
      {/* mobile vertical rail */}
      <span
        aria-hidden
        className={cx("absolute bottom-2 left-6 top-2 w-px md:hidden", dark ? "bg-white/15" : "bg-line")}
      />
      {steps.map((step, i) => (
        <li key={step.title} className="reveal relative flex gap-5 md:block">
          <span
            className={cx(
              "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full font-heading text-sm font-semibold ring-8",
              dark ? "bg-charcoal text-white ring-ink" : "bg-ink text-white ring-paper",
              i === 0 && "!bg-brand-strong",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="md:mt-6">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className={cx("mt-2 leading-relaxed", dark ? "text-subtle-dark" : "text-subtle")}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Partner tiles ---------------- */
export function PartnerTile({ name, short, logo }: { name: string; short?: string; logo: string | null }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-xl border border-line bg-paper px-4 text-center transition-colors hover:border-ink/20">
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} loading="lazy" className={`${/\/(hp|dell|adobe)\.png$/.test(logo) ? "max-h-14" : "max-h-10"} w-auto max-w-[80%] object-contain`} />
      ) : (
        <span className="font-heading text-[0.95rem] font-semibold leading-tight text-ink/80" title={name}>
          {short ?? name}
        </span>
      )}
    </div>
  );
}

export function PartnerShowcase() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {showcasePartners.map((p) => (
        <li key={p.name} className="reveal">
          <PartnerTile {...p} />
        </li>
      ))}
    </ul>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-paper">
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-1">
          <summary className="flex min-h-14 items-center justify-between gap-6 py-4 font-heading text-lg font-medium">
            {f.q}
            <Plus
              aria-hidden
              className="size-5 shrink-0 text-brand-strong transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="pb-5 pr-10 leading-relaxed text-subtle">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export { Section, Container };
