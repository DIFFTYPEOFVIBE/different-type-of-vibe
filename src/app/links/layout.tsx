import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Official Links & Free Beats Pack | Different Type of Vibe',
  description: 'Claim 3 free tagged beats, explore VIP Beat Pass deals, and browse the official Onzieb instrumental catalog.',
  alternates: {
    canonical: 'https://www.differenttypeofvibe.com/links',
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
