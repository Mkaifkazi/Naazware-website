import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, getAllServiceSlugs } from '@/lib/services-data'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import DecorativeShapes from '@/components/DecorativeShapes'
import '@/styles/white-section-animated.css'

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getService(params.slug)

  if (!service) {
    return genMeta({ title: 'Service Not Found' })
  }

  return genMeta({
    title: service.title,
    description: service.fullDescription,
    keywords: service.keywords,
    path: `/services/${service.slug}`,
  })
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)

  if (!service) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">{service.title}</h1>
              <p className="lead text-secondary mb-4">{service.fullDescription}</p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">The Challenge</h2>
              <p className="lead text-secondary">{service.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">Our Approach</h2>
              <p className="lead text-secondary mb-4">{service.approach}</p>
              <h4 className="fw-bold mb-3">Key Features</h4>
              <ul className="list-unstyled">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
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
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="2" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">Expected Results</h2>
              <p className="lead text-secondary">{service.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">Technology Stack</h2>
              <p className="text-secondary mb-4">
                We use modern, proven technologies that balance developer productivity with
                long-term maintainability.
              </p>
              <div className="d-flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge px-4 py-3"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '1rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Ready to get started?</h2>
              <p className="lead text-secondary mb-4">
                Tell us about your project and we'll send you a detailed estimate within 48 hours.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get a free estimate
                </Link>
                <Link href="/work" className="btn btn-outline-primary btn-lg">
                  See similar projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
