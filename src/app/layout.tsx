import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatWidget } from "@/components/ChatWidget";
import { CookieConsent } from "@/components/CookieConsent";
import { RevealObserver } from "@/components/Reveal";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Make IT Work | ICT Solutions Provider – Cloud, Microsoft 365 & IT Support",
    template: "%s | Make IT Work",
  },
  description: siteConfig.description,
  keywords: [
    "ICT solutions provider",
    "IT support services",
    "cloud solutions",
    "Microsoft 365 solutions",
    "Microsoft Dynamics GP support",
    "business IT solutions",
    "computer hardware suppliers",
    "custom software development",
    "website design and development",
    "IT infrastructure support",
    "South Africa",
  ],
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Make IT Work | Technology That Works. Solutions That Deliver.",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make IT Work | ICT Solutions Provider",
    description: siteConfig.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/brand/logo-stacked.png`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "74 Santa Fe, Bromhof",
    addressLocality: "Randburg",
    postalCode: "2154",
    addressCountry: "ZA",
  },
  areaServed: "ZA",
  knowsAbout: [
    "Cloud solutions",
    "Microsoft 365",
    "Microsoft Dynamics GP",
    "IT support",
    "Computer hardware",
    "Custom software development",
    "Web design",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {siteConfig.assistantEnabled && <ChatWidget />}
        <CookieConsent />
        <RevealObserver />
      </body>
    </html>
  );
}
