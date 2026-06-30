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
const articleTitle = 'How to Build a REST API with Node.js and Express (2026 Guide)';
const articleDescription =
  'A step-by-step guide to building a production-ready REST API with Node.js and Express — routing, middleware, validation, error handling, and deployment.';
const articleUrl = `${seo.siteUrl}/blog/how-to-build-rest-api-nodejs-express`;
const publishDate = '2026-06-30';
const modifiedDate = '2026-06-30';

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
  const relatedPosts = getRelatedPosts('how-to-build-rest-api-nodejs-express');
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
        keywords="build rest api nodejs express, nodejs express tutorial 2026, express js api, rest api node js, production nodejs api"
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

        <p className="chapter-label mb-5">Guide · Node.js · Express</p>
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
            <h2 id="intro" className="text-xl font-bold text-canvas">What You Will Build</h2>
            <p className="mt-4 text-white/70">
              This guide walks you through building a production-ready REST API using Node.js and Express from scratch. By the end, you will have a working API with proper folder structure, routing, middleware, input validation, centralised error handling, and environment configuration — the same patterns I use in client projects.
            </p>
            <p className="mt-4 text-white/70">
              I have built REST APIs for taxi booking platforms, visa consultancy portals, admin dashboards, and SaaS products. The architecture in this guide is what I reach for every time — it is simple, scalable, and easy for other developers to pick up. We will skip the &ldquo;hello world&rdquo; basics and go straight to the structure that survives production.
            </p>
            <div className="mt-6 rounded-lg border border-gold/20 bg-gold/[0.05] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold mb-2">Prerequisites</p>
              <ul className="space-y-1.5">
                {['Node.js 18+ installed', 'Basic JavaScript / ES6+ knowledge', 'npm or yarn', 'A REST client — Postman or Thunder Client (VS Code extension)'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1 w-1 rounded-full bg-gold/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="setup">
            <h2 id="setup" className="text-xl font-bold text-canvas">Step 1 — Project Setup and Folder Structure</h2>
            <p className="mt-4 text-white/70">
              Start by initialising the project and installing the core dependencies. The folder structure matters — a flat structure works for tutorials but fails at scale. Use a feature-based layout from day one.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-gold/70 mb-2"># Initialise project</p>
              <p>mkdir my-api && cd my-api</p>
              <p>npm init -y</p>
              <p className="mt-3 text-gold/70"># Install core packages</p>
              <p>npm install express dotenv cors helmet morgan</p>
              <p className="mt-3 text-gold/70"># Install dev dependencies</p>
              <p>npm install -D nodemon</p>
            </div>
            <p className="mt-5 text-white/70">
              Here is the folder structure I use. Keep controllers, routes, middleware, and models cleanly separated — it makes the codebase easy to navigate as it grows.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40">my-api/</p>
              <p className="pl-4 text-white/40">├── src/</p>
              <p className="pl-8 text-white/60">├── controllers/   <span className="text-white/30"># Route logic</span></p>
              <p className="pl-8 text-white/60">├── routes/        <span className="text-white/30"># Express routers</span></p>
              <p className="pl-8 text-white/60">├── middleware/    <span className="text-white/30"># Auth, validation, error</span></p>
              <p className="pl-8 text-white/60">├── models/        <span className="text-white/30"># DB models (Mongoose / Prisma)</span></p>
              <p className="pl-8 text-white/60">├── utils/         <span className="text-white/30"># Helpers and shared logic</span></p>
              <p className="pl-8 text-gold/70">└── app.js         <span className="text-white/30"># Express app setup</span></p>
              <p className="pl-4 text-gold/70">├── .env</p>
              <p className="pl-4 text-gold/70">├── .env.example</p>
              <p className="pl-4 text-gold/70">└── server.js      <span className="text-white/30"># Entry point</span></p>
            </div>
          </section>

          <section aria-labelledby="express-setup">
            <h2 id="express-setup" className="text-xl font-bold text-canvas">Step 2 — Configure the Express App</h2>
            <p className="mt-4 text-white/70">
              Split your Express configuration from your server entry point. <code className="text-gold/80">app.js</code> handles middleware and routing. <code className="text-gold/80">server.js</code> starts the HTTP server. This separation makes testing easier — you can import the app without starting a server.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// src/app.js'}</p>
              <p><span className="text-gold/80">const</span> express = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;express&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> cors = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;cors&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> helmet = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;helmet&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> morgan = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;morgan&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> userRoutes = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;./routes/users&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> errorHandler = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;./middleware/errorHandler&apos;</span>);</p>
              <p className="mt-3"><span className="text-gold/80">const</span> app = express();</p>
              <p className="mt-3 text-white/40">{'// Security and logging'}</p>
              <p>app.use(helmet());</p>
              <p>app.use(cors());</p>
              <p>app.use(morgan(<span className="text-green-400/70">&apos;dev&apos;</span>));</p>
              <p>app.use(express.json());</p>
              <p className="mt-3 text-white/40">{'// Routes'}</p>
              <p>app.use(<span className="text-green-400/70">&apos;/api/users&apos;</span>, userRoutes);</p>
              <p className="mt-3 text-white/40">{'// Error handler — must be last'}</p>
              <p>app.use(errorHandler);</p>
              <p className="mt-3">module.exports = app;</p>
            </div>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// server.js'}</p>
              <p><span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;dotenv&apos;</span>).config();</p>
              <p><span className="text-gold/80">const</span> app = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;./src/app&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> PORT = process.env.PORT || <span className="text-blue-400/70">3000</span>;</p>
              <p className="mt-3">app.listen(PORT, () =&gt; {'{'}</p>
              <p className="pl-4">console.log(<span className="text-green-400/70">{`\`Server running on port \${PORT}\``}</span>);</p>
              <p>{'}'});</p>
            </div>
          </section>

          <section aria-labelledby="routing">
            <h2 id="routing" className="text-xl font-bold text-canvas">Step 3 — Routes and Controllers</h2>
            <p className="mt-4 text-white/70">
              Keep route definitions thin. The router file only maps HTTP methods and paths to controller functions. All business logic lives in the controller. This single rule keeps your routes file readable no matter how large the API grows.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// src/routes/users.js'}</p>
              <p><span className="text-gold/80">const</span> express = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;express&apos;</span>);</p>
              <p><span className="text-gold/80">const</span> router = express.Router();</p>
              <p><span className="text-gold/80">const</span> {'{ getUsers, getUserById, createUser, updateUser, deleteUser }'} = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;../controllers/users&apos;</span>);</p>
              <p className="mt-3">router.get(<span className="text-green-400/70">&apos;/&apos;</span>, getUsers);</p>
              <p>router.get(<span className="text-green-400/70">&apos;/:id&apos;</span>, getUserById);</p>
              <p>router.post(<span className="text-green-400/70">&apos;/&apos;</span>, createUser);</p>
              <p>router.put(<span className="text-green-400/70">&apos;/:id&apos;</span>, updateUser);</p>
              <p>router.delete(<span className="text-green-400/70">&apos;/:id&apos;</span>, deleteUser);</p>
              <p className="mt-3">module.exports = router;</p>
            </div>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// src/controllers/users.js'}</p>
              <p><span className="text-gold/80">const</span> getUsers = <span className="text-gold/80">async</span> (req, res, next) =&gt; {'{'}</p>
              <p className="pl-4"><span className="text-gold/80">try</span> {'{'}</p>
              <p className="pl-8 text-white/40">{'// Fetch from database here'}</p>
              <p className="pl-8"><span className="text-gold/80">const</span> users = []; <span className="text-white/40">{'// replace with DB query'}</span></p>
              <p className="pl-8">res.json({'{ success: true, data: users }'});</p>
              <p className="pl-4">{'} catch (err) {'}</p>
              <p className="pl-8">next(err); <span className="text-white/40">{'// passes to error handler'}</span></p>
              <p className="pl-4">{'}'}</p>
              <p>{'}'};</p>
              <p className="mt-3">module.exports = {'{ getUsers }'};  <span className="text-white/40">{'// export all controllers'}</span></p>
            </div>
            <p className="mt-4 text-white/70">
              The key pattern here is the <code className="text-gold/80">try/catch</code> wrapping every async controller and passing errors to <code className="text-gold/80">next(err)</code>. This sends the error to your centralised error handler rather than crashing the process or leaving the request hanging.
            </p>
          </section>

          <section aria-labelledby="middleware">
            <h2 id="middleware" className="text-xl font-bold text-canvas">Step 4 — Middleware: Validation and Error Handling</h2>
            <p className="mt-4 text-white/70">
              Middleware is the most important concept in Express. Every request passes through a chain of middleware functions before reaching your controller. Use middleware for authentication, input validation, logging, rate limiting, and error handling.
            </p>
            <p className="mt-4 text-white/70">
              For input validation, use <code className="text-gold/80">express-validator</code>. It keeps validation rules co-located with your routes and produces consistent error responses. Install it with <code className="text-gold/80">npm install express-validator</code>.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// src/middleware/validate.js'}</p>
              <p><span className="text-gold/80">const</span> {'{ validationResult }'} = <span className="text-gold/80">require</span>(<span className="text-green-400/70">&apos;express-validator&apos;</span>);</p>
              <p className="mt-3"><span className="text-gold/80">const</span> validate = (req, res, next) =&gt; {'{'}</p>
              <p className="pl-4"><span className="text-gold/80">const</span> errors = validationResult(req);</p>
              <p className="pl-4"><span className="text-gold/80">if</span> (!errors.isEmpty()) {'{'}</p>
              <p className="pl-8"><span className="text-gold/80">return</span> res.status(<span className="text-blue-400/70">400</span>).json({'{'}</p>
              <p className="pl-12">success: <span className="text-blue-400/70">false</span>,</p>
              <p className="pl-12">errors: errors.array(),</p>
              <p className="pl-8">{'}'});</p>
              <p className="pl-4">{'}'}</p>
              <p className="pl-4">next();</p>
              <p>{'}'};</p>
              <p className="mt-3">module.exports = validate;</p>
            </div>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// src/middleware/errorHandler.js'}</p>
              <p><span className="text-gold/80">const</span> errorHandler = (err, req, res, next) =&gt; {'{'}</p>
              <p className="pl-4"><span className="text-gold/80">const</span> statusCode = err.statusCode || <span className="text-blue-400/70">500</span>;</p>
              <p className="pl-4">res.status(statusCode).json({'{'}</p>
              <p className="pl-8">success: <span className="text-blue-400/70">false</span>,</p>
              <p className="pl-8">message: err.message || <span className="text-green-400/70">&apos;Internal server error&apos;</span>,</p>
              <p className="pl-8">...(process.env.NODE_ENV === <span className="text-green-400/70">&apos;development&apos;</span> && {'{ stack: err.stack }'}),</p>
              <p className="pl-4">{'}'});</p>
              <p>{'}'};</p>
              <p className="mt-3">module.exports = errorHandler;</p>
            </div>
            <p className="mt-4 text-white/70">
              The error handler has four parameters — Express identifies it as an error handler because of the four-argument signature <code className="text-gold/80">(err, req, res, next)</code>. It checks for a custom <code className="text-gold/80">statusCode</code> on the error object (useful for throwing intentional 404s or 403s) and only exposes stack traces in development mode.
            </p>
          </section>

          <section aria-labelledby="response-format">
            <h2 id="response-format" className="text-xl font-bold text-canvas">Step 5 — Consistent API Response Format</h2>
            <p className="mt-4 text-white/70">
              One of the most overlooked parts of API design is response consistency. Every endpoint should return the same shape — success flag, data, and where applicable, pagination metadata. This makes frontend integration predictable and error handling straightforward.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: 'Success Response',
                  color: 'border-green-500/20 bg-green-500/[0.04]',
                  code: `{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "total": 42
  }
}`,
                },
                {
                  label: 'Error Response',
                  color: 'border-red-500/20 bg-red-500/[0.04]',
                  code: `{
  "success": false,
  "message": "User not found",
  "errors": [
    { "field": "id", "msg": "..." }
  ]
}`,
                },
              ].map((item) => (
                <div key={item.label} className={`rounded-lg border p-4 ${item.color}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-3">{item.label}</p>
                  <pre className="font-mono text-xs text-white/60 whitespace-pre-wrap">{item.code}</pre>
                </div>
              ))}
            </div>
            <p className="mt-5 text-white/70">
              Create a small utility helper so you are not duplicating this structure in every controller:
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-3">{'// src/utils/response.js'}</p>
              <p><span className="text-gold/80">const</span> success = (res, data, statusCode = <span className="text-blue-400/70">200</span>, meta = {}) =&gt;</p>
              <p className="pl-4">res.status(statusCode).json({'{ success: true, data, ...meta }'})</p>
              <p className="mt-3"><span className="text-gold/80">const</span> fail = (res, message, statusCode = <span className="text-blue-400/70">400</span>) =&gt;</p>
              <p className="pl-4">res.status(statusCode).json({'{ success: false, message }'})</p>
              <p className="mt-3">module.exports = {'{ success, fail }'};</p>
            </div>
          </section>

          <section aria-labelledby="env-security">
            <h2 id="env-security" className="text-xl font-bold text-canvas">Step 6 — Environment Variables and Security</h2>
            <p className="mt-4 text-white/70">
              Never hardcode secrets, connection strings, or API keys. Use a <code className="text-gold/80">.env</code> file locally and inject environment variables through your hosting platform in production. Always commit a <code className="text-gold/80">.env.example</code> file with keys but no values so other developers know what is required.
            </p>
            <div className="mt-4 rounded-lg border border-white/[0.08] bg-black/40 p-5 font-mono text-xs text-white/70 leading-relaxed">
              <p className="text-white/40 mb-2">{'# .env.example'}</p>
              <p>PORT=3000</p>
              <p>NODE_ENV=development</p>
              <p>DATABASE_URL=mongodb://localhost:27017/myapp</p>
              <p>JWT_SECRET=your_jwt_secret_here</p>
              <p>JWT_EXPIRES_IN=7d</p>
            </div>
            <p className="mt-5 text-white/70">
              The packages installed earlier cover the most common security concerns at the middleware level:
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-white/[0.08]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-[0.12em] text-white/40">Package</th>
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-[0.12em] text-white/40">What it does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {[
                    ['helmet', 'Sets security-related HTTP headers (XSS, HSTS, clickjacking)'],
                    ['cors', 'Controls which origins can call your API'],
                    ['morgan', 'Request logging — helps you trace issues in production logs'],
                    ['express-rate-limit', 'Prevents brute force attacks on auth endpoints'],
                    ['bcrypt', 'Hashes passwords — never store plain-text passwords'],
                  ].map(([pkg, desc]) => (
                    <tr key={pkg}>
                      <td className="px-5 py-3 font-mono text-xs text-gold/70">{pkg}</td>
                      <td className="px-5 py-3 text-xs text-white/60">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white border-b border-white/[0.07] pb-2">Conclusion</h2>
            <p className="leading-relaxed text-white/70">
              Building a REST API with Node.js and Express is not complicated — but doing it right from the start saves weeks of refactoring later. The patterns in this guide — separated routing and controller logic, centralised error handling, consistent response format, and environment-based config — are production-proven across dozens of real projects.
            </p>
            <p className="leading-relaxed text-white/70">
              Start with this structure, add a database layer (MongoDB with Mongoose or PostgreSQL with Prisma), wire up authentication with JWT, and you have the foundation for any serious backend. The next step is deployment — Railway and Render both support Node.js APIs with a single push.
            </p>
            <div className="mt-6 rounded-lg border border-white/[0.08] bg-white/[0.03] p-6">
              <p className="text-sm font-bold text-white mb-2">Need a production-ready API built for your project?</p>
              <p className="text-sm text-white/60 mb-4">
                I build scalable Node.js backends for SaaS products, marketplaces, and business applications.{' '}
                <a href={`mailto:${contact.email}`} className="text-gold transition hover:text-gold/80 underline underline-offset-2">
                  Get in touch
                </a>{' '}
                to discuss your requirements.
              </p>
            </div>
          </section>

          <ShareButtons url={articleUrl} title={articleTitle} />
          <AboutAuthor
            relatedArticles={[
              { slug: 'nodejs-vs-laravel-which-backend-is-better', title: 'Node.js vs Laravel: Which Backend Should You Choose in 2026?' },
              { slug: 'build-ai-agent-nodejs-complete-guide', title: 'How to Build an AI Agent with Node.js' },
              { slug: 'how-i-built-full-stack-saas-nextjs-nodejs', title: 'How I Built a Full-Stack SaaS with Next.js and Node.js' },
              { slug: 'nextjs-vs-wordpress-for-business-websites', title: 'Next.js vs WordPress for Business Websites in 2026' },
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
