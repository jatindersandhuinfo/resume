import type { Metadata } from 'next'
import Link from 'next/link'
import { seo, personal, contact } from '@/lib/data'
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import { buildBreadcrumbSchema } from '@/lib/structured-data'
import ScrollToTop from '@/components/ScrollToTop'

const fullName = `${personal.firstName} ${personal.lastName}`
const pageTitle = `Contact ${fullName} — Hire a Full Stack Developer`
const pageDescription =
  'Get in touch with Jatinder Sandhu — freelance full stack developer available for React, Next.js, Node.js, PHP, and AI projects worldwide. Fast response guaranteed.'
const pageUrl = `${seo.siteUrl}/contact`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: `${fullName} — Portfolio`,
    images: [{ url: seo.ogImage, width: 960, height: 1200, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    images: { url: seo.ogImage, alt: pageTitle },
  },
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: seo.siteUrl },
  { name: 'Contact', url: pageUrl },
])

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
  mainEntity: {
    '@type': 'Person',
    name: fullName,
    email: contact.email,
    telephone: contact.phone,
    url: seo.siteUrl,
  },
}

const contactMethods = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}?subject=Project Inquiry`,
    description: 'Fastest for project briefs',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+91 98883 60667',
    href: contact.whatsapp,
    description: 'Quick chats & updates',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'jatindersandhuinfo',
    href: contact.linkedin,
    description: 'Professional networking',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Upwork',
    value: 'Jatinder Sandhu',
    href: contact.upwork,
    description: 'Hire via Upwork platform',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'How quickly do you respond?',
    a: 'Usually within 2–4 hours on working days. WhatsApp is fastest for urgent requests.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — all client work is remote. I work across IST, UK, US, and EU time zones.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Small features: 3–7 days. Full web apps: 4–12 weeks depending on scope. I share a detailed breakdown before starting.',
  },
  {
    q: 'How do we get started?',
    a: 'Send a brief email or WhatsApp message describing your project. I\'ll reply with questions, timeline, and a quote within 24 hours.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-studio text-canvas pt-[73px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/<\/script>/gi, '<\\/script>') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/<\/script>/gi, '<\\/script>') }} />
      <ScrollToTop />
      <HeaderNav />

      {/* ── Utility bar ── */}
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <span aria-hidden="true" className="text-white/20">›</span>
            <span className="text-white/55">Contact</span>
          </nav>
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 transition hover:text-gold">
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-studio py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[600px] rounded-full bg-gold/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <p className="chapter-label mb-8">Let's Talk</p>
          <h1 className="display-lg text-canvas">
            HIRE A DEVELOPER<br />
            <span className="text-gold">WHO DELIVERS</span>
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/60">
            Available for full-time contracts, fixed-scope projects, and ongoing retainers.
            React, Next.js, Node.js, PHP, Laravel, WordPress, and AI integrations.
          </p>

          {/* Availability badge */}
          <div className="mt-8 inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-green-400">
              Available for New Projects
            </span>
          </div>
        </div>
      </section>

      {/* ── Contact methods + FAQ ── */}
      <section className="bg-studio py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">

            {/* Contact methods */}
            <div>
              <p className="mb-10 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/35">
                Reach Me Directly
              </p>

              <div className="space-y-px border border-white/[0.06]">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-start gap-5 bg-studio p-6 transition duration-200 hover:bg-surface"
                  >
                    <span className="mt-0.5 text-white/30 transition duration-200 group-hover:text-gold">
                      {method.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/30 group-hover:text-gold/70 transition duration-200">
                        {method.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-canvas truncate">
                        {method.value}
                      </p>
                      <p className="mt-0.5 text-xs text-white/35">{method.description}</p>
                    </div>
                    <svg className="mt-1 h-4 w-4 text-white/20 transition duration-200 group-hover:text-gold/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-10 grid grid-cols-3 gap-px border border-white/[0.06] text-center">
                {[
                  { label: 'Response time', value: '< 4h' },
                  { label: 'Projects done', value: '25+' },
                  { label: 'Experience', value: '6+ yrs' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface px-5 py-6 text-center">
                    <p className="text-2xl font-bold text-gold font-bebas tracking-wide">{stat.value}</p>
                    <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/30">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <p className="mb-10 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/35">
                Common Questions
              </p>

              <div className="space-y-px border border-white/[0.06]">
                {faqs.map((item, i) => (
                  <div key={i} className="bg-studio p-6 hover:bg-surface transition duration-200">
                    <p className="text-sm font-semibold text-canvas">{item.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.a}</p>
                  </div>
                ))}
              </div>

              {/* CTA block */}
              <div className="mt-10 border border-gold/20 bg-gold/[0.04] p-8">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-gold/70">
                  Ready to start?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Send a brief description of your project — what you&apos;re building, your timeline, and budget range. I&apos;ll send a detailed proposal within 24 hours.
                </p>
                <a
                  href={`mailto:${contact.email}?subject=Project Inquiry — [Your Project Name]`}
                  className="mt-6 inline-flex min-h-[46px] items-center justify-center bg-gold px-8 text-xs font-bold uppercase tracking-[0.22em] text-studio transition duration-200 hover:bg-gold-light"
                >
                  Send a Project Brief →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
