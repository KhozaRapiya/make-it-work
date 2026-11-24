/**
 * Central site configuration.
 * Replace every value marked TODO before going live.
 * Public values can be overridden with NEXT_PUBLIC_* environment variables.
 */
export const siteConfig = {
  name: "Make IT Work",
  tagline: "Make IT Work – because it should.",
  shortTagline: "Because it should.",
  description:
    "Make IT Work is an ICT solutions provider delivering cloud solutions, Microsoft 365, Microsoft Dynamics GP, hardware, IT support, custom software and web development for South African businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.makeitwork.co.za",
  locale: "en_ZA",

  /**
   * Logo files in /public/brand/ (cut from make-it-work-logo-original.jpg).
   * Both sit on black, so they are used on dark backgrounds only.
   */
  logo: {
    horizontal: { src: "/brand/logo-horizontal.png", width: 1307, height: 216 },
    stacked: { src: "/brand/logo-stacked.png", width: 1344, height: 758 },
  },

  /** Set to true (and add ANTHROPIC_API_KEY) to switch the AI assistant back on. */
  assistantEnabled: false,

  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+27 81 760 2588",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@makeitwork.co.za",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "74 Santa Fe, Bromhof, Randburg, 2154",
    hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "[INSERT BUSINESS HOURS]",
  },

  /** International format, digits only, e.g. 27821234567 */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27817602588",
  whatsappMessage:
    "Hello Make IT Work. I would like to enquire about your ICT solutions and services.",

  social: [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "#" },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "#" },
    { label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "#" },
    { label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X ?? "#" },
  ],
} as const;

/** True once a value has been filled in (not an "[INSERT …]" placeholder or "#"). */
/** Analytics (and the cookie banner) stay off until NEXT_PUBLIC_GA_ID is set. */
export const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GA_ID);

export const isSet = (v: string) => Boolean(v) && !v.startsWith("[") && v !== "#";

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

/** Social links that have been filled in. */
export const socialLinks = () => siteConfig.social.filter((s) => isSet(s.href));

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  const base = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}`
    : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Partners & Technology", href: "/partners" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
] as const;
