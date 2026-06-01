import type { Metadata } from 'next';
import Link from 'next/link';
import { seo, personal, contact } from '@/lib/data';
import HeaderNav from '@/components/HeaderNav';

const fullName = `${personal.firstName} ${personal.lastName}`;
const articleTitle = 'How Local Businesses Can Get More Customers with Google Business Profile';
const articleDescription =
  'Learn how to optimize your Google Business Profile to attract more customers in 2026. Discover expert strategies for profile verification, category selection, customer reviews, local SEO, and performance tracking.';
const articleUrl = `${seo.siteUrl}/blog/how-local-businesses-get-customers-google-business-profile`;
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

export default function GBPBlogPost() {
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
          <span className="text-black/60 dark:text-white/60">Local SEO</span>
        </nav>

        {/* Meta */}
        <p className="section-kicker mb-5 font-black text-[#d6ad63] uppercase tracking-[0.15em] text-xs">Deep Dive · Local SEO</p>
        <h1 className="hero-title text-[#0b0d0e] dark:text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">{articleTitle}</h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black/60 dark:text-white/60 font-medium">How Local Businesses Can Get More Customers with Google Business Profile</p>

        <div className="mt-6 flex items-center gap-4 border-b border-black/10 dark:border-white/10 pb-8">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-[#d6ad63]/40 text-sm font-black text-[#d6ad63]">
            JS
          </div>
          <div>
            <p className="text-sm font-bold text-[#0b0d0e] dark:text-white">{fullName}</p>
            <p className="meta-label text-xs text-black/40 dark:text-white/40 uppercase tracking-wider">
              Published {new Date(publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} · 10 min read
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose-content mt-10 space-y-12 text-[#0b0d0e] dark:text-white">
          
          <section id="introduction" className="space-y-4">
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Imagine owning a great business, offering excellent services, and having happy customers—but when people search for businesses like yours on Google, they find your competitors instead.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold text-[#d6ad63]">
              That’s where Google Business Profile (GBP) comes in.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Formerly known as Google My Business, Google Business Profile is one of the most powerful free marketing tools available to local businesses. Whether you own a taxi company, restaurant, salon, real estate agency, repair shop, medical clinic, gym, or retail store, optimizing your Google Business Profile can significantly increase visibility, phone calls, website visits, and customer inquiries.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              When someone searches:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-black/65 dark:text-white/65 pl-4 list-disc">
              <li>“Taxi near me”</li>
              <li>“Best restaurant nearby”</li>
              <li>“Web developer near me”</li>
              <li>“Car rental service”</li>
            </ul>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 mt-4">
              Google often displays local business listings before traditional website results. If your business appears in those results, you’re already ahead of many competitors.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              In this guide, you’ll learn exactly how local businesses can use Google Business Profile to attract more customers in 2026.
            </p>
          </section>

          <section id="what-is-gbp" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              What Is Google Business Profile?
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Google Business Profile is a free tool provided by Google that allows businesses to manage how they appear in Google Search, Google Maps, and local search results.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Your profile displays key storefront information directly to searchers:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-black/60 dark:text-white/60 pl-4 list-disc">
              <li>Business name & branding</li>
              <li>Verified phone number</li>
              <li>Website URL link</li>
              <li>Operating business hours</li>
              <li>Customer reviews & ratings</li>
              <li>High-quality business photos</li>
              <li>Google Maps directions</li>
              <li>List of products & services</li>
            </ul>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 italic text-center font-medium mt-4">
              Think of it as your business’s digital storefront on Google. For many customers, your Google profile creates the absolute first impression of your business.
            </p>
          </section>

          <section id="why-it-matters" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Why Google Business Profile Matters
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Consumer behavior has changed dramatically. Before visiting a business, customers typically search online to verify details: Are you open? Where are you located? What do other customers think?
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Google Business Profile answers these questions instantly. Businesses that optimize their profiles often receive more phone calls, more website visits, more direction requests, and greater customer trust. Ignoring GBP is like refusing free advertising.
            </p>
          </section>

          <section id="benefits" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Benefits of Google Business Profile
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Actively managing your profile delivers five critical local business advantages:
            </p>
            <div className="space-y-4 mt-4 text-xs">
              {[
                { title: 'Increased Visibility', desc: 'Google displays local map pack results before standard organic rankings, placing you at the top.' },
                { title: 'More Direct Phone Calls', desc: 'Mobile users can call your service with a single tap, increasing customer contact rates.' },
                { title: 'Stronger Customer Trust', desc: 'A complete verified profile backed by positive reviews builds strong commercial credibility.' },
                { title: 'Improved Local SEO', desc: 'Adding keywords and location markers helps Google understand where to display your listing.' },
                { title: 'Free marketing Asset', desc: 'Unlike expensive paid ads, GBP generates continuous local organic leads at zero cost.' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start pl-2">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#d6ad63]/10 text-[10px] font-black text-[#d6ad63]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0b0d0e] dark:text-white">{benefit.title}</h3>
                    <p className="text-black/60 dark:text-white/60 mt-0.5 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="creating-profile" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Creating Your Google Business Profile
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Getting set up takes only a few straightforward steps:
            </p>
            <ol className="mt-4 space-y-3 text-xs pl-2">
              <li>
                <strong className="text-white block">Step 1: Sign In</strong>
                Use your business Google Account credentials to access Google Business.
              </li>
              <li>
                <strong className="text-white block">Step 2: Add Business Information</strong>
                Declare your exact business name, physical street address (or service areas), verified phone number, and website URL.
              </li>
              <li>
                <strong className="text-white block">Step 3: Select Categories</strong>
                Choose the primary business category that best reflects your core service.
              </li>
              <li>
                <strong className="text-white block">Step 4: Verify Ownership</strong>
                Complete Google's verification request to unlock editing controls and display your verified badge.
              </li>
            </ol>
          </section>

          <section id="verification" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Verifying Your Business
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Verification is a critical step. Without verification, you cannot fully manage your profile, and features like reviews, maps routing, and posts remain blocked.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Google uses several verification methods depending on business categories:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-4 text-xs">
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
                <span className="font-bold text-[#d6ad63] block mb-1">Postcard & Phone</span>
                <p className="text-black/60 dark:text-white/60">Google mails a physical code to your business address or sends an instant verification SMS.</p>
              </div>
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
                <span className="font-bold text-[#d6ad63] block mb-1">Email & Video</span>
                <p className="text-black/60 dark:text-white/60">Verification via corporate emails or direct video walkthroughs showing your tools, location, and registration.</p>
              </div>
            </div>
          </section>

          <section id="categories" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Choosing the Right Business Category
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Your primary category choice significantly impacts local SEO. Categories tell Google exactly what your business does and which local searches match your services.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold">
              Primary category matching examples:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-1.5">
              <li><strong>Taxi Company:</strong> Choose <em>"Taxi Service"</em> as primary.</li>
              <li><strong>Restaurant:</strong> Choose <em>"Restaurant"</em> or specific subcategories (e.g. <em>"Italian Restaurant"</em>).</li>
              <li><strong>Web Development:</strong> Choose <em>"Website Designer"</em> or <em>"Software Company"</em>.</li>
            </ul>
          </section>

          <section id="optimizing-info" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Optimizing Business Information
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Complete, detailed profiles rank significantly higher on Google Maps search. Ensure you optimize:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-2 mt-3">
              <li><strong>Business Name:</strong> Use your actual, legal business name. Avoid stuffing spammy keywords.</li>
              <li><strong>Consistent NAP:</strong> Keep your Name, Address, and Phone number identical across all web directories.</li>
              <li><strong>Website Links:</strong> Add a direct, clean link pointing to your mobile-friendly homepage.</li>
              <li><strong>Description:</strong> Clearly explain what services you offer, what neighborhoods you serve, and why customers choose you.</li>
            </ul>
          </section>

          <section id="photos" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Adding High-Quality Photos
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Photos influence customer decisions far more than most business owners realize. Listings featuring crisp, updated photos receive significantly higher maps direction requests.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Add diverse exterior views to help customers identify your location, clean interior layouts to build familiarity, team photos to humanize your services, and product closeups to showcase what you sell.
            </p>
          </section>

          <section id="reviews" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Collecting Customer Reviews
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Customer reviews are primary local ranking factors. Think of reviews as digital word-of-mouth marketing. Positive ratings influence both Google's search algorithms and customer purchasing decisions.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold text-[#d6ad63]">
              Ask every happy customer consistently:
            </p>
            <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-xs italic text-black/75 dark:text-white/75">
              "If you were happy with our services today, we would highly appreciate a brief review on our Google Business Profile!"
            </div>
          </section>

          <section id="managing-reviews" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Managing Reviews Professionally
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Make it a habit to respond to every incoming customer review.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold">
              Review management guidelines:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-2">
              <li><strong>Positive Reviews:</strong> Thank the customer warmly and show genuine appreciation.</li>
              <li><strong>Negative Reviews:</strong> Never argue publicly. Address complaints calmly, remain professional, and offer to resolve issues offline via email or phone.</li>
            </ul>
          </section>

          <section id="updates" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Posting Updates Regularly
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Google allows verified businesses to post social-media-style updates directly onto search listings. Publish regular updates to share seasonal promotions, introduce new services, announce achievements, and promote events. This signals to Google that your business is active and responsive.
            </p>
          </section>

          <section id="products-services" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Using Products and Services Sections
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Failing to use the Products and Services sections is a major missed opportunity.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Clearly outline your core business packages (e.g. airport taxi bookings, local SEO auditing, responsive portfolio development) and assign pricing bounds to help searchers find exactly what they need instantly.
            </p>
          </section>

          <section id="local-seo-optimization" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Optimizing for Local SEO
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Your Google listing and main business site must support each other to build local search authority:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-2">
              <li><strong>Local Keywords:</strong> Integrate geographic terms (e.g., <em>"Taxi Service in London"</em>, <em>"Web Designer in Toronto"</em>) naturally into your site copy.</li>
              <li><strong>Build Local Citations:</strong> Register your exact businessName and address in high-authority directory sites.</li>
              <li><strong>Backlink Structures:</strong> Secure links from local business circles, chambers of commerce, and directories to raise local authority.</li>
            </ul>
          </section>

          <section id="performance" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-[#d6ad63]/25 pb-2">
              Tracking Performance
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Google provides robust analytics tools directly inside the Business Profile dashboard. Track search views, phone calls initiated, website clicks, direction requests, and review growth to make smart, data-driven decisions.
            </p>
          </section>

          <section id="mistakes" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Common Mistakes to Avoid
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Avoid these common mistakes to protect your profile's visibility:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mt-4 text-xs">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Incomplete Profiles</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Missing hours or phone numbers hurts search rankings and frustrates customers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Low-Quality visual Assets</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Blurry, dark, or unprofessional photos reduce client trust in your business.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Ignoring Reviews</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Failing to respond to positive or negative feedback reduces customer engagement metrics.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-500 dark:text-red-400 block mb-1">Lacking Active Updates</span>
                <p className="text-black/65 dark:text-white/65 leading-relaxed">
                  Neglecting updates makes your business appear inactive compared to competitors.
                </p>
              </div>
            </div>
          </section>

          <section id="advanced-growth" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Advanced Growth Strategies
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Once your profile is optimized, you can accelerate growth further:
            </p>
            <ul className="pl-4 list-disc text-xs text-black/65 dark:text-white/65 space-y-1.5 mt-3">
              <li><strong>Add Detailed FAQs:</strong> Build a helpful questions-and-answers section directly on your listing.</li>
              <li><strong>Upload Walkthrough Videos:</strong> Upload short, professional videos showing your business in action.</li>
              <li><strong>Encourage Customer Photos:</strong> Ask customers to share real, unedited photos of your products or services.</li>
            </ul>
          </section>

          <section id="real-world-example" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Real-World Example
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Let's evaluate two local taxi companies operating in the same area:
            </p>
            <div className="grid gap-4 mt-6 sm:grid-cols-2 text-xs">
              <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
                <span className="font-bold text-[#d6ad63] block mb-1">Company A</span>
                <p className="text-black/60 dark:text-white/60 leading-relaxed">
                  Operates without an optimized Google profile. Has no reviews, no photos, and no listing updates. Customers cannot discover them on Google Maps.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#d6ad63]/5 border border-[#d6ad63]/25">
                <span className="font-bold text-white block mb-1">Company B</span>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  Maintains an optimized profile with 100+ positive reviews, crisp interior/exterior photos, weekly updates, and direct booking links.
                </p>
              </div>
            </div>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 mt-6 italic text-center font-medium">
              The answer is obvious: Company B will receive significantly more local calls and inquiries.
            </p>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b0d0e] dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
              Conclusion
            </h2>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              Google Business Profile is one of the most valuable tools available to local businesses in 2026. It helps increase visibility, build trust, improve local search rankings, and generate more customers—all without requiring a large marketing budget.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70 font-semibold text-[#d6ad63]">
              By completing your profile, collecting reviews, posting updates, optimizing local SEO, and maintaining accurate information, you can dramatically improve your online presence and compete effectively in your local market.
            </p>
            <p className="body-copy leading-relaxed text-black/70 dark:text-white/70">
              For many businesses, Google Business Profile is the difference between being discovered and being overlooked. The businesses that consistently invest time in optimizing their profiles are often the businesses that win more customers.
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
                  q: '1. Is Google Business Profile free?',
                  a: 'Yes. Google Business Profile is completely free to create, verify, and manage.',
                },
                {
                  q: '2. How long does verification take?',
                  a: 'Timeline depends on the method. Phone SMS is instant, email takes minutes, video review takes days, and postcard mailing takes up to 14 days.',
                },
                {
                  q: '3. Do reviews help rankings?',
                  a: 'Yes. Customer review volume, velocity, and ratings are primary local SEO ranking factors on Google Maps.',
                },
                {
                  q: '4. How often should I post updates?',
                  a: 'Posting updates weekly is generally recommended to keep your listing active and signal responsiveness to Google.',
                },
                {
                  q: '5. Can I manage multiple locations?',
                  a: 'Yes. Google Business Profile offers a centralized dashboard to manage and monitor multiple locations under one brand.',
                },
                {
                  q: '6. What is the most important optimization factor?',
                  a: 'Ensuring your information is complete and accurate, maintaining category accuracy, and collecting positive reviews.',
                },
                {
                  q: '7. Do photos improve performance?',
                  a: 'Yes. Listings featuring high-quality photos receive significantly higher engagement, website clicks, and map direction requests.',
                },
                {
                  q: '8. Can Google Business Profile replace a website?',
                  a: 'No. Your Google Profile and website work best together, feeding authority, backlinks, and traffic to one another.',
                },
                {
                  q: '9. Does Google Business Profile help local SEO?',
                  a: 'Absolutely. It is the single most important asset to drive local maps pack search rankings.',
                },
                {
                  q: '10. How can I get more reviews?',
                  a: 'Consistently ask satisfied customers upon completing projects and provide a clean, direct review URL link.',
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
          <p className="section-kicker mb-1 text-xs font-bold uppercase tracking-wider text-[#d6ad63]">Want to dominate your local market?</p>
          <h2 className="mt-3 text-xl font-black text-[#0b0d0e] dark:text-white">
            Hire {fullName} for Local SEO & Web Development
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-black/65 dark:text-white/65">
            We specialize in helping local businesses capture targeted customers. From optimizing Google Business Profiles and deploying geo-targeted landing pages to building custom Booking Systems and fast Next.js sites, our team delivers high-converting results.
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
