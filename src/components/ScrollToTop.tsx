'use client'

import { useEffect, useState } from 'react'

/**
 * Floating scroll-to-top button.
 * Appears after scrolling 400px. Styled to match portfolio design.
 * Drop anywhere inside the page layout — it renders fixed/floated.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-6 z-40 flex h-10 w-10 items-center justify-center border border-white/15 bg-studio/90 text-white/50 backdrop-blur-sm transition duration-200 hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 sm:right-8"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
