import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, personal, contact, seo, teamSection } from '@/lib/data';
import type { Project } from '@/types/cv';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import { ProjectDetailGallery } from '@/components/ProjectDetailGallery';
import { buildBreadcrumbSchema } from '@/lib/structured-data';

// ── Types ─────────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

// Minimal shape needed for SEO metadata when sourced from a team-member project
type ProjectMeta = Pick<Project, 'slug' | 'name' | 'coverImage' | 'tagline' | 'tech' | 'category'>;

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
 const globalSlugs = projects.map((p) => ({ slug: p.slug }));
 const teamSlugs = teamSection.members
 .flatMap((m) => m.projects)
 .filter((p) => p.slug)
 .map((p) => ({ slug: p.slug! }));

 return [...globalSlugs, ...teamSlugs];
}

// ── SEO ───────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;

 let project: ProjectMeta | undefined = projects.find((p) => p.slug === slug);
 if (!project) {
 for (const member of teamSection.members) {
 const p = member.projects.find((proj) => proj.slug === slug);
 if (p) {
 project = {
 slug: p.slug!,
 name: p.name,
 coverImage: p.coverImage,
 tagline: p.result,
 tech: p.tech,
 category: p.category,
 };
 break;
 }
 }
 }

 if (!project) return {};

 const fullName = `${personal.firstName} ${personal.lastName}`;
 const url = `${seo.siteUrl}/projects/${slug}`;
 const title = `${project.name} — ${project.category} Project by ${fullName}`;
 const techList = project.tech.split(',').map((t: string) => t.trim());
 const description = `${project.tagline} Built with ${techList.slice(0, 4).join(', ')}. Case study by ${fullName}, full stack developer.`;
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
 Frontend: { accent: '#61dafb', glow: '#61dafb18', badge: '#61dafb20' },
 Backend: { accent: '#68a063', glow: '#68a06318', badge: '#68a06320' },
 'E-Commerce': { accent: '#f59e0b', glow: '#f59e0b18', badge: '#f59e0b20' },
 API: { accent: '#8892be', glow: '#8892be18', badge: '#8892be20' },
 CMS: { accent: '#f97316', glow: '#cc785c18', badge: '#cc785c20' },
 'Design System':{ accent: '#a78bfa', glow: '#a78bfa18', badge: '#a78bfa20' },
 Mobile: { accent: '#fb923c', glow: '#fb923c18', badge: '#fb923c20' },
 Architecture: { accent: '#10a37f', glow: '#10a37f18', badge: '#10a37f20' },
 DevOps: { accent: '#f472b6', glow: '#f472b618', badge: '#f472b620' },
 Database: { accent: '#facc15', glow: '#facc1518', badge: '#facc1520' },
};

