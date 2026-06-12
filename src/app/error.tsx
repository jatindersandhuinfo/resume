'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
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
      <p className="text-xs font-bold tracking-[0.35em] uppercase text-gold">Something went wrong</p>
      <h1 className="mt-4 font-bebas text-6xl text-white">Unexpected Error</h1>
      <p className="mt-4 max-w-md text-sm text-white/50">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-studio transition hover:bg-gold-light"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/[0.12] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/30 hover:text-white"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
