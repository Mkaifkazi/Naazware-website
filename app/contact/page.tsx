import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { generateMetadata as genMeta } from '@/lib/seo'
import DecorativeShapes from '@/components/DecorativeShapes'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import '@/styles/page-backgrounds.css'
import '@/styles/white-section-animated.css'

export const metadata: Metadata = genMeta({
  title: 'Contact',
  description:
    'Get in touch to discuss your project. We reply within 48 hours with a detailed estimate and timeline.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Let's Talk</h1>
              <p className="lead text-secondary">
                Tell us about your project. We'll reply within 48 hours with an estimate and
                timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="2" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-5">
            {/* Form */}
            <div className="col-lg-7">
              <div className="surface p-5">
                <h2 className="h4 fw-bold mb-4">Start Your Project</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="mb-5">
                <h3 className="h5 fw-bold mb-3">Email Us</h3>
                <p className="text-secondary mb-2">
                  <a
                    href="mailto:info@naazwarelabs.com"
                    className="text-decoration-none"
                    style={{ color: 'var(--accent)' }}
                  >
                    info@naazwarelabs.com
                  </a>
                </p>
                <p className="text-muted small">We reply within 48 hours</p>
              </div>

              <div className="mb-5">
                <h3 className="h5 fw-bold mb-3">What to Expect</h3>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
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
                    <span className="text-secondary">
                      Reply within 48 hours (usually faster)
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
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
                    <span className="text-secondary">
                      Honest assessment of timeline and budget
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
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
                    <span className="text-secondary">
                      Clear next steps if we're a good fit
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
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
                    <span className="text-secondary">
                      No sales pressure or pushy follow-ups
                    </span>
                  </li>
                </ul>
              </div>

              <div className="surface p-4">
                <h3 className="h6 fw-bold mb-3">Prefer to talk first?</h3>
                <p className="text-secondary small mb-3">
                  Email us at{' '}
                  <a
                    href="mailto:info@naazwarelabs.com"
                    style={{ color: 'var(--accent)' }}
                    className="text-decoration-none"
                  >
                    info@naazwarelabs.com
                  </a>{' '}
                  and we'll schedule a call.
                </p>
                <p className="text-muted small mb-0">
                  We work with clients worldwide across all time zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4 text-center">Common Questions</h2>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3" style={{ borderRadius: 'var(--radius-md)' }}>
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      How long does a typical project take?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-secondary">
                      Most projects take 8–12 weeks from kickoff to launch. Complex projects can take
                      longer. We'll give you a detailed timeline after understanding your requirements.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3" style={{ borderRadius: 'var(--radius-md)' }}>
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      What's your pricing model?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-secondary">
                      We quote fixed-price for well-defined projects or time-and-materials for ongoing
                      work. Most projects start at $10,000. We'll provide a detailed breakdown before
                      starting.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3" style={{ borderRadius: 'var(--radius-md)' }}>
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      Do you work with startups?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-secondary">
                      Yes. About half our clients are startups launching their first product. We're good
                      at helping you scope an MVP that ships fast without cutting corners on quality.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0" style={{ borderRadius: 'var(--radius-md)' }}>
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      Do you provide ongoing support?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-secondary">
                      Yes. We offer monthly retainers for maintenance, bug fixes, and new features. Most
                      clients stay with us after launch.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
