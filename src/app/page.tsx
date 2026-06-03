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


const buttonBaseClass =
  'inline-flex min-h-[52px] items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.14em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6ad63]';

const primaryButtonClass = `${buttonBaseClass} bg-[#d6ad63] text-[#0b0d0e] hover:bg-white hover:text-[#0b0d0e]`;

const secondaryButtonClass = `${buttonBaseClass} border border-black/10 dark:border-white/10 text-[#0b0d0e] dark:text-white hover:border-[#d6ad63] hover:text-[#d6ad63]`;

export default function Home() {
  const fullName = `${personal.firstName} ${personal.lastName}`;

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-[#0b0d0e] text-[#0b0d0e] dark:text-white">
      <HeaderNav />

      <section
        className="relative overflow-hidden border-b border-black/10 dark:border-white/10"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up mb-8 flex w-fit items-center gap-3 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-4 py-2.5 text-sm font-semibold leading-snug text-black/90 dark:text-white/90">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.65)]"
              />

              <span>{personal.freelanceStatus}</span>
            </div>

            <p className="animate-fade-up animate-delay-1 mb-7 max-w-3xl hero-role">
              <span className="hero-role-line">{personal.role}</span>
              <span className="hero-role-line mt-1 text-black/50 dark:text-white/50">{personal.location}</span>
              <span className="hero-role-line mt-1 text-emerald-400/90">{personal.serviceArea}</span>
            </p>

            <h1
              id="hero-title"
              className="animate-fade-up animate-delay-2 hero-title max-w-4xl text-[#0b0d0e] dark:text-white"
            >
              {fullName} — Freelance Full Stack Developer building scalable web products for businesses worldwide.
            </h1>

            <p className="animate-fade-up animate-delay-3 mt-8 max-w-2xl body-copy-lg text-black/60 dark:text-white/60">
              I&apos;m a remote full stack developer with 6+ years experience delivering React, Next.js, Node.js, PHP, Laravel, WordPress, and Shopify projects for clients across the US, UK, Canada, Australia, and India. Clean interfaces, robust APIs, and practical deployments — on time.
            </p>

            <div className="animate-fade-up animate-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Hire ${fullName}`}
                className={primaryButtonClass}
              >
                Hire Me
              </a>

              <a
                href="#works"
                aria-label="View portfolio projects"
                className={secondaryButtonClass}
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="animate-soft-in animate-delay-2 relative isolate aspect-[4/5] overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-[#141719] lg:h-full">
            <HeroImage alt={`${fullName} — Freelance Full Stack Developer based in India, available for remote work worldwide`} />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[34%] bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/40 to-transparent" />

            {/* Floating Badge */}
            <div className="absolute left-5 bottom-28 z-30 flex max-w-[calc(100%-40px)] items-center rounded-full border border-[#d6ad63]/50 bg-white dark:bg-[#0b0d0e] px-4 py-2.5 text-xs font-black text-[#0b0d0e] dark:text-white shadow-2xl shadow-black/50 sm:left-6 sm:bottom-32 sm:px-5 sm:py-3 sm:text-sm">
              <span
                aria-hidden="true"
                className="mr-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400"
              />

              <span>Clean code / Scalable APIs</span>
            </div>

            {/* Experience Badge */}
            <div className="absolute right-6 top-6 z-30 hidden rounded-full bg-white px-5 py-3 text-sm font-black text-[#0b0d0e] shadow-2xl shadow-black/30 lg:block">
              {personal.experience}
            </div>

            {/* Bottom Info */}
            <div className="absolute inset-x-0 bottom-0 z-30 p-6 pt-32">
              <p className="subsection-title text-white">{fullName}</p>

              <p className="mt-2.5 meta-label-relaxed leading-snug text-[#d6ad63]">
                {personal.role}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-black/10 dark:border-white/10 py-6 pr-4 last:border-r-0 sm:px-5 sm:first:pl-0"
              >
                <p className="subsection-title text-[#0b0d0e] dark:text-white">
                  {stat.value}
                </p>

                <p className="mt-2.5 meta-label leading-snug text-black/40 dark:text-white/40">
                  {stat.label}
                </p>
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
      <section id="education" className="content-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="education-title">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="section-kicker">Education</p>
            <h2 id="education-title" className="mt-5 section-title text-[#0b0d0e] dark:text-white">
              Academic foundation in computer science.
            </h2>
          </div>
          <p className="max-w-2xl body-copy text-black/60 dark:text-white/60 lg:pt-10">
            Master&apos;s and bachelor&apos;s degrees from a NAAC A++ accredited university — covering advanced web technologies, databases, and software architecture.
          </p>
        </div>

        <div className="border-t border-black/10 dark:border-white/10">
          {education.map((item, index) => (
            <article
              key={item.institution + item.degree}
              className="interactive-card group grid gap-4 border-b border-black/10 dark:border-white/10 py-7 transition hover:bg-black/[0.03] dark:hover:bg-white/[0.03] md:grid-cols-[72px_1fr_1.2fr_auto]"
            >
              <p className="text-sm font-black text-black/40 dark:text-white/40">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              <div>
                <h3 className="subsection-title text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                  {item.degree}
                </h3>
                <p className="mt-2 meta-label text-black/40 dark:text-white/40">{item.institution}</p>
              </div>
              <p className="small-copy text-black/60 dark:text-white/60">{item.description}</p>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full border border-black/10 dark:border-white/10 px-3 py-1 meta-label text-black/40 dark:text-white/40">{item.period}</span>
                <span className="rounded-full border border-[#d6ad63]/40 bg-[#d6ad63]/10 px-3 py-1 meta-label text-[#d6ad63]">{item.badge}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection section={faqSection} />

      <footer className="border-t border-black/10 dark:border-white/10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#bdbdbd]">
            <a href="#about" className="transition hover:text-[#d6ad63]">About</a>
            <a href="#services" className="transition hover:text-[#d6ad63]">Services</a>
            <a href="#works" className="transition hover:text-[#d6ad63]">Works</a>
            <a href="#team" className="transition hover:text-[#d6ad63]">Team</a>
            <a href="#experience" className="transition hover:text-[#d6ad63]">Experience</a>
            <a href="#skills" className="transition hover:text-[#d6ad63]">Skills</a>
            <a href="#education" className="transition hover:text-[#d6ad63]">Education</a>
            <a href="#faq" className="transition hover:text-[#d6ad63]">FAQ</a>
            <Link href="/blog" className="transition hover:text-[#d6ad63]">Blog</Link>
          </nav>
          <nav aria-label="Team and project pages" className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#7a7a7a]">
            {teamSection.members.map((m) => (
              <Link key={m.slug} href={`/team/${m.slug}`} className="transition hover:text-[#d6ad63]">{m.name}</Link>
            ))}
            {worksSection.works.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="transition hover:text-[#d6ad63]">{p.name}</Link>
            ))}
          </nav>
          <p className="max-w-3xl text-sm leading-relaxed text-black/58 dark:text-white/58">
            {fullName} is a remote freelance full stack developer based in India and working with
            clients worldwide, specializing in React, Next.js, Node.js, PHP, Laravel, WordPress,
            Shopify, and AI-powered web development. We provide end-to-end digital services, from UI/UX 
            design and full-stack development to cloud infrastructure and ongoing maintenance.
          </p>
          <address className="not-italic text-sm text-black/40 dark:text-white/40">
            <a href={`mailto:${contact.email}`} className="transition hover:text-[#d6ad63]">
              {contact.email}
            </a>
            {' · '}
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d6ad63]">
              LinkedIn
            </a>
            {' · '}
            <a href={contact.upwork} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d6ad63]">
              Upwork
            </a>
          </address>
          <p className="text-xs text-black/40 dark:text-white/40">
            © {new Date().getFullYear()} {fullName}. {personal.role}.
          </p>
        </div>
      </footer>
    </main>
  );
}
