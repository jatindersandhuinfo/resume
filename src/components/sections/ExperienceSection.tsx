import { ExperienceSectionData } from '@/types/sections';
import { personal } from '@/lib/data';

interface ExperienceSectionProps {
  section: ExperienceSectionData;
}

export function ExperienceSection({ section }: ExperienceSectionProps) {
  return (
    <section className="content-section border-y border-white/10 bg-[#111416]" aria-labelledby="experience-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">{section.kicker}</p>
          <h2 id="experience-title" className="mt-5 section-title text-white">
            {section.title}
          </h2>
          <p className="mt-5 body-copy text-[#e6e6e6]">{section.description}</p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <div className="bg-[#0b0d0e] p-5">
              <p className="card-title text-[#d6ad63]">{personal.experience}</p>
              <p className="mt-2 meta-label text-white/38">Experience</p>
            </div>
            <div className="bg-[#0b0d0e] p-5">
              <p className="card-title text-[#d6ad63]">{section.experience.length}</p>
              <p className="mt-2 meta-label text-white/38">Companies</p>
            </div>
          </div>
        </div>
        <div className="relative space-y-6 before:absolute before:left-[21px] before:top-5 before:h-[calc(100%-40px)] before:w-px before:bg-white/10">
          {section.experience.map((item, index) => (
            <article key={item.company} className="group relative grid gap-5 pl-14 md:grid-cols-[150px_1fr]">
              <div className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#111416] text-sm font-black text-[#d6ad63] transition group-hover:border-[#d6ad63]">
                0{index + 1}
              </div>
              <div>
                <p className="rounded-full border border-white/10 px-4 py-2 text-center meta-label text-[#c7c7c7]">
                  {item.period}
                </p>
              </div>
              <div className="interactive-card rounded-lg border border-white/10 bg-[#0b0d0e] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#d6ad63]/55">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="card-title text-white transition group-hover:text-[#d6ad63]">
                      {item.company}
                    </h3>
                    <p className="mt-2 meta-label text-[#bfc4c9]">{item.role}</p>
                  </div>
                  <span className="w-fit rounded-full bg-white/[0.05] px-3 py-1 text-xs font-bold text-[#d7d7d7]">
                    Production
                  </span>
                </div>
                <p className="mt-5 small-copy text-white/60">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(section.experienceFocus[item.company] ?? ['Development', 'Delivery']).map((focus) => (
                    <span key={focus} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-[#d7d7d7]">
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
