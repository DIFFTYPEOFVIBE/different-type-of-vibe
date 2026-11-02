import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { COUNTRY_DATA } from '@/data/countryDeals';
import { Globe, CreditCard, ShieldCheck } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(COUNTRY_DATA).map((country) => ({ country }));
}

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const countryKey = resolvedParams?.country?.toLowerCase() || '';
  const data = COUNTRY_DATA[countryKey];
  if (!data) return {};

  return {
    title: `${data.flag} ${data.headline} | Different Type of Vibe`,
    description: `Official beat store deals in ${data.name}. Unlock $9.99/mo untagged WAV beat leases via ${data.gateways}. Royalty cleared with ${data.pro}.`,
    alternates: { canonical: `https://differenttypeofvibe.com/deals/${countryKey}` },
  };
}

export default async function CountryDealsPage({ params }: Props) {
  const resolvedParams = await params;
  const countryKey = resolvedParams?.country?.toLowerCase() || '';
  const data = COUNTRY_DATA[countryKey];
  if (!data) notFound();

  return (
    <main className="container mx-auto p-6 min-h-screen max-w-6xl">
      <div className="text-center my-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4">
          <Globe className="w-4 h-4 text-purple-400" /> Official Storefront for Artists in {data.flag} {data.name}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{data.headline}</h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">Get untagged commercial WAV beat leases delivered monthly. Localized clearance for {data.pro}.</p>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-xs text-zinc-300 max-w-3xl">
          <div className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-purple-400" />
            <span><strong>Accepted Payments:</strong> {data.gateways}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span><strong>Royalty Clearance:</strong> {data.pro}</span>
          </div>
        </div>
      </div>
      <SubscriptionPricing />
    </main>
  );
}
