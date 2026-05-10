import { SectionTitle } from './SectionTitle';
import { SkillBar } from './SkillBar';
import { TechBadge } from './TechBadge';
import { personal, skillBars, techGroups } from '@/lib/data';

export function Sidebar() {
  return (
    <aside
      className="w-full md:w-[260px] shrink-0 flex flex-col gap-7 p-6"
      style={{ background: '#1e1e1e', color: '#c0c0c0', fontSize: '12px', lineHeight: '1.7' }}
      aria-label="Sidebar"
    >
      {/* Brand */}
      <div>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#666]">
          Curriculum Vitae
        </p>
        <h1 className="font-bebas text-[26px] text-white tracking-widest leading-none mt-1">
          Portfolio
          <br />
          Resume
        </h1>
      </div>

      {/* About */}
      <section aria-label="About Me">
        <SectionTitle>About Me</SectionTitle>
        {[
          { key: 'Age', val: String(personal.age) },
          { key: 'Base', val: personal.location },
          { key: 'Status', val: personal.freelanceStatus },
          { key: 'Exp', val: personal.experience },
        ].map(({ key, val }) => (
          <div key={key} className="flex items-baseline gap-2 mb-1.5">
            <span className="font-mono text-[10px] uppercase text-[#666] min-w-[60px]">{key}</span>
            <span className="text-[12px] text-[#ddd]">{val}</span>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section aria-label="Tech Stack">
        <SectionTitle>Tech Stack</SectionTitle>
        {techGroups.map((group) => (
          <div key={group.category} className="mb-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[#999] mb-2">
              {group.category}
            </p>
            {group.badges.length > 0 && (
              <div className="flex gap-1.5 flex-wrap mb-1.5">
                {group.badges.map((b) => (
                  <TechBadge key={b.label} {...b} />
                ))}
              </div>
            )}
            <p className="text-[11px] text-[#999]">{group.items.join(' · ')}</p>
          </div>
        ))}
      </section>

      {/* Skill Bars */}
      <section aria-label="Skill Proficiency">
        <SectionTitle>Proficiency</SectionTitle>
        {skillBars.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </section>

      {/* Side Note */}
      <section className="mt-auto" aria-label="Note">
        <SectionTitle>Note</SectionTitle>
        <p className="text-[11px] text-[#666] italic leading-relaxed">{personal.sideNote}</p>
      </section>
    </aside>
  );
}
