import { SkillsSectionData } from '@/types/sections';
import { contact } from '@/lib/data';

interface SkillsSectionProps {
  section: SkillsSectionData;
}

export function SkillsSection({ section }: SkillsSectionProps) {
  const uniqueTechItems = Array.from(new Set(section.techGroups.flatMap((group) => group.items)));

  return (
    <section className="content-section border-y border-white/10 bg-[#0f1214]" aria-labelledby="skills-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
        <div className="rounded-lg border border-white/10 bg-[#15191b] p-6 sm:p-8 lg:rounded-r-none">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-col gap-4">
              <p className="section-kicker">{section.kicker}</p>
              <h2 id="skills-title" className="my-4 max-w-2xl section-title text-white">
                {section.title}
              </h2>
              <p className="max-w-sm small-copy text-[#d0d4d9]">{section.description}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {section.coreStrengths.map((strength) => (
              <article
                key={strength.name}
                className="interactive-card rounded-lg border border-white/10 bg-[#0b0d0e] p-5 transition hover:-translate-y-1 hover:border-[#d6ad63]/60"
              >
                <h3 className="card-title text-white">{strength.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c2c7cc]">{strength.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {uniqueTechItems.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 meta-label text-[#d7d7d7]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div id="contact" className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0d0e] p-6 sm:p-8 lg:rounded-l-none">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d6ad63]/14 blur-3xl" />
          <div className="relative">
            <p className="section-kicker">Hire Me</p>
            <h2 className="mt-4 section-title text-white">
              Have a project that needs a reliable developer?
            </h2>
            <p className="mt-5 body-copy text-white/58">
              Send the scope, reference, or rough idea — wherever you are. I work remotely with clients worldwide and can help shape the flow, build the interface, connect the backend, and ship it cleanly.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6ad63] px-6 button-label text-[#0b0d0e] transition hover:bg-white"
                href={`mailto:${contact.email}`}
              >
                Let&apos;s Talk
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-6 button-label text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-6 button-label text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                href={contact.upwork}
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork Profile
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="meta-label text-white/34">Direct Email</p>
              <a className="mt-2 block break-words text-base font-black text-white transition hover:text-[#d6ad63]" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
