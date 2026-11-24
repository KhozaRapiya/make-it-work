import Link from "next/link";
import { services } from "@/lib/services";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="tech-grid absolute inset-0" />
      <Container className="relative py-24 sm:py-32">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-brand-bright">Error 404</p>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-6xl">
          This page isn&rsquo;t working. Everything else should.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/75">
          The page you&rsquo;re looking for may have moved or no longer exists. Try one of these instead.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline-light">Contact us</ButtonLink>
        </div>
        <ul className="mt-14 flex flex-wrap gap-2">
          {services.slice(0, 6).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-white/15 px-4 text-sm text-white/80 hover:border-white/40 hover:text-white"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export const metadata = { title: "Page not found" };
