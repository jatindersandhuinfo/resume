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
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
