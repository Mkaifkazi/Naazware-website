You are an expert frontend engineer + copywriter and designer. Build a complete, production-ready website for Naazware Labs — an IT consulting & solutions company offering:

Web application development

Mobile app development

Desktop app development

Domain & hosting

QA & testing

Stack & deliverables

Framework: Next.js (use the App Router / app/ directory). Use TypeScript.

UI: Bootstrap 5 (can use react-bootstrap where it makes sense but bootstrap classes must provide primary styling).

Output: a Git-ready project structure with code files. Provide the source files for key pages and components (see "Deliverables" section below).

Provide two polished themes (Light — modern minimal, and Dark — professional minimal) implemented via CSS variables and a ThemeProvider toggler.

Ensure the site is production-ready, SEO-optimized, accessible, fast, and human-sounding (not AI-looking).

Keep copy concise, conversion-focused, and human. Avoid generic, robotic phrases and AI patterns (see "Avoid" section).

UX, layout & pages (high-level)

Build a minimal, modern, fast landing site with these pages and structure:

/ — Home / Landing page (Primary conversion page)

/services — Overview page listing all services (with anchor links to each service section)

/services/[slug] — Service detail pages (SSG) for each service: web, mobile, desktop, domain/hosting, QA/testing

/work — Case studies / Portfolio (3–6 sample case studies placeholders)

/about — Short human team & values page

/blog — Blog index (SSG) and /blog/[slug] posts (optional sample post)

/contact — Contact page with form (collect name, email, company, message, budget range, consent checkbox)

/privacy and /terms

/sitemap.xml and /robots.txt

Site shell:

Minimal header with brand, main nav, theme toggle, CTA ("Get a Quote")

Sticky minimal footer with contact details, small nav, copyright, social icons

Persistent floating CTA (bottom-right) for "Get a free consult" or chat trigger

Design & style

Very, very, very modern and minimal. Plenty of whitespace, geometric grid, clear typography hierarchy.

Two themes:

Light theme (default): white background, soft gray surfaces, one accent color (choose a single vivid accent like teal or indigo).

Dark theme (alternative): deep charcoal background, subtle glassy cards, same accent color for consistency.

Use Bootstrap utilities + a small set of custom CSS (CSS variables for colors, spacing scale, and radii).

Use system fonts or modern web-safe stack (e.g., Inter, system-ui). Load fonts with preconnect and font-display: swap.

Icons: use an inline SVG icon set (do not use giant icon font files). Provide SVGs for logo & service icons.

Imagery: Use subtle original illustrations or minimal device mockups (SVG) — do not rely on generically styled stock photos. Provide placeholders and alt text.

Key design constraints

Minimal color palette: background, surface, one accent, muted text.

Large readable type scales (H1, H2, etc.). Use Bootstrap spacing but refine with CSS variables.

Call-to-action buttons should be high-contrast, pill-shaped, and used sparingly.

Avoid gradient-heavy or “AI art collage” images that look generative.

Copy & conversion tone

Copy must be short, direct, and conversion-focused. Human tone: confident, helpful, non-hyped.

Hero guidelines (Home):

Headline: 6–9 words maximum. Problem-focused + outcome-driven. Example style (DON’T copy blindly, adapt):
"Software that works — built for your goals."

Subheadline: 1–2 short sentences explaining the benefit and credibility (years, types of clients, outcome).

Primary CTA: “Get a free project estimate” (opens contact modal or route to /contact)

Secondary CTA: “See our work” (anchors to /work)

Service blocks

One-line service description + 3 bullet outcomes (benefits).

Each service page should contain: challenge → approach → result (concrete metrics if possible) → CTA.

Trust & social proof

Short testimonials (2–4 sentences), client logos (silhouettes), and a small section for results (e.g., “Avg. project delivery: 8–12 weeks”, “99% CI pass rate” — use realistic placeholders if client data absent).

Microcopy

Use human microcopy on forms (e.g., “Tell us about your project — we’ll be in touch in 2 business days.”).

Avoid disclaimers that sound like AI (no “As an AI…” phrases).

SEO & technical requirements

Make the site highly SEO friendly and fast.

SEO fundamentals

Proper semantic HTML (header, main, article, nav, footer).

Each page must provide unique meta title and description, optimized for target keywords:

Primary keywords: "Web application development", "Mobile app development", "QA and testing", "Domain and hosting", "Desktop app development", "IT consulting India" (tailor to region if desired).

Use location-targeting if required (e.g., "Naazware Labs — IT consulting | [City], India")

Use next/head or app/metadata to generate metadata.

Generate sitemap.xml (dynamic if posts/case studies can change).

Generate robots.txt and canonical tags.

Add JSON-LD structured data for Organization, LocalBusiness (if applicable), and WebSite with sameAs links.

Use readable URLs and set <link rel="alternate" hreflang> if multiple locales later.

Performance

Use Next.js image optimization (next/image) and inline critical CSS.

Avoid large UI libraries beyond Bootstrap; tree-shake where possible.

Use SSG for static pages, incremental static regeneration (ISR) for case studies and blog.

Critical assets preloaded (fonts, hero image).

Lighthouse target: Performance >= 90, Accessibility >= 95, Best Practices >= 90, SEO >= 95 (realistic but aim high).

Keep total JS payload small (< 200KB gzipped ideally). Use route-based code splitting.

Accessibility

All interactive elements keyboard accessible.

Use aria-* attributes on components where needed.

Ensure color contrast meets WCAG AA.

Dev & architecture decisions (explicit)

