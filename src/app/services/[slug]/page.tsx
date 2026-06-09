import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services, projects, teamSection, seo, personal, contact } from '@/lib/data';
import { servicesDetailData } from '@/lib/services-detail-data';
import HeaderNav from '@/components/HeaderNav';
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
 <main className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased pt-[73px]">
 {/* Dynamic JSON-LD injection */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
 />

 <HeaderNav />
 
 {/* ── Breadcrumb & Utility Bar ───────────────────────────────────────── */}
 <div className="border-b border-white/[0.08] bg-black/[0.01] ">
 <div className="mx-auto flex max-w-7xl justify-between items-center px-5 py-3.5 sm:px-8 lg:px-10">
 <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
 <Link href="/" className="transition hover:text-[#f59e0b]">Home</Link>
 <span aria-hidden="true" className="text-white/20">›</span>
 <Link href="/#services" className="transition hover:text-[#f59e0b]">Services</Link>
 <span aria-hidden="true" className="text-white/20">›</span>
 <span className="text-white/50">{label}</span>
 </nav>
 
 <Link
 href="/#services"
 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60 transition hover:text-[#f59e0b]"
 >
 <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="rotate-180">
 <path d="M5 3L10 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 All Services
 </Link>
 </div>
 </div>

 {/* ── Hero Section ───────────────────────────────────────────────────── */}
 <section className="relative overflow-hidden border-b border-white/[0.08] bg-gradient-to-b from-black/[0.01] to-transparent dark:from-white/[0.01] dark:to-transparent" aria-labelledby="service-title">
 <div
 aria-hidden="true"
 className="absolute -top-40 left-1/4 h-[400px] w-[500px] rounded-full bg-[#f59e0b]/5 blur-[120px] /[0.02]"
 />

 <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
 <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
 
 {/* Left Column: Identity & Service Core */}
 <div>
 <div className="flex items-center gap-4 mb-6">
 <span className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#f59e0b]">
 {tag}
 </span>
 
 <div className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1">
 <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)] animate-pulse" />
 <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-600 dark:text-emerald-400">
 Active Offering
 </span>
 </div>
 </div>

 <h1
 id="service-title"
 className="hero-title text-white leading-tight font-black tracking-tight"
 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
 >
 {detail.hero.title}
 </h1>
 
 <p className="mt-6 max-w-2xl text-xl leading-relaxed text-black/75 text-white/80 font-medium">
 {detail.hero.subheading}
 </p>

 {/* Quick Jump Links */}
 <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.1em] text-black/45 text-white/40">
 <a href="#what-i-do" className="hover:text-[#f59e0b] transition">01. What I Do</a>
 <span>•</span>
 <a href="#services-included" className="hover:text-[#f59e0b] transition">02. Services Included</a>
 <span>•</span>
 <a href="#process" className="hover:text-[#f59e0b] transition">03. Development Process</a>
 <span>•</span>
 <a href="#faq" className="hover:text-[#f59e0b] transition">04. Service FAQ</a>
 </div>
 </div>

 {/* Right Column: Key Details Box */}
 <aside className="rounded-xl border border-white/[0.08] bg-black/[0.01] p-6 lg:p-8 backdrop-blur-sm shadow-xl shadow-black/[0.02] dark:shadow-black/20">
 <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#f59e0b] mb-6 flex items-center gap-2">
 <Briefcase size={16} /> Service Delivery
 </h3>
 
 <div className="space-y-6">
 <div>
 <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.05em] flex items-center gap-1.5">
 <Clock size={12} /> Delivery Model
 </h4>
 <p className="mt-1 text-sm font-semibold">Remote (Global)</p>
 </div>

 <div className="border-t border-white/[0.08] pt-4">
 <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.05em] flex items-center gap-1.5">
 <Code size={12} /> Common Tech
 </h4>
 <p className="mt-1 text-sm font-semibold">{stack.slice(0, 3).join(', ')}</p>
 </div>

 <div className="border-t border-white/[0.08] pt-4">
 <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.05em] flex items-center gap-1.5">
 <Settings size={12} /> Typical Timeline
 </h4>
 <p className="mt-1 text-sm font-semibold">2 to 6 weeks depending on scope</p>
 </div>

 <div className="border-t border-white/[0.08] pt-4">
 <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.05em] flex items-center gap-1.5">
 <ShieldCheck size={12} /> IP Ownership
 </h4>
 <p className="mt-1 text-sm font-semibold">100% Client-Owned Source</p>
 </div>
 </div>

 <div className="mt-8">
 <a
 href={`mailto:${contact.email}?subject=Inquiry regarding ${label} services`}
 className="flex w-full min-h-[50px] items-center justify-center rounded-full bg-[#f59e0b] px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-transparent hover:border-black/10 dark:hover:border-white/10 shadow-md shadow-[#f59e0b]/10"
 >
 Book Service
 </a>
 </div>
 </aside>

 </div>
 </div>
 </section>

 {/* ── Section: What I Do ──────────────────────────────────────────────── */}
 <section id="what-i-do" className="py-20 lg:py-28 border-b border-white/[0.08] scroll-mt-10">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="grid gap-12 lg:grid-cols-2">
 
 {/* Left side: Detailed SEO Essay */}
 <div>
 <p className="section-kicker">01 / Overview</p>
 <h2 className="mt-3 section-title text-white">
 Core Capabilities & Scope
 </h2>
 <div className="mt-6 text-base leading-relaxed text-white/70 space-y-4">
 {/* Render paragraphs cleanly */}
 {detail.whatIDo.description.split('\n\n').map((para, i) => (
 <p key={i}>{para}</p>
 ))}
 </div>
 </div>

 {/* Right side: High-density quick columns */}
 <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:self-center">
 
 <div className="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] ">
 <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#f59e0b] mb-3 flex items-center gap-1.5">
 <Play size={12} className="text-[#f59e0b]" /> Who It Is For
 </h3>
 <ul className="space-y-2 text-sm text-white/60">
 {detail.whatIDo.whoIsItFor.map((item, idx) => (
 <li key={idx} className="flex items-start gap-2">
 <span className="text-[#f59e0b] font-bold mt-0.5">•</span>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] ">
 <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#f59e0b] mb-3 flex items-center gap-1.5">
 <AlertCircle size={12} className="text-[#f59e0b]" /> Problems Solved
 </h3>
 <ul className="space-y-2 text-sm text-white/60">
 {detail.whatIDo.problemsSolved.map((item, idx) => (
 <li key={idx} className="flex items-start gap-2">
 <span className="text-red-500 font-bold mt-0.5">•</span>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] ">
 <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#f59e0b] mb-3 flex items-center gap-1.5">
 <CheckCircle2 size={12} className="text-emerald-500" /> Core Benefits
 </h3>
 <ul className="space-y-2 text-sm text-white/60">
 {detail.whatIDo.benefits.map((item, idx) => (
 <li key={idx} className="flex items-start gap-2">
 <span className="text-emerald-500 font-bold mt-0.5">•</span>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 </div>

 </div>
 </div>
 </section>

 {/* ── Section: Services Included ───────────────────────────────────────── */}
 <section id="services-included" className="py-20 lg:py-28 border-b border-white/[0.08] bg-black/[0.01] scroll-mt-10">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="mb-12 text-center max-w-2xl mx-auto">
 <p className="section-kicker text-center">02 / Offerings</p>
 <h2 className="mt-3 section-title text-white">
 What Is Included
 </h2>
 <p className="mt-4 text-sm text-white/60">
 A comprehensive breakdown of all features and tasks handled under the {label} scope.
 </p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {detail.servicesIncluded.map((sub, idx) => (
 <div 
 key={idx}
 className="p-6 rounded-xl border border-white/[0.08] bg-[#0d0d0d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f59e0b]/50 hover:shadow-md"
 >
 <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-xs font-bold text-[#f59e0b] mb-4">
 {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
 </span>
 <h3 className="text-base font-bold text-white mb-2">{sub.title}</h3>
 <p className="text-sm text-white/60 leading-relaxed">{sub.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Section: Technologies Used ────────────────────────────────────────── */}
 <section className="py-20 lg:py-28 border-b border-white/[0.08] scroll-mt-10">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-start">
 
 <div>
 <p className="section-kicker">03 / Technologies</p>
 <h2 className="mt-3 section-title text-white">
 Tech Stack Focus
 </h2>
 <p className="mt-4 text-sm text-white/60 leading-relaxed">
 We select technologies based on scalability, speed, and standard design principles. Each tool is configured for optimal compilation speeds.
 </p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2">
 {detail.technologies.map((tech, idx) => (
 <div key={idx} className="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] flex items-start gap-4">
 <div className="p-2 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/15 text-[#f59e0b] shrink-0 mt-0.5">
 <Terminal size={16} />
 </div>
 <div>
 <h3 className="text-sm font-bold text-white mb-1.5">{tech.name}</h3>
 <p className="text-xs text-black/60 text-white/65 leading-relaxed">{tech.explanation}</p>
 </div>
 </div>
 ))}
 </div>

 </div>
 </div>
 </section>

 {/* ── Section: Solutions I Build ────────────────────────────────────────── */}
 <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-black/[0.01] ">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="mb-12 text-center max-w-2xl mx-auto">
 <p className="section-kicker text-center">04 / Product Scopes</p>
 <h2 className="mt-3 section-title text-white">
 Solutions I Build
 </h2>
 <p className="mt-4 text-sm text-white/60">
 Custom applications and system layers I build to replace slow, manual operations.
 </p>
 </div>

 <div className="flex flex-wrap justify-center gap-3">
 {detail.solutionsBuilt.map((sol, idx) => (
 <span 
 key={idx} 
 className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0d0d0d] px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-[#f59e0b]/40"
 >
 <span className="h-2 w-2 rounded-full bg-[#f59e0b]/70" />
 {sol}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* ── Section: Development Process ──────────────────────────────────────── */}
 <section id="process" className="py-20 lg:py-28 border-b border-white/[0.08] scroll-mt-10">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="mb-16">
 <p className="section-kicker">05 / Methodology</p>
 <h2 className="mt-3 section-title text-white">
 The Development Process
 </h2>
 <p className="mt-4 max-w-2xl text-sm text-white/60">
 A structured lifecycle designed to build correct architectures, catch logical gaps early, and launch securely.
 </p>
 </div>

 <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-black/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
 {DEVELOPMENT_PROCESS.map((step, idx) => (
 <div 
 key={idx} 
 className="bg-[#0d0d0d] p-6 hover:bg-black/[0.02] dark:hover:bg-[#15191b] transition duration-200"
 >
 <div className="flex justify-between items-center mb-6">
 <span className="text-[2.2rem] font-black leading-none text-black/10 text-white/10">
 {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
 </span>
 <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/20 px-2 py-0.5 rounded">
 Phase {idx + 1}
 </span>
 </div>
 <h3 className="text-base font-bold text-white mb-2">{step.phase}</h3>
 <p className="text-xs text-black/60 text-white/65 leading-relaxed">{step.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Section: Why Work With Me ────────────────────────────────────────── */}
 <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-black/[0.01] ">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="mb-12 text-center max-w-2xl mx-auto">
 <p className="section-kicker text-center">06 / Commitment</p>
 <h2 className="mt-3 section-title text-white">
 Why Work With Me
 </h2>
 <p className="mt-4 text-sm text-white/60">
 We focus on clean, secure code and direct communication pathways without broker layers.
 </p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {detail.whyWorkWithMe.map((item, idx) => (
 <div key={idx} className="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-[#0d0d0d] flex items-start gap-4">
 <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shrink-0">
 <CheckCircle2 size={18} />
 </div>
 <div>
 <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
 <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Section: Featured Projects (Proof) ────────────────────────────────── */}
 {relatedProjects.length > 0 && (
 <section id="proof" className="py-20 lg:py-28 border-b border-white/[0.08] scroll-mt-10">
 <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
 <div className="mb-12">
 <p className="section-kicker">07 / Case Studies</p>
 <h2 className="mt-3 section-title text-white">
 Featured Projects & Proof
 </h2>
 <p className="mt-4 max-w-2xl text-sm text-white/60">
 Selected production builds demonstrating engineering excellence in {label} services.
 </p>
 </div>

 <div className="grid gap-8 lg:grid-cols-2">
 {relatedProjects.map((p) => {
 const colorObj = cat(p.category);
 return (
 <article
 key={p.slug}
 className="p-6 rounded-xl border border-white/[0.08] bg-[#0d0d0d] flex flex-col h-full hover:shadow-lg transition duration-300"
 >
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
 <span className="text-xs font-semibold text-white/40">{p.year}</span>
 </div>

 <h3 className="text-xl font-bold text-white hover:text-[#f59e0b] transition mb-3">
 <Link href={`/projects/${p.slug}`}>
 {p.name}
 </Link>
 </h3>

 <p className="text-sm text-white/60 mb-6 font-medium">
 {p.tagline}
 </p>

 {/* Detailed Problem / Solution Grid for SEO structure */}
 <div className="space-y-4 mb-6 pt-4 border-t border-black/5 dark:border-white/5 flex-grow">
 <div>
 <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-[0.05em] mb-1">Challenge</h4>
 <p className="text-xs text-black/58 text-white/60 leading-relaxed line-clamp-3">{p.challenge}</p>
 </div>
 <div>
 <h4 className="text-[11px] font-bold text-emerald-500 uppercase tracking-[0.05em] mb-1">Implemented Solution</h4>
 <p className="text-xs text-black/58 text-white/60 leading-relaxed line-clamp-3">{p.solution}</p>
 </div>
 <div>
 <h4 className="text-[11px] font-bold text-[#f59e0b] uppercase tracking-[0.05em] mb-1">Delivered Results</h4>
 <p className="text-xs text-black/58 text-white/60 leading-relaxed line-clamp-2">{p.result}</p>
 </div>
 </div>

 <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
 <div className="flex flex-wrap gap-1.5">
 {p.tech.split('·').slice(0, 3).map((t) => (
 <span key={t} className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/[0.04] text-white/50">
 {t.trim()}
 </span>
 ))}
 </div>
 <Link 
 href={`/projects/${p.slug}`}
 className="text-xs font-bold text-[#f59e0b] hover:underline flex items-center gap-1.5"
 >
 Read Case Study <ArrowRight size={12} />
 </Link>
 </div>
 </article>
 );
 })}
 </div>
 </div>
 </section>
 )}

 {/* ── Section: Dynamic FAQ Section ──────────────────────────────────────── */}
 <section id="faq" className="py-20 lg:py-28 border-b border-white/[0.08] bg-black/[0.01] scroll-mt-10">
 <div className="mx-auto max-w-4xl px-5 sm:px-8">
 <div className="text-center mb-16">
 <p className="section-kicker">08 / Questions</p>
 <h2 className="mt-3 section-title text-white">
 Service FAQ
 </h2>
 <p className="mt-4 max-w-xl mx-auto text-sm text-white/60">
 Detailed answers regarding target scopes, pricing parameters, timelines, and contract conditions for {label} implementations.
 </p>
 </div>

 <div className="space-y-4">
 {detail.faqs.map((faq, idx) => (
 <details 
 key={idx}
 className="group border border-white/[0.08] rounded-xl bg-[#0d0d0d] [&_summary::-webkit-details-marker]:hidden transition duration-200"
 >
 <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-base font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#f59e0b] rounded-xl select-none">
 <span className="flex gap-3 items-center">
 <HelpCircle size={18} className="text-[#f59e0b] shrink-0" />
 <span>{faq.question}</span>
 </span>
 <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white/40 text-xs">
 ▼
 </span>
 </summary>
 <div className="px-5 pb-5 pt-1 text-sm text-black/65 text-white/70 leading-relaxed border-t border-black/5 dark:border-white/5 mt-2">
 <div className="pl-7 pt-4">
 {faq.answer}
 </div>
 </div>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* ── Action Section (CTA) ─────────────────────────────────────────────── */}
 <section className="py-20 lg:py-28 text-center bg-[#0a0a0a]">
 <div className="mx-auto max-w-3xl px-5 sm:px-8">
 <h2 className="section-title text-white font-black leading-tight">
 {detail.cta.headline}
 </h2>
 <p className="mt-5 text-base text-white/60 max-w-xl mx-auto leading-relaxed">
 {detail.cta.subheadline}
 </p>
 <div className="mt-8 flex flex-wrap gap-4 justify-center">
 <a
 href={`mailto:${contact.email}?subject=Project Consultation: ${label}`}
 className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f59e0b] px-8 text-xs font-bold uppercase tracking-[0.14em] text-white transition duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-transparent hover:border-black/10 dark:hover:border-white/10 shadow-md shadow-[#f59e0b]/10"
 >
 Start Conversation
 </a>
 <Link
 href="/#services"
 className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/[0.08] px-8 text-xs font-bold uppercase tracking-[0.14em] text-black text-white hover:border-[#f59e0b] hover:text-[#f59e0b] transition duration-200"
 >
 Explore Other Services
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
