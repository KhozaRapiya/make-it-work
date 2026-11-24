# Make IT Work — Corporate Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Lucide icons · Claude API chatbot.

**Make IT Work – because it should.**

## Run locally

```bash
npm install
# .env.local holds local settings; add your Resend key to it
npm run build && npm start   # http://localhost:3000
```
(`npm run dev` also works but is slow on synced/network folders such as OneDrive.)

## Before going live — checklist

Done: logo, contact details, WhatsApp, partner logos, legal pages, live site address.

1. **Enquiry email** – paste your Resend API key into `RESEND_API_KEY` in `.env.local` (local testing) and into the hosting provider's environment variables (live site), together with `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL`. The sender must use the domain verified in Resend.
2. **Still to add** – business hours and social media links in `src/lib/site.ts` (hidden until filled in). Plain logos for Sage, Mustek, Pinnacle, Rectron, DDS, Axiz and Tarsus go in `public/partners/` (use plain brand logos only, not partner badges, unless Make IT Work holds that status). Confirm the Direct Distribution Services website URL.
3. **Legal review** – `/privacy-policy` and `/terms` are complete, but a legal adviser should still check them.
4. **Chatbot (switched off)** – set `assistantEnabled: true` in `src/lib/site.ts` and add `ANTHROPIC_API_KEY`.
5. **Analytics (off)** – set `NEXT_PUBLIC_GA_ID`; the cookie banner and "Cookie settings" link appear automatically, and the privacy policy switches to the analytics wording.
6. **Site address** – defaults to `https://www.makeitwork.co.za`. If the live site uses a different address (for example without `www`), set `NEXT_PUBLIC_SITE_URL` to it.

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. Import it at vercel.com → New Project (framework auto-detected).
3. Add the environment variables from `.env.example` in Project → Settings → Environment Variables.
4. Deploy, then add your domain under Project → Domains. HTTPS is automatic.

Any Node 20+ host also works: `npm run build && npm start`.

## Where things live

| What | File |
|---|---|
| Brand colours, fonts | `src/app/globals.css` (`@theme` tokens) |
| Company details, nav, WhatsApp | `src/lib/site.ts` |
| All service content (9 services) | `src/lib/services.ts` |
| Partners / industries | `src/lib/partners.ts`, `src/lib/industries.ts` |
| Quote & contact API (validation, spam, rate limit, email) | `src/app/api/enquiry/route.ts`, `src/lib/enquiry.ts` |
| Chatbot API + grounding prompt | `src/app/api/chat/route.ts`, `src/lib/chat-knowledge.ts` |
| Security headers | `next.config.ts` |

The chatbot's knowledge is generated from the same service/partner data the pages use, so editing `services.ts` updates both.

## Notes

- Rate limiting is in-memory (per server instance). For high traffic on serverless, swap `src/lib/rate-limit.ts` for a shared store (e.g. Upstash Redis).
- Button red is `#E2101B` (a hair deeper than the logo red `#ED111C`) so white button text meets WCAG AA contrast; the logo red is used for accents and icons.
