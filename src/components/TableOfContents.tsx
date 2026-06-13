'use client'

import { useEffect, useRef, useState } from 'react'

export interface TocItem {
  id: string
  label: string
  level?: 2 | 3
}

interface Props {
  items: TocItem[]
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )

    headingEls.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="not-prose mb-10 border border-white/[0.08] bg-surface p-6"
    >
      <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/35">
        Contents
      </p>
      <ol className="space-y-2" role="list">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`block text-xs leading-snug transition-colors duration-150 ${
                activeId === item.id
                  ? 'font-semibold text-gold'
                  : 'text-white/45 hover:text-white/80'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
