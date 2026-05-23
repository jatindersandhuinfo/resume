# Jatinder Sandhu — Portfolio CV (Next.js)

A production-ready, SEO-first portfolio CV built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — SEO metadata, next/font, JSON-LD
│   ├── page.tsx          # Main page — assembles all sections
│   ├── globals.css       # Tailwind + global design tokens
│   ├── not-found.tsx     # Custom 404 page
│   ├── sitemap.ts        # Auto-generated XML sitemap
│   ├── robots.ts         # robots.txt generator
│   ├── manifest.ts       # PWA manifest
│   └── blog/
│       └── how-to-hire-freelance-full-stack-developer/
│           └── page.tsx  # SEO blog article
├── components/
│   ├── HeaderNav.tsx     # Sticky nav with mobile hamburger
│   ├── HeroImage.tsx     # Hero image using next/image
│   └── sections/
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── WorksSection.tsx
│       ├── ExperienceSection.tsx
│       ├── FaqSection.tsx       # Client component (accordion)
│       └── SkillsSection.tsx    # Skills + Contact/Hire panel
├── lib/
│   ├── data.ts           # ← All content lives here. Edit this file only.
│   └── structured-data.ts # JSON-LD schema.org generator
└── types/
    ├── cv.ts             # Core TypeScript interfaces
    └── sections.ts       # Section-specific interfaces
```

---

## Updating Content

**All content is centralized in `src/lib/data.ts`.**

- Personal info → `personal`
- Contact → `contact`
- Tech groups → `techGroups`
- Core strengths → `coreStrengths`
- Services → `services`, `serviceCopy`, `serviceTags`, `serviceStacks`
- Experience → `experience`, `experienceFocus`
- Education → `education`
- Projects → `projects`
- FAQ → `faqs`
- Stats → `stats`
- SEO → `seo`
- Section composites → `aboutSection`, `servicesSection`, `worksSection`, `experienceSection`, `faqSection`, `skillsSection`

---

## SEO Features

- ✅ Next.js `Metadata` API (title, description, keywords, OG, Twitter)
- ✅ Rich JSON-LD structured data — `Person`, `ProfessionalService`, `FAQPage`, `ItemList`, `WebSite`, `WebPage`, `ProfilePage`, `BreadcrumbList`
- ✅ Auto sitemap via `sitemap.ts`
- ✅ `robots.txt` with AI crawler rules (GPTBot, ClaudeBot, Google-Extended)
- ✅ Canonical URL
- ✅ Open Graph + Twitter Card metadata
- ✅ Geo tags (`geo.region`, `geo.placename`)
- ✅ `rel="me"` links for identity verification
- ✅ Semantic HTML (`<main>`, `<section>`, `<article>`, `<h1>`–`<h3>`)
- ✅ Full ARIA labelling on all sections and interactive elements
- ✅ PWA manifest via `manifest.ts`

---

## Performance

- ✅ `next/image` with `priority` for LCP hero image
- ✅ `next/font` — DM Sans (body) + Bebas Neue (display)
- ✅ `content-visibility: auto` on all page sections
- ✅ CSS scroll-driven animations via `animation-timeline: view()`
- ✅ `prefers-reduced-motion` fully respected
- ✅ GPU-composited animations (transform + opacity only)

---

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel (recommended):

```bash
npx vercel
```

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3**
- **next/font** — DM Sans, Bebas Neue
- **next/image** — optimized images with automatic WebP
