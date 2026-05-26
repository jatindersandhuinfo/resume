import { SkillsSectionData } from '@/types/sections';

interface SkillsSectionProps {
  section: SkillsSectionData;
}

export function SkillsSection({ section }: SkillsSectionProps) {
  const uniqueTechItems = Array.from(new Set(section.techGroups.flatMap((group) => group.items)));
  const { hireSection } = section;

  return (
    <section className="content-section border-y border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0f1214]" aria-labelledby="skills-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
        <div className="rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#15191b] p-6 sm:p-8 lg:rounded-r-none">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-col gap-4">
              <p className="section-kicker">{section.kicker}</p>
              <h2 id="skills-title" className="my-4 max-w-2xl section-title text-[#0b0d0e] dark:text-white">
                {section.title}
              </h2>
              <p className="max-w-sm small-copy text-black/58 dark:text-white/58">{section.description}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {section.coreStrengths.map((strength) => (
              <article
                key={strength.name}
                className="interactive-card rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0d0e] p-5 transition hover:-translate-y-1 hover:border-[#d6ad63]/60"
              >
                <h3 className="card-title text-[#0b0d0e] dark:text-white">{strength.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/58 dark:text-white/58">{strength.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {uniqueTechItems.map((item) => (
              <span key={item} className="rounded-full border border-black/10 dark:border-white/10 px-4 py-2 meta-label text-black/40 dark:text-white/40">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hire / Contact panel */}
        <div id="contact" className="relative overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0d0e] p-6 sm:p-8 lg:rounded-l-none">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d6ad63]/20 blur-3xl" />
          <div className="relative">
            <p className="section-kicker">Hire Me</p>
            {/* h3 — inside the skills section which already has an h2 above */}
            <h3 className="mt-4 section-title text-[#0b0d0e] dark:text-white">
              {hireSection.title}
            </h3>
            <p className="mt-5 body-copy text-black/58 dark:text-white/58">
              {hireSection.description}
            </p>

            <div className="mt-8 grid gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6ad63] px-6 button-label text-[#0b0d0e] transition hover:bg-white"
                href={`mailto:${hireSection.email}`}
              >
                Let&apos;s Talk
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 button-label text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                href={hireSection.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 button-label text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                href={hireSection.upwork}
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork Profile
              </a>
              {hireSection.fiverr ? (
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 button-label text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                  href={hireSection.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fiverr Profile
                </a>
              ) : null}
              {hireSection.freelancer ? (
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 button-label text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                  href={hireSection.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freelancer Profile
                </a>
              ) : null}
            </div>

            <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-6">
              <p className="meta-label text-black/40 dark:text-white/40">Direct Email</p>
              <a className="mt-2 block break-words text-base font-black text-[#0b0d0e] dark:text-white transition hover:text-[#d6ad63]" href={`mailto:${hireSection.email}`}>
                {hireSection.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
