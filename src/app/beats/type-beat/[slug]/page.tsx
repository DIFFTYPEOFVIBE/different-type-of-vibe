// app/beats/type-beat/[slug]/page.tsx
import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

// FORCE NEXT.JS TO RE-FETCH FROM SUPABASE ON EVERY REQUEST (NO CACHE)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatArtistName(slug: string): string {
  const normalized = slug.toLowerCase().trim();
  
  if (normalized === 'drake') return 'Drake';
  if (normalized === 'travis-scott') return 'Travis Scott';
  if (normalized === 'metro-boomin') return 'Metro Boomin';
  if (normalized === 'j-cole') return 'J. Cole';
  if (normalized === 'mf-doom') return 'MF DOOM';
  if (normalized === 'joey-badass') return 'Joey Bada$$';

  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default async function TypeBeatPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) notFound();

  const artistName = formatArtistName(slug);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Broad query: Checks type_beat_artists array OR title keyword
  const { data: beats, error } = await supabase
    .from('tracks')
    .select('*')
    .or(`type_beat_artists.cs.{${artistName}},title.ilike.%${artistName}%`);

  if (error) {
    console.error('Supabase Query Error:', error.message);
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold capitalize mb-2">{artistName} Type Beats</h1>
      <p className="text-gray-400 mb-6">
        Found {beats?.length || 0} tracks matching "{artistName}"
      </p>

      {beats && beats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beats.map((track) => (
            <div key={track.id} className="p-4 border border-neutral-800 bg-neutral-900 rounded-lg">
              <h3 className="font-bold text-lg">{track.title}</h3>
              <p className="text-sm text-gray-400">{track.genre || 'Beat'}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 border border-dashed border-neutral-700 text-center rounded-lg">
          <p className="text-gray-400">No tracks found for this category yet.</p>
        </div>
      )}
    </main>
  );
}