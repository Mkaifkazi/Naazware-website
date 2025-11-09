import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Terms of Service',
  description: 'Terms of service for Naazware Labs website and services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4">Terms of Service</h1>
            <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="h4 fw-bold mb-3">Use of Website</h2>
            <p className="text-secondary mb-4">
              This website is provided for informational purposes. By using this site, you agree to
              use it lawfully and not to misuse any contact forms or communication channels.
            </p>

            <h2 className="h4 fw-bold mb-3">Services</h2>
            <p className="text-secondary mb-4">
              Software development services are provided under separate written agreements. These
              terms cover only the use of this website, not project work.
            </p>

            <h2 className="h4 fw-bold mb-3">Intellectual Property</h2>
            <p className="text-secondary mb-4">
              All content on this website, including text, code examples, and design, is owned by
              Naazware Labs or used with permission. You may not copy or redistribute this content
              without permission.
            </p>

            <h2 className="h4 fw-bold mb-3">Disclaimer</h2>
            <p className="text-secondary mb-4">
              Case studies and performance metrics are based on real projects but may not reflect
              results for your specific situation. Project timelines and outcomes depend on many
              factors specific to each client.
            </p>

            <h2 className="h4 fw-bold mb-3">Limitation of Liability</h2>
            <p className="text-secondary mb-4">
              We are not liable for any damages arising from the use of this website or reliance on
              its content. Contact us directly for specific advice about your project.
            </p>

            <h2 className="h4 fw-bold mb-3">Changes to Terms</h2>
            <p className="text-secondary mb-4">
              We may update these terms occasionally. Continued use of the site constitutes
              acceptance of updated terms.
            </p>

            <h2 className="h4 fw-bold mb-3">Contact</h2>
            <p className="text-secondary mb-4">
              Questions about these terms? Email us at info@naazwarelabs.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
