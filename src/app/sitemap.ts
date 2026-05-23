import { MetadataRoute } from 'next';
import { seo } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${seo.siteUrl}/blog/how-to-hire-freelance-full-stack-developer`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
