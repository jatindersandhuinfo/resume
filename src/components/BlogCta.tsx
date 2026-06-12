import Link from 'next/link';
import { contact } from '@/lib/data';

export default function BlogCta() {
  return (
    <aside
      className="mt-16 rounded-2xl border border-gold/20 bg-surface p-7"
      aria-label="Hire developer CTA"
    >
      {/* Amber glow */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold/10 blur-[40px]"
        />
        <div className="relative">
          <p className="text-[0.7rem] font-black uppercase tracking-[0.14em] text-gold">
            Available for Projects
          </p>
          <h2 className="mt-3 text-xl font-black text-white">
            Need Help Bringing Your Business Online?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55">
            From business websites and custom software to AI-powered solutions and automation, I help businesses build technology that supports growth and efficiency.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            View my portfolio to see recent projects or get in touch to discuss your next idea.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gold px-6 text-xs font-black uppercase tracking-[0.12em] text-deep transition hover:bg-gold-light"
            >
              View Portfolio
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 px-6 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-gold/50 hover:text-gold"
            >
              Contact Jatinder
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
