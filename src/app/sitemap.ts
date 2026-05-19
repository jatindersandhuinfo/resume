import { MetadataRoute } from 'next';
import { seo, projects } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seo.siteUrl;

  // Main pages & sections
  const routes = [
    '',
    '/#about',
    '/#services',
    '/#works',
    '/#experience',
    '/#skills',
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic portfolio projects
  const projectRoutes =
    projects?.map((project: any) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })) || [];

  return [...staticRoutes, ...projectRoutes];
}