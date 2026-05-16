import Image from 'next/image';
import { personal, services } from '@/lib/data';

export function CenterColumn() {
  return (
    <section
      className="w-full md:flex-1 relative flex flex-col"
      style={{ background: '#111' }}
      aria-label="Profile"
    >
      {/* Hero Image */}
      <div className="relative flex-1 min-h-[320px] overflow-hidden">
        <Image
          src="/jatindersandhu-1.webp"
          alt={`${personal.firstName} ${personal.lastName} — ${personal.role}`}
          fill
          className="object-cover object-top"
          style={{ filter: 'grayscale(30%) brightness(0.75)' }}
          priority
        />
      </div>

      {/* Name + Role */}
      <div
        className="relative px-7 pt-8 pb-7"
        style={{
          background: 'linear-gradient(to top, #111 60%, transparent)',
          marginTop: '-120px',
        }}
      >
        <p
          className="text-[15px] tracking-[0.4em] uppercase text-[#aaa] font-light font-dm"
        >
          {personal.firstName}
        </p>
        <h2 className="font-bebas text-[77px] leading-[0.9] text-white tracking-tight">
          {personal.lastName}
        </h2>

        <span
          className="inline-block mt-2.5 px-3.5 py-1.5 text-[10px] tracking-[0.3em] uppercase font-mono"
          style={{
            border: '1px solid rgba(56,189,248,0.4)',
            color: '#ff990a',
          }}
        >
          {personal.role}
        </span>

        <p
          className="mt-3.5 text-[11px] uppercase tracking-[0.05em] leading-[1.7]"
          style={{ color: '#999' }}
        >
          {personal.summary}
        </p>
      </div>

      {/* Services */}
      <div
        className="px-7 pb-7 pt-4"
        style={{ borderTop: '1px solid #222' }}
        aria-label="Services"
      >
        <p
          className="font-mono text-[10px] tracking-[0.2em] uppercase pb-1.5 mb-3"
          style={{ color: '#555', borderBottom: '1px solid #222' }}
        >
          Services
        </p>
        <div>
          {services.map((s) => (
            <span
              key={s.label}
              className="inline-block mr-1.5 mb-1.5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] rounded-sm"
              style={{ border: '1px solid #444', color: '#ccc' }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