function categoryColors(cat: string) {
 return CATEGORY_COLORS[cat] ?? { accent: '#f59e0b', glow: '#f59e0b18', badge: '#f59e0b20' };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({ params }: Props) {
 const { slug } = await params;
 
 let project = projects.find((p) => p.slug === slug);
 if (!project) {
 for (const member of teamSection.members) {
 const p = member.projects.find((proj) => proj.slug === slug);
 if (p) {
 project = {
 slug: p.slug!,
 name: p.name,
 coverImage: p.coverImage || undefined,
 tagline: p.result,
 tech: p.tech,
 result: p.result,
 url: p.url || undefined,
 category: p.category,
 year: '2024',
 overview: p.result,
 challenge: 'A professional technical deliverable designed and launched to meet real-world business requirements.',
 solution: `Rebuilt and implemented using ${p.tech} as part of the team collaboration for our clients.`,
 metrics: [
 { label: 'Category', value: p.category },
 { label: 'Platform', value: p.tech.split(' · ')[0] },
 { label: 'Deployment', value: 'Production' },
 { label: 'Scope', value: 'Full Stack' },
 ],
 techStack: [
 { group: 'Primary', items: p.tech.split(' · ') },
 { group: 'Role', items: [member.role] },
 ],
 };
 break;
 }
 }
 }

 if (!project) notFound();

 const fullName = `${personal.firstName} ${personal.lastName}`;
 const colors = categoryColors(project.category);

 // Related: same category first, then fill with others
 const related = [
 ...projects.filter((p) => p.slug !== slug && p.category === project.category),
 ...projects.filter((p) => p.slug !== slug && p.category !== project.category),
 ].slice(0, 2);

 // Find team member(s) who worked on this project
 const builtBy = teamSection.members.filter((m) =>
 m.projects.some((p) => p.slug === slug)
 );

  const projectUrl = `${seo.siteUrl}/projects/${slug}`
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: seo.siteUrl },
    { name: 'Projects', url: `${seo.siteUrl}/projects` },
    { name: project.name, url: projectUrl },
  ])

  return (
    <main className="min-h-screen bg-studio text-canvas pt-[73px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/<\/script>/gi, '<\\/script>') }}
      />
      <HeaderNav />

      {/* ── Utility bar ── */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3.5 sm:px-10 lg:px-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <Link href="/projects" className="transition hover:text-gold">Projects</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <span className="text-white/55">{project.name}</span>
          </nav>
          <Link href="/projects" className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 transition hover:text-gold">
            ← All Projects
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-studio" aria-labelledby="project-title">
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% -5%, ${colors.glow}, transparent 65%)`, pointerEvents: 'none' }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          {/* Cover image */}
          {project.coverImage && (
            <div className="relative mb-12 w-full overflow-hidden border border-white/[0.07]" style={{ aspectRatio: '16/9' }}>
              <Image
                src={project.coverImage}
                alt={`${project.name} — ${project.category} project by ${fullName}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>
          )}

          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              {/* Badges */}
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span
                  className="px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
                  style={{ color: colors.accent, border: `1px solid ${colors.accent}40`, background: colors.badge }}
                >
                  {project.category}
                </span>
                <span className="border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/45">
                  {project.year}
                </span>
              </div>

              <h1 id="project-title" className="font-bebas text-[clamp(2.8rem,7vw,8rem)] leading-[0.9] uppercase text-canvas">
                {project.name}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.split(' · ').map((t) => (
                  <span key={t} className="border border-white/[0.07] bg-surface px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] items-center gap-2.5 bg-gold px-8 text-xs font-bold uppercase tracking-[0.2em] text-studio transition hover:bg-gold-light"
                >
                  Visit Live Site →
                </a>
              ) : (
                <span className="inline-flex min-h-[50px] items-center border border-white/[0.07] px-8 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                  Private Project
                </span>
              )}
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-[50px] items-center border border-white/[0.1] px-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition hover:border-gold/50 hover:text-gold"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="border-b border-white/[0.07] bg-surface" aria-label="Project metrics">
        <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-14">
          <div className="grid grid-cols-2 gap-px border border-white/[0.05] sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-studio p-6 text-center">
                <p className="font-bebas text-3xl text-gold sm:text-4xl">{m.value}</p>
                <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/35">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-studio py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-16 md:grid-cols-[1fr_300px]">

            {/* Left prose */}
            <div className="space-y-14">
              {[
                { kicker: 'Overview', title: 'What is this project?', body: project.overview, accent: true },
                { kicker: 'The Challenge', title: 'What problem needed solving?', body: project.challenge, accent: false },
                { kicker: 'The Solution', title: 'How was it built?', body: project.solution, accent: true },
              ].map((section) => (
                <div key={section.kicker}>
                  <p className="chapter-label mb-5">{section.kicker}</p>
                  <h2 className="text-xl font-bold text-canvas">{section.title}</h2>
                  <div className={`mt-5 ${!section.accent ? 'border border-white/[0.06] bg-surface p-6' : ''}`}>
                    <p className="text-sm leading-relaxed text-white/65 max-w-2xl">{section.body}</p>
                  </div>
                </div>
              ))}

              {project.images && project.images.length > 0 && (
                <ProjectDetailGallery
                  projectName={project.name}
                  coverImage={project.coverImage}
                  images={project.images}
                  accentColor={colors.accent}
                />
              )}
            </div>

            {/* Sticky sidebar */}
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              {/* Tech Stack */}
              <div className="border border-white/[0.07] bg-surface p-6">
                <p className="chapter-label mb-5">Tech Stack</p>
                <div className="space-y-4">
                  {project.techStack.map((group) => (
                    <div key={group.group}>
                      <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/30">{group.group}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span key={item} className="border border-white/[0.06] bg-studio px-2.5 py-1 text-[0.65rem] font-bold text-white/55">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="border border-white/[0.07] bg-surface p-6">
                <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/25">Quick Links</p>
                <div className="space-y-2">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between border border-white/[0.06] bg-studio px-4 py-3 text-xs font-semibold text-white/60 transition hover:border-gold/30 hover:text-gold">
                      <span>Live Site</span><span>↗</span>
                    </a>
                  )}
                  <a href={`mailto:${contact.email}`}
                    className="flex items-center justify-between border border-white/[0.06] bg-studio px-4 py-3 text-xs font-semibold text-white/60 transition hover:border-gold/30 hover:text-gold">
                    <span>Hire Me for Similar</span><span>→</span>
                  </a>
                  <Link href="/projects"
                    className="flex items-center justify-between border border-white/[0.06] bg-studio px-4 py-3 text-xs font-semibold text-white/60 transition hover:border-gold/30 hover:text-gold">
                    <span>← All Projects</span>
                  </Link>
                </div>
              </div>

              {/* Category */}
              <div
                className="border p-5 text-center"
                style={{ borderColor: `${colors.accent}25`, background: colors.badge }}
              >
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: colors.accent }}>Category</p>
                <p className="mt-2 text-lg font-bold text-canvas">{project.category}</p>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/35">{project.year}</p>
              </div>

              {/* Built by */}
              {builtBy.length > 0 && (
                <div className="border border-white/[0.07] bg-surface p-6">
                  <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/25">
                    {builtBy.some((m) => m.role.toLowerCase().includes('design')) ? 'Designed By' : 'Built By'}
                  </p>
                  <div className="space-y-3">
                    {builtBy.map((member) => (
                      <Link key={member.slug} href={`/team/${member.slug}`}
                        className="group/m flex items-center gap-3 border border-white/[0.06] bg-studio p-3 transition hover:border-gold/25">
                        {member.image ? (
                          <div className="relative shrink-0 overflow-hidden border border-white/10" style={{ width: 36, height: 36 }}>
                            <Image src={member.image} alt={member.name} fill sizes="36px" className="object-cover" />
                          </div>
                        ) : (
                          <div className="flex shrink-0 items-center justify-center text-sm font-black"
                            style={{ width: 36, height: 36, background: member.avatarBg, border: `1px solid ${member.avatarColor}40`, color: member.avatarColor }}>
                            {member.avatar}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-canvas transition group-hover/m:text-gold">{member.name}</p>
                          <p className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-gold/70">{member.role}</p>
                        </div>
                        <span className="text-white/20 text-xs transition group-hover/m:text-gold">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.07] bg-surface py-20" aria-labelledby="related-title">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <p className="chapter-label mb-8">More Work</p>
            <h2 id="related-title" className="font-bebas text-[clamp(2rem,4vw,5rem)] leading-[0.9] uppercase text-canvas mb-12">
              Related Projects
            </h2>
            <div className="grid gap-px border border-white/[0.05] sm:grid-cols-2">
              {related.map((rel) => {
                const rc = categoryColors(rel.category);
                return (
                  <Link key={rel.slug} href={`/projects/${rel.slug}`}
                    className="group relative overflow-hidden bg-studio p-8 transition duration-300 hover:bg-surface-dark">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${rc.glow}, transparent)` }} />
                    <div className="relative">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em]"
                          style={{ color: rc.accent, background: rc.badge, border: `1px solid ${rc.accent}30` }}>
                          {rel.category}
                        </span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/30">{rel.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-canvas transition group-hover:text-gold">{rel.name}</h3>
                      <p className="mt-3 text-xs text-white/50 line-clamp-2">{rel.tagline}</p>
                      <p className="mt-4 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white/25">{rel.tech}</p>
                      <div className="mt-6 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35 transition group-hover:text-gold">
                        View Project →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Hire CTA ── */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-studio py-28 text-center lg:py-36">
        <div aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8 justify-center">Work With Me</p>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,7rem)] leading-[0.9] uppercase text-canvas">
            NEED A RELIABLE<br />
            <span className="text-gold">DEVELOPER?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            Clean code, practical delivery, and remote-friendly across time zones.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a href={`mailto:${contact.email}`}
              className="inline-flex min-h-[50px] items-center justify-center bg-gold px-10 text-xs font-bold uppercase tracking-[0.22em] text-studio transition hover:bg-gold-light">
              Get in Touch →
            </a>
            <Link href="/projects"
              className="inline-flex min-h-[50px] items-center justify-center border border-white/20 px-10 text-xs font-bold uppercase tracking-[0.22em] text-canvas transition hover:border-gold/60 hover:text-gold">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
