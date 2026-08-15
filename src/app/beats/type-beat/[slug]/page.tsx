import { Metadata } from "next";
import { getBeatsBySlug } from "@/lib/supabase/tracks";
// Replace TrackList with your actual player/list component path if different
import TrackList from "@/components/TrackList";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function formatTitle(slug?: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return [
    { slug: "drake" },
    { slug: "travis-scott" },
    { slug: "metro-boomin" },
    { slug: "j-cole" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artistName = formatTitle(slug);
  const title = `Buy ${artistName} Type Beats | Different Type of Vibe`;
  const description = `Stream and license untagged ${artistName} style beats produced by Onzieb. Instant MP3, WAV, and STEMS delivery.`;
  const url = `https://differenttypeofvibe.com/beats/type-beat/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function TypeBeatPage({ params }: PageProps) {
  const { slug } = await params;
  const artistName = formatTitle(slug);

  // Server-side fetch for beats matching the artist tag
  const tracks = await getBeatsBySlug(slug, "type-beat");

  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {artistName} Type Beats
        </h1>
        <p className="mt-2 text-zinc-400">
          Explore premium untagged {artistName} style instrumentals ready for licensing.
        </p>
      </header>

      <section className="space-y-4">
        {tracks.length > 0 ? (
          <TrackList tracks={tracks} />
        ) : (
          <p className="text-sm text-zinc-500">
            No active {artistName} type beats found. Check back soon for new drops!
          </p>
        )}
      </section>
    </main>
  );
}