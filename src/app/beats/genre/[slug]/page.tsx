// app/beats/genre/[slug]/page.tsx
import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function GenrePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) notFound();

  // Clean slug: e.g. "trap-beats" -> "trap", "rnb-instrumentals" -> "rnb"
  const cleanGenre = slug
    .toLowerCase()
    .replace(/-?(beats|instrumentals)$/gi, '')
    .replace(/-/g, ' ')
    .trim();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: beats, error } = await supabase
    .from('tracks')
    .select('*')
    .ilike('genre', `%${cleanGenre}%`);

  if (error) {
    console.error('Genre Query Error:', error.message);
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold capitalize mb-2">{cleanGenre} Beats</h1>
      <p className="text-gray-400 mb-6">
        Found {beats?.length || 0} tracks matching "{cleanGenre}"
      </p>

      {beats && beats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beats.map((track) => (
            <div key={track.id} className="p-4 border border-neutral-800 bg-neutral-900 rounded-lg">
              <h3 className="font-bold text-lg">{track.title}</h3>
              <p className="text-sm text-gray-400">{track.genre}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 border border-dashed border-neutral-700 text-center rounded-lg">
          <p className="text-gray-400">No tracks found in this genre.</p>
        </div>
      )}
    </main>
  );
}