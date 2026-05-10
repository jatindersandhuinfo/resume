interface TechBadgeProps {
  label: string;
  bg: string;
  color: string;
  border: string;
}

export function TechBadge({ label, bg, color, border }: TechBadgeProps) {
  return (
    <span
      className="w-9 h-9 flex items-center justify-center font-bold text-[12px] rounded font-mono"
      style={{ background: bg, color, border: `1px solid ${border}` }}
    >
      {label}
    </span>
  );
}
