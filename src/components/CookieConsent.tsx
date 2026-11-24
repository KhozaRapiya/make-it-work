"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "miw-cookie-consent"; // "accepted" | "declined"
const EVENT = "miw-cookie-consent-change";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const analyticsEnabled = Boolean(GA_ID);

function readConsent(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function writeConsent(value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, value);
  } catch {
    /* storage unavailable: banner simply shows again next visit */
  }
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Cookie consent banner + consent-gated Google Analytics.
 * Analytics only loads when NEXT_PUBLIC_GA_ID is set AND the visitor accepts.
 * Essential site functionality uses no tracking cookies.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);

  return (
    <>
      {GA_ID && consent === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {analyticsEnabled && consent === null && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-charcoal p-5 text-white shadow-2xl sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-6"
        >
          <p className="text-sm leading-relaxed text-white/80">
            We use essential cookies to run this website. With your permission we also use analytics cookies to
            understand how the site is used. See our{" "}
            <Link href="/privacy-policy" className="font-medium text-white underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
            <button
              type="button"
              onClick={() => writeConsent("declined")}
              className="min-h-11 cursor-pointer rounded-full border border-white/25 px-5 text-sm font-semibold hover:border-white"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => writeConsent("accepted")}
              className="min-h-11 cursor-pointer rounded-full bg-brand-strong px-5 text-sm font-semibold hover:bg-brand-hover"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsLink() {
  if (!analyticsEnabled) return null;
  return (
    <button type="button" onClick={() => writeConsent(null)} className="cursor-pointer hover:text-white">
      Cookie settings
    </button>
  );
}
