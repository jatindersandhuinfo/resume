# Jatinder Sandhu — Portfolio CV (Next.js)

A production-ready, component-based portfolio CV built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

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
│   ├── layout.tsx       # Root layout — SEO metadata, fonts, JSON-LD
│   ├── page.tsx         # Main page — assembles all columns
│   ├── globals.css      # Tailwind + global styles
│   └── sitemap.ts       # Auto-generated sitemap
├── components/cv/
│   ├── Sidebar.tsx      # Dark left sidebar
│   ├── CenterColumn.tsx # Hero image + services
│   ├── RightColumn.tsx  # Experience, education, projects, contact
│   ├── SectionTitle.tsx # Reusable section heading
│   ├── SkillBar.tsx     # Animated skill progress bar
│   ├── TechBadge.tsx    # Tech stack icon badge
│   ├── ExperienceItem.tsx
│   ├── EducationItem.tsx
│   ├── ProjectCard.tsx
│   └── ContactSection.tsx
├── lib/
│   └── data.ts          # ← All content lives here. Edit this file only.
└── types/
    └── cv.ts            # TypeScript interfaces
```

---

## Updating Content

**All content is centralized in `src/lib/data.ts`.**

- Personal info → `personal`
- Contact → `contact`
- Skills → `skillBars`
- Tech stack → `techGroups`
- Experience → `experience`
- Education → `education`
- Projects → `projects`
- SEO → `seo`

---

## SEO Features

- ✅ Next.js `Metadata` API (title, description, keywords, OG, Twitter)
- ✅ JSON-LD structured data (`Person` schema)
- ✅ Auto sitemap via `sitemap.ts`
- ✅ `robots.txt`
- ✅ Canonical URL
- ✅ Semantic HTML (`<main>`, `<aside>`, `<section>`, `<article>`, `<h1>`–`<h3>`)
- ✅ `aria-label` on all sections
- ✅ `alt` text on all images
- ✅ `next/font` for optimized font loading

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

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next/font** — Bebas Neue, DM Sans, DM Mono
- **next/image** — optimized images
