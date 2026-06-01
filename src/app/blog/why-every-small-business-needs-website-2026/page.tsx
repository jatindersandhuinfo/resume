import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal, contact } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

const fullName = `${personal.firstName} ${personal.lastName}`;
const articleTitle = 'Why Every Small Business Needs a Website in 2026';
const articleDescription =
  'Discover why having a professional website is a necessity for small businesses in 2026. Learn how websites build credibility, drive local SEO, generate leads, and work 24/7 beyond social media limits.';
const articleUrl = `${seo.siteUrl}/blog/why-every-small-business-needs-website-2026`;
const publishDate = '2026-06-01';

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

export default function SmallBusinessWebsiteBlogPost() {
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
            href="/blog"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-black/60 dark:text-white/60 transition hover:text-[#d6ad63]"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black/40 dark:text-white/40">
          <Link href="/" className="transition hover:text-[#d6ad63]">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" className="transition hover:text-[#d6ad63]">Blog</Link>
          <span aria-hidden="true">›</span>
          <span className="text-black/60 dark:text-white/60">Business Growth</span>
        </nav>

        {/* Meta */}
        <p className="section-kicker mb-5 font-black text-[#d6ad63] uppercase tracking-[0.15em] text-xs">Strategy · Business Growth</p>
        <h1 className="hero-title text-[#0b0d0e] dark:text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">{articleTitle}</h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black/60 dark:text-white/60 font-medium">Why Every Small Business Needs a Website in 2026: The Digital Signboard</p>

        <div className="mt-6 flex items-center gap-4 border-b border-black/10 dark:border-white/10 pb-8">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-[#d6ad63]/40 text-sm font-black text-[#d6ad63]">
            JS
          </div>
          <div>
            <p className="text-sm font-bold text-[#0b0d0e] dark:text-white">{fullName}</p>
            <p className="meta-label text-xs text-black/40 dark:text-white/40 uppercase tracking-wider">
              Published {new Date(publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} · 8 min read
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose-content mt-10 space-y-12 text-[#0b0d0e] dark:text-white">
          
          <section id="introduction" className="space-y-4">
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Imagine opening a shop in the middle of a city but never putting up a signboard. People walk by every day, yet they have no idea your business exists.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold text-[#d6ad63]">
              That’s exactly what happens when a business operates without a website in 2026.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Many small business owners still rely solely on social media, word-of-mouth marketing, or online marketplaces. While these channels can generate customers, they should never replace a professional business website.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Today, your website is your digital storefront, sales representative, marketing department, and customer support desk—all working 24 hours a day, 7 days a week.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Whether you run a restaurant, taxi company, real estate agency, salon, medical clinic, construction company, or retail store, having a professional website is no longer optional. It’s a necessity.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              In this guide, we’ll explore why every small business needs a website in 2026 and how it can help attract customers, increase revenue, and build long-term credibility.
            </p>
          </section>

          <section id="digital-shift" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              The Digital Shift in Consumer Behavior
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Consumer behavior has changed dramatically over the past decade. Before buying a product or hiring a service, most people search online first.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              They want answers to questions like:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-black/65 dark:text-white/65 pl-4 list-disc">
              <li>Is this business legitimate?</li>
              <li>What services do they offer?</li>
              <li>What are their prices?</li>
              <li>Where are they located?</li>
              <li>What do previous customers say?</li>
            </ul>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 mt-4">
              If your business doesn’t have a website, potential customers will choose a competitor that does. Think of your website as your online business card—but much more powerful.
            </p>
          </section>

          <section id="works-24-7" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Your Website Works 24/7
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Unlike physical stores or phone support lines, websites never close. While you’re sleeping, your website can:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4 text-xs">
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                <span className="font-bold text-[#d6ad63] block">Generate Leads</span>
                <span className="text-black/60 dark:text-white/60">Collect quote requests and client emails automatically.</span>
              </div>
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                <span className="font-bold text-[#d6ad63] block">Handle Bookings</span>
                <span className="text-black/60 dark:text-white/60">Allow customers to schedule appointments anytime.</span>
              </div>
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                <span className="font-bold text-[#d6ad63] block">Display Services</span>
                <span className="text-black/60 dark:text-white/60">Showcase your complete, up-to-date catalog of offerings.</span>
              </div>
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                <span className="font-bold text-[#d6ad63] block">Answer FAQs</span>
                <span className="text-black/60 dark:text-white/60">Address repetitive questions without manual intervention.</span>
              </div>
            </div>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 italic text-center font-medium mt-4">
              Imagine having an employee who works 24 hours a day without taking breaks. That’s the power of a website.
            </p>
          </section>

          <section id="trust-credibility" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Building Trust and Credibility
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Trust is the deciding factor in purchasing decisions. When customers find a professional, polished website, they immediately feel more confident about your business.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              A high-quality website demonstrates professionalism, reliability, stability, and expertise. Without a website, customers will question whether your business is genuine. In 2026, consumers expect every legitimate business to have an online presence.
            </p>
          </section>

          <section id="local-seo" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Local SEO and Google Visibility
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              When people search queries like "taxi service near me", "best restaurant in my city", or "web developer near me", Google decides which businesses appear.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Having a well-optimized website helps improve your search rankings, drives organic traffic, and dramatically increases direct phone calls and inquiries. Google is often the first place customers look, and your website ensures you get found.
            </p>
          </section>

          <section id="leads" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Generating More Leads
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              A website functions as an automated lead generation machine. Instead of waiting for the phone to ring, your site can capture customer details via contact forms, email newsletter signups, quote estimators, or appointment pages.
            </p>
            <div className="p-5 rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-xs leading-relaxed">
              <span className="font-bold text-[#d6ad63] block mb-1">Example Lead Flow:</span>
              <p className="text-black/60 dark:text-white/60">
                A local user searches for your service, lands on your website, sees a clear "Get a Free Quote" callout, and submits their details. You generate a high-value lead without having to pick up a phone.
              </p>
            </div>
          </section>

          <section id="conversions" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Turning Visitors into Customers
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Generating website traffic is only half the battle. Your site must guide visitors toward taking action.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold text-[#d6ad63]">
              Configure clear conversion elements:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-1.5">
              <li><strong>Contact Forms:</strong> Keep fields simple to maximize submissions.</li>
              <li><strong>Online Booking:</strong> Ideal for service businesses to capture bookings instantly.</li>
              <li><strong>Quote Requests:</strong> Perfect for custom services and agencies.</li>
              <li><strong>Call-to-Action Buttons:</strong> High-contrast buttons directing users to the next step.</li>
            </ul>
          </section>

          <section id="competition" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Competing with Larger Businesses
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Small business owners frequently assume they cannot compete with massive multi-million dollar corporations. That is simply not true.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              A modern, fast, and responsive website levels the playing field. Consumers prioritize convenience, local expertise, responsiveness, and trust. A well-designed website allows a small business to appear just as professional—if not more so—than a larger competitor.
            </p>
          </section>

          <section id="beyond-social-media" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Benefits Beyond Social Media
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Relying solely on Facebook, Instagram, or WhatsApp is highly risky. While social media is useful for marketing, it has severe limitations:
            </p>
            
            <div className="grid gap-4 mt-4 sm:grid-cols-2 text-xs">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Renting Social Media:</span>
                <ul className="pl-4 list-disc text-black/60 dark:text-white/60 space-y-1">
                  <li>You don't own the platform; algorithms change overnight.</li>
                  <li>Limited branding and design capabilities.</li>
                  <li>Profiles rarely rank as effectively as websites on search engines.</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#d6ad63]/5 border border-[#d6ad63]/25">
                <span className="font-bold text-[#d6ad63] block mb-1">Owning a Website:</span>
                <ul className="pl-4 list-disc text-black/65 dark:text-white/65 space-y-1">
                  <li>Complete asset ownership and stability.</li>
                  <li>Total control over design, branding, and customer flows.</li>
                  <li>Superior SEO positioning and organic visibility.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="cost-effective" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Cost-Effective Marketing
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Traditional advertising channels like billboards, newspapers, or radio are incredibly expensive.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold">
              A website provides compounding long-term value:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-1.5">
              <li>Low monthly hosting costs.</li>
              <li>Excellent Return on Investment (ROI).</li>
              <li>Generates organic leads for years without recurring ad spend.</li>
            </ul>
          </section>

          <section id="automation" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Online Booking and Automation
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Consumers increasingly prefer digital self-service. Integrating online booking calendars, automated quote estimators, and AI support assistants reduces your administrative workload while significantly improving client satisfaction.
            </p>
          </section>

          <section id="showcasing" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Showcasing Products and Services
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              A website acts as your online showroom. Present your services with dedicated description pages, beautiful product galleries, and transparent pricing info to answer customer questions before they even ask.
            </p>
          </section>

          <section id="testimonials" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Customer Reviews and Testimonials
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              People trust other customers. Displaying dynamic testimonials, customer ratings, Google reviews, and real-world case studies directly on your site establishes powerful social proof that dramatically boosts conversion rates.
            </p>
          </section>

          <section id="data-analytics" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/20 pb-2">
              Data and Analytics
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              One of the greatest advantages of a website is having access to precise web analytics. You can easily track visitor counts, discover where your traffic is coming from, find your most popular pages, and monitor conversions to make smarter business decisions.
            </p>
          </section>

          <section id="mistakes" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Common Website Mistakes
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Avoid these common pitfalls to maximize your website's performance:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mt-4 text-xs">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Slow Loading Speed</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Slow-loading pages frustrate users and drive them to your competitors.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Poor Mobile Design</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Failing to optimize your site for smartphones will drive mobile users away.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Outdated Content</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Out-of-date pricing or services create an unprofessional impression.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Missing Contact Details</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Hiding phone numbers or forms makes it difficult to generate leads.
                </p>
              </div>
            </div>
          </section>

          <section id="essential-features" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Features Every Business Website Needs
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Ensure your business site includes these fundamental components:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4 text-xs font-semibold">
              {[
                'High-converting Homepage',
                'Trust-building About Page',
                'Detailed Services Pages',
                'Frictionless Contact Portal',
                'Client Testimonials & Social Proof',
                'SEO-boosting Blog section',
                'High-contrast Call-to-Action (CTA) Buttons',
                'Fast, Responsive Mobile Layout',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center p-3 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <span className="text-[#d6ad63]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="real-world-example" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Real-World Example
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Let's evaluate two local taxi companies operating in the same city:
            </p>
            <div className="grid gap-4 mt-6 sm:grid-cols-2 text-xs">
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
                <span className="font-bold text-[#d6ad63] block mb-1">Company A</span>
                <p className="text-black/60 dark:text-white/60 leading-relaxed">
                  Operates without a website. Relies solely on Facebook updates and phone calls. Customers cannot book rides online or verify credibility.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#d6ad63]/5 border border-[#d6ad63]/25">
                <span className="font-bold text-white block mb-1">Company B</span>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  Has a professional, optimized website. Offers a mobile-friendly booking form, displays customer reviews, and ranks at the top of Google searches.
                </p>
              </div>
            </div>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 mt-6 italic text-center font-medium">
              Which company will receive more inquiries? The answer is obvious.
            </p>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Conclusion
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              In 2026, a website is no longer a luxury for small businesses—it’s a necessity. Customers expect businesses to be accessible online, and companies without websites risk losing opportunities to competitors who are easier to find and trust.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold text-[#d6ad63]">
              A professional website helps build credibility, improve visibility, generate leads, automate processes, and support long-term growth. Combined with effective SEO and modern design practices, it becomes one of the most valuable assets a business can own.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Whether you’re launching a new company or growing an existing one, investing in a professional website is one of the smartest business decisions you can make. The businesses that thrive in the coming years will be those that embrace digital transformation and make it easy for customers to find, trust, and engage with them online.
            </p>
          </section>

          {/* FAQs Accordion Grid */}
          <section id="faqs" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2 font-extrabold">
              Frequently Asked Questions (FAQs)
            </h2>
            
            <div className="space-y-4 mt-6">
              {[
                {
                  q: '1. Does every small business really need a website?',
                  a: 'Yes. A professional website builds credibility, improves local SEO rankings, and automatically generates leads and customer inquiries.',
                },
                {
                  q: '2. Isn’t social media enough?',
                  a: 'No. While social platforms support marketing, they have severe limitations on search rankings and branding. You own your website completely.',
                },
                {
                  q: '3. How much does a small business website cost?',
                  a: 'Costs vary based on features, design, and complexity. A simple website starts from a few hundred dollars, while complex SaaS MVP builds cost more.',
                },
                {
                  q: '4. Can a website generate customers automatically?',
                  a: 'Yes. By using local SEO keywords, solid user experience layouts, and clear forms, websites can generate inbound leads continually.',
                },
                {
                  q: '5. How important is mobile optimization?',
                  a: 'Extremely important. Over 50% of web traffic comes from mobile devices, and Google ranks pages primarily based on mobile experiences.',
                },
                {
                  q: '6. What pages should every business website have?',
                  a: 'Every basic site needs a Homepage, About, Services, Contact, Testimonials, and a Blog section.',
                },
                {
                  q: '7. Can a website help local businesses rank on Google?',
                  a: 'Yes. Enforcing local SEO strategies (like dynamic location directories) will significantly improve your local search rankings.',
                },
                {
                  q: '8. How long does it take to build a website?',
                  a: 'A simple corporate website takes days to code and launch, whereas customized full-stack systems take several weeks.',
                },
                {
                  q: '9. Should small businesses have a blog?',
                  a: 'Yes. Regularly blogging improves search engine crawl rates, targets long-tail search keywords, and builds brand authority.',
                },
                {
                  q: '10. What is the biggest benefit of having a website?',
                  a: 'Reclaiming ownership of your digital presence and generating leads and customer bookings continuously 24/7.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-5">
                  <h3 className="text-sm font-bold text-[#d6ad63]">{faq.q}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/65">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Portfolio CTA Sidebar Card */}
        <aside className="mt-16 rounded-lg border border-[#d6ad63]/30 bg-gray-50 dark:bg-[#111416] p-7" aria-label="Hire developer CTA">
          <p className="section-kicker mb-1 text-xs font-bold uppercase tracking-wider text-[#d6ad63]">Ready to Scale Your Online Business?</p>
          <h2 className="mt-3 text-xl font-black text-[#0b0d0e] dark:text-white">
            Hire {fullName} for Custom Web Development
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-black/65 dark:text-white/65">
            We specialize in creating premium, high-converting websites for small businesses and startups. From local SEO configuration and lightning-fast Next.js layouts to automated CRM forms and custom databases, our freelance team handles everything worldwide.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6ad63] px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0d0e] transition hover:bg-white"
            >
              Consult with Jatinder
            </a>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#0b0d0e] dark:text-white transition hover:border-[#d6ad63] hover:text-[#d6ad63]"
            >
              View Our Projects
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
