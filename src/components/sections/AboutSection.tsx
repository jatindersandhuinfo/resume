import { stats } from '@/lib/data';
import { AboutSectionData } from '@/types/sections';

interface TechGroupItem {
  category: string;
  items: string[];
}

interface AboutSectionProps {
  section: AboutSectionData;
  techGroups: TechGroupItem[];
}

export function AboutSection({ section, techGroups }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="content-section relative overflow-hidden border-b border-white/[0.07]"
      aria-labelledby="about-title"
    >
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-bebas text-[20vw] font-normal leading-none text-white/[0.025] select-none"
      >
        01
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* ── Top: header + quick stats ── */}
        <div className="flex flex-col gap-10 border-b border-white/[0.07] pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id="about-title" className="mt-5 section-title text-white">
              {section.title}
            </h2>
          </div>
          {/* Inline stats */}
          <div className="flex shrink-0 flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-bebas text-[2.8rem] leading-none text-accent tracking-wide">
                  {stat.value}
                </p>
                <p className="mt-1.5 meta-label text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bio columns ── */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p className="body-copy-lg text-white/65 leading-relaxed">{section.description}</p>
          <p className="body-copy text-white/50 leading-relaxed">{section.secondaryDescription}</p>
        </div>

        {/* ── Tech stack grid ── */}
        <div className="mt-14">
          <p className="mb-5 meta-label text-white/30">Tech Stack</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {techGroups.map((group) => (
              <div
                key={group.category}
                className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:border-accent/30 hover:bg-accent/[0.04]"
              >
                <p className="text-[0.7rem] font-black uppercase tracking-[0.12em] text-accent/80">
                  {group.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
