import Link from 'next/link';
import { WorksSectionData } from '@/types/sections';

interface WorksSectionProps {
  section: WorksSectionData;
}

export function WorksSection({ section }: WorksSectionProps) {
  const [featured, ...rest] = section.works;

  return (
    <section
      id="works"
      className="content-section relative overflow-hidden border-b border-white/[0.07]"
      aria-labelledby="works-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        03
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="works-title" className="mt-5 section-title text-white">
              {section.title}
            </h2>
          </div>
          <p className="max-w-md body-copy text-white/50">{section.description}</p>
        </div>

        {/* ── Featured project ── */}
        {featured && (
          <Link
            href={`/projects/${featured.slug}`}
            className="interactive-card group mb-3 flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] transition duration-300 hover:border-[#f59e0b]/30 lg:flex-row"
          >
            {/* Left info */}
            <div className="flex flex-1 flex-col justify-between gap-6 p-7 lg:p-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-[#f59e0b]">
                  Featured
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white transition duration-300 group-hover:text-[#f59e0b] lg:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 meta-label text-white/35">{featured.tech}</p>
              </div>
              <p className="body-copy text-white/55 max-w-lg">{featured.result}</p>
              <div className="flex items-center justify-between">
                {featured.url ? (
                  <span className="meta-label text-[#f59e0b]">Live →</span>
                ) : (
                  <span className="meta-label text-white/25">Private</span>
                )}
                <span className="meta-label text-white/30 transition duration-300 group-hover:text-[#f59e0b]">
                  View Details →
                </span>
              </div>
            </div>
            {/* Right number accent */}
            <div className="flex items-center justify-center border-t border-white/[0.07] px-10 py-8 lg:border-l lg:border-t-0">
              <span className="font-bebas text-[6rem] leading-none text-white/[0.06] transition duration-300 group-hover:text-[#f59e0b]/20">
                01
              </span>
            </div>
          </Link>
        )}

        {/* ── Rest of projects ── */}
        <div className="border-t border-white/[0.07]">
          {rest.map((project, index) => (
            <Link
              key={project.name}
              href={`/projects/${project.slug}`}
              className="interactive-card group grid gap-4 border-b border-white/[0.07] py-6 transition duration-300 hover:bg-white/[0.02] md:grid-cols-[56px_1fr_1fr_auto] md:items-center md:gap-6"
            >
              {/* Number */}
              <p className="font-bebas text-3xl leading-none text-white/[0.1] transition duration-300 group-hover:text-[#f59e0b]/40">
                {index + 2 < 10 ? `0${index + 2}` : index + 2}
              </p>

              {/* Name + tech */}
              <div>
                <h3 className="text-base font-bold text-white transition duration-300 group-hover:text-[#f59e0b] lg:text-lg">
                  {project.name}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
                  <span className="meta-label text-white/30">{project.tech}</span>
                  {project.developer && (
                    <>
                      <span className="text-white/20" aria-hidden="true">·</span>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#f59e0b]/60">
                        {project.developer === 'Akanksha Baleghate'
                          ? 'Design: Akanksha'
                          : `Dev: ${project.developer.split(' ')[0]}`}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Result */}
              <p className="small-copy text-white/45 line-clamp-2">{project.result}</p>

              {/* Status */}
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                {project.url ? (
                  <span className="meta-label text-[#f59e0b]">Live</span>
                ) : (
                  <span className="meta-label text-white/20">Private</span>
                )}
                <span className="meta-label text-white/25 transition duration-300 group-hover:text-[#f59e0b]">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
