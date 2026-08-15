import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const baseUrl = 'https://differenttypeofvibe.com';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Revalidate sitemap every 24 hours
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // 1. Static base routes & section anchors
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/#catalog',
    '/#licensing',
    '/#about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  // 2. Static Type-Beat slugs
  const popularTypeBeats = ['drake', 'travis-scott', 'metro-boomin', 'j-cole'];
  const typeBeatRoutes: MetadataRoute.Sitemap = popularTypeBeats.map((slug) => ({
    url: `${baseUrl}/beats/type-beat/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Dynamic Genre routes fetched directly from Supabase
  let genreRoutes: MetadataRoute.Sitemap = [];
  try {
    const { data: tracks } = await supabase
      .from('tracks')
      .select('genre')
      .eq('is_active', true);

    if (tracks && tracks.length > 0) {
      const uniqueGenres = Array.from(
        new Set(tracks.map((t) => t.genre?.toLowerCase()).filter(Boolean))
      );

      genreRoutes = uniqueGenres.map((genre) => ({
        url: `${baseUrl}/beats/genre/${genre}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error building sitemap genre routes:', error);
  }

  return [...staticRoutes, ...typeBeatRoutes, ...genreRoutes];
}