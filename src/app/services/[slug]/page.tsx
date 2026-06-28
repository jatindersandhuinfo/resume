import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services, projects, teamSection, seo, personal, contact } from '@/lib/data';
import { servicesDetailData } from '@/lib/services-detail-data';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';
import {
 CheckCircle2, 
 HelpCircle, 
 Settings, 
 Cpu, 
 Database as DbIcon, 
 Zap, 
 Terminal, 
 Workflow, 
 ShieldCheck,
 Clock,
 ArrowRight,
 Code,
 AlertCircle,
 Play,
 Briefcase
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
 return services.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const service = services.find((s) => s.slug === slug);
 if (!service) return {};

 const detail = servicesDetailData[slug];
 const title = detail?.seoTitle || service.seoTitle || `${service.label} Services | ${personal.firstName} Sandhu`;
 const description = detail?.seoDescription || service.seoDescription || `Custom ${service.label} services built with precision.`;
 const url = `${seo.siteUrl}/services/${slug}`;
 
 const keywords = [
 detail?.primaryKeyword || service.label,
 `${personal.firstName} Sandhu`,
 'freelance full stack developer',
 'remote developer',
 'web development services',
 'software engineering services'
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
 images: [{ url: seo.ogImage, width: 960, height: 1200, alt: title }],
 },
 twitter: {
 card: 'summary_large_image',
 title,
 description,
 images: { url: seo.ogImage, alt: title },
 },
 };
}

// ── Category colours for case studies ─────────────────────────────────────────
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

// ── Match Projects dynamically if not explicitly specified ───────────────────
function getRelatedProjects(serviceLabel: string, stack: string[]) {
 const normalizedLabel = serviceLabel.toLowerCase();
 
 return projects.filter((p) => {
 if (p.category.toLowerCase().includes(normalizedLabel)) return true;
 
 const textToSearch = `${p.name} ${p.overview} ${p.challenge} ${p.solution}`.toLowerCase();
 if (normalizedLabel.split(' ').some(word => word.length > 2 && textToSearch.includes(word))) return true;

 const flatTech = p.techStack.flatMap(group => group.items).map(item => item.toLowerCase());
 if (stack.some(tech => flatTech.includes(tech.toLowerCase()))) return true;
 
 return false;
 }).slice(0, 3);
}

// ── Development Process Data ──────────────────────────────────────────────────
const DEVELOPMENT_PROCESS = [
 {
 phase: 'Discovery',
 description: 'Understanding business goals, target audience flows, and scoping out requirements into a clear backlog document.',
 },
 {
 phase: 'Planning',
 description: 'Drafting data schema flowcharts, API specifications, user journeys, and structuring milestone-based delivery dates.',
 },
 {
 phase: 'Architecture',
 description: 'Selecting optimized technologies, designing relational table linkages or NoSQL patterns, and preparing environment structures.',
 },
 {
 phase: 'Development',
 description: 'Writing clean, typed, modular code with daily version control commits, strict validation guards, and design system hooks.',
 },
 {
 phase: 'Testing',
 description: 'Running unit validation scripts, API route calls, mobile-responsive layout testing, and security scanning for loops or leaks.',
 },
 {
 phase: 'Deployment',
 description: 'Publishing builds to secure edge servers with automatic compilation pipelines, database indexing checks, and custom domain paths.',
 },
 {
 phase: 'Maintenance',
 description: 'Monitoring server log files, installing safety package updates, generating databases backups, and executing performance tweaks.',
 },
];

