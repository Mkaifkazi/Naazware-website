export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'optimizing-nextjs-performance',
    title: 'How We Optimized Next.js Performance to 95+ Lighthouse Scores',
    excerpt:
      'Practical techniques we use to achieve 95+ Lighthouse performance scores on every Next.js project — no magic, just solid engineering.',
    content: `
# How We Optimized Next.js Performance to 95+ Lighthouse Scores

Performance isn't magic. It's a checklist of specific optimizations that compound into a fast site.

## Start With Measurement

Before optimizing, measure. We run Lighthouse on every pull request and track three key metrics:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

If you're not measuring, you're guessing.

## Image Optimization

Images are usually the biggest bottleneck. Here's what works:

- Use \`next/image\` with WebP format (automatic)
- Set explicit width/height to prevent layout shift
- Lazy load below-the-fold images
- Use \`priority\` prop on hero images

## Code Splitting

Next.js handles route-based splitting automatically. What you need to watch:

- Keep shared bundles under 100KB gzipped
- Use dynamic imports for heavy components
- Audit bundle size with \`@next/bundle-analyzer\`

## Server Components

The App Router's server components are a game-changer. Use them by default and only add \`'use client'\` when you need:

- Browser APIs (localStorage, etc.)
- Event handlers (onClick, etc.)
- Hooks (useState, useEffect, etc.)

## The 80/20 Rule

Focus on these five things first:

1. Optimize images
2. Minimize JavaScript
3. Use server components
4. Implement proper caching
5. Lazy load below-the-fold content

Everything else is marginal gains.
    `,
    author: 'Engineering Team',
    date: '2024-03-15',
    readTime: '5 min',
    tags: ['Next.js', 'Performance', 'Web Development'],
    published: true,
  },
  {
    slug: 'mobile-app-offline-first',
    title: 'Building Offline-First Mobile Apps That Actually Work',
    excerpt:
      "Most mobile apps fail offline. Here's how we build apps that work reliably even with poor connectivity.",
    content: `
# Building Offline-First Mobile Apps That Actually Work

Users expect apps to work everywhere — subway, airplane, poor 3G. Here's how we deliver.

## The Core Pattern

Every offline-first app needs three things:

1. **Local data storage** (SQLite or Realm)
2. **Background sync** (when connection returns)
3. **Conflict resolution** (when data changes offline)

## Implementation Strategy

We use a queue-based sync system:

- User actions write to local DB immediately
- Operations queue for sync
- Background process syncs when online
- UI shows sync status clearly

## The Sync Problem

What happens when two devices edit the same data offline? You need a conflict resolution strategy:

- **Last Write Wins**: Simple but loses data
- **Operational Transform**: Complex but perfect
- **CRDTs**: Middle ground (our choice)

## Testing Offline

Turn off your WiFi. Use your app. If it breaks, fix it. Repeat until it doesn't break.

We test on real devices with network throttling to simulate poor connections.
    `,
    author: 'Engineering Team',
    date: '2024-02-28',
    readTime: '6 min',
    tags: ['Mobile Development', 'React Native', 'Architecture'],
    published: true,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.published)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
