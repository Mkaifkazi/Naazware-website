import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  client: string
  industry: string
  excerpt: string
  href: string
  metrics?: { label: string; value: string }[]
}

export default function CaseStudyCard({
  title,
  client,
  industry,
  excerpt,
  href,
  metrics,
}: CaseStudyCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm card-hover-lift">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <span
            className="badge px-3 py-2"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: 'var(--radius-full)',
            }}
          >
            {industry}
          </span>
        </div>
        <h3 className="h5 fw-bold mb-2">{title}</h3>
        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
          {client}
        </p>
        <p className="text-secondary mb-4">{excerpt}</p>

        {metrics && metrics.length > 0 && (
          <div className="row g-3 mb-4">
            {metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="col-6">
                <div className="text-center p-3 surface" style={{ borderRadius: 'var(--radius-sm)' }}>
                  <div className="fw-bold fs-5" style={{ color: 'var(--accent)' }}>
                    {metric.value}
                  </div>
                  <div className="text-muted small">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="text-decoration-none d-inline-flex align-items-center"
          style={{
            color: 'var(--accent)',
            fontWeight: '600',
            fontSize: '0.95rem'
          }}
        >
          Read case study
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="ms-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
