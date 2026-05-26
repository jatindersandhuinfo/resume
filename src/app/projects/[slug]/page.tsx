import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, personal, contact, seo } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

// ── Types ─────────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ── SEO ───────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const fullName = `${personal.firstName} ${personal.lastName}`;
  const url = `${seo.siteUrl}/projects/${slug}`;
  const title = `${project.name} — ${project.category} Project by ${fullName}`;
  const techList = project.tech.split(',').map((t: string) => t.trim());
  const description = `${project.tagline} Built with ${techList.slice(0, 4).join(', ')}. Case study by ${fullName}, freelance full stack developer.`;
  const keywords = [
    project.name,
    ...techList,
    project.category,
    `${project.category} developer`,
    fullName,
    'freelance full stack developer',
    'hire full stack developer',
    'web development case study',
  ].join(', ');

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: project.coverImage ? [{ url: `${seo.siteUrl}${project.coverImage}`, width: 1200, height: 630, alt: project.name }] : [{ url: seo.ogImage }],
      siteName: `${fullName} — Portfolio`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: project.coverImage ? [`${seo.siteUrl}${project.coverImage}`] : [seo.ogImage],
    },
  };
}

// ── Category accent colours ────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, { accent: string; glow: string; badge: string }> = {
  Frontend:       { accent: '#61dafb', glow: '#61dafb18', badge: '#61dafb20' },
  Backend:        { accent: '#68a063', glow: '#68a06318', badge: '#68a06320' },
  'E-Commerce':   { accent: '#d6ad63', glow: '#d6ad6318', badge: '#d6ad6320' },
  API:            { accent: '#8892be', glow: '#8892be18', badge: '#8892be20' },
  CMS:            { accent: '#e8a88a', glow: '#cc785c18', badge: '#cc785c20' },
  'Design System':{ accent: '#a78bfa', glow: '#a78bfa18', badge: '#a78bfa20' },
  Mobile:         { accent: '#fb923c', glow: '#fb923c18', badge: '#fb923c20' },
  Architecture:   { accent: '#10a37f', glow: '#10a37f18', badge: '#10a37f20' },
  DevOps:         { accent: '#f472b6', glow: '#f472b618', badge: '#f472b620' },
  Database:       { accent: '#facc15', glow: '#facc1518', badge: '#facc1520' },
};

