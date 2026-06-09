'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contact, personal } from '@/lib/data';

const navItems = [
  { label: 'About',      href: '/#about' },
  { label: 'Services',   href: '/#services' },
  { label: 'Works',      href: '/#works' },
  { label: 'Team',       href: '/#team' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog',       href: '/blog' },
];

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlight — track which nav section is in view
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ['about', 'services', 'works', 'team', 'experience', 'skills', 'education', 'faq'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const getHref = (href: string) => {
    if (isHome && href.startsWith('/#')) return href.substring(1);
    return href;
  };

  const isActive = (href: string) => {
    if (href === '/blog') return pathname.startsWith('/blog');
    if (!isHome) return false;
    const hash = href.replace('/#', '');
    return activeSection === hash;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f59e0b] opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          </span>
          <span className="font-bebas text-[1.35rem] tracking-[0.12em] text-white transition-colors duration-200 group-hover:text-[#f59e0b]">
            {personal.firstName[0]}{personal.lastName[0]}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const targetHref = getHref(item.href);
            const isHash = item.href.startsWith('/#');
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={targetHref}
                scroll={isHash ? false : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] ${
                  active
                    ? 'text-[#f59e0b]'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-[#f59e0b]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#f59e0b] transition duration-200 hover:bg-[#f59e0b] hover:text-[#0a0a0a] hover:border-[#f59e0b]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Available · Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-200 hover:border-[#f59e0b]/50 hover:text-[#f59e0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((c) => !c)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
              <path
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.07] bg-[#0a0a0a]/98 backdrop-blur-2xl px-5 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const targetHref = getHref(item.href);
              const isHash = item.href.startsWith('/#');
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={targetHref}
                  scroll={isHash ? false : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] ${
                    active
                      ? 'bg-[#f59e0b]/10 text-[#f59e0b]'
                      : 'text-white/55 hover:bg-white/[0.05] hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#f59e0b] transition hover:bg-[#f59e0b] hover:text-[#0a0a0a]"
              onClick={() => setMenuOpen(false)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Available · Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
