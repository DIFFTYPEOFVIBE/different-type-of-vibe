// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { MY_BEATS } from '@/data/beats';

// Helper to clean slug/name formatted identically to your pages
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://differenttypeofvibe.com';

  // 1. Static pages
  const staticRoutes = [
    '',
    '/beats',
    '/licenses',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic beat pages (/beat/[slug])
  const beatRoutes = MY_BEATS.map((beat) => {
    const slug = slugify(beat.title.split(' - ')[0]);
    return {
      url: `${baseUrl}/beat/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // 3. Dynamic track pages (/track/[slug])
  const trackRoutes = MY_BEATS.map((beat) => {
    const slug = slugify(beat.title.split(' - ')[0]);
    return {
      url: `${baseUrl}/track/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...beatRoutes, ...trackRoutes];
}