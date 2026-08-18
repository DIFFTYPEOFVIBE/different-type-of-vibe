import Storefront from '@/app/page';

const SLUG_MAP: Record<string, string> = {
  'drake-type-beats': 'Drake Type Beats',
  'travis-scott-type-beats': 'Travis Scott Type Beats',
  'metro-boomin-type-beats': 'Metro Boomin Type Beats',
  'j-cole-type-beats': 'J. Cole Type Beats',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = SLUG_MAP[slug] || 'Artist Vibe Beats';
  
  return {
    title: `${categoryName} | Different Type of Vibe`,
    description: `Stream and license high-quality ${categoryName}. Instant untagged MP3, WAV, and Stems delivery.`,
  };
}

export default async function VibePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initialCategory = SLUG_MAP[slug] || 'All';

  return <Storefront initialFilter={initialCategory} />;
}