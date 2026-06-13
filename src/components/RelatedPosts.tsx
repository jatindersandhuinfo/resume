import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-data'

interface Props {
  posts: BlogPost[]
}

/**
 * Shows up to 3 related posts at the end of a blog article.
 * Pass the result of getRelatedPosts(slug) from blog-data.ts.
 */
export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null

  return (
    <aside aria-label="Related articles" className="mt-16 border-t border-white/[0.08] pt-12">
      <p className="mb-8 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/35">
        Related Articles
      </p>

      <div className="grid gap-px border border-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col bg-studio p-6 transition duration-300 hover:bg-surface"
          >
            <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold/40 transition-transform duration-300 origin-left group-hover:scale-x-100" />

            <span className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-gold">
              {post.category}
            </span>

            <h3 className="text-sm font-bold leading-snug text-canvas transition duration-200 group-hover:text-gold line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {post.title}
              </Link>
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-white/45 line-clamp-2">
              {post.description}
            </p>

            <div className="mt-5 flex items-center justify-between text-[0.6rem] font-bold uppercase tracking-[0.12em]">
              <span className="text-white/30">{post.readTime}</span>
              <span className="text-white/25">
                {new Date(post.publishDate).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                })}
              </span>
            </div>
          </article>
        ))}
      </div>
    </aside>
  )
}
