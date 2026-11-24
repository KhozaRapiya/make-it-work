import Link from "next/link";
import {
  ArrowRight,
  Users,
  Layers,
  Handshake,
  TrendingUp,
  Wrench,
  ShieldCheck,
  HardDrive,
  Headset,
  LayoutGrid,
  Cloud,
  ChartNoAxesCombined,
} from "lucide-react";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { ButtonLink, Container, Eyebrow, IconBadge, Section, SectionHeading } from "@/components/ui";
import { CtaBand, PartnerShowcase, ProcessTimeline, ServiceCard } from "@/components/sections";
import { HeroVisual } from "@/components/HeroVisual";

const reasons = [
  { icon: Users, title: "Client-Centred Approach", text: "Solutions designed around each client's unique business requirements." },
  { icon: Layers, title: "End-to-End ICT Solutions", text: "Multiple technology services delivered through one dependable ICT partner." },
  { icon: Handshake, title: "Trusted Technology Ecosystem", text: "Access to established global technology brands and distribution partners." },
  { icon: TrendingUp, title: "Scalable Solutions", text: "Technology that supports current operational needs and future business growth." },
  { icon: Wrench, title: "Technical Expertise", text: "Practical knowledge across enterprise software, cloud technology, infrastructure, and IT support." },
  { icon: ShieldCheck, title: "Commitment to Reliability", text: "Dependable solutions designed to improve productivity and operational continuity." },
];

const approach = [
  { title: "Understand", text: "We understand your business, technology challenges, and objectives." },
  { title: "Recommend", text: "We identify appropriate solutions aligned with your operational requirements and budget." },
  { title: "Implement", text: "We configure, deploy, integrate, and implement the required technology solutions." },
  { title: "Support", text: "We provide ongoing technical assistance and support to help maintain reliable operations." },
];

