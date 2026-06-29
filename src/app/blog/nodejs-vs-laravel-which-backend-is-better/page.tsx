import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal, contact } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';
import ReadingProgress from '@/components/ReadingProgress';
import ScrollToTop from '@/components/ScrollToTop';
import BlogPostSchemas from '@/components/BlogPostSchemas';
import Footer from '@/components/Footer';
import AboutAuthor from '@/components/AboutAuthor';
import BlogCta from '@/components/BlogCta';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';
import { getRelatedPosts } from '@/lib/blog-data';

const fullName = `${personal.firstName} ${personal.lastName}`;
const articleTitle = 'Node.js vs Laravel: Which Backend Should You Choose in 2026?';
const articleDescription =
  'A direct comparison of Node.js and Laravel for backend development — performance, ecosystem, scalability, developer experience, and which one fits your project best.';
const articleUrl = `${seo.siteUrl}/blog/nodejs-vs-laravel-which-backend-is-better`;
const publishDate = '2026-06-29';
const modifiedDate = '2026-06-29';

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: 'article',
    url: articleUrl,
    title: articleTitle,
    description: articleDescription,
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    authors: [fullName],
    images: [{ url: seo.ogImage, width: 960, height: 1200, alt: articleTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: articleTitle,
    description: articleDescription,
    images: { url: seo.ogImage, alt: articleTitle },
  },
};

