// app/beats/[slug]/page.tsx
import { Metadata } from 'next';
import { cache } from 'react';
import { notFound } from 'next/navigation';

interface GenrePageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourstore.com';

// Helper to convert slugs to clean titles (e.g., "old-school" -> "Old-School", "kanye-west" -> "Kanye West")
function formatGenreTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Cached category data fetch (deduplicated per-request)
const getCategoryData = cache(async (slug: string) => {
  const genreTitle = formatGenreTitle(slug);

  if (!genreTitle) {
    return null;
  }

  return {
    slug,
    genreTitle,
    description: `Explore high-quality ${genreTitle} beats and instrumentals. Download MP3, WAV, and stems for your next track.`,
  };
});

// 1. GENERATE METADATA WITH CANONICAL TAG HANDLING
export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryData(slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  const pageTitle = `Explore High-Quality ${category.genreTitle} Beats & Instrumentals`;
  const pageDescription = category.description;
  const canonicalUrl = `${SITE_URL}/beats/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    // Canonical URL declaration strips out query params like ?sort=latest or ?srsltid=...
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      url: canonicalUrl,
      siteName: 'Onzieb Beats',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
    },
  };
}

// 2. MAIN CATEGORY PAGE COMPONENT WITH COLLECTION SCHEMA
export default async function CategoryPage({ params }: GenrePageProps) {
  const { slug } = await params;
  const category = await getCategoryData(slug);

  if (!category) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/beats/${slug}`;

  // Schema Markup for Collection/Category Pages
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': canonicalUrl,
    name: `Explore High-Quality ${category.genreTitle} Beats`,
    description: category.description,
    url: canonicalUrl,
  };

  return (
    <>
      {/* Inject Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Main Page Layout */}
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Explore High-Quality {category.genreTitle} Beats
        </h1>
        <p className="mt-2 text-gray-400">{category.description}</p>

        {/* Pass `slug` into your beat audio grid component to filter beats by genre/tag */}
      </main>
    </>
  );
}