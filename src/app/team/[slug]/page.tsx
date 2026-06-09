import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { teamSection, personal, contact, seo, projects } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';
import { ProjectGallery } from '@/components/ProjectGallery';

// ── Types ─────────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
 return teamSection.members.map((m) => ({ slug: m.slug }));
}

// ── SEO ───────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const member = teamSection.members.find((m) => m.slug === slug);
 if (!member) return {};

 const title = `${member.name} — ${member.role} | ${personal.firstName} Sandhu Team`;
 const description = `${member.bio} Works on projects for ${personal.firstName} Sandhu’s development team.`;
 const url = `${seo.siteUrl}/team/${slug}`;
 const keywords = [
 member.name,
 member.role,
 ...member.skills.slice(0, 6),
 `${personal.firstName} Sandhu team`,
 'freelance development team',
 'web developer',
 'hire developer',
 ].join(', ');

 return {
 title,
 description,
 keywords,
 alternates: { canonical: url },
 openGraph: {
 type: 'profile',
 url,
 title,
 description,
 images: member.image ? [{ url: `${seo.siteUrl}${member.image}`, width: 800, height: 800, alt: member.name }] : [{ url: seo.ogImage }],
 },
 twitter: { card: 'summary_large_image', title, description },
 };
}

// ── Category colours ──────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, { accent: string; glow: string; bg: string; border: string }> = {
 Frontend: { accent: '#61dafb', glow: '#61dafb15', bg: '#61dafb10', border: '#61dafb30' },
 Backend: { accent: '#68a063', glow: '#68a06315', bg: '#68a06310', border: '#68a06330' },
 'E-Commerce': { accent: '#f59e0b', glow: '#f59e0b15', bg: '#f59e0b10', border: '#f59e0b30' },
 API: { accent: '#8892be', glow: '#8892be15', bg: '#8892be10', border: '#8892be30' },
 CMS: { accent: '#f97316', glow: '#cc785c15', bg: '#cc785c10', border: '#cc785c30' },
 'Design System': { accent: '#a78bfa', glow: '#a78bfa15', bg: '#a78bfa10', border: '#a78bfa30' },
 Mobile: { accent: '#fb923c', glow: '#fb923c15', bg: '#fb923c10', border: '#fb923c30' },
 Architecture: { accent: '#10a37f', glow: '#10a37f15', bg: '#10a37f10', border: '#10a37f30' },
 DevOps: { accent: '#f472b6', glow: '#f472b615', bg: '#f472b610', border: '#f472b630' },
 Database: { accent: '#facc15', glow: '#facc1515', bg: '#facc1510', border: '#facc1530' },
};

