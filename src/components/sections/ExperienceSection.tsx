import { ExperienceSectionData } from '@/types/sections';

interface ExperienceSectionProps {
  section: ExperienceSectionData;
}

export function ExperienceSection({ section }: ExperienceSectionProps) {
  return (
    <section className="content-section border-y border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416]" aria-labelledby="experience-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">{section.kicker}</p>
          <h2 id="experience-title" className="mt-5 section-title text-[#0b0d0e] dark:text-white">
            {section.title}
          </h2>
          <p className="mt-5 body-copy text-black/60 dark:text-white/60">{section.description}</p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
            <div className="bg-white dark:bg-[#0b0d0e] p-5">
              <p className="card-title text-[#d6ad63]">{section.yearsExperience}</p>
              <p className="mt-2 meta-label text-black/40 dark:text-white/40">Experience</p>
            </div>
            <div className="bg-white dark:bg-[#0b0d0e] p-5">
              <p className="card-title text-[#d6ad63]">{section.experience.length}</p>
              <p className="mt-2 meta-label text-black/40 dark:text-white/40">Companies</p>
            </div>
          </div>
        </div>
        <div className="relative space-y-6 before:absolute before:left-[21px] before:top-5 before:h-[calc(100%-40px)] before:w-px before:bg-black/10 dark:before:bg-white/10">
          {section.experience.map((item, index) => (
            <article key={item.company} className="group relative grid gap-5 pl-14 md:grid-cols-[150px_1fr]">
              <div className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416] text-sm font-black text-[#d6ad63] transition group-hover:border-[#d6ad63]">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <div>
                <p className="rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-center meta-label text-black/40 dark:text-white/40">
                  {item.period}
                </p>
              </div>
              <div className="interactive-card rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0d0e] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#d6ad63]/50">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="card-title text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                      {item.company}
                    </h3>
                    <p className="mt-2 meta-label text-black/40 dark:text-white/40">{item.role}</p>
                  </div>
                  <span className="w-fit rounded-full bg-black/[0.05] dark:bg-white/[0.05] px-3 py-1 text-xs font-bold text-black/40 dark:text-white/40">
                    Production
                  </span>
                </div>
                <p className="mt-5 small-copy text-black/60 dark:text-white/60">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(section.experienceFocus[item.company] ?? ['Development', 'Delivery']).map((focus) => (
                    <span key={focus} className="rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-bold text-black/40 dark:text-white/40">
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
