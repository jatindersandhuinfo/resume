'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-studio px-6 text-center">
      <p className="text-xs font-bold tracking-[0.35em] uppercase text-gold">Blog Error</p>
      <h1 className="mt-4 font-bebas text-6xl text-white">Failed to Load Post</h1>
      <p className="mt-4 max-w-md text-sm text-white/50">
        This article couldn&apos;t be loaded. Try refreshing or browse other posts.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-studio transition hover:bg-gold-light"
        >
          Try Again
        </button>
        <Link
          href="/blog"
          className="rounded-full border border-white/[0.12] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/30 hover:text-white"
        >
          All Posts
        </Link>
      </div>
    </main>
  )
}
