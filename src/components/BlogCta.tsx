import Link from 'next/link';
import { contact } from '@/lib/data';

export default function BlogCta() {
  return (
    <aside className="mt-16 rounded-lg border border-[#d6ad63]/30 bg-gray-50 dark:bg-[#111416] p-7" aria-label="Hire developer CTA">
      <h2 className="text-xl font-black text-[#0b0d0e] dark:text-white">
        Need Help Bringing Your Business Online?
      </h2>
      <p className="mt-4 text-xs leading-relaxed text-black/65 dark:text-white/65">
        From business websites and custom software to AI-powered solutions and automation, I help businesses build technology that supports growth and efficiency.
      </p>
      <p className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/65">
        View my portfolio to see recent projects or get in touch to discuss your next idea.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6ad63] px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0d0e] transition hover:bg-white"
        >
          View Portfolio
        </Link>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
        >
          Contact Jatinder
        </a>
      </div>
    </aside>
  );
}
