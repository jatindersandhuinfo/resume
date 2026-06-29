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
const articleTitle = 'How Much Does It Cost to Build a Website in 2026?';
const articleDescription =
  'A transparent breakdown of website development costs in 2026 — from simple landing pages to full web apps — covering design, development, hosting, and ongoing maintenance.';
const articleUrl = `${seo.siteUrl}/blog/how-much-does-it-cost-to-build-a-website-2026`;
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
  const relatedPosts = getRelatedPosts('how-much-does-it-cost-to-build-a-website-2026');
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
        articleSection="Business"
        keywords="website development cost 2026, how much does a website cost, web development pricing"
      />
      <HeaderNav />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
          <Link href="/" className="transition hover:text-gold">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" className="transition hover:text-gold">Blog</Link>
          <span aria-hidden="true">›</span>
          <span className="text-white/60">Business</span>
        </nav>

        <p className="chapter-label mb-5">Guide · Web Development Cost</p>
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
            <h2 id="intro" className="text-xl font-bold text-canvas">Why Website Costs Vary So Much</h2>
            <p className="mt-4 text-white/70">
              &ldquo;How much does a website cost?&rdquo; is one of the most searched questions in business — and one of the hardest to answer accurately. A website can cost £500 or £500,000 depending on what you need. The range is not vague — it reflects genuinely different products.
            </p>
            <p className="mt-4 text-white/70">
              This breakdown covers real 2026 pricing across different website types, based on what clients actually pay — not estimates pulled from the air. I include what drives cost up, what drives it down, and what you should never compromise on.
            </p>
          </section>

          <section aria-labelledby="cost-tiers">
            <h2 id="cost-tiers" className="text-xl font-bold text-canvas">Website Cost Tiers in 2026</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  tier: 'Simple Landing Page',
                  range: '£400 – £1,200',
                  time: '1–2 weeks',
                  desc: 'Single-page website with contact form, basic sections (hero, services, about, contact), mobile responsive, and basic SEO setup. Typically built on WordPress with a theme or a simple Next.js static site.',
                  includes: ['5–8 sections', 'Contact form', 'Mobile responsive', 'Basic on-page SEO', 'Google Analytics'],
                  notIncludes: ['Blog', 'Online payments', 'User accounts', 'Custom animations'],
                },
                {
                  tier: 'Business Website (5–15 pages)',
                  range: '£1,200 – £4,000',
                  time: '2–4 weeks',
                  desc: 'Multi-page professional website with a full service listing, team page, blog, testimonials, contact forms, local SEO setup, and a polished visual design. Most SMB websites fall in this range.',
                  includes: ['10–15 pages', 'Blog / news section', 'SEO-optimised pages', 'Custom design', 'Local SEO setup', 'CMS for content editing'],
                  notIncludes: ['E-commerce', 'Custom web app features', 'API integrations'],
                },
                {
                  tier: 'E-Commerce Website',
                  range: '£2,500 – £8,000',
                  time: '4–8 weeks',
                  desc: 'Full online store with product catalogue, cart, checkout, payment gateway integration (Stripe, PayPal, Razorpay), order management, and customer accounts. WooCommerce or Next.js + Stripe depending on requirements.',
                  includes: ['Product catalogue', 'Payment gateway', 'Order management', 'Customer accounts', 'Inventory system', 'Email notifications'],
                  notIncludes: ['Custom ERP integration', 'Marketplace features', 'Mobile app'],
                },
                {
                  tier: 'Custom Web Application / SaaS',
                  range: '£6,000 – £30,000+',
                  time: '8–20 weeks',
                  desc: 'A fully custom application — dashboard, SaaS platform, marketplace, CRM, booking system, or any web app with user authentication, database, and business logic. Cost depends entirely on feature scope and integrations.',
                  includes: ['Custom architecture', 'User authentication', 'Database design', 'REST API', 'Admin dashboard', 'Role-based access', 'Deployment & CI/CD'],
                  notIncludes: ['Mobile apps (priced separately)', 'Third-party API costs'],
                },
              ].map((tier) => (
                <article key={tier.tier} className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-white">{tier.tier}</h3>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gold">{tier.range}</p>
                      <p className="text-xs text-white/40">{tier.time} delivery</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{tier.desc}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-2">Typically includes</p>
                      <ul className="space-y-1.5">
                        {tier.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold/60 shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-2">Not included</p>
                      <ul className="space-y-1.5">
                        {tier.notIncludes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20 shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="ongoing-costs">
            <h2 id="ongoing-costs" className="text-xl font-bold text-canvas">Ongoing Costs After Launch</h2>
            <p className="mt-4 text-white/70">
              The build cost is only part of the story. Every website has ongoing costs you should budget for:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/[0.1] bg-white/[0.05]">
                    <th className="px-4 py-3 text-left font-bold text-white/80">Cost Item</th>
                    <th className="px-4 py-3 text-left font-bold text-white/60">Typical Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {[
                    ['Domain name', '£8 – £25/year'],
                    ['Hosting (WordPress)', '£80 – £300/year'],
                    ['Hosting (Next.js on Vercel)', '£0 – £240/year'],
                    ['SSL certificate', 'Free (Let&apos;s Encrypt) – £80/year'],
                    ['Email hosting', '£30 – £120/year'],
                    ['Security & backups', '£80 – £200/year'],
                    ['Plugin licences (WordPress)', '£100 – £500/year'],
                    ['Developer maintenance retainer', '£200 – £800/year'],
                  ].map(([item, cost]) => (
                    <tr key={item} className="text-white/65">
                      <td className="px-4 py-3" dangerouslySetInnerHTML={{ __html: item }} />
                      <td className="px-4 py-3 text-white/80">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="what-drives-cost">
            <h2 id="what-drives-cost" className="text-xl font-bold text-canvas">What Drives Cost Up</h2>
            <ul className="mt-4 space-y-3">
              {[
                'Custom visual design from scratch (vs using a template or design system)',
                'Complex animations and interactive UI elements',
                'Third-party API integrations (payment, CRM, mapping, SMS)',
                'Multi-language or multi-currency support',
                'User authentication and role-based access control',
                'Admin dashboards and reporting features',
                'Mobile app alongside the web build',
                'Tight deadlines (rush delivery typically adds 20–30%)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="dont-cut">
            <h2 id="dont-cut" className="text-xl font-bold text-canvas">What You Should Never Cut to Save Money</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { item: 'Mobile responsiveness', detail: '60%+ of traffic is mobile. A non-responsive site costs you customers every day.' },
                { item: 'Page speed optimization', detail: 'Every second of load time reduces conversions by 7%. Speed is not a luxury.' },
                { item: 'SSL / HTTPS', detail: 'Free with Let&apos;s Encrypt. Non-HTTPS sites are flagged by browsers and penalised by Google.' },
                { item: 'Basic SEO setup', detail: 'Proper meta tags, sitemap, and Google Search Console setup from day one.' },
                { item: 'Backups', detail: 'One compromised site without backups can cost more than the original build.' },
                { item: 'Analytics', detail: 'If you cannot measure it, you cannot improve it.' },
              ].map((item) => (
                <div key={item.item} className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-4">
                  <p className="text-sm font-bold text-gold">{item.item}</p>
                  <p className="mt-1 text-xs text-white/60" dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              ))}
            </div>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">Conclusion</h2>
            <p className="leading-relaxed text-white/70">
              A website is an investment, not an expense — but only if it is built correctly. The cheapest option rarely delivers the lowest total cost of ownership. A £400 website that needs to be rebuilt in 18 months costs more than a £2,000 website built properly the first time.
            </p>
            <p className="leading-relaxed text-white/70">
              Be clear on your requirements, choose a developer with production experience, and budget for ongoing maintenance. If you want a transparent quote for your specific project, I am happy to provide one — email or WhatsApp me with a brief description and I will respond within 24 hours.
            </p>
            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/[0.05] p-5">
              <p className="text-sm font-bold text-gold">Get a free quote for your project</p>
              <p className="mt-2 text-sm text-white/65">Tell me what you are building and I will give you a realistic timeline and cost estimate — no obligation.</p>
              <a href={`mailto:${contact.email}?subject=Website Quote Request`} className="mt-4 inline-flex items-center gap-2 bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-studio transition hover:bg-gold-light">
                Request a Quote →
              </a>
            </div>
          </section>

          <ShareButtons url={articleUrl} title={articleTitle} />
          <AboutAuthor
            relatedArticles={[
              { slug: 'nextjs-vs-wordpress-for-business-websites', title: 'Next.js vs WordPress for Business Websites' },
              { slug: 'why-every-small-business-needs-website-2026', title: 'Why Every Small Business Needs a Website in 2026' },
              { slug: 'how-to-hire-freelance-full-stack-developer', title: 'How to Hire a Freelance Full Stack Developer' },
              { slug: 'how-to-get-first-freelance-client-developer-2026', title: 'How to Get Your First Freelance Client as a Developer' },
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
