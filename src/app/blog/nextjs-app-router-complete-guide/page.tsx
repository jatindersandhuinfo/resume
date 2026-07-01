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
const articleTitle = 'Next.js 14 App Router: Complete Guide for Beginners';
const articleDescription =
  'Everything you need to know about the Next.js App Router — layouts, loading states, error boundaries, server components, and data fetching patterns explained clearly.';
const articleUrl = `${seo.siteUrl}/blog/nextjs-app-router-complete-guide`;
const publishDate = '2026-07-01';
const modifiedDate = '2026-07-01';

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
  const relatedPosts = getRelatedPosts('nextjs-app-router-complete-guide');
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
        keywords="Next.js App Router, Next.js 14, server components, layouts, loading.tsx, error.tsx, data fetching"
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

        <p className="chapter-label mb-5">Guide · Next.js · App Router</p>
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">{articleTitle}</h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/60 font-medium">{articleDescription}</p>

        <div className="mt-6 flex items-center gap-4 border-b border-white/[0.08] pb-8">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-sm font-black text-gold">JS</div>
          <div>
            <p className="text-sm font-bold text-white">{fullName}</p>
            <p className="meta-label text-xs text-white/40 uppercase tracking-wider">
              Published {new Date(publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} · 11 min read
            </p>
          </div>
        </div>

        <div className="prose-content mt-10 space-y-10">
          <section id="introduction" aria-labelledby="introduction" className="space-y-4">
            <p className="leading-relaxed text-white/70">
              When Next.js 13 shipped the App Router, it changed how developers think about building React applications. Routing, data fetching, layouts, and loading states all moved into a single, folder-based system built on React Server Components. By Next.js 14, the App Router became the recommended default for every new project.
            </p>
            <p className="leading-relaxed text-white/70">
              If you are still on the older Pages Router, or you are new to Next.js entirely, the App Router can feel unfamiliar at first — new file conventions, a new mental model for client vs. server code, and new patterns for fetching data. This guide walks through everything you need to know, in the order you will actually use it on a real project.
            </p>
            <p className="leading-relaxed text-white/70">
              I build production Next.js applications for clients regularly, and the App Router is what I reach for on every new build today. This guide is the explanation I wish I had when I started.
            </p>
          </section>

          <section id="folder-routing" aria-labelledby="folder-routing" className="space-y-4">
            <h2 id="folder-routing" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              File-Based Routing in the App Router
            </h2>
            <p className="leading-relaxed text-white/70">
              Every route in the App Router lives inside the <code className="text-gold">src/app</code> directory. A folder becomes a URL segment, and a special <code className="text-gold">page.tsx</code> file inside that folder makes the route publicly accessible.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 overflow-x-auto">
{`app/
  page.tsx              → /
  about/
    page.tsx            → /about
  blog/
    page.tsx             → /blog
    [slug]/
      page.tsx            → /blog/my-post
  dashboard/
    layout.tsx           → shared UI for all dashboard routes
    page.tsx              → /dashboard
    settings/
      page.tsx             → /dashboard/settings`}
            </div>
            <p className="leading-relaxed text-white/70">
              Dynamic segments use square brackets — <code className="text-gold">[slug]</code> — and the value is available to your page as a prop. This is exactly how a page like this blog post is generated.
            </p>
          </section>

          <section id="layouts" aria-labelledby="layouts" className="space-y-4">
            <h2 id="layouts" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Layouts: Shared UI That Persists
            </h2>
            <p className="leading-relaxed text-white/70">
              A <code className="text-gold">layout.tsx</code> file wraps every page inside its folder and any nested folders. Layouts do not re-render when you navigate between pages that share them, which makes them ideal for navigation bars, sidebars, and anything that should stay mounted — like an open modal or a persisted scroll position.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 overflow-x-auto">
{`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}`}
            </div>
            <p className="leading-relaxed text-white/70">
              You can nest layouts as deep as you need. The root <code className="text-gold">app/layout.tsx</code> is required in every project — it defines your <code className="text-gold">&lt;html&gt;</code> and <code className="text-gold">&lt;body&gt;</code> tags and is the right place for global fonts, providers, and analytics scripts.
            </p>
          </section>

          <section id="loading-states" aria-labelledby="loading-states" className="space-y-4">
            <h2 id="loading-states" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Loading States with loading.tsx
            </h2>
            <p className="leading-relaxed text-white/70">
              Drop a <code className="text-gold">loading.tsx</code> file next to any <code className="text-gold">page.tsx</code> and Next.js automatically wraps that route in a React Suspense boundary. While the page is fetching its data on the server, your loading UI shows instantly — no manual state management required.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 overflow-x-auto">
{`// app/dashboard/loading.tsx
export default function Loading() {
  return <div className="animate-pulse">Loading dashboard...</div>;
}`}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <article className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                <h3 className="text-sm font-bold text-gold mb-2">Why it matters</h3>
                <p className="text-xs leading-relaxed text-white/65">Users see instant feedback on navigation instead of a blank white screen while the server fetches data.</p>
              </article>
              <article className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                <h3 className="text-sm font-bold text-gold mb-2">Scope</h3>
                <p className="text-xs leading-relaxed text-white/65">A loading.tsx file only affects the segment it sits in and everything nested below it.</p>
              </article>
            </div>
          </section>

          <section id="error-boundaries" aria-labelledby="error-boundaries" className="space-y-4">
            <h2 id="error-boundaries" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Error Boundaries with error.tsx
            </h2>
            <p className="leading-relaxed text-white/70">
              An <code className="text-gold">error.tsx</code> file catches runtime errors inside its route segment and renders a fallback UI instead of crashing the whole app. It must be a Client Component because it uses React state to reset the boundary.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 overflow-x-auto">
{`// app/dashboard/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <p>Something went wrong.</p>
      <button onClick={() => reset()} className="mt-3 underline">
        Try again
      </button>
    </div>
  );
}`}
            </div>
            <p className="leading-relaxed text-white/70">
              For errors thrown in the root layout itself, use a special <code className="text-gold">global-error.tsx</code> file, since the regular error boundary cannot catch failures above it in the tree.
            </p>
          </section>

          <section id="server-components" aria-labelledby="server-components" className="space-y-4">
            <h2 id="server-components" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Server Components vs. Client Components
            </h2>
            <p className="leading-relaxed text-white/70">
              Every component in the App Router is a <strong>Server Component by default</strong>. Server Components render on the server, send zero JavaScript to the browser, and can talk to a database or read a file system directly. Add <code className="text-gold">&apos;use client&apos;</code> at the top of a file only when you need interactivity — state, effects, event handlers, or browser-only APIs.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/[0.1] text-left text-white/50 uppercase tracking-wide">
                    <th className="py-2 pr-4">Capability</th>
                    <th className="py-2 pr-4">Server Component</th>
                    <th className="py-2">Client Component</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-white/65">
                  <tr>
                    <td className="py-2 pr-4">Fetch data directly (DB, filesystem)</td>
                    <td className="py-2 pr-4 text-gold">Yes</td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">useState / useEffect</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 text-gold">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Ships JavaScript to browser</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 text-gold">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">onClick, onChange handlers</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2 text-gold">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed text-white/70">
              A good rule of thumb: keep as much of your tree as Server Components as possible, and push <code className="text-gold">&apos;use client&apos;</code> as far down the component tree as you can — often onto a single button or form, not an entire page.
            </p>
          </section>

          <section id="data-fetching" aria-labelledby="data-fetching" className="space-y-4">
            <h2 id="data-fetching" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Data Fetching Patterns
            </h2>
            <p className="leading-relaxed text-white/70">
              Because Server Components run on the server, you can fetch data with a plain <code className="text-gold">async</code> function — no <code className="text-gold">useEffect</code>, no client-side loading spinner logic.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 overflow-x-auto">
{`// app/blog/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
            </div>
            <p className="leading-relaxed text-white/70 font-semibold">
              The <code className="text-gold">fetch</code> caching options control your rendering strategy:
            </p>
            <ul className="pl-4 list-disc text-xs text-white/65 space-y-1.5">
              <li><strong className="text-white">Default (cache: &apos;force-cache&apos;):</strong> static rendering — fetched once at build time.</li>
              <li><strong className="text-white">cache: &apos;no-store&apos;:</strong> dynamic rendering — fetched fresh on every request.</li>
              <li><strong className="text-white">next: {`{ revalidate: N }`}:</strong> Incremental Static Regeneration — cached, then revalidated every N seconds.</li>
            </ul>
            <p className="leading-relaxed text-white/70">
              For mutations — form submissions, creating a record, sending a message — use Server Actions instead of building a separate API route. A Server Action is an async function marked with <code className="text-gold">&apos;use server&apos;</code> that you can call directly from a form or a Client Component.
            </p>
          </section>

          <section id="mistakes" aria-labelledby="mistakes" className="space-y-4">
            <h2 id="mistakes" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Common Mistakes Beginners Make
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 mt-2 text-xs">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-400 block mb-1">Marking entire pages &apos;use client&apos;</span>
                <p className="text-white/65 leading-relaxed">This throws away all the server-rendering benefits. Keep the client boundary as small as possible.</p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-400 block mb-1">Fetching data in useEffect</span>
                <p className="text-white/65 leading-relaxed">This causes a client-side waterfall. Fetch in a Server Component instead and pass data down as props.</p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-400 block mb-1">Forgetting loading.tsx exists</span>
                <p className="text-white/65 leading-relaxed">Developers build manual spinners with useState when a single file would handle it automatically.</p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="font-bold text-red-400 block mb-1">Mixing Pages Router and App Router patterns</span>
                <p className="text-white/65 leading-relaxed">getServerSideProps and getStaticProps do not exist in the App Router — use async Server Components instead.</p>
              </div>
            </div>
          </section>

          <section id="faqs" aria-labelledby="faqs" className="space-y-4">
            <h2 id="faqs" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-4">
              {[
                { q: 'Is the App Router replacing the Pages Router?', a: 'Yes. The App Router is the recommended approach for all new Next.js projects starting with Next.js 13+, and it is the default in Next.js 14 and 15.' },
                { q: 'Do I need to rewrite my whole app to migrate?', a: 'No. Next.js supports incremental adoption — you can run the app/ and pages/ directories side by side and migrate route by route.' },
                { q: 'Can Server Components use hooks like useState?', a: 'No. Hooks only work in Client Components marked with the ‘use client’ directive at the top of the file.' },
                { q: 'How is this different from getServerSideProps?', a: 'Server Components replace that pattern entirely — you just write an async function and await your data directly in the component.' },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-white/[0.08] bg-white/[0.05] p-5">
                  <h3 className="text-sm font-bold text-gold">{faq.q}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/65">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="conclusion" aria-labelledby="conclusion" className="space-y-4">
            <h2 id="conclusion" className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">
              Conclusion
            </h2>
            <p className="leading-relaxed text-white/70">
              The App Router is not just a new set of file conventions — it is a genuinely different way to build React apps, with Server Components at the center. Once the folder structure, layouts, loading states, and Server/Client boundary click, most developers find it faster to build with than the old Pages Router.
            </p>
            <p className="leading-relaxed text-white/70">
              Start small: convert one route, get comfortable with async Server Components, then move on to Server Actions for your forms. I use this exact stack — Next.js App Router, Server Components, and Server Actions — on every client project I build today, and it consistently produces faster, more maintainable applications.
            </p>
            <div className="mt-6 rounded-lg border border-gold/25 bg-gold/5 p-5">
              <p className="text-sm font-semibold text-white">
                Need help migrating your app to the App Router, or want a Next.js project built the right way from day one?{' '}
                <a href={`mailto:${contact.email}`} className="text-gold underline hover:text-white">Get in touch</a> and let&apos;s talk about your project.
              </p>
            </div>
          </section>

          <ShareButtons url={articleUrl} title={articleTitle} />
          <AboutAuthor
            relatedArticles={[
              { slug: 'how-to-build-rest-api-nodejs-express', title: 'How to Build a REST API with Node.js and Express (2026 Guide)' },
              { slug: 'nextjs-vs-wordpress-for-business-websites', title: 'Next.js vs WordPress: Which is Better for Business Websites in 2026?' },
              { slug: 'nodejs-vs-laravel-which-backend-is-better', title: 'Node.js vs Laravel: Which Backend Should You Choose in 2026?' },
              { slug: 'react-vs-nextjs-which-should-you-learn-2026', title: 'React vs Next.js: Which Should You Learn in 2026?' },
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
