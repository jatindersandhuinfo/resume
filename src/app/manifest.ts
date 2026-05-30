import type { MetadataRoute } from 'next';
import { personal, seo } from '@/lib/data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personal.firstName} ${personal.lastName} — Full Stack Developer Portfolio`,
    short_name: personal.firstName,
    description: seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0d0e',
    theme_color: '#0b0d0e',
    lang: 'en-IN',
    orientation: 'portrait-primary',
    categories: ['business', 'portfolio', 'technology'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
