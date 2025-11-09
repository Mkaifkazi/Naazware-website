import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getAllCaseStudySlugs } from '@/lib/case-studies-data'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import DecorativeShapes from '@/components/DecorativeShapes'
import '@/styles/white-section-animated.css'

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export const revalidate = 3600 // ISR: revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    return genMeta({ title: 'Case Study Not Found' })
  }

  return genMeta({
    title: `${caseStudy.title} - ${caseStudy.client}`,
    description: caseStudy.excerpt,
    path: `/work/${caseStudy.slug}`,
  })
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/work' },
    { name: caseStudy.title, url: `/work/${caseStudy.slug}` },
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
                <Link href="/work">Work</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {caseStudy.title}
              </li>
            </ol>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <span
                className="badge px-3 py-2 mb-3"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'white',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {caseStudy.industry}
              </span>
              <h1 className="display-4 fw-bold mb-3">{caseStudy.title}</h1>
              <p className="lead text-secondary">{caseStudy.client}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-4 justify-content-center">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 text-center">
                <div className="surface p-4" style={{ borderRadius: 'var(--radius-md)' }}>
                  <div
                    className="display-4 fw-bold mb-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-muted">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">The Challenge</h2>
              <p className="lead text-secondary">{caseStudy.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="2" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">Our Solution</h2>
              <p className="lead text-secondary mb-5">{caseStudy.solution}</p>

              <h4 className="fw-bold mb-3">Technology Stack</h4>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {caseStudy.technologies.map((tech) => (
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
      </section>

      {/* Outcome */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">The Outcome</h2>
              <p className="lead text-secondary">{caseStudy.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <DecorativeShapes variant="1" />
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0">
                  <div className="card-body p-5">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="var(--accent)"
                      className="mb-4"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                    </svg>
                    <blockquote className="mb-4" style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
                      {caseStudy.testimonial.quote}
                    </blockquote>
                    <div className="fw-bold">{caseStudy.testimonial.author}</div>
                    <div className="text-muted">{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Need similar help?</h2>
              <p className="lead text-secondary mb-4">
                Tell us about your project and we'll send you a detailed proposal.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start your project
                </Link>
                <Link href="/work" className="btn btn-outline-primary btn-lg">
                  See more case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
