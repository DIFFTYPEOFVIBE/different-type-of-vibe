import { Metadata } from "next";
import { getBeatsBySlug } from "@/lib/supabase/tracks";

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
  const canonicalUrl = `https://differenttypeofvibe.com/beats/type-beat/${slug}`;

  const tracks = await getBeatsBySlug(slug, "type-beat");

  // Schema.org JSON-LD structured data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": `${artistName} Type Beats & Instrumentals`,
    "description": `Buy and license high-quality ${artistName} style instrumentals produced by Onzieb.`,
    "url": canonicalUrl,
    "provider": {
      "@type": "MusicGroup",
      "name": "Onzieb",
      "url": "https://differenttypeofvibe.com"
    },
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": `${artistName} Type Beats Catalog`,
      "numberOfItems": tracks.length,
      "itemListElement": tracks.map((track: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "MusicRecording",
          "name": track.title,
          "byArtist": {
            "@type": "MusicGroup",
            "name": "Onzieb"
          },
          "genre": track.genre || "Hip Hop",
          "duration": track.duration ? `PT${track.duration}S` : undefined,
          "offers": {
            "@type": "Offer",
            "price": track.price || "29.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          }
        }
      }))
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            No active {artistName} type beats found. Check back soon for new drops!
          </p>
        )}
      </section>
    </main>
  );
}