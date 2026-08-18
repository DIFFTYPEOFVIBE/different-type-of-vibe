// app/sitemap.ts
import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://differenttypeofvibe.com';

// Revalidate sitemap every 24 hours
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // 1. Static base root route
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
  let dynamicTypeBeatRoutes: MetadataRoute.Sitemap = [];

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
        // A. Individual Beat Page Routes (/beat/[slug])
        beatRoutes = tracks
          .filter((t) => Boolean(t.slug))
          .map((track) => ({
            url: `${baseUrl}/beat/${track.slug}`,
            lastModified: track.updated_at || currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
          }));

        // B. Dynamic Genre Routes (/beats/genre/[genre])
        const uniqueGenres = Array.from(
          new Set(
            tracks
              .map((t) => t.genre?.toLowerCase().trim())
              .filter((g): g is string => Boolean(g))
          )
        );

        genreRoutes = uniqueGenres.map((genre) => ({
          url: `${baseUrl}/beats/genre/${encodeURIComponent(genre)}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        }));

        // C. Dynamic Type-Beat Routes (/beats/type-beat/[artist])
        const allTypeBeatArtists = tracks.flatMap((t) => t.type_beat_artists || []);
        const uniqueTypeBeatSlugs = Array.from(
          new Set(
            allTypeBeatArtists
              .map((artist) =>
                artist
                  ?.toLowerCase()
                  .trim()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '')
              )
              .filter((a): a is string => Boolean(a))
          )
        );

        dynamicTypeBeatRoutes = uniqueTypeBeatSlugs.map((slug) => ({
          url: `${baseUrl}/beats/type-beat/${slug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        }));
      }
    } catch (error) {
      console.error('Error building sitemap routes from Supabase:', error);
    }
  } else {
    console.warn('Sitemap warning: Missing Supabase environment variables during build phase.');
  }

  // Fallback Type Beat Slugs if Supabase returns no tracks
  const fallbackTypeBeats = ['drake', 'travis-scott', 'metro-boomin', 'j-cole', 'mf-doom', 'joey-badass'];
  const typeBeatRoutes: MetadataRoute.Sitemap =
    dynamicTypeBeatRoutes.length > 0
      ? dynamicTypeBeatRoutes
      : fallbackTypeBeats.map((slug) => ({
          url: `${baseUrl}/beats/type-beat/${slug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }));

  return [...staticRoutes, ...typeBeatRoutes, ...genreRoutes, ...beatRoutes];
}