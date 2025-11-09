import Link from 'next/link'
import { Metadata } from 'next'
import DecorativeShapes from '@/components/DecorativeShapes'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import { services } from '@/lib/services-data'
import { generateMetadata as genMeta } from '@/lib/seo'
import '@/styles/page-backgrounds.css'
import '@/styles/white-section-animated.css'

export const metadata: Metadata = genMeta({
  title: 'Services',
  description:
    'Web, mobile, and desktop app development, domain hosting, and QA testing services with clear timelines and pragmatic engineering.',
  keywords: [
    'web development services',
    'mobile app development',
    'desktop applications',
    'hosting services',
    'QA testing',
  ],
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead text-secondary">
                End-to-end development services, from planning through deployment and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`section-padding position-relative ${index % 2 !== 0 ? 'white-section-animated' : ''}`}
          style={{
            backgroundColor: index % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-primary)',
          }}
        >
          {index % 2 === 0 && <DecorativeShapes variant={index % 4 === 0 ? '1' : '2'} />}
          {index % 2 !== 0 && <WhiteAnimatedShapes />}
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span
                  className="badge px-3 py-2 mb-3"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {service.title}
                </span>
                <h2 className="display-6 fw-bold mb-4">{service.shortDescription}</h2>
                <p className="lead text-secondary mb-4">{service.fullDescription}</p>
                <ul className="list-unstyled mb-4">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        className="me-3 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-secondary">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
              <div className="col-lg-6">
                <div
                  className="surface p-5"
                  style={{ borderRadius: 'var(--radius-lg)', minHeight: '300px' }}
                >
                  <h4 className="fw-bold mb-3">Technologies</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-secondary px-3 py-2"
                        style={{ borderRadius: 'var(--radius-full)', fontSize: '0.9rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Not sure which service you need?</h2>
              <p className="lead text-secondary mb-4">
                Let's talk about your project. We'll recommend the right approach.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
