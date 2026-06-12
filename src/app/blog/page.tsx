import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';
import Footer from '@/components/Footer';

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
    <main className="min-h-screen bg-studio text-canvas pt-[73px]">
      <HeaderNav />

      {/* ── Utility bar ── */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <span className="text-white/55">Blog</span>
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
          className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[700px] rounded-full bg-gold/[0.05] blur-[120px]"
        />
        {/* Ghost label */}
        <div className="pointer-events-none absolute right-8 top-8 select-none text-right" aria-hidden="true">
          <p className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-white/10">Section</p>
          <p className="chapter-number-bg leading-none">01</p>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8">Insights &amp; Resources</p>
          <h1 className="display-lg text-canvas">
            THE DEVELOPMENT<br />
            <span className="text-gold">&amp; AI BLOG</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            Articles, guides, and practical advice on modern frontend/backend technologies,
            AI integrations, and successful remote team workflows.
          </p>
        </div>
      </section>

      {/* ── Post grid ── */}
      <section className="bg-studio py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-px border border-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => {
              const postUrl = `/blog/${post.slug}`;
              return (
                <article
                  key={post.slug}
                  className="group relative flex flex-col justify-between bg-studio p-8 transition duration-300 hover:bg-surface"
                >
                  {/* Hover accent bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold/50 transition-transform duration-300 origin-left group-hover:scale-x-100" />

                  {/* Index number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-6 top-6 select-none font-bebas text-6xl leading-none text-white/[0.04] transition duration-300 group-hover:text-gold/[0.07]"
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  <div className="relative">
                    {/* Category + read time */}
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold">
                        {post.category}
                      </span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold leading-snug text-canvas transition duration-200 group-hover:text-gold">
                      <Link href={postUrl} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/55 line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Footer row */}
                  <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-white/[0.05] pt-5 text-[0.65rem] font-bold uppercase tracking-[0.12em]">
                    <span className="text-white/40">By {fullName}</span>
                    <span className="text-white/30">
                      {new Date(post.publishDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
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
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[100px]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8 justify-center">Let&apos;s Build Together</p>
          <h2 className="display-md text-canvas">
            HAVE A PROJECT<br />
            <span className="text-gold">IN MIND?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/60">
            From AI chatbots and automation to high-performance Next.js and Laravel applications,
            I build clean, scalable software for businesses worldwide.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="mailto:jatindersandhuinfo@gmail.com?subject=Project Inquiry"
              className="inline-flex min-h-[50px] items-center justify-center rounded-none bg-gold px-10 text-xs font-bold uppercase tracking-[0.22em] text-studio transition duration-200 hover:bg-gold-light"
            >
              Start a Conversation →
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[50px] items-center justify-center rounded-none border border-white/20 px-10 text-xs font-bold uppercase tracking-[0.22em] text-canvas transition duration-200 hover:border-gold/60 hover:text-gold"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
