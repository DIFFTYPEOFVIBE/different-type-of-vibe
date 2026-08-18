// app/actions/tracks.ts
'use server';

import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function updateTrackArtists(trackId: string, artists: string[]) {
  const { data, error } = await supabase
    .from('tracks')
    .update({ type_beat_artists: artists }) // Passes array directly to text[] column
    .eq('id', trackId)
    .select();

  if (error) {
    console.error('Error updating track artists:', error);
    return { success: false, error };
  }

  // Clear Next.js cache so the beat page and sitemap show updated tags
  revalidatePath(`/beat/[slug]`, 'page');
  revalidatePath('/sitemap.xml');

  return { success: true, data };
}