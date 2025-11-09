import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  bullets: string[]
  href: string
  icon: React.ReactNode
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm card-hover-lift" style={{ backgroundColor: 'white' }}>
      <div className="card-body p-4 d-flex flex-column">
        <div className="mb-4">{icon}</div>
        <h3 className="h5 fw-bold mb-3" style={{ color: '#1f2937' }}>{title}</h3>
        <p className="mb-4" style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
          {description}
        </p>
        <div className="mt-auto">
          <Link
            href={href}
            className="text-decoration-none d-inline-flex align-items-center"
            style={{
              color: 'var(--accent)',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Learn more
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ms-1"
              style={{ transition: 'transform 0.2s ease' }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
