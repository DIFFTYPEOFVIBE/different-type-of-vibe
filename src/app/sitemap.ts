// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://differenttypeofvibe.com';

// Revalidate sitemap every 24 hours
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // 1. Static base route
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  let genreRoutes: MetadataRoute.Sitemap = [];
  let beatRoutes: MetadataRoute.Sitemap = [];
  let dynamicVibeRoutes: MetadataRoute.Sitemap = [];

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      // Fetch active beats from Supabase
      const { data: tracks, error } = await supabase
        .from('tracks')
        .select('slug, genre, type_beat_artists, updated_at')
        .eq('is_active', true);

      if (!error && tracks && tracks.length > 0) {
        // A. Individual Beat Routes (/beat/[slug])
        beatRoutes = tracks
          .filter((t) => Boolean(t.slug))
          .map((track) => ({
            url: `${baseUrl}/beat/${track.slug}`,
            lastModified: track.updated_at || currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
          }));

        // B. Dynamic Genre Routes (/genre/[slug])
        const uniqueGenres = Array.from(
          new Set(
            tracks
              .map((t) =>
                t.genre
                  ?.toLowerCase()
                  .trim()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '')
              )
              .filter((g): g is string => Boolean(g))
          )
        );

        genreRoutes = uniqueGenres.map((genreSlug) => ({
          url: `${baseUrl}/genre/${genreSlug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        }));

        // C. Dynamic Artist Vibe Routes (/vibe/[slug])
        const allTypeBeatArtists = tracks.flatMap((t) => t.type_beat_artists || []);
        const uniqueVibeSlugs = Array.from(
          new Set(
            allTypeBeatArtists
              .map((artist) => {
                const cleaned = artist
                  ?.toLowerCase()
                  .trim()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '');
                return cleaned ? (cleaned.includes('type-beat') ? cleaned : `${cleaned}-type-beats`) : null;
              })
              .filter((a): a is string => Boolean(a))
          )
        );

        dynamicVibeRoutes = uniqueVibeSlugs.map((slug) => ({
          url: `${baseUrl}/vibe/${slug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        }));
      }
    } catch (error) {
      console.error('Error building sitemap routes from Supabase:', error);
    }
  }

  // Fallback Vibe Slugs if Supabase returns no tracks
  const fallbackVibes = [
    'drake-type-beats',
    'travis-scott-type-beats',
    'metro-boomin-type-beats',
    'j-cole-type-beats',
  ];

  const vibeRoutes: MetadataRoute.Sitemap =
    dynamicVibeRoutes.length > 0
      ? dynamicVibeRoutes
      : fallbackVibes.map((slug) => ({
          url: `${baseUrl}/vibe/${slug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }));

  // Fallback Genre Slugs if Supabase returns no tracks
  const fallbackGenres = ['trap-beats', 'boom-bap-beats', 'rb-instrumentals', 'hip-hop-beats'];
  const finalGenreRoutes: MetadataRoute.Sitemap =
    genreRoutes.length > 0
      ? genreRoutes
      : fallbackGenres.map((slug) => ({
          url: `${baseUrl}/genre/${slug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }));

  return [...staticRoutes, ...vibeRoutes, ...finalGenreRoutes, ...beatRoutes];
}