'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const HASH_TARGETS = new Set([
  'about', 'services', 'works', 'team', 'experience', 'skills', 'education', 'faq', 'contact',
  'chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5', 'chapter-6', 'chapter-7',
])
const NAV_OFFSET = -110

/**
 * Scroll to a hash target using Lenis.
 * Polls until the element is stable in the DOM (Next.js renders async).
 */
function scrollToHash(lenis: Lenis, hash: string) {
  if (!hash || !HASH_TARGETS.has(hash)) return

  let attempts = 0
  let lastTop: number | null = null
  let stableFrames = 0

  const poll = setInterval(() => {
    attempts++
    const el = document.getElementById(hash)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top === lastTop) {
        stableFrames++
      } else {
        stableFrames = 0
        lastTop = top
      }
      // Scroll once layout is stable for 3 consecutive checks (~150ms)
      if (stableFrames >= 3 || attempts > 35) {
        clearInterval(poll)
        lenis.scrollTo(el, { offset: NAV_OFFSET, immediate: false })
      }
    }
    if (attempts > 50) clearInterval(poll)
  }, 50)
}

function parseHash(raw: string): string {
  // Guard against double hashes like /#about#extra
  return raw.replace(/^#/, '').split('#')[0] ?? ''
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    // RAF loop
    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Handle hash on initial load
    const initialHash = parseHash(window.location.hash)
    if (initialHash) scrollToHash(lenis, initialHash)

    // Handle hash changes (Back/Forward, <Link href="/#section">, manual URL edits)
    const onHashChange = () => {
      const hash = parseHash(window.location.hash)
      scrollToHash(lenis, hash)
    }
    window.addEventListener('hashchange', onHashChange)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return <>{children}</>
}