Next.js App Router, TypeScript.

Folder structure (example):
/app
  /(public)
    layout.tsx
    page.tsx
  /services
    page.tsx
    [slug]/page.tsx
  /work
    page.tsx
    [slug]/page.tsx
  /blog
    page.tsx
    [slug]/page.tsx
  /contact
    page.tsx
/components
  Header.tsx
  Footer.tsx
  CTAButton.tsx
  ServiceCard.tsx
  CaseStudyCard.tsx
  ThemeToggle.tsx
  ContactForm.tsx
/lib
  seo.ts
  sitemap.ts
/public
  /images
  favicon.svg
next.config.js
tsconfig.json
package.json
Use next/metadata for per-page metadata.

Use react-hook-form + client-side validation for contact and serverless API route /api/contact to send mail via SMTP or 3rd-party (provide sample placeholder).

Implement theme switching via cookie/localStorage and server-side aware initial theme where possible.

Avoid — how to prevent the site from looking AI-generated

Carefully follow these rules in copy, layout and imagery:

Avoid overused generics like "cutting-edge", "disruptive", "synergy", "best-in-class" unless paired with concrete meaning. Prefer concrete outcomes: "Reduced load time by 60%", "Delivered v1 in 10 weeks".

No stock-sounding headlines with vague promises. Use specific value propositions and clear CTAs.

Vary sentence length and use natural contractions in microcopy (“We’ll”, “You’ll”).

Avoid repetitive structure across pages (don’t repeat the same three-sentence pattern).

No faux data: If you include numbers, mark them as examples or realistic placeholders.

Don't use AI-stamped phrasing (e.g., "Powered by AI", unless it's real product functionality). If AI is a feature, describe the feature concretely.

Imagery: prefer original SVG illustrations, device mockups, or tasteful photos of people in real situations. Avoid surreal collage or generative art style that screams "AI".

Testimonials: use names, roles, and companies (placeholder but realistic). Avoid generic "Client A" or "Happy customer".

Content — required copy pieces (provide human-first drafts)

Include ready-to-use copy drafts (short) for:

Home / Hero

Headline (one):
Software that works — built for your goals.

Subheadline (one):
We build web, mobile, and desktop apps with pragmatic engineering and clear timelines — so you launch faster and scale safely.

CTA (primary): Get a free project estimate

CTA (secondary): View our work

Service short bullets (example)

Web app development — Modern SPAs & server-rendered apps • Scalable backends • Clean APIs

Mobile app development — Native and cross-platform • App Store publishing • Performance first

Desktop app development — Electron & native • Offline-first • Native integrations

Domain & hosting — Secure DNS, managed hosting, HTTPS + CI/CD

QA & testing — Automated tests, manual QA, performance & security testing

Contact microcopy

Tell us about your project. We’ll reply within 48 hours.

Analytics, monitoring & deployment

Add environment-configurable analytics stub (e.g., Google Analytics v4 or Plausible). Provide placeholders and show where to insert tracking ID.

Provide sample vercel.json or clear Vercel deployment instructions (prefer Vercel or Netlify).

Add Sentry or a placeholder for error tracking instructions (optional).

CI: Provide simple GitHub Actions sample for build & test.

Accessibility & testing

Include simple unit tests for header and contact form using vitest or jest (one example test).

Provide Lighthouse command and how to interpret results.

Provide list of manual accessibility checks (tab order, form labels, color contrast).

Output format (how I want Claude to return the work)

Return all of the following in the response. Use code blocks and file-tree formatting where appropriate.

Project brief (1 page) — concise summary of what was built and why (including SEO & performance summary).

File tree of the generated project root.

Key code files (full contents) for:

app/layout.tsx (with metadata & theme provider)

app/page.tsx (home/hero + services preview)

app/services/page.tsx + app/services/[slug]/page.tsx (templates)

components/Header.tsx, components/Footer.tsx, components/ThemeToggle.tsx, components/ContactForm.tsx

lib/seo.ts and lib/sitemap.ts (or equivalent)

next.config.js and package.json

public/manifest.json and public/favicon.svg

All textual content in a single markdown file /content/site-copy.md (ready to paste into CMS). This should include meta titles & descriptions for every page, hero copy, service page copy, 3 case study summaries, 3 testimonials, and blog post stub.

Instructions to deploy on Vercel + environment variables to set (ANALYTICS_ID, SMTP, SENTRY_DSN).

Performance checklist and Lighthouse targets, plus one or two simple optimizations to reach them.

A short paragraph explaining how you avoided "AI-generated" patterns in copy and design.

If any external images or icons are included, provide them as inline SVG code or point to public/images/ placeholders.

Developer constraints & preferences

Use Bootstrap 5 only for the base UI framework. Avoid Tailwind or other full CSS frameworks.

Keep 3rd-party JS minimal. Use react-bootstrap only where it makes development clearer; prefer Bootstrap classes for layout.

Use TypeScript for all code examples.

Prefer server components for static content; use client components for theme toggle and forms.

Use next/image.

Keep total inline CSS low and use CSS variables.

Example final instruction (very short)

Build the Next.js project as described above and return the project brief, the full file tree, and the exact source for the key files listed. Also include /content/site-copy.md with all site text. Make sure the language and copy are human, avoid AI-sounding generic phrases, and implement two themes (light + dark). Optimize for SEO and Lighthouse scores.

Important: Tone enforcement for copy

Human, pragmatic, credible.

Short sentences; mix lengths.

Use specific outcomes and simple honest claims.

Avoid hyperbole and marketing buzzwords without proof.