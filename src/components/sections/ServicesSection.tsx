import Link from 'next/link';
import { ServicesSectionData } from '@/types/sections';

interface ServicesSectionProps {
  section: ServicesSectionData;
}

// Bento col-span pattern across 3-column grid (repeating)
const BENTO_PATTERN = [2, 1, 1, 2, 1, 1, 1, 1, 2];

function getBentoSpan(index: number): string {
  return `lg:col-span-${BENTO_PATTERN[index % BENTO_PATTERN.length] ?? 1}`;
}

function isFeatured(index: number): boolean {
  return (BENTO_PATTERN[index % BENTO_PATTERN.length] ?? 1) === 2;
}

export function ServicesSection({ section }: ServicesSectionProps) {
  const visibleServices = section.services.filter((s) => s.showOnHome);

  return (
    <section
      id="services"
      className="content-section relative overflow-hidden border-b border-white/[0.07] bg-[#0d0d0d]"
      aria-labelledby="services-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        02
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="services-title" className="mt-5 section-title text-white">
              {section.title}
            </h2>
          </div>
          <p className="max-w-md body-copy text-white/50">{section.description}</p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => {
            const featured = isFeatured(index);
            const bentoSpan = getBentoSpan(index);

            return (
              <article
                key={service.label}
                className={`interactive-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] transition duration-300 hover:-translate-y-0.5 hover:border-[#f59e0b]/30 hover:bg-[#151515] ${bentoSpan} ${featured ? 'min-h-[200px]' : 'min-h-[160px]'}`}
              >
                {service.slug && (
                  <Link
                    href={`/services/${service.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Learn more about ${service.label}`}
                  />
                )}

                {/* Amber glow on hover — top corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f59e0b]/0 blur-[50px] transition-all duration-500 group-hover:bg-[#f59e0b]/15"
                />

                {/* Decorative large number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-2 font-bebas text-[5.5rem] leading-none text-white/[0.04] transition duration-300 group-hover:text-[#f59e0b]/10 select-none"
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                <div className={`relative flex h-full flex-col p-5 ${featured ? 'lg:p-7' : ''}`}>
                  {/* Top row: number badge + tag */}
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.1] text-xs font-black text-[#f59e0b] transition duration-300 group-hover:border-[#f59e0b]/40">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="rounded-full border border-white/[0.07] px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider text-white/30 transition duration-300 group-hover:border-[#f59e0b]/30 group-hover:text-[#f59e0b]">
                      {section.serviceTags[service.label] ?? 'Web'}
                    </span>
                  </div>

                  {/* Service name */}
                  <h3
                    className={`mt-auto pt-6 font-bold text-white transition duration-300 group-hover:text-[#f59e0b] ${featured ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'}`}
                  >
                    {service.label}
                  </h3>

                  {/* Description — only on featured cards */}
                  {featured && (
                    <p className="mt-2 text-sm text-white/45 line-clamp-2">
                      {section.serviceCopy[service.label] ?? ''}
                    </p>
                  )}

                  {/* Tech stacks */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(section.serviceStacks[service.label] ?? []).slice(0, featured ? 4 : 2).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[0.65rem] font-bold text-white/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Amber bottom line on hover */}
                  <div className="absolute inset-x-5 bottom-0 h-px bg-white/[0.06] transition-all duration-300 group-hover:bg-[#f59e0b]/50" />
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-lg text-sm text-white/40">{section.coreOfferDescription}</p>
          <Link
            href="/services"
            className="shrink-0 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#f59e0b]/30 px-7 text-sm font-black uppercase tracking-[0.12em] text-[#f59e0b] transition duration-200 hover:bg-[#f59e0b] hover:text-[#0a0a0a]"
          >
            All 21 Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
