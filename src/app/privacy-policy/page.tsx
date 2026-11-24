import type { Metadata } from "next";
import Link from "next/link";
import { analyticsEnabled, siteConfig } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Make IT Work collects, uses and protects personal information in line with POPIA.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  const c = siteConfig.contact;
  return (
    <LegalPage title="Privacy Policy" updated="23 November 2026">
      <p>
        Make IT Work (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains
        how we collect, use, share and protect personal information through this website, in line with the Protection of
        Personal Information Act 4 of 2013 (POPIA).
      </p>

      <h2>Who we are</h2>
      <p>
        Make IT Work is the responsible party for personal information collected through this website. Our address is{" "}
        {c.address}, South Africa.
      </p>

      <h2>Information we collect</h2>
      <p>We only collect the information we need. Through this website this includes:</p>
      <ul>
        <li>
          <strong>Enquiry and quotation forms:</strong> your name, company name (optional), email address, phone
          number, the service you are interested in, your preferred contact method, any budget or timeline you choose to
          share, and the details of your request.
        </li>
        <li>
          <strong>Technical information:</strong> your IP address is used briefly to limit repeated form submissions and
          protect the site from spam and abuse. Our hosting provider may also keep standard server logs (such as IP
          address, browser type and pages requested) for security and reliability.
        </li>
        {siteConfig.assistantEnabled && (
          <li>
            <strong>Virtual assistant:</strong> messages you type into the Make IT Work Assistant chatbot.
          </li>
        )}
        {analyticsEnabled && (
          <li>
            <strong>Analytics:</strong> if you accept analytics cookies, information about how you use the site, such as
            pages visited and device type.
          </li>
        )}
      </ul>
      <p>
        If you contact us by WhatsApp, phone or email, we receive the information you choose to share in that
        conversation. WhatsApp messages are also handled by WhatsApp under its own privacy policy.
      </p>

      <h2>Why we use your information</h2>
      <ul>
        <li>To respond to your enquiry, prepare a quotation and follow up on your request.</li>
        <li>To provide the products and services you ask for, and to manage our relationship with you.</li>
        <li>To keep this website secure and working properly.</li>
        <li>To meet our legal and regulatory obligations.</li>
      </ul>
      <p>
        We process personal information with your consent, where it is needed to take steps towards or perform a
        contract with you, where the law requires it, or where it is necessary for our legitimate interests in running
        our business and protecting this website.
      </p>
      <p>
        We do not sell your personal information. We will not send you marketing messages unless you have agreed to
        receive them, and you can opt out of any marketing at any time.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We share personal information only with service providers (operators) who help us run this website and our
        business, and only for the purposes above. They must keep it confidential and secure. These include:
      </p>
      <ul>
        <li>
          <strong>Resend</strong>, which delivers the enquiries submitted on this website to our email inbox.
        </li>
        <li>
          <strong>Our website hosting provider</strong>, which stores and serves this website.
        </li>
        {siteConfig.assistantEnabled && (
          <li>
            <strong>Our AI service provider</strong>, which processes chatbot messages to generate replies.
          </li>
        )}
      </ul>
      <p>
        Some of these providers are based outside South Africa, so your information may be processed in other
        countries. When this happens we rely on providers that are subject to laws, binding agreements or rules that
        give your information a level of protection similar to POPIA, as required by section 72 of POPIA.
      </p>
      <p>We may also disclose information where the law requires it, or to protect our rights or the safety of others.</p>

      <h2>Cookies</h2>
      {analyticsEnabled ? (
        <p>
          Essential cookies and local storage keep the site working and remember your cookie choice. Analytics cookies
          are only set if you click &ldquo;Accept&rdquo;. You can change your choice at any time using &ldquo;Cookie
          settings&rdquo; in the website footer.
        </p>
      ) : (
        <p>
          This website does not use advertising or analytics cookies. We only use what is strictly necessary for the
          site to work. If we introduce analytics in future, we will ask for your consent first and update this policy.
        </p>
      )}

      <h2>How long we keep it</h2>
      <p>
        We keep personal information only for as long as we need it for the purposes above, or for as long as the law
        requires us to keep records. When it is no longer needed, we delete or de-identify it.
      </p>

      <h2>How we protect it</h2>
      <p>
        We take reasonable technical and organisational measures to protect personal information against loss, misuse
        and unauthorised access, including encrypted connections (HTTPS) on this website and restricted access to
        enquiry information. If we become aware of a security compromise affecting your personal information, we will
        notify you and the Information Regulator as POPIA requires.
      </p>

      <h2>Your rights</h2>
      <p>Under POPIA you have the right to:</p>
      <ul>
        <li>ask whether we hold personal information about you, and request a copy of it;</li>
        <li>ask us to correct or delete information that is inaccurate, out of date, incomplete or no longer needed;</li>
        <li>object to us processing your information, including for direct marketing;</li>
        <li>withdraw your consent at any time, where we rely on consent; and</li>
        <li>lodge a complaint with the Information Regulator of South Africa.</li>
      </ul>
      <p>
        To use any of these rights, contact our Information Officer using the details below. We may need to confirm your
        identity before acting on a request. You can reach the Information Regulator at{" "}
        <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-strong underline underline-offset-2">
          inforegulator.org.za
        </a>
        .
      </p>

      <h2>Children</h2>
      <p>
        This website is intended for businesses and adults. We do not knowingly collect personal information from
        children under 18.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>

      <h2>Contact our Information Officer</h2>
      <ul>
        <li>
          Email: <a href={`mailto:${c.email}`} className="font-medium text-brand-strong underline underline-offset-2">{c.email}</a>
        </li>
        <li>Phone: {c.phone}</li>
        <li>Address: {c.address}</li>
      </ul>
      <p>
        See also our <Link href="/terms" className="font-medium text-brand-strong underline underline-offset-2">Terms and Conditions</Link>.
      </p>
    </LegalPage>
  );
}
