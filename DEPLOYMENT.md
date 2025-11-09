# Deployment Guide

Complete guide for deploying Naazware Labs website to production.

## Prerequisites

- Git repository with code
- Domain name (optional but recommended)
- Email service for contact form (SMTP or API)

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest and most performant option for Next.js apps.

#### Steps:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/naazware.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Set Environment Variables**

   In Vercel Dashboard → Settings → Environment Variables:

   ```
   NEXT_PUBLIC_SITE_URL=https://naazwarelabs.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-password
   CONTACT_EMAIL=info@naazwarelabs.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Site is live at `your-project.vercel.app`

5. **Add Custom Domain**
   - Vercel Dashboard → Settings → Domains
   - Add your domain
   - Update DNS records (Vercel provides instructions)
   - SSL certificate auto-provisioned

#### Automatic Deployments

Every push to `main` branch triggers automatic deployment.

---

### Option 2: Netlify

Similar to Vercel with comparable performance.

#### Steps:

1. **Push code to GitHub** (same as Vercel)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site"
   - Import from GitHub

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables**
   - Site settings → Environment variables
   - Add same variables as Vercel

5. **Deploy & Add Domain**
   - Similar process to Vercel

---

### Option 3: Self-Hosted (VPS/Docker)

For maximum control, deploy to your own server.

#### Requirements:

- Ubuntu 22.04+ server
- Node.js 18+
- Nginx or Caddy
- PM2 for process management

#### Steps:

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Code**
   ```bash
   # Clone repository
   cd /var/www
   git clone https://github.com/yourusername/naazware.git
   cd naazware

   # Install dependencies
   npm ci --production

   # Build
   npm run build
   ```

3. **Create .env file**
   ```bash
   cp .env.example .env
   nano .env
   # Add your environment variables
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "naazware" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name naazwarelabs.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/naazware /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

6. **SSL with Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d naazwarelabs.com
   ```

---

## Post-Deployment Checklist

### 1. Verify SEO

- [ ] Check `https://yoursite.com/sitemap.xml` loads
- [ ] Check `https://yoursite.com/robots.txt` loads
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### 2. Test Contact Form

- [ ] Submit test contact form
- [ ] Verify email delivery
- [ ] Check form validation works
- [ ] Test on mobile devices

### 3. Performance Testing

Run Lighthouse audit:
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 95

Tools:
- Chrome DevTools → Lighthouse
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### 4. Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 5. Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader friendly (test with NVDA/JAWS)
- [ ] Color contrast passes WCAG AA
- [ ] Forms have proper labels
- [ ] Images have alt text

### 6. Security Headers

Add to Vercel (`vercel.json`) or Nginx config:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

---

## Monitoring Setup

### 1. Analytics

Add Google Analytics 4:

```typescript
// app/layout.tsx - add to <head>
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `
    }} />
  </>
)}
```

### 2. Error Tracking (Optional)

Use Sentry for error monitoring:

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### 3. Uptime Monitoring

Use free services:
- [UptimeRobot](https://uptimerobot.com/)
- [StatusCake](https://www.statuscake.com/)
- [Pingdom](https://www.pingdom.com/)

Set up checks for:
- Homepage (`/`)
- Contact API (`/api/contact`)
- Sitemap (`/sitemap.xml`)

---

## Continuous Deployment

### GitHub Actions (for non-Vercel deployments)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          source: ".next,public,package.json"
          target: "/var/www/naazware"
```

---

## Troubleshooting

### Build Fails

**Issue**: TypeScript errors
**Solution**: Run `npm run type-check` locally to identify issues

**Issue**: Missing environment variables
**Solution**: Verify all required env vars are set in deployment platform

### Contact Form Not Working

**Issue**: Emails not sending
**Solution**: Check SMTP credentials, verify API route logs

**Issue**: 400/500 errors
**Solution**: Check browser console and server logs

### Slow Performance

**Issue**: Large images
**Solution**: Compress images, verify `next/image` is used

**Issue**: Large JavaScript bundle
**Solution**: Audit with `npm run build` and check bundle analysis

---

## Maintenance

### Regular Tasks

- **Weekly**: Check analytics, monitor form submissions
- **Monthly**: Run Lighthouse audit, update dependencies
- **Quarterly**: Review SEO rankings, optimize underperforming pages

### Updating Content

All content lives in TypeScript files:

```bash
# Edit content
nano lib/services-data.ts

# Rebuild and deploy
git add .
git commit -m "Update services content"
git push
# Auto-deploys on Vercel/Netlify
```

---

## Support

For deployment issues, contact:
- Email: info@naazwarelabs.com
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
