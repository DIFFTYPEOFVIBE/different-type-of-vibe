import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

function formatTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Programmatic Metadata Generation matching target SEO specifications
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const artistName = formatTitle(params.slug);
  const title = `Buy ${artistName} Type Beats | Untagged MP3 & WAV Leases | Different Type of Vibe`;
  const description = `License premium ${artistName} type beats produced by Onzieb. High quality untagged MP3, WAV, and STEMS available for instant download.`;
  const url = `https://differenttypeofvibe.com/beats/type-beat/${params.slug}`;

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

export default function TypeBeatPage({ params }: PageProps) {
  const artistName = formatTitle(params.slug);

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Target H1 Tag */}
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {artistName} Type Beats & Instrumentals
        </h1>
        <p className="mt-2 text-zinc-400">
          Browse untagged instrumentals inspired by {artistName}. Select a license to download instant files.
        </p>
      </header>

      {/* Filtered Track Catalog */}
      <section className="space-y-4">
        {/* Replace with your track list component filtered by type-beat tag */}
        <p className="text-sm text-zinc-500">Showing catalog results for {artistName} type beats...</p>
      </section>
    </main>
  );
}