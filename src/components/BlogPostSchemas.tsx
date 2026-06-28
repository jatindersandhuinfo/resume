import { seo } from '@/lib/data'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

interface Props {
  title: string
  description: string
  url: string
  publishDate: string
  modifiedDate: string
  authorName: string
  authorUrl: string
  /** Words in the article body — used for wordCount in schema */
  wordCount?: number
  /** Article section / category */
  articleSection?: string
  /** Comma-separated keyword string */
  keywords?: string
}

/**
 * Renders Article + BreadcrumbList JSON-LD for blog posts.
 * Drop this inside <main> before <HeaderNav> on every blog page.
 */
export default function BlogPostSchemas({
  title,
  description,
  url,
  publishDate,
  modifiedDate,
  authorName,
  authorUrl,
  wordCount,
  articleSection,
  keywords,
}: Props) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished: publishDate,
    dateModified: modifiedDate,
    image: {
      '@type': 'ImageObject',
      url: seo.ogImage,
      width: 960,
      height: 1200,
    },
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(wordCount ? { wordCount } : {}),
    ...(articleSection ? { articleSection } : {}),
    ...(keywords ? { keywords } : {}),
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: seo.siteUrl },
    { name: 'Blog', url: `${seo.siteUrl}/blog` },
    { name: title, url },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/<\/script>/gi, '<\\/script>') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/<\/script>/gi, '<\\/script>') }}
      />
    </>
  )
}
