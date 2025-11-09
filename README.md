# Naazware Labs Website

Production-ready Next.js website for IT consulting and software development services.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + Custom CSS Variables
- **Forms**: react-hook-form + Zod validation
- **Deployment**: Vercel (recommended)

## Features

✅ **Dual Theme System** (Light/Dark with smooth transitions)
✅ **SEO Optimized** (Metadata, sitemap, robots.txt, JSON-LD)
✅ **Performance First** (Target: 90+ Lighthouse score)
✅ **Accessible** (WCAG AA compliant, keyboard navigation)
✅ **Responsive** (Mobile-first design)
✅ **Type-Safe** (Full TypeScript coverage)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
naazware/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── services/          # Services pages
│   ├── work/              # Portfolio/case studies
│   ├── blog/              # Blog posts
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── api/               # API routes
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/                   # Utilities and data
│   ├── theme-provider.tsx
│   ├── seo.ts
│   ├── services-data.ts
│   ├── case-studies-data.ts
│   └── blog-posts-data.ts
├── styles/                # Global styles
│   └── globals.css
├── public/                # Static assets
│   ├── favicon.svg
│   └── manifest.json
└── package.json
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=info@naazwarelabs.com

# Error Tracking (Optional)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx

# Site URL
NEXT_PUBLIC_SITE_URL=https://naazwarelabs.com
```

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Performance Optimization

✅ **Images**: All images use `next/image` with WebP format
✅ **Fonts**: System font stack (no external font loading)
✅ **Code Splitting**: Automatic with App Router
✅ **CSS**: Critical CSS inlined, Bootstrap tree-shaken
✅ **Caching**: Static generation (SSG) with ISR for blog/work

### Lighthouse Targets

- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: ≥ 95

Run Lighthouse:
```bash
npm run build
npm start
# Open Chrome DevTools → Lighthouse tab
```

## Content Management

All content is managed through TypeScript files in `lib/`:

- **Services**: `lib/services-data.ts`
- **Case Studies**: `lib/case-studies-data.ts`
- **Blog Posts**: `lib/blog-posts-data.ts`

Edit these files to update content. No CMS required.

## Customization

### Theme Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --accent: #0d9488;  /* Primary accent color */
  --bg-primary: #ffffff;
  --text-primary: #1f2937;
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
```

### Contact Form

The contact form API route is a placeholder. Implement email sending in `app/api/contact/route.ts` using:

- **Nodemailer** (SMTP)
- **SendGrid** (API)
- **Resend** (API)
- **AWS SES** (API)

Example with nodemailer is included in comments.

## License

© 2024 Naazware Labs. All rights reserved.
