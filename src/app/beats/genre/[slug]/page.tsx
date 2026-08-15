import { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import { getBeatsBySlug } from "@/lib/supabase/tracks";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatTitle(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return [{ slug: "boom-bap" }, { slug: "trap" }, { slug: "lofi" }, { slug: "hip-hop" }];
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: tracks, error } = await supabase
      .from("tracks")
      .select("genre")
      .eq("is_active", true);

    if (error || !tracks || tracks.length === 0) {
      return [{ slug: "boom-bap" }, { slug: "trap" }, { slug: "lofi" }, { slug: "hip-hop" }];
    }

    const uniqueGenres = Array.from(
      new Set(
        tracks
          .map((t) => t.genre?.toLowerCase().trim().replace(/\s+/g, "-"))
          .filter((g): g is string => Boolean(g))
      )
    );

    return uniqueGenres.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error generating static params for genre routes:", error);
    return [{ slug: "boom-bap" }, { slug: "trap" }, { slug: "lofi" }, { slug: "hip-hop" }];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const genreName = formatTitle(slug);
  const title = `Buy ${genreName} Beats & Instrumentals | Different Type of Vibe`;
  const description = `Stream and license untagged ${genreName} beats produced by Onzieb. Instant MP3, WAV, and STEMS trackout delivery for independent artists.`;
  const url = `https://differenttypeofvibe.com/beats/genre/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function GenrePage({ params }: PageProps) {
  const { slug } = await params;
  const genreName = formatTitle(slug);

  let tracks: any[] = [];
  try {
    tracks = await getBeatsBySlug(slug, "genre");
  } catch (error) {
    console.error(`Error loading beats for genre ${slug}:`, error);
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {genreName} Beats & Instrumentals
        </h1>
        <p className="mt-2 text-zinc-400">
          Explore premium untagged {genreName} instrumentals ready for streaming and commercial licensing.
        </p>
      </header>

      <section className="space-y-4">
        {tracks && tracks.length > 0 ? (
          <div className="grid gap-4">
            {tracks.map((track: any) => (
              <div
                key={track.id}
                className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-white">{track.title}</h3>
                  <p className="text-sm text-zinc-400">
                    {track.bpm ? `${track.bpm} BPM` : ""}{" "}
                    {track.key ? `• ${track.key}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-zinc-500">
            No active {genreName} beats found in the catalog right now. Check back soon!
          </p>
        )}
      </section>
    </main>
  );
}