import { Project } from '@/types/cv';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Wrapper = project.url ? 'a' : 'div';
  const props = project.url
    ? {
        href: project.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `View ${project.name} project`,
      }
    : {};

  return (
    <Wrapper
      className="border border-[#eee] rounded-sm p-2 hover:border-[#ff990a] transition-colors duration-200 block"
      {...(props as Record<string, string>)}
    >
      <p className="font-bold text-[11px] text-[#111] uppercase tracking-[0.04em]">
        {project.name}
      </p>
      <p className="font-mono text-[10px] text-[#aaa] mt-0.5">{project.tech}</p>
    </Wrapper>
  );
}
