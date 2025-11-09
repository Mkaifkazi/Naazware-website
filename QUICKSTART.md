# Quick Start Guide

Get the Naazware Labs website running in 5 minutes.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

Check your versions:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be v9.0.0 or higher
```

---

## Installation

### Step 1: Install Dependencies

```bash
cd naazware
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Bootstrap 5
- react-hook-form
- Zod

**Time**: ~2 minutes

---

### Step 2: Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your details (optional for development):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=info@naazwarelabs.com
```

**Time**: 30 seconds

---

### Step 3: Start Development Server

```bash
npm run dev
```

**Output**:
```
> naazware-labs@1.0.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully in 2.3s
```

**Time**: 10 seconds

---

### Step 4: Open in Browser

Open [http://localhost:3000](http://localhost:3000)

You should see the Naazware Labs homepage with:
- Hero section
- Services preview
- Case studies
- Testimonials

**Time**: Instant

---

## What You Can Do Now

### View All Pages

- Home: [http://localhost:3000](http://localhost:3000)
- Services: [http://localhost:3000/services](http://localhost:3000/services)
- Work: [http://localhost:3000/work](http://localhost:3000/work)
- About: [http://localhost:3000/about](http://localhost:3000/about)
- Blog: [http://localhost:3000/blog](http://localhost:3000/blog)
- Contact: [http://localhost:3000/contact](http://localhost:3000/contact)

### Test Features

**Theme Toggle**:
1. Click the sun/moon icon in header
2. Theme switches between light and dark
3. Choice persists in localStorage

**Contact Form**:
1. Go to [/contact](http://localhost:3000/contact)
2. Fill out form
3. Submit (logs to console, doesn't send email yet)

**Responsive Design**:
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test mobile, tablet, desktop

---

## Making Changes

### Edit Content

All content is in TypeScript files — no database needed.

**Services**:
```bash
# Edit services
nano lib/services-data.ts

# Changes appear instantly (hot reload)
```

**Case Studies**:
```bash
nano lib/case-studies-data.ts
```

**Blog Posts**:
```bash
nano lib/blog-posts-data.ts
```

### Edit Styles

**Theme colors**:
```bash
nano styles/globals.css

# Change CSS variables:
# --accent: #0d9488;  /* Your brand color */
```

### Edit Components

```bash
nano components/Header.tsx  # Edit header
nano components/Footer.tsx  # Edit footer
```

---

## Building for Production

### Build the site

```bash
npm run build
```

**Output**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB          87 kB
├ ○ /about                               1.8 kB          83 kB
├ ○ /blog                                2.1 kB          84 kB
├ ○ /contact                             3.4 kB          89 kB
└ ○ /services                            2.9 kB          85 kB

○  (Static)  prerendered as static content
```

**Time**: 30-60 seconds

### Test production build

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

Site now runs in production mode (faster, optimized).

---

## Common Issues

### Port 3000 Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

---

### Module Not Found Error

**Error**: `Cannot find module 'xyz'`

**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

### TypeScript Errors

**Error**: `Type 'X' is not assignable to type 'Y'`

**Solution**:
```bash
# Check types
npm run type-check

# See specific error locations
```

---

### Build Fails

**Error**: Build fails with errors

**Solution**:
```bash
# Check for errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

---

## Next Steps

### Before Deploying

1. **Set up email** in `app/api/contact/route.ts`
2. **Add analytics** (Google Analytics ID)
3. **Replace placeholder images**
4. **Customize copy** for your needs
5. **Run Lighthouse** audit

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

**Time**: 2 minutes

**See**: [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## Project Structure

```
naazware/
├── app/           # Pages and routes
├── components/    # React components
├── lib/           # Data and utilities
├── styles/        # Global CSS
├── public/        # Static files
└── content/       # Site copy
```

---

## Getting Help

**Documentation**:
- [README.md](./README.md) — Full setup guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Deployment instructions
- [PERFORMANCE.md](./PERFORMANCE.md) — Performance optimization
- [PROJECT_BRIEF.md](./PROJECT_BRIEF.md) — What was built

**Resources**:
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- React: [react.dev](https://react.dev)
- Bootstrap: [getbootstrap.com](https://getbootstrap.com)

**Support**:
- Email: info@naazwarelabs.com

---

## You're Ready!

The site is now running locally. Make changes, see them instantly, and deploy when ready.

**Typical workflow**:
1. Edit content in `lib/` files
2. Changes appear instantly (hot reload)
3. Commit to Git when happy
4. Push to deploy (if using Vercel)

**Happy building!** 🚀
