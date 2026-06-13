'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  { id: 'chapter-1', label: '01', name: 'Intro' },
  { id: 'chapter-2', label: '02', name: 'Who I Build For' },
  { id: 'chapter-3', label: '03', name: 'Projects' },
  { id: 'chapter-4', label: '04', name: 'Process' },
  { id: 'chapter-5', label: '05', name: 'Philosophy' },
  { id: 'chapter-6', label: '06', name: 'Proof' },
  { id: 'contact', label: '07', name: 'Contact' },
];

export default function CinematicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    CHAPTERS.forEach(({ id }, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveChapter(index); },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToChapter = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-studio/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="h-1.5 w-1.5 rounded-full bg-gold opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="font-bebas text-[1.1rem] tracking-[0.16em] text-white/60 transition-colors group-hover:text-white">
              JS
            </span>
          </Link>

          {/* Chapter indicators — desktop */}
          <nav className="hidden items-center gap-3 lg:flex" aria-label="Chapter navigation">
            {CHAPTERS.map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => scrollToChapter(id)}
                aria-label={`Go to chapter ${label}`}
                className={`relative flex h-9 w-9 items-center justify-center transition-all duration-300 ${
                  activeChapter === index ? 'scale-100' : 'scale-75 opacity-30 hover:scale-90 hover:opacity-60'
                }`}
              >
                <span
                  className={`text-[0.7rem] font-bold tracking-[0.08em] transition-colors ${
                    activeChapter === index ? 'text-gold' : 'text-white'
                  }`}
                >
                  {label}
                </span>
                {activeChapter === index && (
                  <motion.span
                    layoutId="chapter-indicator"
                    className="absolute inset-0 rounded-full border border-gold/40"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden text-xs font-bold tracking-[0.2em] uppercase text-gold transition-opacity hover:opacity-70 lg:block"
            >
              Hire Me →
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <motion.span
                className="block h-px w-5 bg-white/60"
                animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px w-5 bg-white/60"
                animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[61px] z-40 border-b border-white/[0.06] bg-studio/98 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-0 px-6 py-4">
              {CHAPTERS.map(({ id, label, name }) => (
                <button
                  key={id}
                  onClick={() => scrollToChapter(id)}
                  className="flex items-center gap-4 py-3 text-left text-[0.75rem] font-bold tracking-[0.2em] uppercase text-white/40 transition-colors hover:text-white"
                >
                  <span className="w-5 shrink-0 text-gold">{label}</span>
                  <span className="text-white/60">{name}</span>
                  <span className="h-px flex-1 bg-white/[0.05]" />
                </button>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-sm font-bold tracking-[0.14em] uppercase text-gold"
              >
                Hire Me →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
