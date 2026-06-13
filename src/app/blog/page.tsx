import type { Metadata } from 'next'
import Link from 'next/link'
import { seo, personal } from '@/lib/data'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import BlogIndexClient from '@/components/BlogIndexClient'

const fullName = `${personal.firstName} ${personal.lastName}`
const pageTitle = `Developer Blog — Full Stack & AI Insights | ${fullName}`
const pageDescription =
  'Practical guides and deep dives on Next.js, React, Node.js, Laravel, and AI-powered development. Written by Jatinder Sandhu — full stack developer with 6+ years experience.'
const pageUrl = `${seo.siteUrl}/blog`

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
}

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
          <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30">
            {blogPosts.length} articles across {blogCategories.length} topics
          </p>
        </div>
      </section>

      {/* ── Filterable post grid (client component) ── */}
      <BlogIndexClient posts={blogPosts} categories={blogCategories} fullName={fullName} />

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
  )
}
