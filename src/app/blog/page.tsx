import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

const fullName = `${personal.firstName} ${personal.lastName}`;
const pageTitle = 'Blog · Freelance Full Stack & AI Development Insights';
const pageDescription =
  'Practical guides, insights, and resources on modern full-stack development, software engineering, and using AI tools to boost business productivity and growth.';
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
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

const blogPosts = [
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
    <main className="min-h-screen bg-white dark:bg-[#0b0d0e] text-[#0b0d0e] dark:text-white">
      <HeaderNav />
      
      <div className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl justify-end px-5 py-3 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-black/60 dark:text-white/60 transition hover:text-[#d6ad63]"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/40 dark:text-white/40">
          <Link href="/" className="transition hover:text-[#d6ad63]">Home</Link>
          <span aria-hidden="true">›</span>
          <span className="text-black/60 dark:text-white/60">Blog</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl border-b border-black/10 dark:border-white/10 pb-12">
          <p className="section-kicker mb-4">Insights & Resources</p>
          <h1 className="hero-title text-[#0b0d0e] dark:text-white">
            The Development & AI Blog
          </h1>
          <p className="mt-6 body-copy-lg text-black/60 dark:text-white/60">
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
                className="group relative flex flex-col justify-between rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-6 transition duration-300 hover:border-[#d6ad63]/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.12em] text-black/40 dark:text-white/40 mb-4">
                    <span className="text-[#d6ad63]">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold leading-snug text-[#0b0d0e] dark:text-white transition group-hover:text-[#d6ad63]">
                    <Link href={postUrl} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-black/60 dark:text-white/60">
                    {post.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-4 text-xs text-black/45 dark:text-white/45 font-semibold">
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
        <aside className="mt-20 rounded-xl border border-[#d6ad63]/25 bg-black/[0.03] dark:bg-[#111416] p-8 text-center" aria-label="CTA">
          <h2 className="text-xl font-bold text-[#0b0d0e] dark:text-white">Have a specific project in mind?</h2>
          <p className="mt-3 text-sm text-black/65 dark:text-white/65 max-w-xl mx-auto">
            From automated AI chatbots and integrations to high-performance Next.js or Laravel applications, 
            our expert remote team delivers clean, scalable code fast.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link 
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d6ad63] px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0d0e] transition hover:bg-white hover:text-black"
            >
              Start a Conversation
            </Link>
            <Link 
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
            >
              Explore Portfolio
            </Link>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 px-5 py-8 text-center">
        <p className="text-xs text-black/30 dark:text-white/30">
          © {new Date().getFullYear()} {fullName}. All rights reserved.
          {' · '}
          <Link href="/" className="transition hover:text-[#d6ad63]">Back to Portfolio</Link>
        </p>
      </footer>
    </main>
  );
}
