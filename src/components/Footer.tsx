import Link from 'next/link';
import { personal, contact } from '@/lib/data';

const LINKS = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'All Services', href: '/services' },
    { label: 'Next.js Development', href: '/services/nextjs-development' },
    { label: 'React Development', href: '/services/react-development' },
    { label: 'Laravel Development', href: '/services/laravel-development' },
    { label: 'AI Automation', href: '/services/ai-automation-services' },
    { label: 'SaaS Development', href: '/services/saas-development' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'All Projects', href: '/projects' },
    { label: 'Hire Me', href: '/contact' },
    { label: 'Start a Project', href: `mailto:${contact.email}?subject=Project Inquiry` },
  ],
};

const SOCIAL = [
  { label: 'Email', href: `mailto:${contact.email}` },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Upwork', href: contact.upwork },
  { label: 'WhatsApp', href: contact.whatsapp },
];

const fullName = `${personal.firstName} ${personal.lastName}`;

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-studio">
      {/* Top grid */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-bebas text-xl tracking-[0.16em] text-canvas">JS</span>
            </div>
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-white/45">
              {personal.summary || `Full Stack Developer — React, Next.js, Node.js, Laravel & AI. Building production software for businesses worldwide.`}
            </p>
            <div className="mt-8 flex items-center gap-5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') || s.href.startsWith('https://wa') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/35 transition hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/25">
              Navigation
            </p>
            <ul className="space-y-3">
              {LINKS.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-white/50 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/25">
              Services
            </p>
            <ul className="space-y-3">
              {LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-white/50 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/25">
              Resources
            </p>
            <ul className="space-y-3">
              {LINKS.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-semibold text-white/50 transition hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row sm:px-10 lg:px-14">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/25">
            © {new Date().getFullYear()} {fullName} · Bathinda, Punjab, India
          </p>
          <div className="flex items-center gap-5">
            <Link href="/blog" className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/25 transition hover:text-gold">
              Blog
            </Link>
            <Link href="/services" className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/25 transition hover:text-gold">
              Services
            </Link>
            <Link href="/projects" className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/25 transition hover:text-gold">
              Projects
            </Link>
            <Link href="/contact" className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/25 transition hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
