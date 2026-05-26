import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services, projects, teamSection, seo, personal, contact, servicesSection } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

// ── Types ─────────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

// ── SEO ───────────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.seoTitle || `${service.label} Services | ${personal.firstName} Sandhu`;
  const description = service.seoDescription || `Custom ${service.label} services built with precision.`;
  const url = `${seo.siteUrl}/services/${slug}`;
  const serviceStack = servicesSection.serviceStacks[service.label] || [];
  
  const keywords = [
    service.label,
    ...serviceStack,
    `${personal.firstName} Sandhu`,
    'freelance full stack developer',
    'remote developer',
    'web development services',
  ].join(', ');

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: [{ url: `${seo.siteUrl}${seo.ogImage || '/og-image.png'}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// ── Category colours for case studies ─────────────────────────────────────────
const CATEGORY_COLORS: Record<string, { accent: string; glow: string; bg: string; border: string }> = {
  Frontend:        { accent: '#61dafb', glow: '#61dafb15', bg: '#61dafb10', border: '#61dafb30' },
  Backend:         { accent: '#68a063', glow: '#68a06315', bg: '#68a06310', border: '#68a06330' },
  'E-Commerce':    { accent: '#d6ad63', glow: '#d6ad6315', bg: '#d6ad6310', border: '#d6ad6330' },
  API:             { accent: '#8892be', glow: '#8892be15', bg: '#8892be10', border: '#8892be30' },
  CMS:             { accent: '#e8a88a', glow: '#cc785c15', bg: '#cc785c10', border: '#cc785c30' },
  'Design System': { accent: '#a78bfa', glow: '#a78bfa15', bg: '#a78bfa10', border: '#a78bfa30' },
  Mobile:          { accent: '#fb923c', glow: '#fb923c15', bg: '#fb923c10', border: '#fb923c30' },
  Architecture:    { accent: '#10a37f', glow: '#10a37f15', bg: '#10a37f10', border: '#10a37f30' },
  DevOps:          { accent: '#f472b6', glow: '#f472b615', bg: '#f472b610', border: '#f472b630' },
  Database:        { accent: '#facc15', glow: '#facc1515', bg: '#facc1510', border: '#facc1530' },
};

function cat(category: string) {
  return CATEGORY_COLORS[category] ?? { accent: '#d6ad63', glow: '#d6ad6315', bg: '#d6ad6310', border: '#d6ad6330' };
}

// ── Match Projects and Team members ──────────────────────────────────────────
function getRelatedProjects(serviceLabel: string, stack: string[]) {
  const normalizedLabel = serviceLabel.toLowerCase();
  
  return projects.filter((p) => {
    // 1. Direct category match
    if (p.category.toLowerCase().includes(normalizedLabel)) return true;
    
    // 2. Overview / Solution keyword match
    const textToSearch = `${p.name} ${p.overview} ${p.challenge} ${p.solution}`.toLowerCase();
    if (normalizedLabel.split(' ').some(word => word.length > 2 && textToSearch.includes(word))) return true;

    // 3. Tech Stack item match
    const flatTech = p.techStack.flatMap(group => group.items).map(item => item.toLowerCase());
    if (stack.some(tech => flatTech.includes(tech.toLowerCase()))) return true;
    
    return false;
  }).slice(0, 3);
}

function getRelatedTeam(stack: string[]) {
  return teamSection.members.filter((m) => {
    const memberSkills = m.skills.map(s => s.toLowerCase());
    return stack.some(tech => memberSkills.includes(tech.toLowerCase()));
  });
}

// ── Page Component ────────────────────────────────────────────────────────────
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const label = service.label;
  const description = service.description || '';
  const copy = servicesSection.serviceCopy[label] || '';
  const tag = servicesSection.serviceTags[label] || 'Web';
  const stack = servicesSection.serviceStacks[label] || [];

  const relatedProjects = getRelatedProjects(label, stack);
  const relatedTeam = getRelatedTeam(stack);
  const otherServices = services.filter((s) => s.slug && s.slug !== slug);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0b0d0e] text-[#0b0d0e] dark:text-white">
      <HeaderNav />
      
      {/* ── Breadcrumb & Utility Bar ───────────────────────────────────────── */}
      <div className="border-b border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="mx-auto flex max-w-7xl justify-between items-center px-5 py-3 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/35 dark:text-white/35">
            <Link href="/" className="transition hover:text-[#d6ad63]">Home</Link>
            <span aria-hidden="true" className="text-black/20 dark:text-white/20">›</span>
            <Link href="/#services" className="transition hover:text-[#d6ad63]">Services</Link>
            <span aria-hidden="true" className="text-black/20 dark:text-white/20">›</span>
            <span className="text-black/50 dark:text-white/50">{label}</span>
          </nav>
          
          <a
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/60 dark:text-white/60 transition hover:text-[#d6ad63]"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="rotate-180">
              <path d="M5 3L10 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Services
          </a>
        </div>
      </div>

      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10" aria-labelledby="service-title">
        {/* Subtle decorative glowing background blur */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/4 h-[400px] w-[500px] rounded-full bg-[#d6ad63]/5 blur-[120px] dark:bg-[#d6ad63]/[0.03]"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
            
            {/* Left Column: Identity & Service Core */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="rounded-full border border-[#d6ad63]/30 bg-[#d6ad63]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#d6ad63]">
                  {tag}
                </span>
                
                <div className="flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-3.5 py-1">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-500 dark:text-emerald-400">
                    Active Offering
                  </span>
                </div>
              </div>

              <h1
                id="service-title"
                className="hero-title text-[#0b0d0e] dark:text-white leading-tight font-black"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                {label}
              </h1>
              
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-black/75 dark:text-white/80">
                {description}
              </p>
              
              <p className="mt-6 max-w-3xl body-copy text-black/60 dark:text-white/60">
                {copy}
              </p>

              {/* Technologies / Specializations Badges */}
              <div className="mt-10">
                <h2 className="meta-label text-black/45 dark:text-white/45 mb-4 uppercase tracking-[0.14em]">Core Stack & Competencies</h2>
                <div className="flex flex-wrap gap-2.5">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-2 text-sm font-semibold text-black/70 dark:text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Details Box */}
            <aside className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01] p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#d6ad63] mb-6">Service Delivery</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-black/40 dark:text-white/40 uppercase">Delivery Model</h4>
                  <p className="mt-1 text-sm font-semibold">Remote Freelance (Global)</p>
                </div>

                <div className="border-t border-black/10 dark:border-white/10 pt-4">
                  <h4 className="text-xs font-bold text-black/40 dark:text-white/40 uppercase">Common Tech</h4>
                  <p className="mt-1 text-sm font-semibold">{stack.slice(0, 3).join(', ')}</p>
                </div>

                <div className="border-t border-black/10 dark:border-white/10 pt-4">
                  <h4 className="text-xs font-bold text-black/40 dark:text-white/40 uppercase">Typical Timeline</h4>
                  <p className="mt-1 text-sm font-semibold">1 to 4 weeks depending on scope</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`mailto:${contact.email}?subject=Inquiry regarding ${label} services`}
                  className="flex w-full min-h-[50px] items-center justify-center rounded-full bg-[#d6ad63] px-6 text-xs font-bold uppercase tracking-[0.14em] text-[#0b0d0e] transition duration-200 hover:bg-white hover:text-[#0b0d0e] border border-transparent hover:border-black/10 dark:hover:border-white/10"
                >
                  Book Service
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Case Studies Section ───────────────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="border-b border-black/10 dark:border-white/10 py-20 lg:py-28" aria-labelledby="projects-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12">
              <p className="section-kicker">Case Studies</p>
              <h2 id="projects-heading" className="mt-3 section-title text-[#0b0d0e] dark:text-white">
                Related Work & Projects
              </h2>
              <p className="mt-4 max-w-2xl small-copy text-black/60 dark:text-white/60">
                Selected production builds demonstrating expertise and results in {label}.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => {
                const colorObj = cat(p.category);
                return (
                  <article
                    key={p.slug}
                    className="interactive-card group overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1214] flex flex-col h-full"
                  >
                    {/* Visual aspect ratios */}
                    {p.coverImage && (
                      <div className="relative aspect-video overflow-hidden border-b border-black/10 dark:border-white/10">
                        <Image
                          src={p.coverImage}
                          alt={`${p.name} case study - ${p.category} build`}
                          fill
                          sizes="(max-w-768px) 100vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center gap-4 mb-4">
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]"
                          style={{
                            color: colorObj.accent,
                            backgroundColor: colorObj.bg,
                            border: `1px solid ${colorObj.border}`,
                          }}
                        >
                          {p.category}
                        </span>
                        <span className="text-[10px] font-semibold text-black/40 dark:text-white/40">{p.year}</span>
                      </div>

                      <h3 className="card-title text-[#0b0d0e] dark:text-white group-hover:text-[#d6ad63] transition duration-200">
                        <Link href={`/projects/${p.slug}`} className="focus:outline-none">
                          {p.name}
                        </Link>
                      </h3>

                      <p className="mt-3 small-copy text-black/58 dark:text-white/58 line-clamp-3 flex-grow">
                        {p.overview}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
                        <span className="text-xs font-semibold text-[#d6ad63] group-hover:underline inline-flex items-center gap-1.5">
                          Read Case Study
                          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition group-hover:translate-x-0.5">
                            <path d="M5 3L10 8L5 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Team Collaboration Section ──────────────────────────────────────── */}
      {relatedTeam.length > 0 && (
        <section className="border-b border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416] py-20 lg:py-28" aria-labelledby="team-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12">
              <p className="section-kicker">Expertise</p>
              <h2 id="team-heading" className="mt-3 section-title text-[#0b0d0e] dark:text-white">
                Team Capabilities
              </h2>
              <p className="mt-4 max-w-2xl small-copy text-black/60 dark:text-white/60">
                Meet team members collaborating on {label} workflows to deliver exceptional product quality.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTeam.map((m) => (
                <div
                  key={m.slug}
                  className="interactive-card rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#0f1214] p-6 flex items-center gap-5"
                >
                  {m.image ? (
                    <div className="relative shrink-0 overflow-hidden rounded-full border border-black/10 dark:border-white/10" style={{ width: 64, height: 64 }}>
                      <Image src={m.image} alt={m.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex shrink-0 items-center justify-center rounded-full text-base font-black"
                      style={{
                        width: 64,
                        height: 64,
                        background: m.avatarBg,
                        border: `1.5px solid ${m.avatarColor}40`,
                        color: m.avatarColor,
                      }}
                    >
                      {m.avatar}
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-black text-[#0b0d0e] dark:text-white hover:text-[#d6ad63] transition duration-200">
                      <Link href={`/team/${m.slug}`}>
                        {m.name}
                      </Link>
                    </h3>
                    <p className="text-xs font-semibold text-black/45 dark:text-white/45 mt-1">{m.role}</p>
                    <p className="text-[11px] font-bold text-[#d6ad63] mt-2 uppercase tracking-[0.05em]">{m.skills.slice(0, 3).join(' • ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Dynamic FAQ Section ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="section-kicker">Faq</p>
            <h2 id="faq-heading" className="mt-3 section-title text-[#0b0d0e] dark:text-white">
              Service FAQ
            </h2>
            <p className="mt-4 max-w-xl mx-auto small-copy text-black/60 dark:text-white/60">
              Clear answers regarding our workflow, onboarding, delivery formats, and engagement models.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group border border-black/10 dark:border-white/10 rounded-lg bg-black/[0.01] dark:bg-white/[0.01] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-base font-bold text-[#0b0d0e] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#d6ad63] rounded-lg">
                <span>What is the first step in starting a {label} project?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-black/40 dark:text-white/40">
                  ▼
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-black/60 dark:text-white/65 leading-relaxed border-t border-black/5 dark:border-white/5 mt-2">
                We begin with a brief email discovery and, if required, a technical brief consultation. Once requirements, scope, tech stack, and milestone timelines are defined, we sign a simple freelance services agreement and initiate development.
              </div>
            </details>

            <details className="group border border-black/10 dark:border-white/10 rounded-lg bg-black/[0.01] dark:bg-white/[0.01] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-base font-bold text-[#0b0d0e] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#d6ad63] rounded-lg">
                <span>Who owns the codebase and deployment assets?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-black/40 dark:text-white/40">
                  ▼
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-black/60 dark:text-white/65 leading-relaxed border-t border-black/5 dark:border-white/5 mt-2">
                You own 100% of the IP, source code, repositories, and config variables. Code is pushed directly to your GitHub/GitLab account and we hand over all documentation upon successful completion of the deployment milestone.
              </div>
            </details>

            <details className="group border border-black/10 dark:border-white/10 rounded-lg bg-black/[0.01] dark:bg-white/[0.01] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-base font-bold text-[#0b0d0e] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#d6ad63] rounded-lg">
                <span>Do you provide maintenance and updates post-launch?</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-black/40 dark:text-white/40">
                  ▼
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-black/60 dark:text-white/65 leading-relaxed border-t border-black/5 dark:border-white/5 mt-2">
                Yes. Every project includes 14 days of free post-launch support covering bug fixes. Beyond that, we offer monthly maintenance retainers or hourly support agreements to keep your system fully updated and secure.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── Action Section (CTA) ─────────────────────────────────────────────── */}
      <section className="border-t border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111416] py-16 lg:py-24 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="section-title text-[#0b0d0e] dark:text-white">
            Need {label} support?
          </h2>
          <p className="mt-5 text-base text-black/60 dark:text-white/60 max-w-xl mx-auto">
            Let&apos;s build a reliable solution using {stack.slice(0, 3).join(', ')}. Contact me to outline specifications and get a precise budget estimate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${contact.email}?subject=Project Consultation: ${label}`}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#d6ad63] px-8 text-xs font-bold uppercase tracking-[0.14em] text-[#0b0d0e] transition duration-200 hover:bg-white hover:text-[#0b0d0e] border border-transparent hover:border-black/10 dark:hover:border-white/10"
            >
              Start Conversation
            </a>
            <Link
              href="/#services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-8 text-xs font-bold uppercase tracking-[0.14em] text-black dark:text-white hover:border-[#d6ad63] hover:text-[#d6ad63] transition duration-200"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
