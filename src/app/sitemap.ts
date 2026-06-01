import { MetadataRoute } from 'next';
import { seo, projects, teamSection, services } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${seo.siteUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const teamUrls: MetadataRoute.Sitemap = teamSection.members.map((m) => ({
    url: `${seo.siteUrl}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const serviceUrls: MetadataRoute.Sitemap = services
    .filter((s) => s.slug)
    .map((s) => ({
      url: `${seo.siteUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [
    {
      url: seo.siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${seo.siteUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${seo.siteUrl}/blog/10-ai-business-ideas-you-can-start-this-month`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/react-vs-nextjs-which-should-you-learn-2026`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/best-website-features-taxi-car-rental-2026`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/how-local-businesses-get-customers-google-business-profile`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/why-every-small-business-needs-website-2026`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/how-to-get-first-freelance-client-developer-2026`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/build-ai-agent-nodejs-complete-guide`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/complete-nextjs-seo-guide-2026`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/how-i-built-full-stack-saas-nextjs-nodejs`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/ai-tools-that-save-10-hours-per-week`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/ai-tools-productivity-business-growth`,
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${seo.siteUrl}/blog/how-to-hire-freelance-full-stack-developer`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    ...projectUrls,
    ...teamUrls,
    ...serviceUrls,
  ];
}
