import { NextResponse } from 'next/server';
import { MY_BEATS } from '@/data/beats';

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function escapeCsv(val: string): string {
  const clean = String(val ?? '').replace(/"/g, '""');
  return `"${clean}"`;
}

/**
 * Meta Commerce Manager Dynamic Product Feed (CSV)
 * URL: https://www.differenttypeofvibe.com/api/meta-catalog
 * Plug this URL into Meta Commerce Manager -> Data Sources -> Data Feed (Scheduled Fetch)
 * to power Advantage+ Catalog Ads & Dynamic Retargeting!
 */
export async function GET() {
  const baseUrl = 'https://www.differenttypeofvibe.com';
  const defaultImage = `${baseUrl}/og-image.png`;

  const headers = [
    'id',
    'title',
    'description',
    'availability',
    'condition',
    'price',
    'link',
    'image_link',
    'brand',
    'google_product_category',
    'custom_label_0',
    'custom_label_1',
  ];

  const rows: string[][] = [
    [
      'vip-standard-pass',
      'Standard VIP Artist Pass (5 Untagged WAV Leases / Mo)',
      'Get 5 Untagged 24-bit WAV Commercial Beat Leases every month for $9.99/mo. Instant download delivery and commercial rights for Spotify & Apple Music.',
      'in stock',
      'new',
      '9.99 USD',
      `${baseUrl}/vip-pass`,
      defaultImage,
      'Onzieb',
      'Media > Music & Sound Recordings',
      'VIP Subscription',
      'Best Seller',
    ],
    [
      'vip-pro-creator-pass',
      'Pro Creator Pass (Unlimited WAV + Full Stems / Mo)',
      'Unlimited Untagged WAV Beat Downloads + Full Stems Trackouts every month for recording artists and creators.',
      'in stock',
      'new',
      '24.99 USD',
      `${baseUrl}/vip-pass`,
      defaultImage,
      'Onzieb',
      'Media > Music & Sound Recordings',
      'VIP Subscription',
      'Pro Unlimited',
    ],
  ];

  for (const beat of MY_BEATS) {
    const cleanTitle = beat.title.split(' - ')[0].trim();
    const slug = slugify(cleanTitle);
    rows.push([
      `beat-${beat.id}`,
      beat.title,
      `Untagged studio beat lease "${cleanTitle}" (${beat.bpm} BPM, Key: ${beat.key}) produced by Onzieb. Instant MP3, WAV, and Stems delivery.`,
      'in stock',
      'new',
      `${(beat.priceMp3 || 29.99).toFixed(2)} USD`,
      `${baseUrl}/beat/${slug}`,
      defaultImage,
      'Onzieb',
      'Media > Music & Sound Recordings',
      beat.artistVibe || 'Type Beats',
      beat.genre || 'Hip-Hop Beats',
    ]);
  }

  const csvContent = [
    headers.join(','),
    ...rows.map((r) => r.map(escapeCsv).join(',')),
  ].join('\n');

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
