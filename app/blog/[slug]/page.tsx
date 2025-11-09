import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog-posts-data'
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const revalidate = 3600 // ISR: revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return genMeta({ title: 'Post Not Found' })
  }

  return genMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">{post.title}</h1>
              <div className="d-flex flex-wrap gap-3 align-items-center text-muted mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime} read</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge px-3 py-2"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article
                className="prose"
                style={{ lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map((line) => {
                      // Convert markdown to HTML (basic)
                      if (line.startsWith('# ')) {
                        return `<h2 class="h3 fw-bold mb-4 mt-5">${line.substring(2)}</h2>`
                      } else if (line.startsWith('## ')) {
                        return `<h3 class="h4 fw-bold mb-3 mt-4">${line.substring(3)}</h3>`
                      } else if (line.startsWith('- ')) {
                        return `<li class="mb-2">${line.substring(2)}</li>`
                      } else if (line.trim() === '') {
                        return '<br/>'
                      } else {
                        return `<p class="text-secondary mb-3">${line}</p>`
                      }
                    })
                    .join(''),
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h3 fw-bold mb-4">Need help with your project?</h2>
              <p className="lead text-secondary mb-4">
                We can help you build software that performs like the examples in this post.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link href="/contact" className="btn btn-primary">
                  Get in touch
                </Link>
                <Link href="/blog" className="btn btn-outline-primary">
                  Read more articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
