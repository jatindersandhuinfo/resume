import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

const fullName = `${personal.firstName} ${personal.lastName}`;
const pageTitle = `Developer Blog — Full Stack & AI Insights | ${fullName}`;
const pageDescription =
  'Practical guides and deep dives on Next.js, React, Node.js, Laravel, and AI-powered development. Written by Jatinder Sandhu — full stack developer with 6+ years experience.';
const pageUrl = `${seo.siteUrl}/blog`;

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
        alt: `${fullName} — Full Stack & AI Developer Blog`,
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
      alt: `${fullName} — Full Stack & AI Developer Blog`,
    },
  },
};

const blogPosts = [
 {
 title: 'AI in Marketing: Practical Ways Businesses Use It in 2026',
 description:
 'Explore practical ways businesses use AI in marketing in 2026 to create content, manage social media, run email campaigns, optimize SEO, and improve advertising performance.',
 slug: 'ai-in-marketing-practical-ways-businesses-use-it',
 category: 'AI & Automation',
 publishDate: '2026-06-03',
 readTime: '8 min read',
 kicker: 'Guide · AI Marketing',
 },
 {
 title: 'How AI Improves Developer Productivity: Real Examples and Benefits',
 description:
 'Learn how AI-assisted development tools like Cursor, Copilot, ChatGPT, and Claude improve developer productivity with real-world examples, benefits, and best practices.',
 slug: 'how-ai-improves-developer-productivity',
 category: 'AI & Automation',
 publishDate: '2026-06-03',
 readTime: '7 min read',
 kicker: 'Guide · AI Productivity',
 },
 {
 title: 'AI Business Applications: Real Examples for Small Businesses',
 description:
 'Discover practical AI business applications for small businesses. Learn how AI helps with customer support, marketing, automation, content creation, and productivity.',
 slug: 'ai-business-applications-real-examples-for-small-businesses',
 category: 'AI & Automation',
 publishDate: '2026-06-03',
 readTime: '8 min read',
 kicker: 'Guide · AI Business',
 },
 {
 title: 'AI Coding Assistant Limits Explained: How to Maximize Free Cursor, Copilot, and Codex Usage',
 description:
 'Understand usage limits and quotas across Cursor, Copilot, Claude, and Gemini. Learn strategies to stack multiple AI tools, optimize prompts, and extend free tier usage.',
 slug: 'ai-coding-assistant-limits-explained',
 category: 'AI & Automation',
 publishDate: '2026-06-03',
 readTime: '10 min read',
 kicker: 'Guide · AI Coding Tools',
 },
 {
 title: 'Token Optimization Guide: How to Structure AI Prompts and Coding Tasks for Maximum Efficiency',
 description:
 'Learn how to structure your AI prompts and coding tasks to optimize token usage. Minimize costs, prevent cooldown rate-limits, and improve LLM performance in ChatGPT, Claude, and Gemini.',
 slug: 'token-optimization-guide',
 category: 'AI & Automation',
 publishDate: '2026-06-03',
 readTime: '9 min read',
 kicker: 'Deep Dive · AI Workflows',
 },
 {
 title: 'Compute-Based Quotas Explained: How Cloud Resource Limits Improve Performance and Control Costs',
 description:
 'Learn how compute-based quotas govern cloud compute resources like CPU, memory, and storage, and discover best practices for quota management in AWS, Azure, Google Cloud, and Kubernetes.',
 slug: 'compute-based-quotas-explained',
 category: 'Cloud Tech',
 publishDate: '2026-06-03',
 readTime: '8 min read',
 kicker: 'FinOps · Cloud Infrastructure',
 },
 {
 title: '10 AI Business Ideas You Can Start This Month',
 description:
 'Discover 10 highly profitable AI business ideas you can start this month with minimal investment. Learn about startup costs, difficulty levels, scalability, and technical requirements.',
 slug: '10-ai-business-ideas-you-can-start-this-month',
 category: 'AI & Automation',
 publishDate: '2026-06-01',
 readTime: '10 min read',
 kicker: 'Strategy · AI Business',
 },
 {
 title: 'React vs Next.js: Which Should You Learn in 2026?',
 description:
 'Should you learn React or Next.js in 2026? Discover the core differences, learning curves, performance, SEO benefits, and career prospects in this comprehensive guide.',
 slug: 'react-vs-nextjs-which-should-you-learn-2026',
 category: 'Development',
 publishDate: '2026-06-01',
 readTime: '9 min read',
 kicker: 'Career · Frontend Tech',
 },
 {
 title: 'Best Website Features for Taxi and Car Rental Businesses in 2026',
 description:
 'Discover the best website features for taxi and car rental businesses in 2026. Learn how online booking systems, instant fare calculation, vehicle fleets, and secure online payments drive bookings and grow revenue.',
 slug: 'best-website-features-taxi-car-rental-2026',
 category: 'Fleet Tech',
 publishDate: '2026-06-01',
 readTime: '8 min read',
 kicker: 'Fleet · Chauffeur Tech',
 },
 {
 title: 'How Local Businesses Can Get More Customers with Google Business Profile',
 description:
 'Learn how to optimize your Google Business Profile to attract more customers in 2026. Discover expert strategies for profile verification, category selection, customer reviews, local SEO, and performance tracking.',
 slug: 'how-local-businesses-get-customers-google-business-profile',
 category: 'Local SEO',
 publishDate: '2026-06-01',
 readTime: '10 min read',
 kicker: 'Deep Dive · Local SEO',
 },
 {
 title: 'Why Every Small Business Needs a Website in 2026',
 description:
 'Discover why having a professional website is a necessity for small businesses in 2026. Learn how websites build credibility, drive local SEO, generate leads, and work 24/7 beyond social media limits.',
 slug: 'why-every-small-business-needs-website-2026',
 category: 'Business Growth',
 publishDate: '2026-06-01',
 readTime: '8 min read',
 kicker: 'Strategy · Business Growth',
 },
 {
 title: 'How to Get Your First Freelance Client as a Developer in 2026',
 description:
 'Landing your first freelance client as a web developer can be challenging. Discover practical, step-by-step client acquisition strategies using Upwork, LinkedIn, cold outreach, portfolios, and local business networking.',
 slug: 'how-to-get-first-freelance-client-developer-2026',
 category: 'Freelance Strategy',
 publishDate: '2026-06-01',
 readTime: '10 min read',
 kicker: 'Guide · Freelance Developer',
 },
 {
 title: 'Build an AI Agent with Node.js: Complete Guide (2026)',
 description:
 'Learn how to build an autonomous AI Agent with Node.js in 2026. This step-by-step technical guide covers LLM reasoning engines, short/long-term memory systems, tool calling, multi-step execution, and security.',
 slug: 'build-ai-agent-nodejs-complete-guide',
 category: 'AI & Automation',
 publishDate: '2026-06-01',
 readTime: '10 min read',
 kicker: 'Deep Dive · AI Agents',
 },
 {
 title: 'Complete Next.js SEO Guide for 2026',
 description:
 'Learn advanced Next.js SEO techniques to rank higher on Google in 2026. This comprehensive technical guide covers SSR/SSG metadata, structured data, Core Web Vitals, and mobile optimization.',
 slug: 'complete-nextjs-seo-guide-2026',
 category: 'Technical SEO',
 publishDate: '2026-06-01',
 readTime: '10 min read',
 kicker: 'Deep Dive · Technical SEO',
 },
 {
 title: 'How I Built a Full-Stack SaaS with Next.js and Node.js',
 description:
 'A comprehensive case study and developer guide on building a full-stack SaaS application with Next.js, Node.js, MongoDB, and modern cloud technologies. Learn about database design, authentication, RBAC, and deployment.',
 slug: 'how-i-built-full-stack-saas-nextjs-nodejs',
 category: 'Full Stack Development',
 publishDate: '2026-06-01',
 readTime: '8 min read',
 kicker: 'Case Study · SaaS Architecture',
 },
 {
 title: 'AI Tools That Save 10+ Hours Per Week: 10 Game-Changing AI Tools for Maximum Productivity in 2026',
 description:
 'Discover the best AI tools that save 10+ hours per week. Learn how professionals, business owners, freelancers, and developers use AI to automate work, boost productivity, and achieve more in less time.',
 slug: 'ai-tools-that-save-10-hours-per-week',
 category: 'AI & Automation',
 publishDate: '2026-06-01',
 readTime: '11 min read',
 kicker: 'Deep Dive · AI Productivity',
 },
 {
 title: 'AI Tools: The Complete Guide to Boosting Productivity and Business Growth',
 description:
 'A comprehensive 2026 guide to understanding AI tools, choosing the right models, and leveraging AI workflow integrations (Cursor, Claude, GPT) to scale your business operations.',
 slug: 'ai-tools-productivity-business-growth',
 category: 'AI & Automation',
 publishDate: '2026-05-30',
 readTime: '8 min read',
 kicker: 'Deep Dive · AI Integration',
 },
 {
 title: 'How to Hire a Freelance Full Stack Developer (2026 Guide)',
 description:
 'A practical guide to hiring the right freelance full stack developer for your project — what to look for, key questions to ask, critical red flags to avoid, and how to structure the engagement.',
 slug: 'how-to-hire-freelance-full-stack-developer',
 category: 'Hiring & Strategy',
 publishDate: '2026-05-01',
 readTime: '6 min read',
 kicker: 'Guide · Full Stack Development',
 },
];