function categoryColors(cat: string) {
  return CATEGORY_COLORS[cat] ?? { accent: '#d6ad63', glow: '#d6ad6318', badge: '#d6ad6320' };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const fullName = `${personal.firstName} ${personal.lastName}`;
  const colors = categoryColors(project.category);

  // Related: same category first, then fill with others
  const related = [
    ...projects.filter((p) => p.slug !== slug && p.category === project.category),
    ...projects.filter((p) => p.slug !== slug && p.category !== project.category),
  ].slice(0, 2);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0b0d0e] text-[#0b0d0e] dark:text-white">

      <HeaderNav />
      <div className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl justify-end px-5 py-3 sm:px-8 lg:px-10">
          <a
            href="/#works"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-black/60 dark:text-white/60 transition hover:text-[#d6ad63]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Works
          </a>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-black/10 dark:border-white/10"
        aria-labelledby="project-title"
      >
        {/* Gradient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 90% 55% at 50% -10%, ${colors.glow}, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/35 dark:text-white/35"
          >
            <Link href="/" className="transition hover:text-[#d6ad63]">Home</Link>
            <span aria-hidden="true" className="text-black/20 dark:text-white/20">›</span>
            <Link href="/#works" className="transition hover:text-[#d6ad63]">Works</Link>
            <span aria-hidden="true" className="text-black/20 dark:text-white/20">›</span>
            <span className="text-black/50 dark:text-white/50">{project.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Left */}
            <div>
              {/* Category + Year badges */}
              <div className="mb-7 flex flex-wrap items-center gap-3">
                {project.coverImage && (
                  <div className="w-full mb-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 aspect-video relative">
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ${project.category} project by ${fullName}, freelance full stack developer`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority
                    />
                  </div>
                )}
                <span
                  className="section-kicker rounded-full border px-4 py-1.5"
                  style={{
                    color: colors.accent,
                    borderColor: `${colors.accent}40`,
                    background: colors.badge,
                  }}
                >
                  {project.category}
                </span>
                <span className="meta-label rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-4 py-1.5 text-black/50 dark:text-white/50">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h1
                id="project-title"
                className="hero-title max-w-3xl text-[#0b0d0e] dark:text-white"
              >
                {project.name}
              </h1>

              {/* Tagline */}
              <p className="mt-5 body-copy-lg max-w-2xl text-black/60 dark:text-white/60">
                {project.tagline}
              </p>

              {/* Tech pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.split(' · ').map((t) => (
                  <span
                    key={t}
                    className="meta-label rounded-full border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] px-3 py-1.5 text-black/60 dark:text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.14em] transition duration-200 hover:brightness-110"
                  style={{ background: colors.accent, color: '#0b0d0e' }}
                >
                  Visit Live Site
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : (
                <span className="inline-flex min-h-[52px] items-center rounded-full border border-black/10 dark:border-white/10 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-black/40 dark:text-white/40">
                  Private Project
                </span>
              )}
              <Link
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-[52px] items-center rounded-full border border-black/10 dark:border-white/10 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics ───────────────────────────────────────────────────── */}
      <section className="border-b border-black/10 dark:border-white/10" aria-label="Project metrics">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-6 text-center"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <p
                  className="text-2xl font-black sm:text-3xl"
                  style={{ color: colors.accent }}
                >
                  {m.value}
                </p>
                <p className="mt-2.5 text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body — two column ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">

          {/* ── Left — prose ─────────────────────────────────────── */}
          <div className="space-y-14">

            {/* Overview */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 rounded"
                  style={{ background: colors.accent }}
                />
                <p className="section-kicker" style={{ color: colors.accent }}>Overview</p>
              </div>
              <h2 className="subsection-title text-[#0b0d0e] dark:text-white">What is this project?</h2>
              <p className="mt-5 body-copy text-black/60 dark:text-white/60 max-w-2xl">{project.overview}</p>
            </div>

            {/* Challenge */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 rounded bg-black/20 dark:bg-white/20"
                />
                <p className="section-kicker text-black/40 dark:text-white/40">The Challenge</p>
              </div>
              <h2 className="subsection-title text-[#0b0d0e] dark:text-white">What problem needed solving?</h2>
              <div
                className="mt-5 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-7"
              >
                <p className="body-copy text-black/60 dark:text-white/60 max-w-2xl">{project.challenge}</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 rounded"
                  style={{ background: colors.accent }}
                />
                <p className="section-kicker" style={{ color: colors.accent }}>The Solution</p>
              </div>
              <h2 className="subsection-title text-[#0b0d0e] dark:text-white">How was it built?</h2>
              <p className="mt-5 body-copy text-black/60 dark:text-white/60 max-w-2xl">{project.solution}</p>
            </div>

          </div>

          {/* ── Right — sticky sidebar ─────────────────────────── */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">

            {/* Tech Stack card */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#111416] p-6">
              <p className="section-kicker mb-5" style={{ color: colors.accent }}>
                Tech Stack
              </p>
              <div className="space-y-5">
                {project.techStack.map((group) => (
                  <div key={group.group}>
                    <p className="meta-label mb-2.5 text-black/35 dark:text-white/35">{group.group}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="small-copy rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-3 py-1 text-black/65 dark:text-white/65"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#111416] p-6">
              <p className="section-kicker mb-5 text-black/40 dark:text-white/40">Quick Links</p>
              <div className="space-y-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-3 text-sm font-semibold text-black/70 dark:text-white/70 transition hover:border-black/20 dark:hover:border-white/20 hover:text-[#0b0d0e] dark:hover:text-white"
                  >
                    <span>Live Site</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-3 text-sm font-semibold text-black/70 dark:text-white/70 transition hover:border-[#d6ad63]/40 hover:text-[#d6ad63]"
                >
                  <span>Hire Me for a Similar Project</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href={contact.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-3 text-sm font-semibold text-black/70 dark:text-white/70 transition hover:border-[#1dbf73]/40 hover:text-[#1dbf73]"
                >
                  <span>Fiverr Profile</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href={contact.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-3 text-sm font-semibold text-black/70 dark:text-white/70 transition hover:border-[#29b2fe]/40 hover:text-[#29b2fe]"
                >
                  <span>Freelancer Profile</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <Link
                  href="/#works"
                  className="flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-3 text-sm font-semibold text-black/70 dark:text-white/70 transition hover:border-black/20 dark:hover:border-white/20 hover:text-[#0b0d0e] dark:hover:text-white"
                >
                  <span>← All Projects</span>
                </Link>
              </div>
            </div>

            {/* Category badge */}
            <div
              className="rounded-2xl border p-5 text-center"
              style={{
                borderColor: `${colors.accent}30`,
                background: colors.badge,
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.12em]"
                style={{ color: colors.accent }}
              >
                Category
              </p>
              <p className="mt-2 text-lg font-black text-[#0b0d0e] dark:text-white">{project.category}</p>
              <p className="meta-label mt-1 text-black/35 dark:text-white/35">{project.year}</p>
            </div>

          </aside>
        </div>
      </section>

      {/* ── Related Projects ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="border-t border-black/10 dark:border-white/10"
          aria-labelledby="related-title"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <p className="section-kicker mb-4">More Work</p>
            <h2 id="related-title" className="section-title text-[#0b0d0e] dark:text-white mb-12">
              Related projects.
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((rel) => {
                const relColors = categoryColors(rel.category);
                return (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416] p-7 transition duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
                  >
                    {/* Hover glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${relColors.glow}, transparent)`,
                      }}
                    />

                    <div className="relative">
                      {/* Category + year */}
                      <div className="mb-4 flex items-center gap-2">
                        <span
                          className="meta-label rounded-full border px-3 py-1"
                          style={{
                            color: relColors.accent,
                            borderColor: `${relColors.accent}35`,
                            background: relColors.badge,
                          }}
                        >
                          {rel.category}
                        </span>
                        <span className="meta-label text-black/30 dark:text-white/30">{rel.year}</span>
                      </div>

                      {/* Name */}
                      <h3 className="subsection-title text-[#0b0d0e] dark:text-white transition-colors duration-200 group-hover:text-[#d6ad63]">
                        {rel.name}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-3 small-copy text-black/52 dark:text-white/52 line-clamp-2">
                        {rel.tagline}
                      </p>

                      {/* Tech */}
                      <p className="mt-4 meta-label text-black/30 dark:text-white/30">{rel.tech}</p>

                      {/* Arrow */}
                      <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-black/40 dark:text-white/40 transition-colors duration-200 group-hover:text-[#d6ad63]">
                        View Project
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Hire CTA ──────────────────────────────────────────────────── */}
      <section className="border-t border-black/10 dark:border-white/10" aria-label="Hire CTA">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <aside
            className="relative overflow-hidden rounded-2xl border border-[#d6ad6330] bg-white dark:bg-[linear-gradient(135deg,#111416_0%,#0f1214_100%)] p-10 sm:p-14"
          >
            {/* Gold glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 100% 0%, #d6ad6310, transparent)',
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="section-kicker">Work with me</p>
                <h2 className="mt-4 section-title text-[#0b0d0e] dark:text-white max-w-xl">
                  Have a project that needs a reliable developer?
                </h2>
                <p className="mt-5 body-copy text-black/60 dark:text-white/60 max-w-lg">
                  {personal.summary}. Clean code, practical delivery, and remote-friendly across time zones.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#d6ad63] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#0b0d0e] transition hover:bg-white"
                >
                  Get in Touch
                </a>
                <Link
                  href="/#works"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-black/10 dark:border-white/10 px-5 py-8 text-center">
        <p className="text-xs text-black/30 dark:text-white/30">
          © {new Date().getFullYear()} {fullName}.{' '}
          <Link href="/" className="transition hover:text-[#d6ad63]">
            Back to Portfolio
          </Link>
        </p>
      </footer>

    </main>
  );
}
