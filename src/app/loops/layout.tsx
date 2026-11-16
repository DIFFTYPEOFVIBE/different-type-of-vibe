import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producer Loop Packs & Melody Stems | Different Type of Vibe',
  description: 'Download royalty-split melody loops, sample packs, and stems by Onzieb for music producers and beatmakers.',
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/loops',
  },
};

export default function LoopsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
