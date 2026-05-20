'use client';

import { useState } from 'react';
import { contact, personal } from '@/lib/data';

const navItems = [
  { label: 'About Me', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Hire Me', href: '#contact' },
];

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d0e]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#" className="text-lg font-black uppercase tracking-[0.06em]">
          {personal.firstName}
        </a>

        <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.18em] md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-[#d6ad63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-white/18 bg-[#d6ad63] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0b0d0e] transition duration-200 hover:bg-white hover:text-[#0b0d0e] md:inline-flex"
            href={`mailto:${contact.email}`}
          >
            Hire Me
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 text-white transition duration-200 hover:border-[#d6ad63] hover:text-[#d6ad63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63] md:hidden"
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
        <div id="mobile-navigation" className="md:hidden border-t border-white/10 bg-[#0b0d0e] px-5 py-5">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
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
