import { WorkExperience } from '@/types/cv';

interface ExperienceItemProps {
  item: WorkExperience;
  isFirst?: boolean;
}

export function ExperienceItem({ item, isFirst = false }: ExperienceItemProps) {
  return (
    <article
      className={`${!isFirst ? 'mt-4 pt-4 border-t border-dashed border-[#eee]' : ''}`}
    >
      <p className="font-mono text-[10px] text-[#ff990a] mb-0.5">{item.period}</p>
      <h3 className="font-bebas text-[18px] tracking-[0.05em] text-[#111] leading-tight">
        {item.company}
      </h3>
      <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#444] mb-1">
        {item.role}
      </p>
      <p className="text-[11px] text-[#888] leading-[1.7]">{item.description}</p>
    </article>
  );
}
