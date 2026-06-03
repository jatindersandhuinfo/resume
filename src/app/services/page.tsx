'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import { services } from '@/lib/data';
import { servicesDetailData } from '@/lib/services-detail-data';
import { Search, Grid, LayoutGrid, Terminal, Database, HelpCircle, Briefcase, Zap } from 'lucide-react';

const CATEGORIES = ['All', 'Interface', 'Architecture', 'Intelligence', 'Commerce', 'Automation', 'CMS'];

export default function ServicesIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Match the list of all services with their category tag
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

  // Filter based on search input and selected category
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
    <main className="min-h-screen bg-white dark:bg-[#0b0d0e] text-[#0b0d0e] dark:text-white font-sans antialiased">
      <HeaderNav />

      {/* ── Breadcrumb ── */}
      <div className="border-b border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="mx-auto flex max-w-7xl px-5 py-3 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/35 dark:text-white/35">
            <Link href="/" className="transition hover:text-[#d6ad63]">Home</Link>
            <span aria-hidden="true" className="text-black/20 dark:text-white/20">›</span>
            <span className="text-black/50 dark:text-white/50">Services</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10 py-16 lg:py-24">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[500px] rounded-full bg-[#d6ad63]/5 blur-[120px] dark:bg-[#d6ad63]/[0.02]" />
        
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
          <p className="section-kicker text-center">Service Directory</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-[#0b0d0e] dark:text-white">
            Professional Web Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-black/60 dark:text-white/60">
            From speed-optimized Next.js frontends to secure Laravel backends and autonomous AI agents, we build tailored software solutions optimized for scale.
          </p>
        </div>
      </section>

      {/* ── Filter Controls & Search ── */}
      <section className="py-8 bg-black/[0.01] dark:bg-white/[0.01] border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row gap-6 justify-between items-center">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map(catName => (
              <button
                key={catName}
                type="button"
                onClick={() => setSelectedCategory(catName)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  selectedCategory === catName 
                    ? 'bg-[#d6ad63] text-[#0b0d0e]' 
                    : 'border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1214] text-black/60 dark:text-white/60 hover:border-[#d6ad63]/55'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30" size={16} />
            <input
              type="text"
              placeholder="Search services, tech..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1214] text-sm text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#d6ad63] focus:border-transparent transition"
            />
          </div>

        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-black/10 dark:border-white/10 rounded-xl max-w-lg mx-auto">
              <HelpCircle className="mx-auto text-black/20 dark:text-white/20 mb-4" size={48} />
              <h3 className="text-lg font-bold">No services found</h3>
              <p className="text-sm text-black/50 dark:text-white/50 mt-2">
                Try resetting your filters or search terms.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <article
                  key={service.slug}
                  className="interactive-card group relative min-h-[290px] overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1214] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6ad63]/50 hover:shadow-lg"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Learn more about ${service.label}`}
                  />

                  <p className="absolute -right-2 -top-3 text-[5.75rem] font-black leading-none text-black/[0.06] dark:text-white/[0.05] transition group-hover:text-[#d6ad63]/10">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </p>

                  <div className="relative flex items-start justify-between gap-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-black/10 dark:border-white/10 text-xs font-black text-[#d6ad63]">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40 group-hover:border-[#d6ad63]/50 group-hover:text-[#d6ad63] transition">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-8 text-xl font-bold text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                    {service.label}
                  </h3>
                  
                  <p className="relative mt-4 text-xs text-black/58 dark:text-white/58 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="relative mt-6 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((item) => (
                      <span 
                        key={item} 
                        className="rounded bg-black/[0.04] dark:bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-black/40 dark:text-white/45"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-x-6 bottom-0 h-px bg-black/10 dark:bg-white/10 transition group-hover:bg-[#d6ad63]" />
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="border-t border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] py-16 lg:py-24 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="section-title text-[#0b0d0e] dark:text-white font-black">
            Looking for a customized implementation?
          </h2>
          <p className="mt-5 text-sm text-black/60 dark:text-white/60 max-w-xl mx-auto leading-relaxed">
            Contact me to schedule a brief discovery call. Let&apos;s map out your project details, features, and timeline scopes under a secure contract.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:jatindersandhuinfo@gmail.com?subject=Project Inquiry`}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#d6ad63] px-8 text-xs font-bold uppercase tracking-[0.14em] text-[#0b0d0e] transition duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-transparent hover:border-black/10 dark:hover:border-white/10 shadow-md shadow-[#d6ad63]/10"
            >
              Get a Quote
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-8 text-xs font-bold uppercase tracking-[0.14em] text-black dark:text-white hover:border-[#d6ad63] hover:text-[#d6ad63] transition duration-200"
            >
              Back To Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
