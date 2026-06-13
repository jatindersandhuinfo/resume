'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-data'

interface Props {
  posts: BlogPost[]
  categories: string[]
  fullName: string
}

export default function BlogIndexClient({ posts, categories, fullName }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchCat = activeCategory === 'All' || post.category === activeCategory
      const q = query.toLowerCase()
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [posts, activeCategory, query])

  return (
    <>
      {/* ── Filters bar ── */}
      <div className="border-b border-white/[0.07] bg-studio sticky top-[73px] z-30">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              aria-label="Search blog articles"
              className="w-full rounded-none border border-white/10 bg-surface pl-9 pr-4 py-2 text-xs font-medium text-canvas placeholder-white/25 outline-none focus:border-gold/50 focus:ring-0 transition"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] border transition duration-150 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results count ── */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 pt-8">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
          {activeCategory !== 'All' && <> in <span className="text-gold">{activeCategory}</span></>}
          {query && <> matching &ldquo;<span className="text-white/50">{query}</span>&rdquo;</>}
        </p>
      </div>

      {/* ── Post grid ── */}
      <section className="bg-studio py-8 lg:py-12">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-28 text-center">
              <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
              <p className="text-sm font-semibold text-white/50">No articles found</p>
              <p className="mt-2 text-xs text-white/30">Try a different search or category</p>
              <button
                onClick={() => { setQuery(''); setActiveCategory('All') }}
                className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-px border border-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, index) => {
                const postUrl = `/blog/${post.slug}`
                return (
                  <article
                    key={post.slug}
                    className="group relative flex flex-col justify-between bg-studio p-8 transition duration-300 hover:bg-surface"
                  >
                    {/* Hover accent bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold/50 transition-transform duration-300 origin-left group-hover:scale-x-100" />

                    {/* Index number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 top-6 select-none font-bebas text-6xl leading-none text-white/[0.04] transition duration-300 group-hover:text-gold/[0.07]"
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    <div className="relative">
                      {/* Category + read time */}
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold">
                          {post.category}
                        </span>
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35">
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-base font-bold leading-snug text-canvas transition duration-200 group-hover:text-gold">
                        <Link href={postUrl} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-white/55 line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    {/* Footer row */}
                    <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-white/[0.05] pt-5 text-[0.65rem] font-bold uppercase tracking-[0.12em]">
                      <span className="text-white/40">By {fullName}</span>
                      <span className="text-white/30">
                        {new Date(post.publishDate).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