const microsoft = [
  { icon: LayoutGrid, title: "Microsoft 365", text: "Licensing, email, Teams, SharePoint and user support.", href: "/services/microsoft-365" },
  { icon: Cloud, title: "Microsoft Cloud Solution Provider", text: "Microsoft cloud subscriptions provided and managed through CSP.", href: "/services/cloud-solutions" },
  { icon: ChartNoAxesCombined, title: "Microsoft Dynamics GP", text: "ERP implementation support, troubleshooting and optimisation.", href: "/services/microsoft-dynamics-gp" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden className="tech-grid absolute inset-0" />
        <div aria-hidden className="absolute -right-32 top-10 size-[560px] rounded-full bg-brand/25 blur-[160px]" />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:py-28">
          <div className="animate-fade-up">
            <Eyebrow dark>ICT Solutions Provider</Eyebrow>
            <h1 id="hero-title" className="mt-6 text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              Technology That Works.
              <span className="block text-white/55">
                Solutions That Deliver<span className="text-brand">.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Your trusted partner for intelligent ICT solutions, cloud technology, enterprise software, hardware,
              and digital transformation. We make technology work for your business.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" arrow>
                Explore Our Solutions
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light">
                Request a Consultation
              </ButtonLink>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
              <span aria-hidden className="h-8 w-1 rounded-full bg-brand" />
              <p className="font-heading text-lg font-medium text-white">
                Make <span className="text-brand-bright">IT</span> Work – because it should.
              </p>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <HeroVisual />
          </div>
        </Container>
        <div className="relative border-t border-white/10">
          <Container className="flex flex-wrap gap-x-8 gap-y-3 py-5 text-sm text-subtle-dark">
            {["Cloud Solutions", "Microsoft 365", "Microsoft Dynamics GP", "Hardware & Components", "IT Support", "Software Development", "Web Design"].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                  {t}
                </span>
              ),
            )}
          </Container>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <Section labelledBy="intro-title">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="intro-title"
            eyebrow="Who we are"
            title="Your Technology Partner for a Smarter Business"
          />
          <div className="reveal space-y-5 text-lg leading-relaxed text-subtle">
            <p>
              <strong className="font-semibold text-ink">Make IT Work</strong> is a forward-thinking ICT solutions
              provider delivering reliable, scalable, and innovative technology services for businesses,
              organisations, and individuals.
            </p>
            <p>
              We bring together technical expertise, trusted technology partnerships, and a client-focused approach
              to deliver practical solutions that improve operational efficiency, strengthen IT environments, and
              support business growth.
            </p>
            <div className="pt-2">
              <ButtonLink href="/about" variant="outline-dark" arrow>
                Learn More About Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. SERVICES */}
      <Section tone="mist" labelledBy="services-title" id="services">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="services-title"
              eyebrow="Our services"
              title="Comprehensive ICT Solutions Under One Roof"
              intro="From everyday IT support to enterprise technology implementation, we provide solutions that help your business operate smarter."
            />
            <ButtonLink href="/quote" variant="outline-dark" className="shrink-0 self-start lg:self-auto">
              Request a Quote
            </ButtonLink>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <ServiceCard service={s} index={i} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Microsoft spotlight */}
      <section aria-labelledby="ms-title" className="bg-ink py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <SectionHeading
              dark
              id="ms-title"
              eyebrow="Microsoft solutions"
              title="Enterprise Microsoft technology, made practical."
              intro="Microsoft 365, Microsoft cloud subscriptions through the Cloud Solution Provider programme, and Microsoft Dynamics GP support from one partner."
            />
            <ul className="grid gap-4 sm:grid-cols-3">
              {microsoft.map(({ icon: Icon, title, text, href }) => (
                <li key={title} className="reveal">
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal p-6 transition-colors hover:border-white/25"
                  >
                    <Icon aria-hidden className="size-7 text-brand-bright" strokeWidth={1.75} />
                    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-subtle-dark">{text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-brand-bright">
                      Learn more <ArrowRight aria-hidden className="size-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Lead-gen: hardware + support contracts */}
      <section aria-label="Quick enquiries" className="bg-paper pt-20 sm:pt-24">
        <Container className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: HardDrive,
              eyebrow: "Hardware procurement",
              title: "Need laptops, desktops, servers or components?",
              text: "Tell us what you need and how many. We'll come back with options from established brands and distribution partners.",
              href: "/quote?service=hardware-components",
              cta: "Request a hardware quote",
            },
            {
              icon: Headset,
              eyebrow: "IT support & maintenance",
              title: "Looking for ongoing ICT support?",
              text: "Enquire about a support and maintenance arrangement shaped around your devices, network and users.",
              href: "/quote?service=it-support-contract",
              cta: "Enquire about IT support",
            },
          ].map(({ icon: Icon, ...c }) => (
            <div key={c.title} className="reveal flex flex-col gap-6 rounded-2xl border border-line p-8 sm:flex-row sm:items-start">
              <IconBadge>
                <Icon aria-hidden className="size-6" strokeWidth={1.75} />
              </IconBadge>
              <div>
                <Eyebrow>{c.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold">{c.title}</h2>
                <p className="mt-3 leading-relaxed text-subtle">{c.text}</p>
                <ButtonLink href={c.href} variant="ghost-dark" arrow className="mt-4 min-h-0 py-1">
                  {c.cta}
                </ButtonLink>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* 4. WHY CHOOSE */}
      <Section labelledBy="why-title">
        <Container>
          <SectionHeading
            id="why-title"
            eyebrow="Why choose Make IT Work?"
            title="Technology Expertise. Practical Solutions. Real Business Value."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal bg-paper p-8">
                <Icon aria-hidden className="size-7 text-brand-strong" strokeWidth={1.75} />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-subtle">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5. PARTNERS */}
      <Section tone="mist" labelledBy="partners-title">
        <Container>
          <SectionHeading
            id="partners-title"
            eyebrow="Technology partners"
            title="Powered by Trusted Technology Brands"
            intro="We work with established technology manufacturers, vendors, and distribution partners to provide reliable technology products and solutions."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <PartnerShowcase />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-subtle">
            Through our technology and distribution ecosystem, we help clients access the products, software, and
            services needed to support their ICT environments.
          </p>
          <div className="mt-8 text-center">
            <ButtonLink href="/partners" variant="outline-dark" arrow>
              Explore our technology ecosystem
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* 6. INDUSTRIES */}
      <Section labelledBy="industries-title">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="industries-title" eyebrow="Industries we serve" title="Technology Solutions for Every Business Environment" />
            <ButtonLink href="/industries" variant="ghost-dark" arrow className="self-start lg:self-auto">
              View industries
            </ButtonLink>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ icon: Icon, name, text }, i) => (
              <li
                key={name}
                className={`reveal group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-ink/20 ${i === industries.length - 1 ? "lg:col-span-2" : ""}`}
              >
                <Icon aria-hidden className="size-7 text-brand-strong" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-subtle">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 7. APPROACH */}
      <Section tone="dark" labelledBy="approach-title">
        <Container>
          <SectionHeading dark id="approach-title" eyebrow="Our approach" title="A Smarter Approach to Technology" />
          <div className="mt-16">
            <ProcessTimeline steps={approach} dark />
          </div>
        </Container>
      </Section>

      {/* 8. CTA */}
      <CtaBand />
    </>
  );
}
