import { SkillsSectionData } from '@/types/sections';

interface SkillsSectionProps {
  section: SkillsSectionData;
}

export function SkillsSection({ section }: SkillsSectionProps) {
  const uniqueTechItems = Array.from(new Set(section.techGroups.flatMap((g) => g.items)));
  const { hireSection } = section;

  return (
    <section
      id="skills"
      className="content-section relative overflow-hidden border-b border-white/[0.07]"
      aria-labelledby="skills-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        06
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">

          {/* ── Left: Skills panel ── */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <p className="section-kicker">{section.kicker}</p>
              <h2 id="skills-title" className="mt-5 section-title text-white">
                {section.title}
              </h2>
              <p className="mt-4 body-copy text-white/50 max-w-sm">{section.description}</p>
            </div>

            {/* Core strengths */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {section.coreStrengths.map((s) => (
                <article
                  key={s.name}
                  className="interactive-card rounded-xl border border-white/[0.08] bg-surface-alt p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/25"
                >
                  <h3 className="text-sm font-black text-white">{s.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/45">{s.detail}</p>
                </article>
              ))}
            </div>

            {/* Tech tag cloud */}
            <div className="flex flex-wrap gap-2">
              {uniqueTechItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-1.5 text-xs font-bold text-white/35 transition hover:border-accent/30 hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Hire CTA panel ── */}
          <div
            id="contact"
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-alt p-7 sm:p-9 lg:p-10"
          >
            {/* Amber glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent/15 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/08 blur-[60px]"
            />

            <div className="relative flex h-full flex-col">
              <p className="section-kicker">Hire Me</p>
              <h3 className="mt-4 text-2xl font-bold leading-snug text-white lg:text-3xl">
                {hireSection.title}
              </h3>
              <p className="mt-5 body-copy text-white/50 flex-1">{hireSection.description}</p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${hireSection.email}`}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-accent px-6 text-sm font-black uppercase tracking-[0.12em] text-deep transition duration-200 hover:bg-accent-light"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href={hireSection.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-200 hover:border-accent/50 hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href={hireSection.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-200 hover:border-accent/50 hover:text-accent"
                >
                  Upwork Profile
                </a>
                {hireSection.fiverr && (
                  <a
                    href={hireSection.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-200 hover:border-accent/50 hover:text-accent"
                  >
                    Fiverr Profile
                  </a>
                )}
                {hireSection.freelancer && (
                  <a
                    href={hireSection.freelancer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-200 hover:border-accent/50 hover:text-accent"
                  >
                    Freelancer Profile
                  </a>
                )}
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <p className="meta-label text-white/30">Direct Email</p>
                <a
                  href={`mailto:${hireSection.email}`}
                  className="mt-2 block break-all text-base font-black text-white transition hover:text-accent"
                >
                  {hireSection.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
