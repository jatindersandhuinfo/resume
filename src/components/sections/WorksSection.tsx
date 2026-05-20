import { WorksSectionData } from '@/types/sections';

interface WorksSectionProps {
  section: WorksSectionData;
}

export function WorksSection({ section }: WorksSectionProps) {
  return (
    <section id="works" className="content-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="works-title">
      <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="section-kicker">{section.kicker}</p>
          <h2 id="works-title" className="mt-5 section-title text-white">
            {section.title}
          </h2>
        </div>
        <p className="max-w-2xl body-copy text-white/62 lg:pt-10">{section.description}</p>
      </div>

      <div className="border-t border-white/10">
        {section.works.map((project, index) => {
          const Wrapper = project.url ? 'a' : 'article';
          const props = project.url
            ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <Wrapper
              key={project.name}
              className="interactive-card group grid gap-4 border-b border-white/10 py-7 transition hover:bg-white/[0.03] md:grid-cols-[72px_1fr_1.1fr_auto] md:gap-5"
              {...props}
            >
              <p className="text-sm font-black text-white/32">0{index + 1}</p>
              <div>
                <h3 className="subsection-title text-white transition group-hover:text-[#d6ad63]">
                  {project.name}
                </h3>
                <p className="mt-2 meta-label text-[#c7c7c7]">{project.tech}</p>
              </div>
              <p className="small-copy text-white/58">{project.result}</p>
              <p className="button-label shrink-0 text-[#d6ad63]">
                {project.url ? 'Live' : 'Private'}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
