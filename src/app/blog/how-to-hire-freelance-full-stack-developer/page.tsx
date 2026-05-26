import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal, contact } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

const fullName = `${personal.firstName} ${personal.lastName}`;
const articleTitle = 'How to Hire a Freelance Full Stack Developer (2026 Guide)';
const articleDescription =
  'A practical guide to hiring the right freelance full stack developer for your project — what to look for, questions to ask, red flags to avoid, and how to structure the engagement.';
const articleUrl = `${seo.siteUrl}/blog/how-to-hire-freelance-full-stack-developer`;
const publishDate = '2026-05-01';

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: 'article',
    url: articleUrl,
    title: articleTitle,
    description: articleDescription,
    publishedTime: publishDate,
    authors: [fullName],
  },
  twitter: {
    card: 'summary_large_image',
    title: articleTitle,
    description: articleDescription,
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: articleTitle,
  description: articleDescription,
  url: articleUrl,
  datePublished: publishDate,
  dateModified: publishDate,
  author: {
    '@type': 'Person',
    name: fullName,
    url: seo.siteUrl,
  },
  publisher: {
    '@type': 'Person',
    name: fullName,
    url: seo.siteUrl,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': articleUrl,
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0b0d0e] text-[#0b0d0e] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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

      {/* Article */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/40 dark:text-white/40">
          <Link href="/" className="transition hover:text-[#d6ad63]">Home</Link>
          <span aria-hidden="true">›</span>
          <span className="text-black/60 dark:text-white/60">Blog</span>
        </nav>

        {/* Meta */}
        <p className="section-kicker mb-5">Guide · Full Stack Development</p>
        <h1 className="hero-title text-[#0b0d0e] dark:text-white">{articleTitle}</h1>
        <p className="mt-6 body-copy-lg text-black/60 dark:text-white/60">{articleDescription}</p>

        <div className="mt-6 flex items-center gap-4 border-b border-black/10 dark:border-white/10 pb-8">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-[#d6ad63]/40 text-sm font-black text-[#d6ad63]">
            JS
          </div>
          <div>
            <p className="text-sm font-bold text-[#0b0d0e] dark:text-white">{fullName}</p>
            <p className="meta-label text-black/40 dark:text-white/40">
              Published {new Date(publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose-content mt-10 space-y-10">

          <section aria-labelledby="why-freelance">
            <h2 id="why-freelance" className="subsection-title text-[#0b0d0e] dark:text-white">Why Hire a Freelance Full Stack Developer?</h2>
            <p className="mt-4 body-copy text-black/70 dark:text-white/70">
              Hiring a freelance full stack developer gives you the flexibility to scale your team on demand, access niche expertise, and deliver projects faster — without the overhead of a full-time hire. A good freelancer handles both frontend and backend, reducing coordination complexity and handoff delays.
            </p>
            <p className="mt-4 body-copy text-black/70 dark:text-white/70">
              For startups and growing businesses, a single trusted developer who knows your stack end-to-end is often more efficient than multiple specialists who need constant alignment.
            </p>
          </section>

          <section aria-labelledby="what-to-look-for">
            <h2 id="what-to-look-for" className="subsection-title text-[#0b0d0e] dark:text-white">What to Look for in a Full Stack Developer</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: '1. Proven Production Experience',
                  body: "Look for someone who has shipped real products — not just personal projects. Ask for live URLs, GitHub links, or case studies. Production work shows they can handle deployment, debugging under pressure, and real-world constraints.",
                },
                {
                  title: '2. Full-Stack Depth, Not Just Breadth',
                  body: "A good full stack developer doesn't just know a little of everything. They should have genuine depth in at least one backend language (Node.js, PHP, Python) and one modern frontend framework (React, Next.js, Vue).",
                },
                {
                  title: '3. Communication and Documentation',
                  body: "Remote freelance work depends on clear communication. They should be able to explain their decisions, provide progress updates, share staging links, and write reasonable documentation for what they build.",
                },
                {
                  title: '4. Clean, Maintainable Code',
                  body: "Ask to review a sample of their code. Look for readable naming, consistent structure, and sensible comments. Clever-but-unreadable code is a maintenance burden for your next developer.",
                },
                {
                  title: '5. Practical Security Awareness',
                  body: "They should understand input validation, SQL injection prevention, secure API authentication (JWT, OAuth), and basic HTTPS/CORS setup — even if you're not building anything sensitive.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-5">
                  <h3 className="card-title text-[#0b0d0e] dark:text-white">{item.title}</h3>
                  <p className="mt-3 small-copy text-black/65 dark:text-white/65">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="questions">
            <h2 id="questions" className="subsection-title text-[#0b0d0e] dark:text-white">Questions to Ask Before Hiring</h2>
            <ul className="mt-4 space-y-3">
              {[
                "What is your preferred tech stack, and why?",
                "Can you share 2–3 examples of production projects you've built end-to-end?",
                "How do you handle changes in scope during a project?",
                "What does your typical project delivery process look like?",
                "How do you communicate progress and handle blockers?",
                "Have you worked with remote teams across time zones?",
                "How do you approach security for API endpoints and user data?",
                "What does your post-launch support look like?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#d6ad63]" />
                  <span className="small-copy text-black/70 dark:text-white/70">{q}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="red-flags">
            <h2 id="red-flags" className="subsection-title text-[#0b0d0e] dark:text-white">Red Flags to Avoid</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { flag: "No live examples", detail: "All projects are 'private' or demo-only." },
                { flag: "Vague timelines", detail: "Can't give a rough estimate without weeks of discovery." },
                { flag: "No questions asked", detail: "Agrees to everything without clarifying requirements." },
                { flag: "Lowest-bid mentality", detail: "Far below market rate usually means shortcuts." },
                { flag: "Disappears mid-project", detail: "Poor communication history on platforms or references." },
                { flag: "Won't share code", detail: "Refuses to walk you through what they built or why." },
              ].map((item) => (
                <div key={item.flag} className="rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-4">
                  <p className="text-sm font-bold text-[#d6ad63]">{item.flag}</p>
                  <p className="mt-1 small-copy text-black/60 dark:text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="where-to-hire">
            <h2 id="where-to-hire" className="subsection-title text-[#0b0d0e] dark:text-white">Where to Hire a Freelance Full Stack Developer</h2>
            <div className="mt-4 space-y-3">
              {[
                { platform: 'Upwork', note: 'Best for vetted freelancers with verified work history and reviews.' },
                { platform: 'Toptal', note: 'Top 3% screening — high quality, higher cost.' },
                { platform: 'LinkedIn', note: 'Good for direct outreach and long-term relationships.' },
                { platform: 'GitHub', note: 'Find developers active in open source with verifiable code quality.' },
                { platform: 'Personal Referral', note: 'Always the highest-trust channel — ask your network first.' },
              ].map((item) => (
                <div key={item.platform} className="flex items-start gap-3">
                  <span className="meta-label rounded-full border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] px-3 py-1.5 text-[#d6ad63]">{item.platform}</span>
                  <p className="small-copy mt-1.5 text-black/65 dark:text-white/65">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="structure">
            <h2 id="structure" className="subsection-title text-[#0b0d0e] dark:text-white">How to Structure the Engagement</h2>
            <p className="mt-4 body-copy text-black/70 dark:text-white/70">
              A clear structure prevents most freelance relationship problems. Here is a practical framework:
            </p>
            <ol className="mt-5 space-y-4">
              {[
                { step: 'Write a clear brief', detail: 'Define scope, goals, tech constraints, and what done looks like. Vague briefs produce vague results.' },
                { step: 'Agree on milestones', detail: 'Break the project into 2–4 deliverable phases with payment tied to each. Avoid paying 100% upfront.' },
                { step: 'Set communication expectations', detail: 'Define frequency (daily standup, weekly update), preferred channel, and turnaround time for responses.' },
                { step: 'Use a staging environment', detail: 'Review work in a real environment before it goes live. Screenshots are not a substitute.' },
                { step: 'Clarify IP ownership', detail: 'All code written for your project should transfer to you on final payment — put it in writing.' },
              ].map((item, index) => (
                <li key={item.step} className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 dark:border-white/10 text-sm font-black text-[#d6ad63]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#0b0d0e] dark:text-white">{item.step}</p>
                    <p className="mt-1 small-copy text-black/60 dark:text-white/60">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

        </div>

        {/* CTA */}
        <aside className="mt-14 rounded-lg border border-[#d6ad63]/30 bg-gray-50 dark:bg-[#111416] p-7" aria-label="Hire developer CTA">
          <p className="section-kicker">Looking for a Developer?</p>
          <h2 className="mt-3 subsection-title text-[#0b0d0e] dark:text-white">
            {fullName} — Available for Freelance Worldwide
          </h2>
          <p className="mt-4 body-copy text-black/65 dark:text-white/65">
            {personal.summary}. Remote-first, practical delivery, clean code.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6ad63] px-6 button-label text-[#0b0d0e] transition hover:bg-white"
            >
              Get in Touch
            </a>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 button-label text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
            >
              View Portfolio
            </Link>
          </div>
        </aside>
      </article>

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
