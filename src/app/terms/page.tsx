import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the Make IT Work website.",
  alternates: { canonical: "/terms" },
};

const link = "font-medium text-brand-strong underline underline-offset-2";

export default function TermsPage() {
  const c = siteConfig.contact;
  return (
    <LegalPage title="Terms and Conditions" updated="23 November 2026">
      <p>
        These terms apply to your use of this website, operated by Make IT Work (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;). By using the website you agree to them. If you do not agree, please do not use the website.
      </p>

      <h2>About us</h2>
      <ul>
        <li>Trading name: Make IT Work</li>
        <li>Physical address: {c.address}, South Africa</li>
        <li>
          Phone: <a href={`tel:${c.phone.replace(/[^\d+]/g, "")}`} className={link}>{c.phone}</a>
        </li>
        <li>
          Email: <a href={`mailto:${c.email}`} className={link}>{c.email}</a>
        </li>
      </ul>

      <h2>Website content</h2>
      <p>
        The content on this website gives general information about Make IT Work and its products and services. We try
        to keep it accurate and up to date, but it may change without notice and may contain errors. It is not
        professional advice for your specific situation.
      </p>

      <h2>Quotations and orders</h2>
      <p>
        Nothing on this website is an offer to sell. Submitting an enquiry or quotation request does not create a
        contract. Prices, product availability, specifications, delivery times and warranty terms are confirmed only in
        a formal written quotation from us. Any order you place is governed by that quotation and the terms that come
        with it.
      </p>

      {siteConfig.assistantEnabled && (
        <>
          <h2>Virtual assistant</h2>
          <p>
            The Make IT Work Assistant uses artificial intelligence to answer questions based on information published on
            this website. Its replies may be incomplete or inaccurate and are not binding. Please confirm important
            details with our team.
          </p>
        </>
      )}

      <h2>Using this website</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the website for anything unlawful, or to submit false or misleading information;</li>
        <li>send spam, malicious code or automated requests through our forms; or</li>
        <li>try to gain unauthorised access to the website or interfere with how it works.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The Make IT Work name and logo, and the text, design and graphics on this website, belong to Make IT Work or
        are used with permission. You may view and print pages for your own reference, but you may not copy, reproduce
        or reuse them for commercial purposes without our written consent.
      </p>

      <h2>Third-party brands</h2>
      <p>
        Brand names and logos of manufacturers, distributors and software providers on this website, such as Microsoft,
        Lenovo, Dell and HP, are trademarks of their respective owners. They are shown to identify the products and
        technologies we work with. Showing them does not mean those companies endorse Make IT Work, and does not claim
        any partnership status beyond what we state.
      </p>

      <h2>Links to other websites</h2>
      <p>
        This website links to other websites and services, such as WhatsApp, Google Maps and manufacturers&rsquo; sites.
        We do not control them and are not responsible for their content or privacy practices.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy-policy" className={link}>Privacy Policy</Link> explains how we handle the personal
        information you share with us through this website.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We work to keep this website available, secure and accurate, but we do not guarantee that it will always be
        available or free of errors. To the extent the law allows, Make IT Work is not liable for any loss or damage
        arising from your use of this website or your reliance on its content.
      </p>
      <p>
        Nothing in these terms limits any rights you have under the Consumer Protection Act 68 of 2008 or the Electronic
        Communications and Transactions Act 25 of 2002, where those Acts apply.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Republic of South Africa.</p>

      <h2>Questions</h2>
      <p>
        If you have questions about these terms, email us at <a href={`mailto:${c.email}`} className={link}>{c.email}</a>.
      </p>
    </LegalPage>
  );
}
