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
    <section id="about" className="content-section mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-28" aria-labelledby="about-title">
      <div>
        <p className="section-kicker">{section.kicker}</p>
        <h2 id="about-title" className="mt-5 section-title text-white">
          {section.title}
        </h2>
      </div>
      <div className="space-y-6 body-copy text-white/66">
        <p>{section.description}</p>
        <p>
          {section.secondaryDescription}
        </p>
        <div className="grid gap-3 pt-3 sm:grid-cols-2">
          {techGroups.map((group) => (
            <div key={group.category} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-base font-black text-white">{group.category}</h3>
              <p className="mt-3 small-copy text-[#d7d7d7]">{group.items.join(' / ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

