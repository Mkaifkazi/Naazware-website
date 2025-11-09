'use client'

import Link from 'next/link'
import WhiteAnimatedShapes from './WhiteAnimatedShapes'
import '@/styles/white-section-animated.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-5 mt-auto no-print white-section-animated"
      style={{
        backgroundColor: '#1a1a2e',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <WhiteAnimatedShapes />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row g-5 mb-5">
          {/* Brand & Description */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                className="me-3"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="6" fill="var(--accent)" />
                <path
                  d="M10 22V10L16 14L22 10V22L16 18L10 22Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="fw-bold fs-4" style={{ color: 'white' }}>
                Naazware Labs
              </span>
            </div>
            <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Building web, mobile, and desktop apps with pragmatic engineering and clear timelines.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://linkedin.com/company/naazware-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/naazwarelabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://github.com/naazware-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ color: 'white', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              Company
            </h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  href="/about"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/work"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Work
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/blog"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Blog
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/contact"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ color: 'white', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              Services
            </h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  href="/services/web-development"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/mobile-development"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Mobile Apps
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/desktop-development"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Desktop Apps
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/domain-hosting"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Hosting & Domain
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/qa-testing"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  QA & Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ color: 'white', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              Get in Touch
            </h6>
            <p className="mb-3">
              <a
                href="mailto:info@naazwarelabs.com"
                className="text-decoration-none"
                style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}
              >
                info@naazwarelabs.com
              </a>
            </p>
            <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
              Reply within 48 hours
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '0.7rem 1.8rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)'
              }}
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            margin: '3rem 0'
          }}
        ></div>

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              © {currentYear} Naazware Labs. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link
              href="/privacy"
              className="text-decoration-none me-4"
              style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-decoration-none"
              style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
