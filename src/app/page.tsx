import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import { HeroImage } from '@/components/HeroImage';

import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorksSection } from '@/components/sections/WorksSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { TeamSection } from '@/components/sections/TeamSection';

import {
  contact,
  personal,
  stats,
  techGroups,
  education,
  aboutSection,
  servicesSection,
  worksSection,
  experienceSection,
  faqSection,
  skillsSection,
  teamSection,
} from '@/lib/data';

export default function Home() {
  const fullName = `${personal.firstName} ${personal.lastName}`;

  return (
    <main id="main-content" className="min-h-screen bg-[#0a0a0a] text-white">
      <HeaderNav />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-white/[0.07]"
        aria-labelledby="hero-title"
      >
        {/* Ambient glow — top center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.12] blur-[100px]"
        />

        {/* ── Centered text block ── */}
        <div className="relative mx-auto max-w-5xl px-5 pt-40 pb-14 text-center sm:px-8 lg:px-10 lg:pt-44 lg:pb-16">

          {/* Status badge */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personal.freelanceStatus}
          </div>

          {/* Role */}
          <p className="animate-fade-up animate-delay-1 mt-7 hero-role tracking-[0.18em]">
            {personal.role} &nbsp;·&nbsp; {personal.location}
          </p>

          {/* Display name — Bebas Neue */}
          <h1
            id="hero-title"
            className="animate-fade-up animate-delay-2 hero-display mt-4 text-white"
          >
            {personal.firstName}
            <br />
            <span className="text-[#f59e0b]">{personal.lastName}</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up animate-delay-3 mx-auto mt-8 max-w-2xl body-copy-lg text-white/50">
            Full stack developer with 6+ years building fast, scalable web apps — React, Next.js, Node.js, and PHP/Laravel — for businesses across the US, UK, Canada, and Australia.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Hire ${fullName}`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#f59e0b] px-8 text-sm font-black uppercase tracking-[0.14em] text-[#0a0a0a] transition duration-200 hover:bg-[#fbbf24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
            >
              Hire Me
            </a>
            <a
              href="#works"
              aria-label="View portfolio projects"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 px-8 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-200 hover:border-[#f59e0b]/60 hover:text-[#f59e0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
            >
              View Work
            </a>
          </div>
        </div>

        {/* ── Wide image banner ── */}
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="animate-soft-in animate-delay-2 relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#111111]" style={{ aspectRatio: '16/7' }}>
            <HeroImage
              alt={`${fullName} — Full Stack Developer based in India, available for remote work worldwide`}
            />

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

            {/* Violet glow overlay on edges */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#f59e0b]/20" />

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#0a0a0a]/80 px-4 py-2.5 text-xs font-black text-white backdrop-blur-sm sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              Clean code / Scalable APIs
            </div>

            {/* Experience badge — bottom right */}
            <div className="absolute bottom-6 right-6 z-10 hidden rounded-full border border-[#f59e0b]/30 bg-[#0a0a0a]/80 px-5 py-2.5 text-sm font-black text-[#f59e0b] backdrop-blur-sm sm:block">
              {personal.experience}
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="border-t border-white/[0.07] mt-0">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/[0.07] py-7 pr-4 last:border-r-0 sm:px-6 sm:first:pl-0"
              >
                <p className="subsection-title text-white">{stat.value}</p>
                <p className="mt-2 meta-label text-white/35">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection section={aboutSection} techGroups={techGroups} />

      <ServicesSection section={servicesSection} />

      <WorksSection section={worksSection} />

      <TeamSection section={teamSection} />

      <ExperienceSection section={experienceSection} />

      <SkillsSection section={skillsSection} />

      {/* Education Section */}
      <section
        id="education"
        className="content-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        aria-labelledby="education-title"
      >
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="section-kicker">Education</p>
            <h2 id="education-title" className="mt-5 section-title text-white">
              Academic foundation in computer science.
            </h2>
          </div>
          <p className="max-w-2xl body-copy text-white/50 lg:pt-10">
            Master&apos;s and bachelor&apos;s degrees from a NAAC A++ accredited university — covering advanced web technologies, databases, and software architecture.
          </p>
        </div>

        <div className="border-t border-white/[0.07]">
          {education.map((item, index) => (
            <article
              key={item.institution + item.degree}
              className="interactive-card group grid gap-4 border-b border-white/[0.07] py-7 transition hover:bg-white/[0.02] md:grid-cols-[72px_1fr_1.2fr_auto]"
            >
              <p className="text-sm font-black text-white/25">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              <div>
                <h3 className="subsection-title text-white transition group-hover:text-[#f59e0b]">
                  {item.degree}
                </h3>
                <p className="mt-2 meta-label text-white/35">{item.institution}</p>
              </div>
              <p className="small-copy text-white/50">{item.description}</p>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full border border-white/[0.08] px-3 py-1 meta-label text-white/35">
                  {item.period}
                </span>
                <span className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 meta-label text-[#f59e0b]">
                  {item.badge}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection section={faqSection} />

      {/* Footer */}
      <footer className="border-t border-white/[0.07] px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
            <span className="font-bebas text-2xl tracking-[0.12em] text-white/70">
              {personal.firstName[0]}{personal.lastName[0]}
            </span>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-white/35"
          >
            <a href="#about" className="transition hover:text-[#f59e0b]">About</a>
            <a href="#services" className="transition hover:text-[#f59e0b]">Services</a>
            <a href="#works" className="transition hover:text-[#f59e0b]">Works</a>
            <a href="#team" className="transition hover:text-[#f59e0b]">Team</a>
            <a href="#experience" className="transition hover:text-[#f59e0b]">Experience</a>
            <a href="#skills" className="transition hover:text-[#f59e0b]">Skills</a>
            <a href="#education" className="transition hover:text-[#f59e0b]">Education</a>
            <a href="#faq" className="transition hover:text-[#f59e0b]">FAQ</a>
            <Link href="/blog" className="transition hover:text-[#f59e0b]">Blog</Link>
          </nav>

          <nav
            aria-label="Team and project pages"
            className="flex flex-wrap justify-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/20"
          >
            {teamSection.members.map((m) => (
              <Link key={m.slug} href={`/team/${m.slug}`} className="transition hover:text-[#f59e0b]">
                {m.name}
              </Link>
            ))}
            {worksSection.works.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="transition hover:text-[#f59e0b]">
                {p.name}
              </Link>
            ))}
          </nav>

          <p className="max-w-2xl text-sm leading-relaxed text-white/35">
            {fullName} · Remote full stack developer based in India, working with clients worldwide.
            React, Next.js, Node.js, PHP, Laravel, WordPress, Shopify, and AI-powered web development.
          </p>

          <address className="not-italic text-sm text-white/25">
            <a href={`mailto:${contact.email}`} className="transition hover:text-[#f59e0b]">{contact.email}</a>
            {' · '}
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#f59e0b]">LinkedIn</a>
            {' · '}
            <a href={contact.upwork} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#f59e0b]">Upwork</a>
          </address>

          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} {fullName}. {personal.role}.
          </p>
        </div>
      </footer>
    </main>
  );
}
