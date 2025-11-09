'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Desktop version */}
      <Link
        href="/contact"
        className="btn btn-primary shadow-lg no-print d-none d-md-flex align-items-center"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          borderRadius: 'var(--radius-full)',
          padding: '1rem 1.5rem',
          fontWeight: 600,
          animation: 'fadeInUp 0.3s ease-in-out',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="me-2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Get Free Consult
      </Link>

      {/* Mobile version */}
      <Link
        href="/contact"
        className="btn btn-primary shadow-lg no-print d-flex d-md-none align-items-center justify-content-center"
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 1000,
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          padding: '0',
          fontWeight: 600,
          animation: 'fadeInUp 0.3s ease-in-out',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </Link>
    </>
  )
}
