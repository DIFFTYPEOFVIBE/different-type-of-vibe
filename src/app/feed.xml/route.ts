import { MY_BEATS } from '@/data/beats';

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export async function GET() {
  const baseUrl = 'https://differenttypeofvibe.com';

  const articles = [
    {
      title: 'How to Buy Beats Online in 2026: MP3 vs WAV vs STEMS Lease Breakdown',
      slug: 'how-to-buy-beats-online',
      description: 'Learn the exact differences between MP3 Basic Leases, WAV Premium Leases, and Stems Trackout licenses.',
      date: new Date().toUTCString(),
    },
    {
      title: 'Vocal Mixing Blueprint: How to Make Your Vocals Sit Perfectly in a Beat',
      slug: 'vocal-mixing-guide-for-artists',
      description: '5 professional studio techniques for EQ carving, compression, and vocal reverb buses.',
      date: new Date().toUTCString(),
    },
    {
      title: 'Spotify Clearance Guide: Avoid Copyright Strikes & Keep Royalties',
      slug: 'music-licensing-guide-for-independent-artists',
      description: 'Complete breakdown of beat licensing agreements, publishing splits, and Content ID registration.',
      date: new Date().toUTCString(),
    },
  ];

  const rssItems = [
    ...articles.map((item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${baseUrl}/blog/${item.slug}</link>
      <guid>${baseUrl}/blog/${item.slug}</guid>
      <pubDate>${item.date}</pubDate>
      <description><![CDATA[${item.description}]]></description>
    </item>`),
    ...MY_BEATS.map((beat) => {
      const slug = slugify(beat.title.split(' - ')[0]);
      return `
    <item>
      <title><![CDATA[${beat.title} - Untagged Beat Lease]]></title>
      <link>${baseUrl}/beat/${slug}</link>
      <guid>${baseUrl}/beat/${slug}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description><![CDATA[Stream and license "${beat.title}" produced by Onzieb. Genre: ${beat.genre || 'Hip Hop'}, BPM: ${beat.bpm || 120}.]]></description>
    </item>`;
    }),
  ].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Different Type of Vibe - Official Beat Store &amp; Guides</title>
    <link>${baseUrl}</link>
    <description>Premium Boom Bap, Lofi, and Melodic Hip-Hop instrumental beats produced by Onzieb.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
