import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { seo, personal, projects } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';

const fullName = `${personal.firstName} ${personal.lastName}`;
const pageTitle = `All Projects — 25+ Products Delivered | ${fullName}`;
const pageDescription =
  'Browse all 25+ production projects delivered by Jatinder Sandhu — full stack developer. Real businesses, real results across e-commerce, SaaS, CMS, and backend systems.';
const pageUrl = `${seo.siteUrl}/projects`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: `${fullName} — Portfolio`,
    images: [
      {
        url: seo.ogImage,
        width: 960,
        height: 1200,
        alt: `${fullName} — All Projects`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    images: {
      url: seo.ogImage,
      alt: `${fullName} — All Projects`,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-studio text-canvas pt-[73px]">
      <HeaderNav />

      {/* ── Utility bar ── */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <span className="text-white/55">Projects</span>
          </nav>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 transition hover:text-gold"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-studio py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[600px] rounded-full bg-gold/[0.04] blur-[120px]"
        />
        <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
          <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Section</p>
          <p className="chapter-number-bg leading-none">01</p>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8">Work &amp; Deliverables</p>
          <h1 className="display-lg text-canvas">
            25+ PRODUCTS<br />
            <span className="text-gold">DELIVERED</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            Real businesses, real URLs, real results. Every project here represents a complete
            engineering decision — from database schema to deployment and performance.
          </p>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="bg-studio py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-px border border-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              // Always route through internal project page for SEO
              const href = `/projects/${project.slug}`;
              return (
                <article
                  key={project.slug}
                  className="group relative flex flex-col overflow-hidden bg-studio transition duration-300 hover:bg-surface"
                >
                  {/* Hover accent line */}
                  <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold/50 transition-transform duration-300 origin-left group-hover:scale-x-100" />

                  {/* Cover image */}
                  {project.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
                      <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-studio/80 to-transparent" />
                      <span className="absolute left-4 top-4 border border-gold/30 bg-studio/70 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="absolute right-4 top-4 border border-white/[0.08] bg-studio/60 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/40 backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h2 className="text-base font-bold leading-snug text-canvas transition group-hover:text-gold">
                        <Link href={href} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {project.name}
                        </Link>
                      </h2>
                      <p className="mt-3 text-xs leading-relaxed text-white/55 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {project.metrics && project.metrics.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-5">
                        {project.metrics.slice(0, 3).map((m) => (
                          <div key={m.label}>
                            <p className="text-sm font-bold text-gold">{m.value}</p>
                            <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/35">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.05] pt-4 text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                      <span className="truncate text-white/35">{project.tech.split('·')[0].trim()}</span>
                      <span className="shrink-0 text-white/30 transition group-hover:text-gold">Case Study →</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-studio py-28 text-center lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8 justify-center">Start a Project</p>
          <h2 className="display-md text-canvas">
            READY TO BUILD<br />
            <span className="text-gold">YOUR NEXT PRODUCT?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            From SaaS platforms and e-commerce to REST APIs and AI-powered web apps — I build
            complete, production-ready solutions for businesses worldwide.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="mailto:jatindersandhuinfo@gmail.com?subject=Project Inquiry"
              className="inline-flex min-h-[50px] items-center justify-center bg-gold px-10 text-xs font-bold uppercase tracking-[0.22em] text-studio transition duration-200 hover:bg-gold-light"
            >
              Start a Conversation →
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[50px] items-center justify-center border border-white/20 px-10 text-xs font-bold uppercase tracking-[0.22em] text-canvas transition duration-200 hover:border-gold/60 hover:text-gold"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
