import Link from 'next/link';
import Image from 'next/image';
import type { TeamSectionData } from '@/types/sections';

interface TeamSectionProps {
  section: TeamSectionData;
}

const categoryColors: Record<string, { bg: string; color: string; border: string }> = {
  Frontend:        { bg: '#61dafb12', color: '#61dafb', border: '#61dafb28' },
  Backend:         { bg: '#68a06312', color: '#68a063', border: '#68a06328' },
  'E-Commerce':    { bg: '#d6ad6312', color: '#d6ad63', border: '#d6ad6328' },
  API:             { bg: '#8892be12', color: '#8892be', border: '#8892be28' },
  CMS:             { bg: '#cc785c12', color: '#e8a88a', border: '#cc785c28' },
  'Design System': { bg: '#a78bfa12', color: '#a78bfa', border: '#a78bfa28' },
  Mobile:          { bg: '#fb923c12', color: '#fb923c', border: '#fb923c28' },
  Architecture:    { bg: '#10a37f12', color: '#10a37f', border: '#10a37f28' },
  DevOps:          { bg: '#f472b612', color: '#f472b6', border: '#f472b628' },
  Database:        { bg: '#facc1512', color: '#facc15', border: '#facc1528' },
};

function getCat(cat: string) {
  return categoryColors[cat] ?? { bg: '#ffffff0c', color: '#aaa', border: '#ffffff20' };
}

export function TeamSection({ section }: TeamSectionProps) {
  return (
    <section
      id="team"
      className="content-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      aria-labelledby="team-title"
    >
      {/* ── Section header ─────────────────────────────────────────── */}
      <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="section-kicker">{section.kicker}</p>
          <h2 id="team-title" className="mt-5 section-title text-[#0b0d0e] dark:text-white">
            {section.title}
          </h2>
        </div>
        <p className="max-w-2xl body-copy text-black/62 dark:text-white/62 lg:pt-10">{section.description}</p>
      </div>

      {/* ── Member cards ───────────────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {section.members.map((member) => {
          // unique categories across all of member's projects
          const categories = [...new Set(member.projects.map((p) => p.category))];

          return (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416] transition duration-300 hover:border-black/22 dark:hover:border-white/22 hover:shadow-2xl hover:shadow-black/40"
              aria-label={`View ${member.name}'s profile and projects`}
            >
              {/* Top glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse 80% 100% at 50% -20%, ${member.avatarColor}18, transparent)`,
                }}
              />

              <div className="relative p-7">
                {/* ── Header row: avatar + social ─────────────── */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  {/* Avatar */}
                  {member.image ? (
                    <div className="relative shrink-0 overflow-hidden rounded-full border border-black/20 dark:border-white/20" style={{ width: 60, height: 60 }}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex shrink-0 items-center justify-center rounded-full font-black"
                      style={{
                        width: 60,
                        height: 60,
                        background: member.avatarBg,
                        border: `1.5px solid ${member.avatarColor}50`,
                        color: member.avatarColor,
                        fontSize: '1.1rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {member.avatar}
                    </div>
                  )}

                  {/* Project count badge */}
                  <span
                    className="mt-1 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.08em]"
                    style={{
                      color: member.avatarColor,
                      background: member.avatarBg,
                      borderColor: `${member.avatarColor}40`,
                    }}
                  >
                    {member.projects.length} Projects
                  </span>
                </div>

                {/* ── Name + role ───────────────────────────── */}
                <h3
                  className="subsection-title text-[#0b0d0e] dark:text-white transition-colors duration-200 group-hover:text-[#d6ad63]"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)' }}
                >
                  {member.name}
                </h3>
                <p
                  className="mt-1.5 text-xs font-bold uppercase tracking-[0.1em]"
                  style={{ color: member.avatarColor }}
                >
                  {member.role}
                </p>

                {/* ── Bio ───────────────────────────────────── */}
                <p className="mt-4 text-sm leading-relaxed text-black/52 dark:text-white/52 line-clamp-3">
                  {member.bio}
                </p>

                {/* ── Skills ────────────────────────────────── */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-black/45 dark:text-white/45"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 4 && (
                    <span className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-black/30 dark:text-white/30">
                      +{member.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* ── Project category chips ─────────────────── */}
                <div className="mt-5 border-t border-black/08 dark:border-white/08 pt-5">
                  <p className="mb-2.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/35">
                    Works in
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => {
                      const c = getCat(cat);
                      return (
                        <span
                          key={cat}
                          className="rounded-full border px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.06em]"
                          style={{ color: c.color, background: c.bg, borderColor: c.border }}
                        >
                          {cat}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* ── CTA arrow ─────────────────────────────── */}
                <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-black/30 dark:text-white/30 transition-colors duration-200 group-hover:text-[#d6ad63]">
                  View Profile & Projects
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