function cat(category: string) {
 return CATEGORY_COLORS[category] ?? { accent: '#f59e0b', glow: '#f59e0b15', bg: '#f59e0b10', border: '#f59e0b30' };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function TeamMemberPage({ params }: Props) {
 const { slug } = await params;
 const member = teamSection.members.find((m) => m.slug === slug);
 if (!member) notFound();

 const fullName = `${personal.firstName} ${personal.lastName}`;

 // Other team members for the bottom navigation
 const others = teamSection.members.filter((m) => m.slug !== slug);

 return (
 <main className="min-h-screen bg-[#0a0a0a] text-white pt-[73px]">

 <HeaderNav />
 <div className="border-b border-white/[0.08]">
 <div className="mx-auto flex max-w-7xl justify-end px-5 py-3 sm:px-8 lg:px-10">
 <a
 href="/#team"
 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/60 transition hover:text-[#f59e0b]"
 >
 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
 <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 Back to Team
 </a>
 </div>
 </div>

 {/* ── Hero — member profile ──────────────────────────────────────── */}
 <section className="relative overflow-hidden border-b border-white/[0.08]" aria-labelledby="member-name">
 {/* Subtle glow behind avatar colour */}
 <div
 aria-hidden="true"
 style={{
 position: 'absolute',
 inset: 0,
 background: `radial-gradient(ellipse 80% 60% at 30% 0%, ${member.avatarColor}12, transparent 65%)`,
 pointerEvents: 'none',
 }}
 />

 <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
 {/* Breadcrumb */}
 <nav
 aria-label="Breadcrumb"
 className="mb-12 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35"
 >
 <Link href="/" className="transition hover:text-[#f59e0b]">Home</Link>
 <span aria-hidden="true" className="text-white/20">›</span>
 <Link href="/#team" className="transition hover:text-[#f59e0b]">Team</Link>
 <span aria-hidden="true" className="text-white/20">›</span>
 <span className="text-white/50">{member.name}</span>
 </nav>

 <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">

 {/* ── Left: identity ─────────────────────────────── */}
 <div>
 <div className="flex items-center gap-5 mb-8">
 {/* Avatar */}
 {member.image ? (
 <div className="relative shrink-0 overflow-hidden rounded-full border-2 border-white/15" style={{ width: 80, height: 80 }}>
 <Image
 src={member.image}
 alt={member.name}
 fill
 sizes="80px"
 className="object-cover"
 />
 </div>
 ) : (
 <div
 aria-hidden="true"
 className="flex shrink-0 items-center justify-center rounded-full text-xl font-black"
 style={{
 width: 80,
 height: 80,
 background: member.avatarBg,
 border: `2px solid ${member.avatarColor}50`,
 color: member.avatarColor,
 letterSpacing: '0.04em',
 }}
 >
 {member.avatar}
 </div>
 )}

 {/* Status dot */}
 <div
 className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2"
 >
 <span
 aria-hidden="true"
 className="h-2 w-2 shrink-0 rounded-full"
 style={{ background: '#34d399', boxShadow: '0 0 8px rgba(52, 211, 153, 0.75)' }}
 />
 <span className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-400">
 Available for Projects
 </span>
 </div>
 </div>

 {/* Name + role */}
 <h1
 id="member-name"
 className="hero-title text-white"
 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
 >
 {member.name}
 </h1>
 <p
 className="mt-3 section-kicker"
 style={{ color: member.avatarColor }}
 >
 {member.role}
 </p>

 {/* Bio */}
 <p className="mt-6 body-copy-lg max-w-xl text-white/60">
 {member.bio}
 </p>

 {/* Skills */}
 <div className="mt-8 flex flex-wrap gap-2">
 {member.skills.map((skill) => (
 <span
 key={skill}
 className="meta-label rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1.5 text-white/60"
 >
 {skill}
 </span>
 ))}
 </div>
 </div>

 {/* ── Right: stats + links card ───────────────────── */}
 <div
 className="rounded-2xl border border-white/[0.08] bg-[#111111] p-7"
 >
 {/* Quick stats */}
 <div className="mb-7 grid grid-cols-2 gap-4">
 <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
 <p className="text-2xl font-black text-[#f59e0b]">
 {member.projects.length}
 </p>
 <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/40">
 Projects
 </p>
 </div>
 <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
 <p className="text-2xl font-black text-[#f59e0b]">
 {member.skills.length}
 </p>
 <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/40">
 Skills
 </p>
 </div>
 </div>

 {/* Social links */}
 <p className="section-kicker mb-4 text-white/35">Connect</p>
 <div className="space-y-2.5">
 {member.linkedin && (
 <a
 href={member.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/60 transition hover:border-[#0077b5]/40 hover:text-[#0077b5]"
 >
 <span>LinkedIn</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 )}
 {member.github && (
 <a
 href={member.github}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/60 transition hover:border-white/25 hover:text-white"
 >
 <span>GitHub</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 )}
 {member.website && (
 <a
 href={member.website}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/60 transition hover:border-white/25 hover:text-white"
 >
 <span>Website</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 )}
 {member.email && (
 <a
 href={`mailto:${member.email}`}
 className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/60 transition hover:border-white/25 hover:text-white"
 >
 <span>Email</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 )}
 <a
 href={contact.fiverr}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/60 transition hover:border-[#1dbf73]/40 hover:text-[#1dbf73]"
 >
 <span>Fiverr</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 <a
 href={contact.freelancer}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-white/60 transition hover:border-[#29b2fe]/40 hover:text-[#29b2fe]"
 >
 <span>Freelancer</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 <a
 href={`mailto:${contact.email}`}
 className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition"
 style={{
 borderColor: `${member.avatarColor}40`,
 background: member.avatarBg,
 color: member.avatarColor,
 }}
 >
 <span>Hire for a Project</span>
 <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
 <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Projects list ──────────────────────────────────────────────── */}
 <section
 className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
 aria-labelledby="projects-heading"
 >
 {/* Section header */}
 <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr]">
 <div>
 <p className="section-kicker">
 Portfolio
 </p>
 <h2 id="projects-heading" className="mt-5 section-title text-white">
 {member.name.split(' ')[0]}&apos;s projects.
 </h2>
 </div>
 <p className="max-w-2xl body-copy text-white/60 lg:pt-10">
 {member.projects.length} projects across{' '}
 {[...new Set(member.projects.map((p) => p.category))].join(', ')}.
 Click any project to view the full case study.
 </p>
 </div>

 {/* Project grid */}
 <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
 {member.projects.map((project, index) => {
 const c = cat(project.category);
 const globalProj = project.slug ? projects.find((p) => p.slug === project.slug) : null;
 const isLinked = !!project.slug;
 const coverImage = project.coverImage || globalProj?.coverImage;

 // Pull rich detail from global project when available
 const tagline = globalProj?.tagline || project.result;
 const overview = globalProj?.overview;
 const year = globalProj?.year;
 const metrics = globalProj?.metrics;
 const liveUrl = project.url || globalProj?.url;

 const CardContent = (
 <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] transition duration-300 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-black/40">
 {/* Cover image — shown when work screenshot is provided */}
 {coverImage && (
 <div className="relative aspect-video w-full overflow-hidden border-b border-white/[0.08]">
 <Image
 src={coverImage}
 alt={`${project.name} — ${project.category} work by ${member.name}`}
 fill
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 className="object-cover transition duration-500 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
 </div>
 )}

 {/* Top glow on hover */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
 style={{
 background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${c.glow}, transparent)`,
 }}
 />

 <div className="relative flex h-full flex-col p-7">
 {/* Index + category + year */}
 <div className="mb-5 flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className="text-sm font-black text-white/35">
 {String(index + 1).padStart(2, '0')}
 </span>
 {year && (
 <span className="meta-label text-white/25">
 · {year}
 </span>
 )}
 </div>
 <span
 className="meta-label rounded-full border px-3 py-1"
 style={{ color: c.accent, background: c.bg, borderColor: c.border }}
 >
 {project.category}
 </span>
 </div>

 {/* Name */}
 <h3
 className="subsection-title text-white transition-colors duration-200 group-hover:text-[#f59e0b]"
 style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)' }}
 >
 {project.name}
 </h3>

 {/* Tech */}
 <p className="mt-3 meta-label text-white/30">{project.tech}</p>

 {/* Tagline */}
 <p className="mt-4 small-copy text-white/60 font-medium">{tagline}</p>

 {/* Overview — from global project */}
 {overview && (
 <p className="mt-3 small-copy text-white/45 line-clamp-3">{overview}</p>
 )}

 {/* Metrics — from global project */}
 {metrics && metrics.length > 0 && (
 <div className="mt-5 grid grid-cols-2 gap-2">
 {metrics.slice(0, 4).map((m) => (
 <div
 key={m.label}
 className="rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] px-3 py-2 text-center"
 >
 <p className="text-sm font-black" style={{ color: c.accent }}>{m.value}</p>
 <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-white/35">{m.label}</p>
 </div>
 ))}
 </div>
 )}

 {/* Extra gallery thumbnails */}
 {project.images && project.images.length > 0 && (
 <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
 {project.images.map((img, i) => (
 <div
 key={i}
 className="relative shrink-0 h-14 w-20 overflow-hidden rounded-md border border-white/[0.08]"
 >
 <Image
 src={img}
 alt={`${project.name} screenshot ${i + 1}`}
 fill
 sizes="80px"
 className="object-cover"
 />
 </div>
 ))}
 </div>
 )}

 {/* CTA buttons */}
 <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-black/5 dark:border-white/5 pt-5">
 {isLinked && (
 <span
 className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-200"
 style={{ borderColor: `${c.accent}40`, color: c.accent }}
 >
 View Full Case Study
 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
 <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </span>
 )}
 {liveUrl && (
 <span
 className="meta-label rounded-full border px-3 py-1"
 style={{ color: '#10a37f', background: '#10a37f10', borderColor: '#10a37f30' }}
 >
 Live ↗
 </span>
 )}
 {!isLinked && !liveUrl && (
 <span className="meta-label text-white/35">Portfolio</span>
 )}
 </div>
 </div>
 </div>
 );

 // ── Gallery card — for projects with actual image screenshots
 if (coverImage && project.images && project.images.length > 0) {
 return (
 <ProjectGallery
 key={project.name}
 projectName={project.name}
 category={project.category}
 tech={project.tech}
 result={project.result}
 coverImage={coverImage}
 images={project.images}
 memberName={member.name}
 accentColor={c.accent}
 accentBg={c.bg}
 accentBorder={c.border}
 index={index}
 projectSlug={project.slug}
 projectUrl={project.url}
 />
 );
 }

 if (isLinked) {
 return (
 <Link
 key={project.name}
 href={`/projects/${project.slug}`}
 className="group block"
 aria-label={`View ${project.name} case study`}
 >
 {CardContent}
 </Link>
 );
 }

 if (project.url) {
 return (
 <a
 key={project.name}
 href={project.url}
 target="_blank"
 rel="noopener noreferrer"
 className="group block"
 aria-label={`Visit ${project.name} live site`}
 >
 {CardContent}
 </a>
 );
 }

 return (
 <div key={project.name} className="group block">
 {CardContent}
 </div>
 );
 })}
 </div>
 </section>

 {/* ── Other team members ─────────────────────────────────────────── */}
 {others.length > 0 && (
 <section className="border-t border-white/[0.08]" aria-labelledby="team-others-title">
 <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
 <p className="section-kicker mb-4">The Team</p>
 <h2 id="team-others-title" className="section-title text-white mb-12">
 Meet the rest of the team.
 </h2>

 <div className="grid gap-5 sm:grid-cols-2">
 {others.map((other) => (
 <Link
 key={other.slug}
 href={`/team/${other.slug}`}
 className="group flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6 transition duration-300 hover:border-black/20 hover:shadow-xl hover:shadow-black/30"
 >
 {/* Avatar */}
 {other.image ? (
 <div className="relative shrink-0 overflow-hidden rounded-full border border-white/15" style={{ width: 56, height: 56 }}>
 <Image
 src={other.image}
 alt={other.name}
 fill
 sizes="56px"
 className="object-cover"
 />
 </div>
 ) : (
 <div
 aria-hidden="true"
 className="flex shrink-0 items-center justify-center rounded-full font-black text-base"
 style={{
 width: 56,
 height: 56,
 background: other.avatarBg,
 border: `1.5px solid ${other.avatarColor}50`,
 color: other.avatarColor,
 }}
 >
 {other.avatar}
 </div>
 )}

 <div className="flex-1 min-w-0">
 <p className="font-bold text-white transition-colors group-hover:text-[#f59e0b]">
 {other.name}
 </p>
 <p
 className="mt-1 text-xs font-bold uppercase tracking-[0.08em]"
 style={{ color: other.avatarColor }}
 >
 {other.role}
 </p>
 <p className="mt-2 text-xs text-white/40">
 {other.projects.length} projects
 </p>
 </div>

 <svg
 width="18"
 height="18"
 viewBox="0 0 18 18"
 fill="none"
 aria-hidden="true"
 className="shrink-0 text-white/20 transition-colors group-hover:text-[#f59e0b]"
 >
 <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 </Link>
 ))}
 </div>
 </div>
 </section>
 )}

 {/* ── CTA ───────────────────────────────────────────────────────── */}
 <section className="border-t border-white/[0.08]" aria-label="Hire CTA">
 <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
 <aside
 className="relative overflow-hidden rounded-2xl border border-[#f59e0b30] bg-[#111111] p-10 sm:p-14"
 >
 <div
 aria-hidden="true"
 className="pointer-events-none absolute inset-0"
 style={{ background: 'radial-gradient(ellipse 70% 60% at 100% 0%, #f59e0b10, transparent)' }}
 />
 <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
 <div>
 <p className="section-kicker">Work with {member.name.split(' ')[0]}</p>
 <h2 className="mt-4 section-title text-white max-w-xl">
 Have a project that needs this expertise?
 </h2>
 <p className="mt-5 body-copy text-white/60 max-w-lg">
 Reach out and let us know your scope — we work remotely with clients worldwide and
 can help you build something great.
 </p>
 </div>
 <div className="flex flex-col gap-3">
 <a
 href={`mailto:${contact.email}`}
 className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#f59e0b] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white"
 >
 Get in Touch
 </a>
 <Link
 href="/#team"
 className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/[0.08] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
 >
 View Full Team
 </Link>
 </div>
 </div>
 </aside>
 </div>
 </section>

 {/* ── Footer ────────────────────────────────────────────────────── */}
 <footer className="border-t border-white/[0.08] px-5 py-8 text-center">
 <p className="text-xs text-white/30">
 © {new Date().getFullYear()} {fullName}.{' '}
 <Link href="/" className="transition hover:text-[#f59e0b]">Back to Portfolio</Link>
 </p>
 </footer>

 </main>
 );
}
