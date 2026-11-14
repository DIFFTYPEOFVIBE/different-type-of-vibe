import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import CountryBeatShowcase from '@/components/CountryBeatShowcase';
import { COUNTRY_DATA, CountryFAQ, SubClusterLink } from '@/data/countryDeals';
import { MY_BEATS } from '@/data/beats';
import { Globe, CreditCard, ShieldCheck, FileText, CheckCircle2, Music, Sparkles, ChevronRight } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(COUNTRY_DATA).map((key) => ({
    country: key.split('/'),
  }));
}

interface Props {
  params: Promise<{ country: string[] | string }>;
}

function resolveCountryKey(paramVal: string[] | string | undefined): string {
  if (!paramVal) return '';
  if (Array.isArray(paramVal)) {
    return paramVal.join('/').toLowerCase();
  }
  return String(paramVal).toLowerCase();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const countryKey = resolveCountryKey(resolvedParams?.country);
  const data = COUNTRY_DATA[countryKey];
  if (!data) return {};

  return {
    title: `${data.flag} ${data.headline} | Different Type of Vibe`,
    description: `Official beat store deals in ${data.name}. Unlock $9.99/mo untagged WAV beat leases via ${data.gateways}. Royalty cleared with ${data.pro}.`,
    alternates: { canonical: `https://www.differenttypeofvibe.com/deals/${countryKey}` },
    openGraph: {
      title: `${data.flag} ${data.headline}`,
      description: data.description,
      url: `https://www.differenttypeofvibe.com/deals/${countryKey}`,
    },
  };
}

export default async function CountryDealsPage({ params }: Props) {
  const resolvedParams = await params;
  const countryKey = resolveCountryKey(resolvedParams?.country);
  const data = COUNTRY_DATA[countryKey];
  if (!data) notFound();

  // Filter beats for this country showcase
  const featuredBeats = MY_BEATS.filter((beat) =>
    (data.featuredBeatIds || ['1', '5', '6', '2']).includes(beat.id)
  );

  // JSON-LD Schemas for Top 1% SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.differenttypeofvibe.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Beat Deals', 'item': 'https://www.differenttypeofvibe.com/deals' },
          { '@type': 'ListItem', 'position': 3, 'name': `${data.name} Deals`, 'item': `https://www.differenttypeofvibe.com/deals/${countryKey}` },
        ],
      },
      {
        '@type': 'FAQPage',
        'mainEntity': (data.faqs || []).map((faq: CountryFAQ) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      },
      {
        '@type': 'ItemList',
        'name': `${data.name} Featured Beat Catalog`,
        'itemListElement': featuredBeats.map((beat, index) => ({
          '@type': 'MusicRecording',
          'position': index + 1,
          'name': beat.title,
          'duration': 'PT2M45S',
          'byArtist': { '@type': 'Person', 'name': 'Onzieb' },
          'audio': { '@type': 'AudioObject', 'contentUrl': beat.audioUrl },
          'offers': {
            '@type': 'Offer',
            'price': '49.99',
            'priceCurrency': data.currencyCode || 'USD',
            'availability': 'https://schema.org/InStock',
            'url': `https://www.differenttypeofvibe.com/deals/${countryKey}`,
          },
        })),
      },
    ],
  };

  return (
    <main className="container mx-auto p-4 md:p-6 min-h-screen max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="my-4 text-xs text-zinc-400 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-purple-400 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <Link href="/deals" className="hover:text-purple-400 transition">Deals</Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
        <span className="text-zinc-200 font-medium">{data.name}</span>
      </nav>

      <div className="text-center my-8 md:my-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-sm font-semibold mb-4 shadow-lg shadow-purple-950/40">
          <Globe className="w-4 h-4 text-purple-400" />
          <span>Official Storefront for Artists in {data.flag} {data.name}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          {data.headline}
        </h1>
        <p className="text-zinc-400 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 text-xs md:text-sm text-zinc-300 max-w-3xl shadow-md">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-purple-400" />
            <span><strong>Accepted Payments:</strong> {data.gateways}</span>
          </div>
          <span className="hidden md:inline text-zinc-600">&bull;</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span><strong>PRO Clearance:</strong> {data.pro}</span>
          </div>
        </div>
      </div>

      <CountryBeatShowcase
        beats={featuredBeats}
        countryName={data.name}
        flag={data.flag}
      />

      <section className="my-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Choose Your Beat Licensing Pass
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Unlimited WAV leases and stems with full commercial clearance in {data.name}.
          </p>
        </div>
        <SubscriptionPricing />
      </section>

      <section className="my-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-purple-900/40 rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/50 flex items-center justify-center text-purple-300">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Official {data.pro} Royalty Clearance &amp; Song Registration
            </h2>
            <p className="text-xs text-purple-400 font-medium">
              {data.proFullName || data.pro}
            </p>
          </div>
        </div>

        <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
          {data.proGuide}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-zinc-950/70 border border-zinc-800 p-4 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">100% Master Royalties</strong>
              <span className="text-zinc-400">Keep all streaming revenue generated on Spotify, Apple Music, and YouTube in {data.name}.</span>
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800 p-4 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Zero Sample Clearing</strong>
              <span className="text-zinc-400">All compositions are 100% original. No third-party claims, no strikes, and no takedowns.</span>
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800 p-4 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Instant PDF Agreement</strong>
              <span className="text-zinc-400">Receive an official, countersigned licensing contract delivered directly to your email upon checkout.</span>
            </div>
          </div>
        </div>
      </section>

      {data.subClusters && data.subClusters.length > 0 && (
        <section className="my-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Music className="w-5 h-5 text-purple-400" />
            <span>Explore Regional Scenes &amp; Sub-Clusters</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(data.subClusters || []).map((sub: SubClusterLink, idx: number) => (
              <Link
                key={idx}
                href={sub.slug.startsWith('..') ? sub.slug.replace('..', '') : `/deals/${sub.slug}`}
                className="group p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/60 hover:bg-zinc-900 transition-all shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white group-hover:text-purple-300 transition text-base">
                    {sub.name}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition transform group-hover:translate-x-1" />
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {sub.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {data.faqs && data.faqs.length > 0 && (
        <section className="my-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Frequently Asked Questions in {data.name}
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Clear licensing details, payment options, and distribution guidelines.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {(data.faqs || []).map((faq: CountryFAQ, idx: number) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-200"
              >
                <h3 className="font-bold text-white text-base md:text-lg mb-2 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="my-12 pt-8 border-t border-zinc-800 text-center">
        <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-500 mb-4">
          International Beat Store Hubs
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
          <Link href="/deals/united-states" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇺🇸 United States</Link>
          <Link href="/deals/united-kingdom" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇬🇧 United Kingdom</Link>
          <Link href="/deals/canada" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇨🇦 Canada</Link>
          <Link href="/deals/nigeria" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇳🇬 Nigeria</Link>
          <Link href="/deals/germany" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇩🇪 Germany</Link>
          <Link href="/deals/south-africa" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇿🇦 South Africa</Link>
          <Link href="/deals/australia" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇦🇺 Australia</Link>
          <Link href="/deals/france" className="hover:text-purple-400 transition bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">🇫🇷 France</Link>
        </div>
      </section>
    </main>
  );
}
