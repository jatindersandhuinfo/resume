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
const articleTitle = 'Case Study: How I Built the LUNA Fashion Website (Next.js)';
const articleDescription =
  'A full technical case study of building the LUNA by Navneet boutique e-commerce website — architecture decisions, SEO strategy, WhatsApp integration, and results delivered.';
const articleUrl = `${seo.siteUrl}/blog/how-i-built-luna-fashion-website`;
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
  const relatedPosts = getRelatedPosts('how-i-built-luna-fashion-website');
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
        articleSection="Case Study"
        keywords="next.js fashion website case study, boutique e-commerce build, next.js portfolio case study"
      />
      <HeaderNav />

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
          <Link href="/" className="transition hover:text-gold">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" className="transition hover:text-gold">Blog</Link>
          <span aria-hidden="true">›</span>
          <span className="text-white/60">Case Study</span>
        </nav>

        <p className="chapter-label mb-5">Case Study · Next.js · E-Commerce</p>
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

        {/* Project summary strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 rounded-lg border border-white/[0.08] bg-white/[0.04] p-5 sm:grid-cols-4">
          {[
            { label: 'Client', value: 'LUNA by Navneet' },
            { label: 'Category', value: 'Fashion Boutique' },
            { label: 'Stack', value: 'Next.js · Tailwind' },
            { label: 'Timeline', value: '3 weeks' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/35">{label}</p>
              <p className="mt-1 text-sm font-semibold text-white/85">{value}</p>
            </div>
          ))}
        </div>

        <div className="prose-content mt-10 space-y-10">

          <section aria-labelledby="background">
            <h2 id="background" className="text-xl font-bold text-canvas">The Brief</h2>
            <p className="mt-4 text-white/70">
              LUNA by Navneet is a women&apos;s fashion boutique specialising in premium Indian ethnic wear — salwar suits, lehengas, and designer kurtis. The owner had been running the business purely through Instagram and WhatsApp, with no website. She wanted a professional online presence that could showcase collections, attract new customers through Google, and convert visitors into WhatsApp enquiries and direct orders.
            </p>
            <p className="mt-4 text-white/70">
              The key constraint: a tight budget, a three-week deadline before a new collection launch, and a client who needed to manage products herself without touching code.
            </p>
          </section>

          <section aria-labelledby="problem">
            <h2 id="problem" className="text-xl font-bold text-canvas">The Problem with WordPress for This Project</h2>
            <p className="mt-4 text-white/70">
              My first instinct was WooCommerce — it is the obvious choice for a fashion e-commerce site. But after reviewing the requirements, I moved to Next.js for three reasons:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'The client was not doing cart-based purchasing — she wanted WhatsApp enquiries and DMs, not a full checkout flow. WooCommerce overhead would be wasted.',
                'Page speed was critical for Google rankings in the ethnic fashion niche. Next.js with static generation outperforms WordPress by a large margin.',
                'She had a fixed collection that changed 3–4 times a year — not a dynamic inventory that needed a full CMS.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="architecture">
            <h2 id="architecture" className="text-xl font-bold text-canvas">Architecture Decisions</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: 'Next.js App Router with Static Generation',
                  body: 'All product pages and category pages are statically generated at build time. This means every page is pre-built HTML served from the CDN edge — sub-200ms load times globally. No server cold starts, no database queries per request.',
                },
                {
                  title: 'Product data in JSON, not a database',
                  body: 'With 40–60 products per collection and updates only a few times a year, a database would be overengineering. Products live in a typed TypeScript JSON file. The client sends me the new collection data and images; I push an update and Vercel redeploys in 90 seconds.',
                },
                {
                  title: 'Image optimization with next/image',
                  body: "Fashion products live and die by image quality. Next.js next/image automatically generates WebP and AVIF variants, applies responsive srcsets, and lazy loads off-screen images. The client's high-resolution product shots deliver fast on mobile without sacrificing quality.",
                },
                {
                  title: 'WhatsApp as the conversion layer',
                  body: 'Every product has a pre-filled WhatsApp CTA that includes the product name, colour, and size. Clicking &ldquo;Order via WhatsApp&rdquo; opens a conversation with the product details pre-loaded — zero friction for the customer, zero manual message handling for the owner.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65" dangerouslySetInnerHTML={{ __html: item.body }} />
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="tech-stack">
            <h2 id="tech-stack" className="text-xl font-bold text-canvas">Tech Stack</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { layer: 'Framework', tech: 'Next.js 14 (App Router)' },
                { layer: 'Styling', tech: 'Tailwind CSS' },
                { layer: 'Animations', tech: 'Framer Motion' },
                { layer: 'Images', tech: 'next/image (WebP/AVIF)' },
                { layer: 'Hosting', tech: 'Vercel (Edge Network)' },
                { layer: 'Analytics', tech: 'Google Analytics 4' },
                { layer: 'SEO', tech: 'Next.js Metadata API' },
                { layer: 'Forms', tech: 'WhatsApp wa.me links' },
                { layer: 'Domain', tech: 'Custom domain + SSL' },
              ].map(({ layer, tech }) => (
                <div key={layer} className="rounded border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/30">{layer}</p>
                  <p className="mt-0.5 text-xs text-white/70">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="seo-strategy">
            <h2 id="seo-strategy" className="text-xl font-bold text-canvas">SEO Strategy</h2>
            <p className="mt-4 text-white/70">
              This was a brand-new domain with no existing authority. The SEO priority was local and niche: rank for searches like &ldquo;Indian ethnic wear UK&rdquo;, &ldquo;salwar kameez online UK&rdquo;, &ldquo;designer kurti boutique&rdquo;.
            </p>
            <p className="mt-4 text-white/70">
              What I implemented:
            </p>
            <ul className="mt-3 space-y-3">
              {[
                'Structured metadata on every page — unique title, description, and Open Graph image per product and category.',
                'JSON-LD schema for LocalBusiness (with address, phone, opening hours) and Product schema on individual product pages.',
                'Sitemap.xml and robots.txt generated via Next.js route handlers.',
                'Each category page targets a specific keyword cluster — lehenga, salwar suit, kurti — with semantic HTML and descriptive content.',
                'Image alt text populated from product data — not generic "product image 1" patterns.',
                'Google Search Console verified and initial sitemap submitted on launch day.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="whatsapp-integration">
            <h2 id="whatsapp-integration" className="text-xl font-bold text-canvas">WhatsApp Integration Details</h2>
            <p className="mt-4 text-white/70">
              The WhatsApp integration was the most important feature for conversion. Here is how the pre-filled message link is built:
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs">
              <p className="text-white/40 mb-3">{'// Product CTA link builder'}</p>
              <p className="text-gold">{'const buildWhatsAppLink = (product: Product, size: string) => {'}</p>
              <p className="pl-4 text-white/70">{'const message = encodeURIComponent('}</p>
              <p className="pl-8 text-white/70">{"`Hi LUNA! I'm interested in:`\\n"}</p>
              <p className="pl-8 text-white/70">{'`*${product.name}*`\\n`Colour: ${product.colour}`\\n`Size: ${size}`'}</p>
              <p className="pl-4 text-white/70">{')'}</p>
              <p className="pl-4 text-white/70">{'return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`'}</p>
              <p className="text-gold">{'}'}</p>
            </div>
            <p className="mt-4 text-white/70">
              When a customer taps &ldquo;Order via WhatsApp&rdquo;, their WhatsApp opens with a ready-to-send message containing the product name, colour, and size they selected. The owner receives an instant, structured enquiry with no ambiguity.
            </p>
          </section>

          <section aria-labelledby="results">
            <h2 id="results" className="text-xl font-bold text-canvas">Results</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { metric: '98', unit: '/100', label: 'Lighthouse Score' },
                { metric: '<1.2s', unit: '', label: 'Average Page Load' },
                { metric: '3 wks', unit: '', label: 'Build to Launch' },
                { metric: 'Top 3', unit: '', label: 'Local Search Rankings (4 months)' },
              ].map(({ metric, unit, label }) => (
                <div key={label} className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-4 text-center">
                  <p className="font-bebas text-3xl text-gold">{metric}<span className="text-lg">{unit}</span></p>
                  <p className="mt-1 text-xs text-white/50">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/70">
              Within four months of launch, LUNA was ranking on page 1 for several target keywords in the UK ethnic wear niche. WhatsApp enquiries went from 5–8 per week (Instagram only) to 25–30 per week. The client was able to sell out the Eid collection entirely through the website-to-WhatsApp funnel.
            </p>
          </section>

          <section aria-labelledby="lessons">
            <h2 id="lessons" className="text-xl font-bold text-canvas">Key Lessons</h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  lesson: 'Match the stack to the actual conversion flow',
                  detail: 'WooCommerce would have been the &ldquo;standard&rdquo; choice, but it would have added complexity that did not serve this client. The conversion action was WhatsApp — not a cart checkout. Removing friction from the actual conversion path was more valuable than feature completeness.',
                },
                {
                  lesson: 'Static generation is underused for small e-commerce',
                  detail: 'Most small fashion brands default to Shopify or WooCommerce because they see &ldquo;e-commerce&rdquo; as one category. But for boutiques with curated collections and enquiry-based sales, a fast static Next.js site outperforms both on SEO and page speed — at lower long-term cost.',
                },
                {
                  lesson: 'SEO is a launch-day decision, not a retrofit',
                  detail: 'Metadata, structured data, sitemap, and alt text were built in from day one — not added later. Every page was SEO-ready before it was indexed. This compounds: the site started ranking within 6–8 weeks of launch rather than 6–8 months.',
                },
              ].map((item) => (
                <article key={item.lesson} className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-5">
                  <h3 className="text-sm font-bold text-gold">{item.lesson}</h3>
                  <p className="mt-2 text-sm text-white/65" dangerouslySetInnerHTML={{ __html: item.detail }} />
                </article>
              ))}
            </div>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">Conclusion</h2>
            <p className="leading-relaxed text-white/70">
              LUNA is one of my favourite projects because the constraints forced smart decisions. A smaller scope — no checkout, no CMS, no cart — led to a faster site, a cleaner codebase, and a better outcome for the client. Sometimes the right technical answer is doing less, not more.
            </p>
            <p className="leading-relaxed text-white/70">
              If you are a boutique owner or small fashion brand thinking about your online presence, I would be happy to talk through your options. A bespoke Next.js site may be simpler and more effective than you think.
            </p>
            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/[0.05] p-5">
              <p className="text-sm font-bold text-gold">Want a website like this for your business?</p>
              <p className="mt-2 text-sm text-white/65">I build fast, SEO-ready websites for boutiques, local businesses, and small brands. Get in touch to discuss your project.</p>
              <a href={`mailto:${contact.email}?subject=Website Enquiry`} className="mt-4 inline-flex items-center gap-2 bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-studio transition hover:bg-gold-light">
                Get in Touch →
              </a>
            </div>
          </section>

          <ShareButtons url={articleUrl} title={articleTitle} />
          <AboutAuthor
            relatedArticles={[
              { slug: 'how-i-built-full-stack-saas-nextjs-nodejs', title: 'How I Built a Full-Stack SaaS with Next.js and Node.js' },
              { slug: 'nextjs-vs-wordpress-for-business-websites', title: 'Next.js vs WordPress for Business Websites' },
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
