'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contact, personal } from '@/lib/data';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { label: 'About Me', href: '/#about' },
  { label: 'What I Do', href: '/#services' },
  { label: 'Works', href: '/#works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Hire Me', href: '/#contact' },
];

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const getHref = (href: string) => {
    if (isHome && href.startsWith('/#')) {
      return href.substring(1);
    }
    return href;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 bg-white/95 text-[#0b0d0e] dark:bg-[#0b0d0e]/95 dark:text-white backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#0b0d0e]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#" className="text-lg font-black uppercase tracking-[0.06em] text-[#0b0d0e] dark:text-white">
          {personal.firstName}
        </a>

        <nav className="hidden items-center gap-5 text-sm uppercase tracking-[0.14em] text-black/80 dark:text-white/80 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const className = "rounded-full px-1 py-1.5 transition-colors duration-200 hover:text-[#d6ad63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63]";
            const targetHref = getHref(item.href);
            const isHash = item.href.startsWith('#') || item.href.startsWith('/#');

            return (
              <Link
                key={item.href}
                href={targetHref}
                className={className}
                scroll={isHash ? false : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            className="hidden rounded-full border border-black/20 dark:border-white/20 bg-[#d6ad63] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0b0d0e] transition duration-200 hover:bg-white hover:text-[#0b0d0e] dark:hover:bg-[#f0d49a] lg:inline-flex"
            href={`mailto:${contact.email}`}
          >
            Hire Me
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 dark:border-white/20 text-[#0b0d0e] dark:text-white transition duration-200 hover:border-[#d6ad63] hover:text-[#d6ad63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((current) => !current)}
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

      {menuOpen ? (
        <div id="mobile-navigation" className="lg:hidden border-t border-black/10 dark:border-white/10 bg-white text-[#0b0d0e] dark:bg-[#0b0d0e] dark:text-white px-5 py-5">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const className = "rounded-2xl px-4 py-3 text-sm font-semibold text-[#0b0d0e] dark:text-white transition duration-200 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63]";
              const onClick = () => setMenuOpen(false);
              const targetHref = getHref(item.href);
              const isHash = item.href.startsWith('#') || item.href.startsWith('/#');

              return (
                <Link
                  key={item.href}
                  href={targetHref}
                  className={className}
                  onClick={onClick}
                  scroll={isHash ? false : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${contact.email}`}
              className="rounded-2xl bg-[#d6ad63] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0b0d0e] transition duration-200 hover:bg-white"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