export default async function ServicePage({ params }: Props) {
 const { slug } = await params;
 const service = services.find((s) => s.slug === slug);
 if (!service) notFound();

 // Load detailed rich SEO landing data
 const detail = servicesDetailData[slug];
 if (!detail) notFound();

 const label = detail.label;
 const tag = detail.tag;
 const stack = detail.technologies.map(t => t.name);

 // Match Featured Projects (explicitly configured vs dynamically matched)
 let relatedProjects = [];
 if (detail.featuredProjectSlugs && detail.featuredProjectSlugs.length > 0) {
 relatedProjects = projects.filter(p => detail.featuredProjectSlugs?.includes(p.slug));
 } else {
 relatedProjects = getRelatedProjects(label, stack);
 }

 // FAQ Schema JSON-LD
 const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: detail.faqs.map((faq) => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer,
 },
 })),
 };

 // Service Schema JSON-LD
 const serviceSchema = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 name: detail.hero.title,
 provider: {
 '@type': 'Person',
 name: `${personal.firstName} ${personal.lastName}`,
 url: seo.siteUrl,
 },
 areaServed: 'Worldwide',
 serviceType: detail.label,
 description: detail.seoDescription,
 offers: {
 '@type': 'Offer',
 priceCurrency: 'USD',
 price: 'Negotiable',
 priceRange: '$$',
 },
 };

  return (
    <main className="min-h-screen bg-studio text-canvas font-sans antialiased pt-[73px]">
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/<\/script>/gi, '<\\/script>') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/<\/script>/gi, '<\\/script>') }}
      />

      <HeaderNav />

      {/* ── Breadcrumb & Utility Bar ── */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <Link href="/services" className="transition hover:text-gold">Services</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <span className="text-white/55">{label}</span>
          </nav>
          <Link
            href="/services"
            className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 transition hover:text-gold"
          >
            ← All Services
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-studio" aria-labelledby="service-title">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full bg-gold/[0.05] blur-[120px]"
        />
        {/* Ghost chapter number */}
        <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
          <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Service</p>
          <p className="chapter-number-bg leading-none">01</p>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">

            {/* Left: Hero text */}
            <div>
              <p className="chapter-label mb-8">{tag} Service</p>

              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-none border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)] animate-pulse" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-emerald-400">
                    Active Offering
                  </span>
                </div>
              </div>

              <h1
                id="service-title"
                className="font-bebas text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] tracking-[0.01em] uppercase text-canvas"
              >
                {detail.hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65">
                {detail.hero.subheading}
              </p>

              {/* Quick jump */}
              <div className="mt-8 flex flex-wrap gap-5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35">
                <a href="#what-i-do" className="transition hover:text-gold">01. What I Do</a>
                <a href="#services-included" className="transition hover:text-gold">02. Services Included</a>
                <a href="#process" className="transition hover:text-gold">03. Process</a>
                <a href="#faq" className="transition hover:text-gold">04. FAQ</a>
              </div>
            </div>

            {/* Right: Details card */}
            <aside className="border border-white/[0.08] bg-surface p-6 lg:p-8">
              <p className="chapter-label mb-6">Service Delivery</p>

              <div className="space-y-0">
                {[
                  { icon: <Clock size={12} />, label: 'Delivery Model', value: 'Remote (Global)' },
                  { icon: <Code size={12} />, label: 'Common Tech', value: stack.slice(0, 3).join(', ') },
                  { icon: <Settings size={12} />, label: 'Typical Timeline', value: '2 to 6 weeks depending on scope' },
                  { icon: <ShieldCheck size={12} />, label: 'IP Ownership', value: '100% Client-Owned Source' },
                ].map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4 border-b border-white/[0.05] py-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                      {row.icon} {row.label}
                    </span>
                    <span className="text-right text-sm font-semibold text-canvas/80">{row.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${contact.email}?subject=Inquiry regarding ${label} services`}
                className="mt-8 flex w-full min-h-[50px] items-center justify-center bg-gold px-6 text-xs font-bold uppercase tracking-[0.22em] text-studio transition duration-200 hover:bg-gold-light"
              >
                Book Service →
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section id="what-i-do" className="border-b border-white/[0.07] bg-surface py-20 scroll-mt-10 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="chapter-label mb-6">01 / Overview</p>
              <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
                Core Capabilities &amp; Scope
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/65">
                {detail.whatIDo.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:self-center">
              {[
                { icon: <Play size={12} />, title: 'Who It Is For', dot: 'text-gold', items: detail.whatIDo.whoIsItFor },
                { icon: <AlertCircle size={12} />, title: 'Problems Solved', dot: 'text-red-500', items: detail.whatIDo.problemsSolved },
                { icon: <CheckCircle2 size={12} />, title: 'Core Benefits', dot: 'text-emerald-500', items: detail.whatIDo.benefits },
              ].map((box) => (
                <div key={box.title} className="border border-white/[0.06] bg-studio p-5">
                  <h3 className="mb-3 flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
                    {box.icon} {box.title}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-white/60">
                    {box.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1 font-bold ${box.dot}`}>·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Included ── */}
      <section id="services-included" className="border-b border-white/[0.07] bg-studio py-20 scroll-mt-10 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="mb-14 text-center">
            <p className="chapter-label mb-6 justify-center">02 / Offerings</p>
            <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
              What Is Included
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/55">
              A comprehensive breakdown of all features and tasks handled under the {label} scope.
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {detail.servicesIncluded.map((sub, idx) => (
              <div
                key={idx}
                className="group border-b border-white/[0.04] bg-studio p-6 transition duration-200 hover:bg-surface last:border-b-0"
              >
                <span className="mb-5 inline-flex h-8 w-8 items-center justify-center border border-gold/30 text-xs font-bold text-gold">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <h3 className="text-sm font-bold text-canvas mb-2 transition group-hover:text-gold">{sub.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="border-b border-white/[0.07] bg-surface py-20 scroll-mt-10 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-start">
            <div>
              <p className="chapter-label mb-6">03 / Technologies</p>
              <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
                Tech Stack Focus
              </h2>
              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                Technologies selected for scalability, speed, and production reliability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detail.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-start gap-4 border border-white/[0.06] bg-studio p-5">
                  <div className="mt-0.5 shrink-0 border border-gold/25 bg-gold/[0.05] p-2 text-gold">
                    <Terminal size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-canvas mb-1.5">{tech.name}</h3>
                    <p className="text-xs text-white/55 leading-relaxed">{tech.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions Built ── */}
      <section className="border-b border-white/[0.07] bg-studio py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="mb-14 text-center">
            <p className="chapter-label mb-6 justify-center">04 / Product Scopes</p>
            <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
              Solutions I Build
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/55">
              Custom applications and system layers built to replace slow, manual operations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {detail.solutionsBuilt.map((sol, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 border border-white/[0.08] bg-surface px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white/70 transition hover:border-gold/40 hover:text-gold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
                {sol}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Process ── */}
      <section id="process" className="border-b border-white/[0.07] bg-surface py-20 scroll-mt-10 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="mb-16">
            <p className="chapter-label mb-6">05 / Methodology</p>
            <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
              The Development Process
            </h2>
            <p className="mt-5 max-w-2xl text-sm text-white/55">
              A structured lifecycle designed to build correct architectures, catch logical gaps early, and launch securely.
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {DEVELOPMENT_PROCESS.map((step, idx) => (
              <div
                key={idx}
                className="bg-studio p-6 transition duration-200 hover:bg-surface-dark"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-bebas text-5xl leading-none text-white/[0.06]">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="border border-gold/30 bg-gold/[0.05] px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-gold">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-canvas mb-2">{step.phase}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Work With Me ── */}
      <section className="border-b border-white/[0.07] bg-studio py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="mb-14 text-center">
            <p className="chapter-label mb-6 justify-center">06 / Commitment</p>
            <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
              Why Work With Me
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/55">
              Clean, secure code and direct communication pathways without broker layers.
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {detail.whyWorkWithMe.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-studio p-6 transition hover:bg-surface">
                <div className="mt-0.5 shrink-0 border border-emerald-500/25 bg-emerald-500/[0.05] p-2 text-emerald-500">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-canvas mb-1.5">{item.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      {relatedProjects.length > 0 && (
        <section id="proof" className="border-b border-white/[0.07] bg-surface py-20 scroll-mt-10 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <div className="mb-12">
              <p className="chapter-label mb-6">07 / Case Studies</p>
              <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
                Featured Projects &amp; Proof
              </h2>
              <p className="mt-5 max-w-2xl text-sm text-white/55">
                Selected production builds demonstrating engineering excellence in {label} services.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {relatedProjects.map((p) => {
                const colorObj = cat(p.category);
                return (
                  <article
                    key={p.slug}
                    className="flex flex-col border border-white/[0.07] bg-studio p-6 transition duration-300 hover:bg-surface-dark"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span
                        className="px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em]"
                        style={{ color: colorObj.accent, backgroundColor: colorObj.bg, border: `1px solid ${colorObj.border}` }}
                      >
                        {p.category}
                      </span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/35">{p.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-canvas transition hover:text-gold mb-3">
                      <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                    </h3>
                    <p className="text-sm text-white/55 mb-6">{p.tagline}</p>

                    <div className="flex-grow space-y-4 border-t border-white/[0.05] pt-4 mb-6">
                      <div>
                        <h4 className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-red-400">Challenge</h4>
                        <p className="text-xs text-white/55 leading-relaxed line-clamp-3">{p.challenge}</p>
                      </div>
                      <div>
                        <h4 className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-emerald-400">Solution</h4>
                        <p className="text-xs text-white/55 leading-relaxed line-clamp-3">{p.solution}</p>
                      </div>
                      <div>
                        <h4 className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-gold">Results</h4>
                        <p className="text-xs text-white/55 leading-relaxed line-clamp-2">{p.result}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/[0.05] pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.split('·').slice(0, 3).map((t) => (
                          <span key={t} className="bg-white/[0.04] px-2 py-0.5 text-[0.6rem] font-bold text-white/40">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                      <Link href={`/projects/${p.slug}`} className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-gold transition hover:text-gold-light">
                        Case Study <ArrowRight size={11} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section id="faq" className="border-b border-white/[0.07] bg-studio py-20 scroll-mt-10 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-16 text-center">
            <p className="chapter-label mb-6 justify-center">08 / Questions</p>
            <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] leading-[0.9] uppercase text-canvas">
              Service FAQ
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/55">
              Detailed answers regarding scopes, pricing, timelines, and contract conditions for {label} implementations.
            </p>
          </div>

          <div className="space-y-px">
            {detail.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-white/[0.07] bg-surface [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-6 py-5 text-sm font-bold text-canvas focus:outline-none select-none transition hover:text-gold">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={16} className="shrink-0 text-gold" />
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-white/35 transition-transform duration-300 group-open:-rotate-180 text-xs">▼</span>
                </summary>
                <div className="border-t border-white/[0.05] px-6 pb-6 pt-4 text-sm text-white/65 leading-relaxed">
                  <div className="pl-7">{faq.answer}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-studio py-28 text-center lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8 justify-center">Start a Project</p>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,7rem)] leading-[0.9] uppercase text-canvas">
            {detail.cta.headline}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            {detail.cta.subheadline}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href={`mailto:${contact.email}?subject=Project Consultation: ${label}`}
              className="inline-flex min-h-[50px] items-center justify-center bg-gold px-10 text-xs font-bold uppercase tracking-[0.22em] text-studio transition duration-200 hover:bg-gold-light"
            >
              Start Conversation →
            </a>
            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center justify-center border border-white/20 px-10 text-xs font-bold uppercase tracking-[0.22em] text-canvas transition duration-200 hover:border-gold/60 hover:text-gold"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
