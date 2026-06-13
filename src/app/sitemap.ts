import { MetadataRoute } from 'next';
import { seo, projects, teamSection, services } from '@/lib/data';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Dynamic projects URLs
  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${seo.siteUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic team members URLs
  const teamUrls: MetadataRoute.Sitemap = teamSection.members.map((m) => ({
    url: `${seo.siteUrl}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic service URLs
  const serviceUrls: MetadataRoute.Sitemap = services
    .filter((s) => s.slug)
    .map((s) => ({
      url: `${seo.siteUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  // Automatically scan the blog directory for posts
  const blogDir = path.join(process.cwd(), 'src/app/blog');
  let blogUrls: MetadataRoute.Sitemap = [];
  
  if (fs.existsSync(blogDir)) {
    const folders = fs.readdirSync(blogDir);
    blogUrls = folders
      .filter((folder) => {
        const folderPath = path.join(blogDir, folder);
        // Only include directories that contain page.tsx (filtering out helper files)
        return fs.statSync(folderPath).isDirectory() && fs.existsSync(path.join(folderPath, 'page.tsx'));
      })
      .map((folder) => {
        const pagePath = path.join(blogDir, folder, 'page.tsx');
        const stats = fs.statSync(pagePath);
        return {
          url: `${seo.siteUrl}/blog/${folder}`,
          lastModified: stats.mtime, // Automatically uses actual file update date
          changeFrequency: 'monthly',
          priority: 0.75,
        };
      });
  }

  return [
    {
      url: seo.siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${seo.siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${seo.siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${seo.siteUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
    ...projectUrls,
    ...teamUrls,
    ...serviceUrls,
  ];
}
