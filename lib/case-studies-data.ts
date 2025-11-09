export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  thumbnail: string
  excerpt: string
  challenge: string
  solution: string
  outcome: string
  metrics: { label: string; value: string }[]
  technologies: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  featured: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-platform-redesign',
    title: 'E-commerce Platform Redesign',
    client: 'RetailCo',
    industry: 'Retail',
    thumbnail: '/images/work/ecommerce.svg',
    excerpt:
      'Rebuilt checkout flow and reduced cart abandonment by 35% for a mid-sized online retailer.',
    challenge:
      'RetailCo was losing sales due to a confusing checkout process. Cart abandonment rate was 72%, and mobile conversion was especially poor.',
    solution:
      'We redesigned the entire checkout experience with a single-page flow, guest checkout, and integrated payment options. Built with Next.js and Stripe for instant payments.',
    outcome:
      'Cart abandonment dropped from 72% to 47%. Mobile conversions increased by 60%. The site now handles 3x traffic with zero downtime.',
    metrics: [
      { label: 'Cart abandonment reduction', value: '35%' },
      { label: 'Mobile conversion increase', value: '60%' },
      { label: 'Page load time', value: '1.2s' },
    ],
    technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Vercel'],
    testimonial: {
      quote:
        'The new checkout flow paid for itself in the first month. Our customers love how fast and simple it is.',
      author: 'Sarah Chen',
      role: 'Director of E-commerce, RetailCo',
    },
    featured: true,
  },
  {
    slug: 'healthcare-patient-portal',
    title: 'Healthcare Patient Portal',
    client: 'MediHealth',
    industry: 'Healthcare',
    thumbnail: '/images/work/healthcare.svg',
    excerpt:
      'Built a HIPAA-compliant patient portal serving 50,000+ patients with secure messaging and appointment scheduling.',
    challenge:
      'MediHealth needed a patient portal that met HIPAA requirements while being simple enough for elderly patients to use.',
    solution:
      'We built a secure web portal with two-factor authentication, encrypted messaging, and an accessible design tested with real patients. Backend uses Node.js with full audit logging.',
    outcome:
      'Portal serves 50,000+ patients with 95% satisfaction scores. Phone call volume to reception dropped 40%. Passed security audit with zero findings.',
    metrics: [
      { label: 'Active patients', value: '50,000+' },
      { label: 'Satisfaction score', value: '95%' },
      { label: 'Call volume reduction', value: '40%' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Auth0'],
    testimonial: {
      quote:
        'Security and accessibility were both critical. The team delivered on both without compromise.',
      author: 'Dr. Michael Torres',
      role: 'CTO, MediHealth',
    },
    featured: true,
  },
  {
    slug: 'logistics-tracking-mobile-app',
    title: 'Logistics Tracking Mobile App',
    client: 'QuickShip',
    industry: 'Logistics',
    thumbnail: '/images/work/logistics.svg',
    excerpt:
      'Native mobile app for delivery drivers with offline support and real-time GPS tracking.',
    challenge:
      'QuickShip drivers needed an app that worked reliably even in areas with poor connectivity. The previous app crashed frequently and drained battery.',
    solution:
      'We built a native iOS and Android app with offline-first architecture. All delivery data syncs automatically when connection is available. Optimized GPS tracking uses 60% less battery.',
    outcome:
      'App has 4.8-star rating from 2,000+ drivers. Crash rate dropped to 0.1%. Battery life improved by 60%. Delivery completion time decreased 15%.',
    metrics: [
      { label: 'App store rating', value: '4.8★' },
      { label: 'Crash rate', value: '0.1%' },
      { label: 'Battery usage reduction', value: '60%' },
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    testimonial: {
      quote:
        "Our drivers actually love using this app. That's never happened before.",
      author: 'James Park',
      role: 'Operations Manager, QuickShip',
    },
    featured: true,
  },
  {
    slug: 'financial-dashboard',
    title: 'Financial Analytics Dashboard',
    client: 'InvestTech',
    industry: 'Finance',
    thumbnail: '/images/work/finance.svg',
    excerpt:
      'Real-time financial dashboard processing 1M+ transactions daily with custom data visualizations.',
    challenge:
      "InvestTech needed to visualize complex financial data in real-time for portfolio managers. Existing tools were slow and couldn't handle the data volume.",
    solution:
      'Built a custom dashboard with WebSocket connections for real-time updates. Optimized database queries and added caching to handle 1M+ daily transactions.',
    outcome:
      'Dashboard loads in under 2 seconds with real-time data. Supports 500 concurrent users. Portfolio managers make decisions 3x faster.',
    metrics: [
      { label: 'Transactions processed', value: '1M+/day' },
      { label: 'Load time', value: '<2s' },
      { label: 'Concurrent users', value: '500' },
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'Redis', 'PostgreSQL'],
    featured: false,
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug)
}
