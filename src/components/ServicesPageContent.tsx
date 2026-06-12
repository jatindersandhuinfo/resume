'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import { services } from '@/lib/data';
import { servicesDetailData } from '@/lib/services-detail-data';
import { Search, HelpCircle } from 'lucide-react';

const CATEGORIES = ['All', 'Interface', 'Architecture', 'Intelligence', 'Commerce', 'Automation', 'CMS'];

export default function ServicesPageContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allServices = useMemo(() => {
    return services.map(s => {
      const detail = servicesDetailData[s.slug || ''];
      return {
        ...s,
        tag: detail?.tag || 'Web',
        technologies: detail?.technologies.map(t => t.name) || [],
      };
    });
  }, []);

  const filteredServices = useMemo(() => {
    return allServices.filter(s => {
      const matchesSearch =
        s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || s.tag === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allServices, searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-studio text-canvas font-sans antialiased pt-[73px]">
      <HeaderNav />

      {/* ── Breadcrumb ── */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <span className="text-white/55">Services</span>
          </nav>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 transition hover:text-gold"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-studio py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[700px] rounded-full bg-gold/[0.05] blur-[120px]"
        />
        <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
          <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Section</p>
          <p className="chapter-number-bg leading-none">01</p>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 text-center sm:px-10 lg:px-14">
          <p className="chapter-label mb-8 justify-center">Service Directory</p>
          <h1 className="display-lg text-canvas">
            PROFESSIONAL<br />
            <span className="text-gold">WEB SERVICES</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/55">
            From speed-optimized Next.js frontends to secure Laravel backends and
            autonomous AI agents, I build tailored software solutions optimized for scale.
          </p>
        </div>
      </section>

      {/* ── Filter Controls & Search ── */}
      <div className="sticky top-[73px] z-30 border-b border-white/[0.07] bg-studio/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(catName => (
              <button
                key={catName}
                type="button"
                onClick={() => setSelectedCategory(catName)}
                className={`rounded-full px-4 py-2 text-[0.7rem] font-black uppercase tracking-wider transition duration-200 ${
                  selectedCategory === catName
                    ? 'bg-gold text-deep'
                    : 'border border-white/[0.1] text-white/50 hover:border-gold/40 hover:text-gold'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={14} />
            <input
              type="text"
              placeholder="Search services, tech..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/[0.1] bg-white/[0.04] py-2.5 pl-9 pr-4 text-sm text-white placeholder-white/30 transition focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
            />
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {filteredServices.length === 0 ? (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-white/[0.1] py-16 text-center">
              <HelpCircle className="mx-auto mb-4 text-white/20" size={40} />
              <h3 className="text-base font-bold text-white">No services found</h3>
              <p className="mt-2 text-sm text-white/40">Try resetting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <article
                  key={service.slug}
                  className="interactive-card group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-surface-dark"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Learn more about ${service.label}`}
                  />

                  {/* Amber glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-gold/0 blur-[40px] transition-all duration-500 group-hover:bg-gold/12"
                  />

                  {/* Decorative number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-2 select-none font-bebas text-[5rem] leading-none text-white/[0.04] transition duration-300 group-hover:text-gold/08"
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Top row */}
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.1] text-xs font-black text-gold transition duration-300 group-hover:border-gold/50">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="rounded-full border border-white/[0.07] px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider text-white/30 transition duration-300 group-hover:border-gold/30 group-hover:text-gold">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service name */}
                  <h2 className="relative mt-8 text-lg font-bold text-white transition duration-300 group-hover:text-gold">
                    {service.label}
                  </h2>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-relaxed text-white/45 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tech tags */}
                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map(item => (
                      <span key={item} className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[0.62rem] font-bold text-white/30">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Bottom amber line */}
                  <div className="absolute inset-x-6 bottom-0 h-px bg-white/[0.06] transition-all duration-300 group-hover:bg-gold/50" />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.12] py-28 text-center lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8 justify-center">Let&apos;s Build Together</p>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,7rem)] leading-[0.9] uppercase text-canvas">
            LOOKING FOR A<br />
            <span className="text-gold">CUSTOM BUILD?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            Contact me to schedule a brief discovery call. Let&apos;s map out your project details,
            features, and timeline under a secure contract.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="mailto:jatindersandhuinfo@gmail.com?subject=Project Inquiry"
              className="inline-flex min-h-[50px] items-center justify-center bg-gold px-10 text-xs font-bold uppercase tracking-[0.22em] text-studio transition duration-200 hover:bg-gold-light"
            >
              Get a Quote →
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[50px] items-center justify-center border border-white/20 px-10 text-xs font-bold uppercase tracking-[0.22em] text-canvas transition duration-200 hover:border-gold/60 hover:text-gold"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
