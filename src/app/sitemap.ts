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