export default function BlogIndex() {
 return (
 <main className="min-h-screen bg-[#0a0a0a] text-white pt-[73px]">
 <HeaderNav />
 
 <div className="border-b border-white/[0.08]">
 <div className="mx-auto flex max-w-7xl justify-end px-5 py-3 sm:px-8 lg:px-10">
 <Link
 href="/"
 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60 transition hover:text-[#f59e0b]"
 >
 ← Back to Portfolio
 </Link>
 </div>
 </div>

 <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
 {/* Breadcrumb */}
 <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
 <Link href="/" className="transition hover:text-[#f59e0b]">Home</Link>
 <span aria-hidden="true">›</span>
 <span className="text-white/60">Blog</span>
 </nav>

 {/* Header */}
 <div className="max-w-3xl border-b border-white/[0.08] pb-12">
 <p className="section-kicker mb-4">Insights & Resources</p>
 <h1 className="hero-title text-white">
 The Development & AI Blog
 </h1>
 <p className="mt-6 body-copy-lg text-white/60">
 Articles, guides, and practical advice on modern frontend/backend technologies, 
 artificial intelligence integrations, and successful remote team workflows.
 </p>
 </div>

 {/* Blog Post List */}
 <div className="mt-16 grid gap-10 md:grid-cols-2">
 {blogPosts.map((post) => {
 const postUrl = `/blog/${post.slug}`;
 return (
 <article 
 key={post.slug} 
 className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-black/[0.02] p-6 transition duration-300 hover:border-[#f59e0b]/50 hover:bg-white/[0.04] "
 >
 <div>
 <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-4">
 <span className="text-[#f59e0b]">{post.category}</span>
 <span>{post.readTime}</span>
 </div>
 <h2 className="text-xl font-bold leading-snug text-white transition group-hover:text-[#f59e0b]">
 <Link href={postUrl} className="focus:outline-none">
 <span className="absolute inset-0" aria-hidden="true" />
 {post.title}
 </Link>
 </h2>
 <p className="mt-4 text-sm leading-relaxed text-white/60">
 {post.description}
 </p>
 </div>
 <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4 text-xs text-black/45 text-white/45 font-semibold">
 <span>By {fullName}</span>
 <span>
 {new Date(post.publishDate).toLocaleDateString('en-IN', {
 year: 'numeric',
 month: 'long',
 day: 'numeric',
 })}
 </span>
 </div>
 </article>
 );
 })}
 </div>

 {/* Newsletter/Contact Mini-CTA */}
 <aside className="mt-20 rounded-xl border border-[#f59e0b]/25 bg-black/[0.03] p-8 text-center" aria-label="CTA">
 <h2 className="text-xl font-bold text-white">Have a specific project in mind?</h2>
 <p className="mt-3 text-sm text-black/65 text-white/65 max-w-xl mx-auto">
 From AI chatbots and automation to high-performance Next.js and Laravel applications,
 I build clean, scalable software for businesses worldwide.
 </p>
 <div className="mt-6 flex flex-wrap justify-center gap-4">
 <a
 href="mailto:jatindersandhuinfo@gmail.com?subject=Project Inquiry"
 className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f59e0b] px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a] transition hover:bg-[#fbbf24]"
 >
 Start a Conversation
 </a>
 <Link 
 href="/"
 className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
 >
 Explore Portfolio
 </Link>
 </div>
 </aside>
 </div>

 {/* Footer */}
 <footer className="border-t border-white/[0.08] px-5 py-8 text-center">
 <p className="text-xs text-white/30">
 © {new Date().getFullYear()} {fullName}. All rights reserved.
 {' · '}
 <Link href="/" className="transition hover:text-[#f59e0b]">Back to Portfolio</Link>
 </p>
 </footer>
 </main>
 );
}
