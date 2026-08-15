import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper to format slugs into clean titles
function formatTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Programmatic Metadata Generation
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

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Target H1 Tag */}
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {genreName} Beats & Instrumentals
        </h1>
        <p className="mt-2 text-zinc-400">
          Explore premium untagged {genreName} instrumentals ready for streaming and commercial licensing.
        </p>
      </header>

      {/* Track List Component Filtering by Genre */}
      <section className="space-y-4">
        {/* Replace with your track filtering logic or component */}
        <p className="text-sm text-zinc-500">Showing all active {genreName} tracks...</p>
      </section>
    </main>
  );
}
// Pre-build top SEO pages at build time
export async function generateStaticParams() {
  // Fetch popular slugs from Supabase or define key targets
  const popularSlugs = ["drake", "travis-scott", "metro-boomin", "j-cole"];

  return popularSlugs.map((slug) => ({
    slug,
  }));
}