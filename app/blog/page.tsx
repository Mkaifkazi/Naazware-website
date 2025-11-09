import { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/blog-posts-data'
import { generateMetadata as genMeta } from '@/lib/seo'
import DecorativeShapes from '@/components/DecorativeShapes'
import WhiteAnimatedShapes from '@/components/WhiteAnimatedShapes'
import '@/styles/white-section-animated.css'

export const metadata: Metadata = genMeta({
  title: 'Blog',
  description:
    'Engineering insights, performance optimizations, and practical guides for building better software.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <>
      {/* Hero */}
      <section className="section-padding white-section-animated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <WhiteAnimatedShapes />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Blog</h1>
              <p className="lead text-secondary">
                Engineering insights and practical guides , no fluff, just useful information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding position-relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <DecorativeShapes variant="1" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.slug} className="col-lg-6">
                <article className="card h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <time className="text-muted small" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="text-muted small">{post.readTime} read</span>
                    </div>
                    <h2 className="h4 fw-bold mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-decoration-none"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-secondary mb-3">{post.excerpt}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge bg-secondary"
                          style={{ borderRadius: 'var(--radius-full)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-decoration-none fw-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
