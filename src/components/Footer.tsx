import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { isSet, mapsUrl, siteConfig, socialLinks, telHref } from "@/lib/site";
import { Logo } from "./Logo";
import { Container } from "./ui";
import { BackToTop } from "./BackToTop";
import { CopyrightYear } from "./CopyrightYear";
import { CookieSettingsLink } from "./CookieConsent";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  { label: "Microsoft Dynamics GP", href: "/services/microsoft-dynamics-gp" },
  { label: "Microsoft 365", href: "/services/microsoft-365" },
  { label: "Hardware & Components", href: "/services/hardware-components" },
  { label: "IT Support", href: "/services/it-support-infrastructure" },
  { label: "Software Development", href: "/services/custom-software-development" },
  { label: "Web Design", href: "/services/web-design-digital-solutions" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">{children}</h2>;
}

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">
          <div>
            <Logo variant="stacked" className="-ml-2" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-subtle-dark">
              A forward-thinking ICT solutions provider delivering reliable, scalable and innovative technology
              services for businesses, organisations and individuals.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
              {socialLinks().map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center rounded-full border border-white/15 px-3.5 text-xs font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-subtle-dark transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our services">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-subtle-dark transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm text-subtle-dark">
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <a href={telHref(contact.phone)} className="transition-colors hover:text-white">
                  <span className="sr-only">Phone: </span>{contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-white">
                  <span className="sr-only">Email: </span>{contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                <a href={mapsUrl(contact.address)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  <span className="sr-only">Address: </span>{contact.address}
                </a>
              </li>
              {isSet(contact.hours) && (
                <li className="flex gap-3">
                  <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-bright" />
                  <span><span className="sr-only">Business hours: </span>{contact.hours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-subtle-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© <CopyrightYear /> Make IT Work. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms and Conditions</Link>
            <CookieSettingsLink />
            <BackToTop />
          </div>
        </Container>
      </div>
    </footer>
  );
}
