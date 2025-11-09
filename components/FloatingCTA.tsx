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
    <Link
      href="/contact"
      className="btn btn-primary shadow-lg no-print"
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
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Get Free Consult
    </Link>
  )
}
