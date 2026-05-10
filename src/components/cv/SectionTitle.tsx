interface SectionTitleProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
}

export function SectionTitle({ children, variant = 'dark' }: SectionTitleProps) {
  const borderColor = variant === 'dark' ? 'border-[#333]' : 'border-[#e5e5e5]';
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#999]';

  return (
    <h2
      className={`font-mono text-[10px] tracking-[0.2em] uppercase pb-1.5 border-b mb-3 ${borderColor} ${textColor}`}
    >
      {children}
    </h2>
  );
}
