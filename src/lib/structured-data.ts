import {
  seo,
  personal,
  contact,
  services,
  techGroups,
  projects,
  experience,
  education,
} from '@/lib/data';

const personId = `${seo.siteUrl}/#person`;
const websiteId = `${seo.siteUrl}/#website`;
const webpageId = `${seo.siteUrl}/#webpage`;
const serviceId = `${seo.siteUrl}/#professional-service`;

export function getStructuredData() {
  const fullName = `${personal.firstName} ${personal.lastName}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: seo.siteUrl,
        name: fullName,
        description: seo.description,
        inLanguage: 'en-IN',
        publisher: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: seo.siteUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: seo.ogImage,
        },
        inLanguage: 'en-IN',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${seo.siteUrl}/#profile`,
        url: seo.siteUrl,
        name: seo.title,
        description: seo.description,
        mainEntity: { '@id': personId },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: fullName,
        givenName: personal.firstName,
        familyName: personal.lastName,
        url: seo.siteUrl,
        image: seo.ogImage,
        jobTitle: personal.role,
        description: seo.description,
        email: contact.email,
        telephone: contact.phone,
        knowsAbout: techGroups.flatMap((group) => group.items),
        workLocation: {
          '@type': 'Place',
          name: 'Remote / Worldwide',
        },
        homeLocation: {
          '@type': 'Place',
          name: personal.location.replace('Based in ', ''),
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bathinda',
            addressRegion: 'Punjab',
            addressCountry: 'IN',
          },
        },
        sameAs: [
          contact.linkedin,
          contact.github,
          contact.upwork,
          contact.whatsapp,
          `https://twitter.com/${seo.twitterHandle.replace('@', '')}`,
        ],
        worksFor: experience.map((item) => ({
          '@type': 'Organization',
          name: item.company,
        })),
        alumniOf: education.map((item) => ({
          '@type': 'EducationalOrganization',
          name: item.institution,
        })),
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Full Stack Developer',
          occupationalCategory: 'Software Development',
          skills: techGroups.flatMap((group) => group.items).join(', '),
        },
        makesOffer: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.label,
            provider: { '@id': personId },
            areaServed: 'Worldwide',
          },
        })),
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: fullName,
        url: seo.siteUrl,
        image: seo.ogImage,
        description: seo.description,
        email: contact.email,
        telephone: contact.phone,
        areaServed: 'Worldwide',
        priceRange: '$$',
        serviceType: services.map((service) => service.label),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bathinda',
          addressRegion: 'Punjab',
          addressCountry: 'IN',
        },
        sameAs: [contact.linkedin, contact.upwork],
      },
      {
        '@type': 'ItemList',
        '@id': `${seo.siteUrl}/#portfolio`,
        name: 'Portfolio Projects',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.name,
            description: project.result,
            keywords: project.tech,
            ...(project.url ? { url: project.url } : {}),
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${seo.siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: seo.siteUrl,
          },
        ],
      },
    ],
  };
}

export const seoKeywords = seo.keywords.split(',').map((keyword) => keyword.trim());
