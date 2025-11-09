import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description: 'Privacy policy for Naazware Labs website and services.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4">Privacy Policy</h1>
            <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="h4 fw-bold mb-3">Information We Collect</h2>
            <p className="text-secondary mb-4">
              When you contact us through our website, we collect your name, email address, company
              name (optional), budget range, and project details. We use this information solely to
              respond to your inquiry and provide quotes.
            </p>

            <h2 className="h4 fw-bold mb-3">How We Use Your Information</h2>
            <p className="text-secondary mb-4">
              We use your contact information to respond to inquiries, send project estimates, and
              communicate about potential projects. We never sell or share your information with
              third parties for marketing purposes.
            </p>

            <h2 className="h4 fw-bold mb-3">Analytics</h2>
            <p className="text-secondary mb-4">
              We use analytics tools to understand how visitors use our site. These tools may use
              cookies to collect anonymous usage data. You can disable cookies in your browser
              settings.
            </p>

            <h2 className="h4 fw-bold mb-3">Data Security</h2>
            <p className="text-secondary mb-4">
              We take reasonable precautions to protect your information. All form submissions are
              transmitted over HTTPS. We store contact form data securely and delete it after one
              year if no project relationship develops.
            </p>

            <h2 className="h4 fw-bold mb-3">Your Rights</h2>
            <p className="text-secondary mb-4">
              You can request to view, update, or delete your information at any time by emailing
              info@naazwarelabs.com.
            </p>

            <h2 className="h4 fw-bold mb-3">Contact</h2>
            <p className="text-secondary mb-4">
              Questions about this privacy policy? Email us at info@naazwarelabs.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
