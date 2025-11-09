import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import DecorativeShapes from '@/components/DecorativeShapes'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import { services } from '@/lib/services-data'
import { getFeaturedCaseStudies } from '@/lib/case-studies-data'
import '@/styles/hero-animated.css'
import '@/styles/white-section-animated.css'

// Service Icons
const WebIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const MobileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
)

const DesktopIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
)

const ServerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6" y2="6" />
    <line x1="6" y1="18" x2="6" y2="18" />
  </svg>
)

const TestIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const iconMap: Record<string, React.ReactNode> = {
  web: <WebIcon />,
  mobile: <MobileIcon />,
  desktop: <DesktopIcon />,
  server: <ServerIcon />,
  test: <TestIcon />,
}

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <>
      {/* Hero Section */}
      <section className="hero-animated">
        {/* Animated Background Shapes */}
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        {/* Glass Content */}
        <div className="hero-glass-content section-padding-lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="glass-container text-center">
                  <h1 className="display-4 fw-bold mb-4">
                  Launch faster, Scale smarter Build with NaazWare
                  </h1>
                  <p className="lead mb-4" style={{ color: '#4b5563' }}>
                  From concept to deployment, we craft software that works beautifully.
                  Web, mobile, hosting, and QA, handled with precision, not promises.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Link href="/contact" className="btn btn-primary btn-lg">
                      Get a free project estimate
                    </Link>
                    <Link href="/work" className="btn btn-outline-primary btn-lg">
                      View our work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What we build</h2>
            <p className="lead text-secondary">
              Full-stack development services, from concept to deployment
            </p>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.slug} className="col-lg-4 col-md-6">
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  bullets={service.bullets}
                  href={`/services/${service.slug}`}
                  icon={iconMap[service.icon]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Recent work</h2>
            <p className="lead text-secondary">
              Real projects with measurable outcomes
            </p>
          </div>
          <div className="row g-4 mb-4">
            {featuredCaseStudies.map((study) => (
              <div key={study.slug} className="col-lg-4 col-md-6">
                <CaseStudyCard
                  title={study.title}
                  client={study.client}
                  industry={study.industry}
                  excerpt={study.excerpt}
                  href={`/work/${study.slug}`}
                  metrics={study.metrics}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/work"
              className="text-decoration-none d-inline-flex align-items-center"
              style={{
                color: 'var(--accent)',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              View all case studies
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ms-2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="2" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">What clients say</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    "The new checkout flow paid for itself in the first month. Our customers love
                    how fast and simple it is."
                  </p>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="fw-bold">Sarah Chen</div>
                      <div className="text-muted small">Director of E-commerce, RetailCo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    "Security and accessibility were both critical. The team delivered on both
                    without compromise."
                  </p>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="fw-bold">Dr. Michael Torres</div>
                      <div className="text-muted small">CTO, MediHealth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    "Our drivers actually love using this app. That's never happened before."
                  </p>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="fw-bold">James Park</div>
                      <div className="text-muted small">Operations Manager, QuickShip</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to start your project?</h2>
              <p className="lead text-secondary mb-4">
                Tell us what you&apos;re building. We&apos;ll reply within 48 hours with an estimate and
                timeline.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get a free estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
