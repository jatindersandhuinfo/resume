import Link from 'next/link';
import Image from 'next/image';
import type { TeamSectionData } from '@/types/sections';

interface TeamSectionProps {
  section: TeamSectionData;
}

const categoryColors: Record<string, { bg: string; color: string; border: string }> = {
  Frontend:        { bg: '#61dafb12', color: '#61dafb', border: '#61dafb28' },
  Backend:         { bg: '#68a06312', color: '#68a063', border: '#68a06328' },
  'E-Commerce':    { bg: '#f59e0b12', color: '#f59e0b', border: '#f59e0b28' },
  API:             { bg: '#8892be12', color: '#8892be', border: '#8892be28' },
  CMS:             { bg: '#cc785c12', color: '#f97316', border: '#cc785c28' },
  'Design System': { bg: '#a78bfa12', color: '#a78bfa', border: '#a78bfa28' },
  Mobile:          { bg: '#fb923c12', color: '#fb923c', border: '#fb923c28' },
  Architecture:    { bg: '#10a37f12', color: '#10a37f', border: '#10a37f28' },
  DevOps:          { bg: '#f472b612', color: '#f472b6', border: '#f472b628' },
  Database:        { bg: '#facc1512', color: '#facc15', border: '#facc1528' },
};

function getCat(cat: string) {
  return categoryColors[cat] ?? { bg: '#f59e0b12', color: '#f59e0b', border: '#f59e0b28' };
}

export function TeamSection({ section }: TeamSectionProps) {
  return (
    <section
      id="team"
      className="content-section relative overflow-hidden border-b border-white/[0.07] bg-[#0d0d0d]"
      aria-labelledby="team-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        04
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="team-title" className="mt-5 section-title text-white">
              {section.title}
            </h2>
          </div>
          <p className="max-w-md body-copy text-white/50">{section.description}</p>
        </div>

        {/* ── Member cards ── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.members.map((member) => {
            const categories = [...new Set(member.projects.map((p) => p.category))];

            return (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] transition duration-300 hover:border-[#f59e0b]/25 hover:shadow-xl hover:shadow-black/40"
                aria-label={`View ${member.name}'s profile and projects`}
              >
                {/* Top amber glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse 80% 100% at 50% -20%, #f59e0b18, transparent)`,
                  }}
                />

                <div className="relative p-7">
                  {/* Avatar row */}
                  <div className="mb-6 flex items-start justify-between gap-4">
                    {member.image ? (
                      <div
                        className="relative shrink-0 overflow-hidden rounded-full border border-white/15"
                        style={{ width: 56, height: 56 }}
                      >
                        <Image src={member.image} alt={member.name} fill sizes="56px" className="object-cover" />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex shrink-0 items-center justify-center rounded-full font-black"
                        style={{
                          width: 56,
                          height: 56,
                          background: member.avatarBg,
                          border: `1.5px solid ${member.avatarColor}50`,
                          color: member.avatarColor,
                          fontSize: '1rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {member.avatar}
                      </div>
                    )}
                    <span
                      className="mt-1 rounded-full border px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.08em]"
                      style={{
                        color: member.avatarColor,
                        background: member.avatarBg,
                        borderColor: `${member.avatarColor}40`,
                      }}
                    >
                      {member.projects.length} Projects
                    </span>
                  </div>

                  {/* Name + role */}
                  <h3
                    className="font-bold text-white transition-colors duration-200 group-hover:text-[#f59e0b]"
                    style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="mt-1.5 text-xs font-bold uppercase tracking-[0.1em]"
                    style={{ color: member.avatarColor }}
                  >
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="mt-4 text-sm leading-relaxed text-white/40 line-clamp-2">{member.bio}</p>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.06em] text-white/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[0.65rem] font-bold text-white/20">
                        +{member.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Category chips */}
                  <div className="mt-5 border-t border-white/[0.07] pt-5">
                    <p className="mb-2.5 text-[0.6rem] font-black uppercase tracking-[0.1em] text-white/25">Works in</p>
                    <div className="flex flex-wrap gap-1.5">
                      {categories.map((cat) => {
                        const c = getCat(cat);
                        return (
                          <span
                            key={cat}
                            className="rounded-full border px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.06em]"
                            style={{ color: c.color, background: c.bg, borderColor: c.border }}
                          >
                            {cat}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.12em] text-white/25 transition-colors duration-200 group-hover:text-[#f59e0b]">
                    View Profile & Projects
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
