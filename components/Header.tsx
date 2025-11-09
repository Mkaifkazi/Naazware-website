'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      dropdown: [
        { href: '/services/web-development', label: 'Web Development' },
        { href: '/services/mobile-development', label: 'Mobile Apps' },
        { href: '/services/desktop-development', label: 'Desktop Apps' },
        { href: '/services/domain-hosting', label: 'Domain & Hosting' },
        { href: '/services/qa-testing', label: 'QA & Testing' },
      ]
    },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky-top bg-white border-bottom no-print" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center fw-bold fs-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="me-2"
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
            <span style={{ color: 'var(--text-primary)' }}>Naazware Labs</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`nav-item ${link.dropdown ? 'dropdown' : ''}`}
                  onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
                >
                  {link.dropdown ? (
                    <>
                      <Link
                        href={link.href}
                        className={`nav-link px-3 ${isActive(link.href) ? 'fw-semibold' : ''}`}
                        style={{
                          color: isActive(link.href) ? 'var(--accent)' : 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                        role="button"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsServicesOpen(!isServicesOpen)
                        }}
                      >
                        {link.label}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Link>
                      <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`} style={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        {link.dropdown.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="dropdown-item"
                              style={{
                                color: 'var(--text-secondary)',
                                padding: '0.7rem 1.5rem',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)'
                                e.currentTarget.style.color = 'var(--accent)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = 'var(--text-secondary)'
                              }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`nav-link px-3 ${isActive(link.href) ? 'fw-semibold' : ''}`}
                      style={{
                        color: isActive(link.href) ? 'var(--accent)' : 'var(--text-secondary)',
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <Link href="/contact" className="btn btn-primary">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
