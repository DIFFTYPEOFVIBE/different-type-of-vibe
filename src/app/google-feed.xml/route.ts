import { NextResponse } from 'next/server';
import { MY_BEATS } from '@/data/beats';

function escapeXml(unsafe: string): string {
  return String(unsafe ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toSlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, 'b')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Google Merchant Center Free Product Listings XML Feed (RSS 2.0 + Google Namespace)
 * Endpoint: https://www.differenttypeofvibe.com/google-feed.xml
 * Submit this endpoint to Google Merchant Center -> Data Feeds -> Primary Feed
 * to unlock free organic product placements in the Google Shopping tab!
 */
export async function GET() {
  const baseUrl = 'https://www.differenttypeofvibe.com';
  const defaultImage = `${baseUrl}/og-image.png`;

  const vipItems = `
    <item>
      <g:id>vip-standard-pass</g:id>
      <g:title>${escapeXml('Standard VIP Artist Pass (5 Untagged WAV Leases / Mo)')}</g:title>
      <g:description>${escapeXml('Get 5 Untagged 24-bit WAV Commercial Beat Leases every month for $9.99/mo. Instant digital download delivery and commercial streaming clearance for Spotify & Apple Music.')}</g:description>
      <g:link>${baseUrl}/vip-pass</g:link>
      <g:image_link>${defaultImage}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>9.99 USD</g:price>
      <g:brand>Different Type of Vibe</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Media &gt; Music</g:google_product_category>
      <g:custom_label_0>VIP Subscription</g:custom_label_0>
    </item>
    <item>
      <g:id>vip-pro-creator-pass</g:id>
      <g:title>${escapeXml('Pro Creator VIP Pass (Unlimited WAVs + Full Stems / Mo)')}</g:title>
      <g:description>${escapeXml('Unlimited 24-bit studio WAV beat downloads and isolated stem trackouts every month for $24.99/mo. 100% royalty-free commercial clearance.')}</g:description>
      <g:link>${baseUrl}/vip-pass</g:link>
      <g:image_link>${defaultImage}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>24.99 USD</g:price>
      <g:brand>Different Type of Vibe</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Media &gt; Music</g:google_product_category>
      <g:custom_label_0>VIP Subscription</g:custom_label_0>
    </item>
  `;

  const beatItems = MY_BEATS.map((beat) => {
    const cleanTitle = beat.title.split(' - ')[0].trim();
    const slug = toSlug(cleanTitle);
    const artists = beat.artistVibe ? beat.artistVibe.replace(/\s*Type\s*Beats?$/i, '').trim() : 'Onzieb';
    const description = `Buy untagged ${cleanTitle}, a studio-grade ${beat.genre || 'Hip Hop'} ${artists} Type Beat. Tempo: ${beat.bpm || 140} BPM, Key: ${beat.key || 'C Minor'}. Instant uncompressed 24-bit WAV and stem trackout delivery.`;

    return `
    <item>
      <g:id>beat_${beat.id}</g:id>
      <g:title>${escapeXml(`${cleanTitle} - ${artists} Type Beat (${beat.genre || 'Hip Hop'} Instrumental)`)}</g:title>
      <g:description>${escapeXml(description)}</g:description>
      <g:link>${baseUrl}/beat/${slug}</g:link>
      <g:image_link>${defaultImage}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>29.99 USD</g:price>
      <g:brand>Different Type of Vibe</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Media &gt; Music</g:google_product_category>
      <g:custom_label_0>${escapeXml(beat.genre || 'Hip Hop')}</g:custom_label_0>
      <g:custom_label_1>${escapeXml(artists)}</g:custom_label_1>
    </item>`;
  }).join('');

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Different Type of Vibe - Official Beat Store Catalog</title>
    <link>${baseUrl}</link>
    <description>Premium untagged hip-hop, trap, boom bap, and R&amp;B instrumental beat leases produced by Onzieb.</description>
    ${vipItems}
    ${beatItems}
  </channel>
</rss>`;

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