export default function BlogPost() {
  const relatedPosts = getRelatedPosts('nodejs-vs-laravel-which-backend-is-better');
  return (
    <main className="min-h-screen bg-studio text-canvas pt-[73px]">
      <ReadingProgress />
      <ScrollToTop />
      <BlogPostSchemas
        title={articleTitle}
        description={articleDescription}
        url={articleUrl}
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName={fullName}
        authorUrl={seo.siteUrl}
        articleSection="Development"
        keywords="node.js vs laravel, nodejs laravel comparison, backend framework 2026"
      />
      <HeaderNav />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
          <Link href="/" className="transition hover:text-gold">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" className="transition hover:text-gold">Blog</Link>
          <span aria-hidden="true">›</span>
          <span className="text-white/60">Backend Development</span>
        </nav>

        <p className="chapter-label mb-5">Guide · Backend Development</p>
        <h1 className="text-white">{articleTitle}</h1>
        <p className="mt-6 text-white/60">{articleDescription}</p>

        <div className="mt-6 flex items-center gap-4 border-b border-white/[0.08] pb-8">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-sm font-black text-gold">JS</div>
          <div>
            <p className="text-sm font-bold text-white">{fullName}</p>
            <p className="meta-label text-white/40">
              Published {new Date(publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="prose-content mt-10 space-y-10">

          <section aria-labelledby="intro">
            <h2 id="intro" className="text-xl font-bold text-canvas">Two Different Philosophies</h2>
            <p className="mt-4 text-white/70">
              Node.js and Laravel are both excellent backend choices — but they represent fundamentally different approaches to building server-side applications. Node.js is a JavaScript runtime that gives you maximum flexibility and speed. Laravel is a PHP framework that prioritises developer productivity and conventions.
            </p>
            <p className="mt-4 text-white/70">
              I have shipped production systems with both. Here is an honest breakdown of what each does well, where each struggles, and how to make the right call for your project.
            </p>
          </section>

          <section aria-labelledby="comparison-table">
            <h2 id="comparison-table" className="text-xl font-bold text-canvas">Side-by-Side Comparison</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-white/[0.05]">
                    <th className="px-4 py-3 text-left font-bold text-white/80">Factor</th>
                    <th className="px-4 py-3 text-left font-bold text-gold">Node.js</th>
                    <th className="px-4 py-3 text-left font-bold text-white/60">Laravel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {[
                    ['Language', 'JavaScript / TypeScript', 'PHP'],
                    ['Performance', 'Excellent (async, non-blocking)', 'Good (sync, blocking by default)'],
                    ['Learning curve', 'Steeper (more decisions)', 'Gentler (opinionated)'],
                    ['REST APIs', 'Excellent', 'Excellent'],
                    ['ORM', 'Prisma / Sequelize / TypeORM', 'Eloquent (best-in-class)'],
                    ['Auth out of box', 'Manual / libraries', 'Built-in (Sanctum, Breeze)'],
                    ['Queue & Jobs', 'Bull, BullMQ', 'Built-in Queues'],
                    ['Real-time', 'Excellent (WebSockets, Socket.io)', 'Moderate (Pusher, Reverb)'],
                    ['Hosting cost', 'Moderate (Node server required)', 'Low (shared PHP hosting)'],
                    ['Ecosystem', 'npm — largest in the world', 'Composer — mature, curated'],
                  ].map(([factor, node, laravel]) => (
                    <tr key={factor} className="text-white/65">
                      <td className="px-4 py-3 font-semibold text-white/80">{factor}</td>
                      <td className="px-4 py-3 text-gold/90">{node}</td>
                      <td className="px-4 py-3">{laravel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="nodejs-strengths">
            <h2 id="nodejs-strengths" className="text-xl font-bold text-canvas">Where Node.js Excels</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: 'Real-time applications',
                  body: 'Node.js is the default choice for anything requiring WebSockets — chat applications, live dashboards, collaborative tools, or multiplayer games. Its non-blocking event loop handles thousands of concurrent connections efficiently.',
                },
                {
                  title: 'High-throughput APIs',
                  body: 'When you need to handle a high volume of simultaneous requests with low latency, Node.js outperforms PHP significantly. Its async architecture means I/O operations (database, file, network) do not block the thread.',
                },
                {
                  title: 'Shared codebase with React/Next.js frontend',
                  body: 'If your team already writes JavaScript or TypeScript on the frontend, Node.js means one language across the full stack. TypeScript types can be shared between frontend and backend, reducing errors and duplication.',
                },
                {
                  title: 'Microservices and serverless',
                  body: 'Node.js deploys easily to serverless environments (AWS Lambda, Vercel Functions, Cloudflare Workers). Cold start times are lower than many alternatives, making it a strong fit for microservices architectures.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="laravel-strengths">
            <h2 id="laravel-strengths" className="text-xl font-bold text-canvas">Where Laravel Excels</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: 'Rapid application development',
                  body: 'Laravel ships with authentication, queues, caching, email, file storage, and form validation out of the box. You spend less time wiring up infrastructure and more time building product features.',
                },
                {
                  title: 'Eloquent ORM',
                  body: "Laravel's Eloquent is one of the best ORMs available in any language. Relationships, scopes, accessors, mutators, and eager loading are elegant and readable. Database work is genuinely enjoyable in Laravel.",
                },
                {
                  title: 'Admin dashboards and CRUD applications',
                  body: 'For internal tools, CRMs, ERP systems, and dashboards with complex data relationships, Laravel with Livewire or Inertia.js lets small teams ship feature-rich admin interfaces very quickly.',
                },
                {
                  title: 'Lower hosting costs',
                  body: 'PHP runs on virtually every shared hosting plan in existence. Laravel can be deployed to a $5/month VPS or shared cPanel hosting. Node.js requires a persistent server process, which adds cost and complexity.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="decision">
            <h2 id="decision" className="text-xl font-bold text-canvas">How to Decide</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gold/20 bg-gold/[0.05] p-5">
                <p className="text-sm font-bold text-gold mb-3">Choose Node.js if…</p>
                <ul className="space-y-2">
                  {[
                    'Your frontend is React or Next.js',
                    'You need real-time features (chat, live data)',
                    'You are building a high-traffic API',
                    'You want serverless or edge deployment',
                    'You are building a microservices architecture',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-5">
                <p className="text-sm font-bold text-white/80 mb-3">Choose Laravel if…</p>
                <ul className="space-y-2">
                  {[
                    'You are building a CRM, dashboard, or admin tool',
                    'You want full-featured auth and queues out of box',
                    'Your team has strong PHP experience',
                    'You need low-cost shared hosting deployment',
                    'Speed to market matters more than raw performance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">Conclusion</h2>
            <p className="leading-relaxed text-white/70">
              Node.js and Laravel are both production-proven, mature backend technologies used by thousands of companies worldwide. The choice is not about which is objectively better — it is about which fits your team, your project requirements, and your deployment constraints.
            </p>
            <p className="leading-relaxed text-white/70">
              If you are building a Next.js frontend and need a performant API, choose Node.js. If you are building a data-heavy business application and want to move fast with a small team, Laravel is hard to beat. I have used both in production and would confidently recommend either — depending on the context.
            </p>
          </section>

          <ShareButtons url={articleUrl} title={articleTitle} />
          <AboutAuthor
            relatedArticles={[
              { slug: 'how-i-built-full-stack-saas-nextjs-nodejs', title: 'How I Built a Full-Stack SaaS with Next.js and Node.js' },
              { slug: 'build-ai-agent-nodejs-complete-guide', title: 'How to Build an AI Agent with Node.js' },
              { slug: 'nextjs-vs-wordpress-for-business-websites', title: 'Next.js vs WordPress for Business Websites' },
              { slug: 'how-to-hire-freelance-full-stack-developer', title: 'How to Hire a Freelance Full Stack Developer' },
            ]}
          />
        </div>

        <RelatedPosts posts={relatedPosts} />
        <BlogCta />
      </article>

      <Footer />
    </main>
  );
}
