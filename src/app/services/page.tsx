import type { Metadata } from 'next';
import { seo, personal } from '@/lib/data';
import ServicesPageContent from '@/components/ServicesPageContent';

const pageTitle = `Web Development Services | React, Next.js, Node.js, PHP — ${personal.firstName} ${personal.lastName}`;
const pageDescription = `Hire ${personal.firstName} ${personal.lastName} for professional web development services — Next.js, React, Node.js, Laravel, WordPress, Shopify, AI integration, and more. 6+ years experience. Available worldwide.`;
const pageUrl = `${seo.siteUrl}/services`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'web development services',
    'full stack developer services',
    'next.js development services',
    'react development services',
    'node.js development services',
    'laravel development services',
    'wordpress development services',
    'shopify development services',
    'ai integration services',
    'api development services',
    'saas development services',
    'ecommerce development services',
    `${personal.firstName} ${personal.lastName} services`,
    'freelance web developer services',
    'remote developer services',
  ].join(', '),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: `${personal.firstName} ${personal.lastName} — Portfolio`,
    images: [
      {
        url: seo.ogImage,
        width: 960,
        height: 1200,
        alt: `${personal.firstName} ${personal.lastName} — Web Development Services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    images: {
      url: seo.ogImage,
      alt: `${personal.firstName} ${personal.lastName} — Web Development Services`,
    },
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
