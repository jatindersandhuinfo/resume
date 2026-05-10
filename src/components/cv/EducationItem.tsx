import { Education } from '@/types/cv';

interface EducationItemProps {
  item: Education;
}

export function EducationItem({ item }: EducationItemProps) {
  return (
    <article className="mb-3">
      <p className="font-mono text-[10px] text-[#ff990a]">{item.period}</p>
      <p className="font-bold text-[11px] uppercase text-[#222] tracking-[0.04em]">
        {item.institution}{' '}
        <span className="font-normal text-[#aaa] normal-case tracking-normal">
          ({item.badge})
        </span>
      </p>
      <p className="text-[11px] text-[#777] leading-[1.7]">
        {item.degree} — {item.description}
      </p>
    </article>
  );
}
