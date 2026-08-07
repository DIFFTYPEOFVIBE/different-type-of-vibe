import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://differenttypeofvibe.com';

  // Static routes
  const routes = [
    '',
    '/#catalog',
    '/#licensing',
    '/#about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  return [...routes];
}