import { ExperienceSectionData } from '@/types/sections';

interface ExperienceSectionProps {
  section: ExperienceSectionData;
}

export function ExperienceSection({ section }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="content-section relative overflow-hidden border-b border-white/[0.07] bg-surface-alt"
      aria-labelledby="experience-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        05
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 border-b border-white/[0.07] pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="experience-title" className="mt-5 section-title text-white">
              {section.title}
            </h2>
            <p className="mt-5 body-copy text-white/50 max-w-sm">{section.description}</p>
          </div>
          {/* Summary stats */}
          <div className="flex shrink-0 gap-10">
            <div>
              <p className="font-bebas text-[3rem] leading-none text-accent">
                {section.yearsExperience}
              </p>
              <p className="mt-1.5 meta-label text-white/40">Experience</p>
            </div>
            <div>
              <p className="font-bebas text-[3rem] leading-none text-accent">
                {section.experience.length}
              </p>
              <p className="mt-1.5 meta-label text-white/40">Companies</p>
            </div>
          </div>
        </div>

        {/* ── Timeline entries ── */}
        <div className="space-y-5">
          {section.experience.map((item, index) => (
            <article
              key={item.company}
              className="interactive-card group grid grid-cols-1 gap-5 md:grid-cols-[180px_1fr]"
            >
              {/* Left: period + number */}
              <div className="flex items-start gap-4 md:flex-col md:gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/[0.1] bg-surface-alt font-black text-sm text-accent transition duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <p className="meta-label text-white/35 md:ml-0">{item.period}</p>
              </div>

              {/* Right: card */}
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-surface p-6 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/25">
                {/* Top row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white transition duration-300 group-hover:text-accent">
                      {item.company}
                    </h3>
                    <p className="mt-1.5 meta-label text-white/35">{item.role}</p>
                  </div>
                  <span className="w-fit rounded-full border border-white/[0.07] px-3 py-1 text-xs font-bold text-white/30">
                    Production
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 small-copy text-white/50 leading-relaxed">{item.description}</p>

                {/* Focus tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {(section.experienceFocus[item.company] ?? ['Development', 'Delivery']).map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs font-bold text-white/30 transition duration-300 group-hover:border-accent/20 group-hover:text-accent/70"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
