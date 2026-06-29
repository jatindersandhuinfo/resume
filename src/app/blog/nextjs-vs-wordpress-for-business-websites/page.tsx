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
const articleTitle = 'Next.js vs WordPress: Which is Better for Business Websites in 2026?';
const articleDescription =
  'Comparing Next.js and WordPress for business websites in 2026 — performance, SEO, cost, maintenance, and when to choose each one for your project.';
const articleUrl = `${seo.siteUrl}/blog/nextjs-vs-wordpress-for-business-websites`;
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
  const relatedPosts = getRelatedPosts('nextjs-vs-wordpress-for-business-websites');
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
        keywords="next.js vs wordpress, nextjs business website, wordpress vs nextjs 2026"
      />
      <HeaderNav />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
          <Link href="/" className="transition hover:text-gold">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" className="transition hover:text-gold">Blog</Link>
          <span aria-hidden="true">›</span>
          <span className="text-white/60">Development</span>
        </nav>

        <p className="chapter-label mb-5">Guide · Next.js · WordPress</p>
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
            <h2 id="intro" className="text-xl font-bold text-canvas">The Real Question Businesses Are Asking</h2>
            <p className="mt-4 text-white/70">
              When a business wants a new website, two options come up most often: WordPress and Next.js. WordPress powers over 43% of the internet. Next.js is the modern React framework used by companies like Vercel, TikTok, and Netflix. They solve different problems — and picking the wrong one costs time and money.
            </p>
            <p className="mt-4 text-white/70">
              This guide gives you a direct, honest comparison based on real project experience — not marketing copy.
            </p>
          </section>

          <section aria-labelledby="quick-summary">
            <h2 id="quick-summary" className="text-xl font-bold text-canvas">Quick Summary</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-white/[0.05]">
                    <th className="px-4 py-3 text-left font-bold text-white/80">Factor</th>
                    <th className="px-4 py-3 text-left font-bold text-gold">Next.js</th>
                    <th className="px-4 py-3 text-left font-bold text-white/60">WordPress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {[
                    ['Performance', 'Excellent (SSG/SSR)', 'Good (with caching)'],
                    ['SEO', 'Excellent (full control)', 'Good (plugins needed)'],
                    ['Cost to build', 'Higher upfront', 'Lower upfront'],
                    ['Maintenance', 'Low (no plugins)', 'Higher (plugin updates)'],
                    ['Non-tech editing', 'Harder', 'Easy (visual editor)'],
                    ['Scalability', 'Excellent', 'Moderate'],
                    ['Security', 'Excellent', 'Moderate (plugin risk)'],
                    ['Time to launch', 'Longer', 'Faster'],
                  ].map(([factor, next, wp]) => (
                    <tr key={factor} className="text-white/65">
                      <td className="px-4 py-3 font-semibold text-white/80">{factor}</td>
                      <td className="px-4 py-3 text-gold/90">{next}</td>
                      <td className="px-4 py-3">{wp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="performance">
            <h2 id="performance" className="text-xl font-bold text-canvas">Performance</h2>
            <p className="mt-4 text-white/70">
              Next.js wins on performance by default. Static Site Generation (SSG) and Server-Side Rendering (SSR) mean pages are pre-built or rendered at the edge — resulting in sub-second load times without any caching plugins or CDN configuration.
            </p>
            <p className="mt-4 text-white/70">
              WordPress can be fast, but it requires a well-configured stack: a caching plugin (WP Rocket or W3 Total Cache), a CDN, and image optimization. Without these, a standard WordPress site with plugins can load in 3–6 seconds — bad for SEO and conversions.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-white/[0.04] p-5">
              <p className="text-sm font-bold text-gold">Real-world numbers</p>
              <p className="mt-2 text-sm text-white/65">A Next.js site with optimised images typically scores 95–100 on Lighthouse. A standard WordPress site averages 55–75 without dedicated performance work.</p>
            </div>
          </section>

          <section aria-labelledby="seo">
            <h2 id="seo" className="text-xl font-bold text-canvas">SEO</h2>
            <p className="mt-4 text-white/70">
              Both platforms can rank well, but Next.js gives you full, granular control over metadata, structured data, canonical URLs, and crawlability — without relying on a plugin that might conflict with your theme or break on updates.
            </p>
            <p className="mt-4 text-white/70">
              WordPress with Yoast or Rank Math is solid for content-heavy blogs and local businesses. The plugin-based approach is well-understood and well-documented. For most SMB SEO use cases, WordPress is entirely sufficient.
            </p>
          </section>

          <section aria-labelledby="cost">
            <h2 id="cost" className="text-xl font-bold text-canvas">Development Cost</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: 'WordPress: Lower upfront cost',
                  body: 'A business website on WordPress with Elementor or a premium theme can be live in 1–2 weeks for £800–£2,500. Templates and plugins handle most standard requirements without custom code.',
                },
                {
                  title: 'Next.js: Higher upfront, lower long-term',
                  body: 'A Next.js business website is custom-built from scratch — typically £2,000–£6,000+ depending on complexity. But there are no recurring plugin licence fees, no theme subscription, and far fewer security headaches over time.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="maintenance">
            <h2 id="maintenance" className="text-xl font-bold text-canvas">Maintenance & Security</h2>
            <p className="mt-4 text-white/70">
              WordPress sites need regular attention: core updates, plugin updates, theme updates, backups, and security monitoring. A plugin conflict or an outdated component is the most common cause of WordPress hacks and downtime.
            </p>
            <p className="mt-4 text-white/70">
              Next.js has no plugin ecosystem to maintain. The codebase is entirely under your control. Security vulnerabilities at the infrastructure level are handled by Vercel or your hosting provider. Long-term maintenance cost is significantly lower.
            </p>
          </section>

          <section aria-labelledby="content-editing">
            <h2 id="content-editing" className="text-xl font-bold text-canvas">Content Editing for Non-Technical Teams</h2>
            <p className="mt-4 text-white/70">
              This is WordPress&apos;s clearest advantage. The Gutenberg editor and page builders like Elementor make it easy for non-developers to update content, add blog posts, change images, and manage menus — with no code.
            </p>
            <p className="mt-4 text-white/70">
              Next.js requires a developer to update content unless you integrate a headless CMS (Sanity, Contentful, or Payload). This adds complexity and cost, but gives you the best of both worlds: modern frontend performance with non-technical editing.
            </p>
          </section>

          <section aria-labelledby="when-to-choose">
            <h2 id="when-to-choose" className="text-xl font-bold text-canvas">When to Choose Each One</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gold/20 bg-gold/[0.05] p-5">
                <p className="text-sm font-bold text-gold mb-3">Choose Next.js if you…</p>
                <ul className="space-y-2">
                  {[
                    'Need top Lighthouse scores and Core Web Vitals',
                    'Are building a SaaS, web app, or marketplace',
                    'Want full SEO control without plugins',
                    'Have or will hire a developer long-term',
                    'Need custom features not possible in WordPress',
                    'Are scaling to high traffic volumes',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-5">
                <p className="text-sm font-bold text-white/80 mb-3">Choose WordPress if you…</p>
                <ul className="space-y-2">
                  {[
                    'Need the site live quickly on a tight budget',
                    'Want your team to edit content without a developer',
                    'Are building a blog, portfolio, or local business site',
                    'Need WooCommerce for standard e-commerce',
                    'Have no ongoing developer available',
                    'Are migrating an existing WordPress site',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">Conclusion</h2>
            <p className="leading-relaxed text-white/70">
              Neither Next.js nor WordPress is universally better — they serve different needs. WordPress wins on speed to market, ease of editing, and lower upfront cost. Next.js wins on performance, scalability, security, and long-term maintainability.
            </p>
            <p className="leading-relaxed text-white/70">
              If your business is growing, needs custom functionality, or cares deeply about page speed and SEO, Next.js is the right investment. If you need a clean, manageable site live in two weeks, WordPress with a good theme and proper configuration delivers real results.
            </p>
          </section>

          <ShareButtons url={articleUrl} title={articleTitle} />
          <AboutAuthor
            relatedArticles={[
              { slug: 'react-vs-nextjs-which-should-you-learn-2026', title: 'React vs Next.js: Which Should You Learn in 2026?' },
              { slug: 'how-i-built-full-stack-saas-nextjs-nodejs', title: 'How I Built a Full-Stack SaaS with Next.js and Node.js' },
              { slug: 'complete-nextjs-seo-guide-2026', title: 'The Complete Next.js SEO Guide for 2026' },
              { slug: 'how-much-does-it-cost-to-build-a-website-2026', title: 'How Much Does It Cost to Build a Website in 2026?' },
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
