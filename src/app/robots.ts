// app/robots.ts
import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://differenttypeofvibe.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Hide internal endpoints from search results
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}