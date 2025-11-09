export interface Service {
  slug: string
  title: string
  shortDescription: string
  bullets: string[]
  icon: string
  fullDescription: string
  challenge: string
  approach: string
  result: string
  technologies: string[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Application Development',
    shortDescription: 'Build fast, scalable web applications with modern frameworks. From responsive SPAs to complex dashboards, we deliver clean code and exceptional user experiences that drive results.',
    bullets: [
      'Scalable backends with clean APIs',
      'Responsive design across all devices',
      'Performance-first architecture',
    ],
    icon: 'web',
    fullDescription:
      'We build fast, reliable web applications that solve real problems. From single-page apps to complex dashboards, we focus on clean code and user experience.',
    challenge:
      'Most web apps fail because they prioritize features over performance and maintainability. Users expect instant load times and smooth interactions.',
    approach:
      'We use modern frameworks like Next.js and React with server-side rendering where it matters. Every component is tested, every API call is optimized, and every deployment is automated.',
    result:
      'Typical projects launch in 8–12 weeks with 90+ Lighthouse performance scores. Our clients see 60% faster load times and 40% higher conversion rates.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    keywords: [
      'web application development',
      'single page application',
      'progressive web app',
      'React development',
      'Next.js development',
    ],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortDescription: 'Create engaging mobile experiences for iOS and Android. We build native and cross-platform apps that users love, with offline support, smooth performance, and seamless App Store deployment.',
    bullets: [
      'iOS and Android with native performance',
      'App Store and Play Store publishing',
      'Offline-first architecture',
    ],
    icon: 'mobile',
    fullDescription:
      'Build mobile apps that users love. We handle everything from design to deployment, whether you need native iOS/Android or cross-platform solutions.',
    challenge:
      'Mobile users expect apps to work instantly, even offline. Poor performance or buggy releases damage trust permanently.',
    approach:
      'We use React Native for cross-platform speed or native Swift/Kotlin when performance is critical. Every app includes offline support, crash reporting, and analytics from day one.',
    result:
      'Apps typically launch in 10–14 weeks with 4.5+ star ratings. Our optimization process reduces app size by 40% and improves startup time by 50%.',
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
    keywords: [
      'mobile app development',
      'iOS development',
      'Android development',
      'React Native',
      'cross-platform mobile',
    ],
  },
  {
    slug: 'desktop-development',
    title: 'Desktop App Development',
    shortDescription: 'Develop powerful desktop applications for Windows, macOS, and Linux. Professional tools with native performance, offline capabilities, and deep system integration that your users can rely on daily.',
    bullets: [
      'Cross-platform: Windows, macOS, Linux',
      'Offline-first with local data storage',
      'Native system integrations',
    ],
    icon: 'desktop',
    fullDescription:
      'Desktop apps for serious work. We build tools that professionals rely on every day, with native performance and deep system integration.',
    challenge:
      'Desktop users demand reliability and native feel. Web-wrapped apps feel sluggish and lack proper keyboard shortcuts or system integration.',
    approach:
      'We build with Electron for cross-platform reach or native technologies when performance is critical. Every app includes proper installer, auto-updates, and crash reporting.',
    result:
      'Desktop apps ship in 10–16 weeks depending on complexity. Our apps use 50% less memory than typical Electron apps and feel truly native.',
    technologies: ['Electron', 'TypeScript', 'Node.js', '.NET', 'SQLite'],
    keywords: [
      'desktop app development',
      'Electron development',
      'cross-platform desktop',
      'Windows app',
      'macOS app',
    ],
  },
  {
    slug: 'domain-hosting',
    title: 'Domain & Hosting',
    shortDescription: 'Get reliable, secure hosting with automated deployments and global CDN. We handle domains, SSL certificates, and CI/CD pipelines so your site stays fast, secure, and always online.',
    bullets: [
      'Fast global CDN delivery',
      'Automated SSL certificates',
      'One-click deployments with CI/CD',
    ],
    icon: 'server',
    fullDescription:
      'Reliable hosting that just works. We handle domains, SSL, CDN, and deployments so you can focus on your business.',
    challenge:
      'Most hosting setups are overcomplicated or unreliable. Manual deployments lead to errors and downtime costs money.',
    approach:
      'We use modern platforms like Vercel, Netlify, or AWS with automated deployments from Git. Every commit is tested and deployed automatically with zero downtime.',
    result:
      '99.9% uptime guaranteed. Deployments happen in under 2 minutes. Global CDN ensures fast load times worldwide.',
    technologies: ['Vercel', 'AWS', 'Cloudflare', 'GitHub Actions', 'Docker'],
    keywords: [
      'web hosting',
      'domain registration',
      'managed hosting',
      'CDN',
      'SSL certificate',
      'CI/CD',
    ],
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    shortDescription: 'Ensure quality with comprehensive testing strategies. From automated test suites to manual QA on real devices, we catch bugs before your users do and maintain security at every level.',
    bullets: [
      'Automated test suites for every release',
      'Manual QA on real devices',
      'Performance and security audits',
    ],
    icon: 'test',
    fullDescription:
      'Catch bugs before your users do. We build comprehensive test coverage and run real-world QA on every release.',
    challenge:
      "Most bugs reach production because testing is manual and inconsistent. Security vulnerabilities go unnoticed until it's too late.",
    approach:
      'We write automated tests alongside code — unit, integration, and end-to-end. Manual QA happens on real devices with real scenarios. Security audits run on every build.',
    result:
      'Our clients see 80% fewer production bugs and 99% CI pass rates. Security audits catch vulnerabilities before they ship.',
    technologies: ['Jest', 'Playwright', 'Cypress', 'GitHub Actions', 'Lighthouse'],
    keywords: [
      'QA testing',
      'automated testing',
      'software testing',
      'quality assurance',
      'security testing',
      'performance testing',
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
