import { Metadata } from 'next';
import SubscriptionPricing from '@/components/SubscriptionPricing';

export const metadata: Metadata = {
  title: 'Beat Store Subscriptions & VIP Passes | $9.99/mo Untagged Beat Leases',
  description: 'Get 5 Untagged WAV Commercial Beat Leases every month for just $9.99/mo. 100% untagged audio, commercial rights for Spotify & Apple Music, and zero marketplace fees.',
  keywords: [
    'beat store subscription',
    'monthly beat membership',
    'buy cheap untagged beat leases',
    'untagged wav beat pass',
    'affordable beat leases for independent artists',
    'beatstars subscription alternative',
    'pistas de rap',
    'comprar bases de trap',
    'instru de rap gratuit',
    'achat beat fr untagged',
    'free rap beats kaufen',
    'batidas de rap gratis',
    'uk drill beats untagged',
    'afrobeats instrumentals',
  ],
  alternates: {
    canonical: 'https://differenttypeofvibe.com/pricing',
  },
  openGraph: {
    title: 'Beat Store VIP Artist Pass | $9.99/mo Untagged Beat Leases',
    description: 'Get 5 Untagged WAV Commercial Beat Leases every month for $9.99. Bypasses marketplace fees with 100% untagged downloads.',
    url: 'https://differenttypeofvibe.com/pricing',
    siteName: 'Different Type of Vibe',
    type: 'website',
  },
};

export default function PricingPage() {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': 'https://differenttypeofvibe.com/pricing#standard-pass',
        name: 'VIP Artist Pass - $9.99/mo Beat Store Subscription',
        description: 'Monthly beat store subscription granting 5 Untagged WAV Commercial Beat Leases every month.',
        brand: {
          '@type': 'Brand',
          name: 'Different Type of Vibe',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.98',
          reviewCount: '56',
          'bestRating': '5',
          'worstRating': '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Standard Pass (USD)',
            price: '9.99',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '9.99',
              priceCurrency: 'USD',
              unitText: 'MONTH',
            },
            availability: 'https://schema.org/InStock',
            url: 'https://differenttypeofvibe.com/pricing',
          },
          {
            '@type': 'Offer',
            name: 'Standard Pass (EUR)',
            price: '9.20',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '9.20',
              priceCurrency: 'EUR',
              unitText: 'MONTH',
            },
            availability: 'https://schema.org/InStock',
            url: 'https://differenttypeofvibe.com/pricing',
          },
          {
            '@type': 'Offer',
            name: 'Standard Pass (GBP)',
            price: '8.10',
            priceCurrency: 'GBP',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '8.10',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
            availability: 'https://schema.org/InStock',
            url: 'https://differenttypeofvibe.com/pricing',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://differenttypeofvibe.com/pricing#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How many WAV beat leases do I get for $9.99/month?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The $9.99/mo Standard Pass includes 5 Untagged WAV Commercial Beat Leases every billing period, giving you $250+ worth of beat leases for just $9.99.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are voice producer tags removed from subscription downloads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! All subscription leases include 100% untagged audio files with zero producer voiceovers.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I keep my released songs on Spotify if I cancel my subscription?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Any song recorded and commercially released during an active subscription remains fully licensed in perpetuity (forever), even if you decide to cancel later.',
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <header className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-emerald-400 bg-clip-text text-transparent">
          VIP Artist Pass Subscriptions
        </h1>
        <p className="text-neutral-400 text-base md:text-lg mt-3 max-w-2xl mx-auto">
          Get high-quality, 100% untagged WAV beat leases delivered monthly. Bypasses third-party marketplace fees so you can release songs on Spotify for pennies per track.
        </p>
      </header>

      <SubscriptionPricing />

      {/* SEO FAQ SECTION */}
      <section className="max-w-4xl mx-auto mt-16 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 text-sm text-neutral-300">
          <div className="border-b border-neutral-800 pb-4">
            <h3 className="font-semibold text-purple-400 text-base mb-1">How many WAV beat leases do I get for $9.99/month?</h3>
            <p className="text-neutral-400 leading-relaxed">
              The $9.99/mo Standard Pass includes 5 Untagged WAV Commercial Beat Leases every billing period ($250+ retail value).
            </p>
          </div>
          <div className="border-b border-neutral-800 pb-4">
            <h3 className="font-semibold text-purple-400 text-base mb-1">Are voice producer tags removed from subscription downloads?</h3>
            <p className="text-neutral-400 leading-relaxed">
              Yes! Every beat downloaded with your subscription credits includes 100% untagged audio files ready for mixing and mastering.
            </p>
          </div>
          <div className="border-b border-neutral-800 pb-4">
            <h3 className="font-semibold text-purple-400 text-base mb-1">What happens to my released songs if I cancel my subscription?</h3>
            <p className="text-neutral-400 leading-relaxed">
              Any song recorded and commercially released during an active subscription remains fully licensed in perpetuity (forever). You do not need to keep paying to keep your songs live on Spotify or Apple Music.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-400 text-base mb-1">Can I submit my song to YouTube Content ID?</h3>
            <p className="text-neutral-400 leading-relaxed">
              To protect all non-exclusive buyers from copyright strikes, non-exclusive subscription leases prohibit submitting the song to automated fingerprinting systems (DistroKid Content ID, Audiam, etc.).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}