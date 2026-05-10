import { Skill } from '@/types/cv';

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="mb-2.5">
      <div className="flex justify-between mb-1">
        <span className="text-[11px] text-[#999]">{skill.name}</span>
        <span className="text-[11px] text-[#999]">{skill.level}%</span>
      </div>
      <div className="h-[3px] bg-[#333] rounded-sm">
        <div
          className="h-[3px] bg-white rounded-sm transition-all duration-700"
          style={{ width: `${skill.level}%` }}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency ${skill.level}%`}
        />
      </div>
    </div>
  );
}
