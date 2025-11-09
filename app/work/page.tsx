import { Metadata } from 'next'
import CaseStudyCard from '@/components/CaseStudyCard'
import { caseStudies } from '@/lib/case-studies-data'
import { generateMetadata as genMeta } from '@/lib/seo'
import DecorativeShapes from '@/components/DecorativeShapes'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import '@/styles/page-backgrounds.css'
import '@/styles/white-section-animated.css'

export const metadata: Metadata = genMeta({
  title: 'Work',
  description:
    "Case studies and portfolio of web, mobile, and desktop applications we've built for clients across industries.",
  keywords: ['portfolio', 'case studies', 'client projects', 'web development portfolio'],
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Our Work</h1>
              <p className="lead text-secondary">
                Real projects with measurable outcomes, from e-commerce to healthcare to logistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-4">
            {caseStudies.map((study) => (
              <div key={study.slug} className="col-lg-6">
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Want similar results?</h2>
              <p className="lead text-secondary mb-4">
                Tell us about your project and we'll show you how we can help.
              </p>
              <a href="/contact" className="btn btn-primary btn-lg">
                Start your project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
