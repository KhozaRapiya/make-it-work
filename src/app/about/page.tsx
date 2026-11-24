import type { Metadata } from "next";
import { Target, Eye, ShieldCheck, Lightbulb, HeartHandshake, Scale, BadgeCheck, RefreshCw, Layers, Handshake, Users } from "lucide-react";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PageHero, ProcessTimeline } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Make IT Work is a forward-thinking ICT solutions provider delivering reliable, scalable and innovative technology services for businesses, organisations and individuals.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "Solutions and support you can depend on, day after day." },
  { icon: Lightbulb, title: "Innovation", text: "Practical use of modern technology to solve real problems." },
  { icon: HeartHandshake, title: "Customer Commitment", text: "Your objectives shape every recommendation we make." },
  { icon: Scale, title: "Integrity", text: "Honest advice, clear communication and transparent quotations." },
  { icon: BadgeCheck, title: "Professionalism", text: "Structured, well-documented and respectful delivery." },
  { icon: RefreshCw, title: "Continuous Improvement", text: "We keep learning, refining and improving how we work." },
];

const pillars = [
  { icon: Layers, title: "End-to-end ICT", text: "Cloud, Microsoft solutions, hardware, support, software and web from one partner." },
  { icon: Handshake, title: "Trusted ecosystem", text: "Established technology brands and distribution partners behind every solution." },
  { icon: Users, title: "Client-focused", text: "Solutions sized for your requirements, budget and plans for growth." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Make IT Work"
        intro="A forward-thinking ICT solutions provider committed to delivering reliable, scalable, and innovative technology services."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <Section labelledBy="who-title">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading id="who-title" eyebrow="Who we are" title="Technology that works, because it should." />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-subtle">
              <p>
                Make IT Work is a forward-thinking ICT solutions provider committed to delivering reliable, scalable,
                and innovative technology services.
              </p>
              <p>
                We specialise in end-to-end ICT solutions, helping businesses, organisations, and individuals leverage
                technology to improve productivity, enhance operational efficiency, and achieve their objectives.
              </p>
            </div>
          </div>
          {/* Company introduction visual */}
          <div aria-hidden className="reveal relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10">
            <div className="tech-grid absolute inset-0" />
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/30 blur-[100px]" />
            <div className="relative">
              <p className="font-heading text-5xl font-bold leading-none sm:text-6xl">
                Make <span className="text-brand">IT</span>
                <br />
                Work
              </p>
              <p className="mt-4 font-heading text-lg text-white/70">because it should.</p>
              <ul className="mt-10 space-y-4">
                {pillars.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <Icon className="mt-0.5 size-5 shrink-0 text-brand-bright" />
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-subtle-dark">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="mv-title">
        <Container>
          <h2 id="mv-title" className="sr-only">Mission and vision</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="reveal rounded-2xl bg-paper p-8 shadow-[var(--shadow-card)] sm:p-10">
              <Target aria-hidden className="size-8 text-brand-strong" strokeWidth={1.75} />
              <Eyebrow>Our mission</Eyebrow>
              <p className="mt-4 font-heading text-2xl font-medium leading-snug sm:text-[1.7rem]">
                To deliver dependable, innovative, and practical ICT solutions that empower businesses and individuals
                through technology.
              </p>
            </article>
            <article className="reveal rounded-2xl bg-ink p-8 text-white sm:p-10">
              <Eye aria-hidden className="size-8 text-brand-bright" strokeWidth={1.75} />
              <Eyebrow dark>Our vision</Eyebrow>
              <p className="mt-4 font-heading text-2xl font-medium leading-snug sm:text-[1.7rem]">
                To be a trusted technology partner recognised for delivering quality ICT solutions that enable business
                growth, innovation, and digital transformation.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section labelledBy="values-title">
        <Container>
          <SectionHeading id="values-title" eyebrow="Our values" title="The principles behind every solution." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal flex gap-5 rounded-2xl border border-line p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-subtle">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="dark" labelledBy="how-title">
        <Container>
          <SectionHeading dark id="how-title" eyebrow="How we work" title="A Smarter Approach to Technology" />
          <div className="mt-16">
            <ProcessTimeline
              dark
              steps={[
                { title: "Understand", text: "We understand your business, technology challenges, and objectives." },
                { title: "Recommend", text: "We identify appropriate solutions aligned with your operational requirements and budget." },
                { title: "Implement", text: "We configure, deploy, integrate, and implement the required technology solutions." },
                { title: "Support", text: "We provide ongoing technical assistance and support to help maintain reliable operations." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
