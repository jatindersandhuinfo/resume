import type { MetadataRoute } from 'next';
import { seo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },

      // AI Crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
    ],

    sitemap: `${seo.siteUrl}/sitemap.xml`,
    host: seo.siteUrl.replace(/^https?:\/\//, ''),
  };
}