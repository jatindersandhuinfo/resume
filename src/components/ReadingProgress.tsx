'use client'

import { useEffect, useState } from 'react'

/**
 * Thin gold bar fixed at the very top of the viewport.
 * Tracks scroll progress through the article.
 * Usage: drop anywhere inside the blog post <main>.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      setProgress(Math.min(100, (scrollTop / docHeight) * 100))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/[0.04]"
    >
      <div
        className="h-full bg-gold transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
