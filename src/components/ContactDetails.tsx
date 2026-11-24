import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { isSet, mapsUrl, siteConfig, socialLinks, telHref, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export function ContactDetails() {
  const c = siteConfig.contact;
  const items = [
    { icon: Phone, label: "Phone", value: c.phone, href: telHref(c.phone) },
    { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    { icon: MapPin, label: "Address", value: c.address, href: mapsUrl(c.address), external: true },
    { icon: Clock, label: "Business hours", value: c.hours },
  ].filter((i) => isSet(i.value));
  const social = socialLinks();
  return (
    <div className="space-y-5">
      <ul className="space-y-3">
        {items.map(({ icon: Icon, label, value, href, external }) => (
          <li key={label} className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon aria-hidden className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">{label}</p>
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-1 block break-words font-medium hover:text-brand-strong"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 break-words font-medium">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1DA851] px-6 font-semibold text-white transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon className="size-5" />
        Chat on WhatsApp
      </a>
      {social.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Follow us</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm font-medium hover:border-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
