import { Metadata } from 'next'
import Link from 'next/link'
import DecorativeShapes from '@/components/DecorativeShapes'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import { generateMetadata as genMeta } from '@/lib/seo'
import '@/styles/page-backgrounds.css'
import '@/styles/white-section-animated.css'

export const metadata: Metadata = genMeta({
  title: 'About',
  description:
    'Learn about Naazware Labs, a pragmatic software development team building web, mobile, and desktop applications with clear timelines.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">About Us</h1>
              <p className="lead text-secondary">
                We're a team of engineers who believe software should work without drama, delays,
                or technical debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">Who We Are</h2>
              <p className="lead text-secondary mb-4">
                Naazware Labs started because we were tired of seeing good projects fail due to
                poor planning, unclear timelines, and over-engineered solutions.
              </p>
              <p className="text-secondary mb-4">
                We build software the way it should be built: pragmatic engineering, clear
                communication, and deliverables that work on day one. No buzzwords, no hype, just
                solid code and realistic timelines.
              </p>
              <p className="text-secondary">
                Our clients range from startups launching their first product to established
                companies modernizing legacy systems. What they all have in common: they want a
                team that delivers what they promise, when they promise it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding position-relative white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <DecorativeShapes variant="2" />
        <WhiteAnimatedShapes />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3">Our Values</h2>
              <p className="lead text-secondary">
                Principles that guide how we work
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="surface p-4 h-100">
                <h3 className="h5 fw-bold mb-3">Honest Timelines</h3>
                <p className="text-secondary">
                  We give realistic estimates and stick to them. If something changes, you'll know
                  immediately, not two weeks after the deadline.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="surface p-4 h-100">
                <h3 className="h5 fw-bold mb-3">Pragmatic Engineering</h3>
                <p className="text-secondary">
                  We use proven technologies and avoid over-engineering. Your project doesn&apos;t need
                  microservices or a custom framework, it needs to work.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="surface p-4 h-100">
                <h3 className="h5 fw-bold mb-3">Clear Communication</h3>
                <p className="text-secondary">
                  No jargon, no excuses. We explain technical decisions in plain language and keep
                  you updated every step of the way.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="surface p-4 h-100">
                <h3 className="h5 fw-bold mb-3">Quality by Default</h3>
                <p className="text-secondary">
                  Every line of code is tested. Every deploy is automated. Every bug is tracked.
                  Quality isn&apos;t optional, it&apos;s how we work.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="surface p-4 h-100">
                <h3 className="h5 fw-bold mb-3">Long-term Thinking</h3>
                <p className="text-secondary">
                  We build for the next five years, not just the next sprint. Your codebase should
                  be maintainable, not a liability.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="surface p-4 h-100">
                <h3 className="h5 fw-bold mb-3">Client Success</h3>
                <p className="text-secondary">
                  We succeed when you succeed. That means understanding your business goals, not
                  just writing code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3">How We Work</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="text-center">
                <div
                  className="display-4 fw-bold mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  01
                </div>
                <h4 className="fw-bold mb-3">Discovery</h4>
                <p className="text-secondary">
                  We start by understanding your goals, users, and constraints. No project starts
                  without a clear brief.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center">
                <div
                  className="display-4 fw-bold mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  02
                </div>
                <h4 className="fw-bold mb-3">Planning</h4>
                <p className="text-secondary">
                  We break the project into phases with clear milestones. You'll know exactly what
                  gets delivered and when.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center">
                <div
                  className="display-4 fw-bold mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  03
                </div>
                <h4 className="fw-bold mb-3">Development</h4>
                <p className="text-secondary">
                  We build in two-week sprints with regular demos. You see progress continuously,
                  not just at the end.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center">
                <div
                  className="display-4 fw-bold mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  04
                </div>
                <h4 className="fw-bold mb-3">Launch</h4>
                <p className="text-secondary">
                  We handle deployment, monitoring, and support. You launch with confidence, not
                  crossed fingers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">Want to work with us?</h2>
              <p className="lead text-secondary mb-4">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
