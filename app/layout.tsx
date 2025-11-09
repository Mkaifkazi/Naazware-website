import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import SmoothScroll from '@/components/SmoothScroll'
import { generateMetadata as genMeta, generateOrganizationSchema } from '@/lib/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

export const metadata: Metadata = genMeta({
  title: 'Naazware Labs',
  description:
    'Web, mobile, and desktop app development with pragmatic engineering and clear timelines. Launch faster and scale safely.',
  keywords: [
    'web application development',
    'mobile app development',
    'desktop app development',
    'IT consulting',
    'QA testing',
    'software development services',
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Providers>
          <SmoothScroll />
          <Header />
          <main id="main-content" className="flex-grow-1">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  )
}
