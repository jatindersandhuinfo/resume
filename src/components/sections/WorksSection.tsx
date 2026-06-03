import Link from 'next/link';
import { WorksSectionData } from '@/types/sections';

interface WorksSectionProps {
  section: WorksSectionData;
}

export function WorksSection({ section }: WorksSectionProps) {
  return (
    <section id="works" className="content-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="works-title">
      <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="section-kicker">{section.kicker}</p>
          <h2 id="works-title" className="mt-5 section-title text-[#0b0d0e] dark:text-white">
            {section.title}
          </h2>
        </div>
        <p className="max-w-2xl body-copy text-black/60 dark:text-white/60 lg:pt-10">{section.description}</p>
      </div>

      <div className="border-t border-black/10 dark:border-white/10">
        {section.works.map((project, index) => (
          <Link
            key={project.name}
            href={`/projects/${project.slug}`}
            className="interactive-card group grid gap-4 border-b border-black/10 dark:border-white/10 py-7 transition hover:bg-black/[0.03] dark:hover:bg-white/[0.03] md:grid-cols-[72px_1fr_1.1fr_auto] md:gap-5"
          >
            <p className="text-sm font-black text-black/40 dark:text-white/40">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </p>
            <div>
              <h3 className="subsection-title text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                {project.name}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                <span className="meta-label text-black/40 dark:text-white/40">{project.tech}</span>
                {project.developer && (
                  <>
                    <span className="text-black/20 dark:text-white/20" aria-hidden="true">•</span>
                    <span className="font-semibold text-[#d6ad63]/90 dark:text-[#d6ad63]/80 uppercase tracking-wider text-[10px]">
                      {project.developer === 'Akanksha Baleghate' ? 'Designed by Akanksha' : `Built by ${project.developer.split(' ')[0]}`}
                    </span>
                  </>
                )}
              </div>
            </div>
            <p className="small-copy text-black/58 dark:text-white/58">{project.result}</p>
            <div className="flex shrink-0 flex-col items-end gap-2">
              {project.url ? (
                <span className="button-label text-[#d6ad63]">Live</span>
              ) : (
                <span className="button-label text-black/30 dark:text-white/30">Private</span>
              )}
              <span className="meta-label text-black/40 dark:text-white/35 transition group-hover:text-[#d6ad63]/70">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
