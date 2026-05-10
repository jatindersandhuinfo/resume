import { SectionTitle } from './SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { EducationItem } from './EducationItem';
import { ProjectCard } from './ProjectCard';
import { ContactSection } from './ContactSection';
import { experience, education, projects } from '@/lib/data';

export function RightColumn() {
  return (
    <section
      className="w-full md:flex-1 bg-white text-[#1e1e1e] p-8 flex flex-col gap-7"
      style={{ fontSize: '12px' }}
      aria-label="Details"
    >
      {/* Work Experience */}
      <div>
        <SectionTitle variant="light">Work Experience</SectionTitle>
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} isFirst={i === 0} />
        ))}
      </div>

      {/* Education */}
      <div>
        <SectionTitle variant="light">Education</SectionTitle>
        {education.map((item) => (
          <EducationItem key={item.degree} item={item} />
        ))}
      </div>

      {/* Projects */}
      <div>
        <SectionTitle variant="light">Selected Projects</SectionTitle>
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <ContactSection />
    </section>
  );
}
