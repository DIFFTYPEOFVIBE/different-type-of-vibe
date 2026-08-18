import Storefront from '@/app/page';

const SLUG_MAP: Record<string, string> = {
  'trap-beats': 'Trap Beats',
  'boom-bap-beats': 'Boom Bap Beats',
  'rb-instrumentals': 'R&B Instrumentals',
  'hip-hop-beats': 'Hip-Hop Beats',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = SLUG_MAP[slug] || 'Genre Beats';
  
  return {
    title: `${categoryName} | Different Type of Vibe`,
    description: `Browse ${categoryName} produced by Different Type of Vibe. Download instant untagged audio licenses.`,
  };
}

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initialCategory = SLUG_MAP[slug] || 'All';

  return <Storefront initialFilter={initialCategory} />;
}