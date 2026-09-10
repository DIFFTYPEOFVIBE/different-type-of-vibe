import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Interface representing your Supabase track record
interface Track {
  id: string
  title: string
  slug: string
  bpm: number
  key: string
  genre: string
  audio_url: string
  cover_art_url: string
  duration_seconds: number
  description?: string
  created_at: string
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function TrackPage({ params }: PageProps) {
  const { slug } = await params

  // 1. Fetch track data (e.g., from Supabase)
  const track: Track | null = await getTrackBySlug(slug) // Replace with your fetch function

  if (!track) {
    notFound()
  }

  const pageUrl = `https://differenttypeofvibe.com/track/${track.slug}`
  const formattedDuration = formatISO8601Duration(track.duration_seconds)

  // 2. Build Schema.org Advanced Dual-Copyright Object (Traktrain + Airbit + BeatStars)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MusicRecording',
        '@id': `${pageUrl}#recording`,
        'name': track.title,
        'url': pageUrl,
        'image': track.cover_art_url,
        'duration': formattedDuration,
        'genre': track.genre,
        'inAlbum': {
          '@type': 'MusicAlbum',
          'name': 'Different Type of Vibe Catalog',
        },
        'byArtist': {
          '@type': 'MusicGroup',
          'name': 'Onzieb',
          'url': 'https://differenttypeofvibe.com',
          'logo': 'https://differenttypeofvibe.com/images/logo.jpg',
          'sameAs': [
            'https://www.instagram.com/onzieb',
            'https://www.youtube.com/@onzieb',
            'https://www.tiktok.com/@onzieb'
          ]
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Different Type of Vibe Music Publishing LLC',
        },
        'audio': {
          '@type': 'AudioObject',
          'name': `${track.title} (Audio Preview)`,
          'contentUrl': track.audio_url,
          'encodingFormat': 'audio/mpeg',
          'bitrate': '320kbps',
          'description': `${track.title} Beat Preview - ${track.bpm} BPM, Key: ${track.key}`,
        },
        'offers': [
          {
            '@type': 'Offer',
            'name': 'MP3 Basic Lease',
            'url': pageUrl,
            'priceCurrency': 'USD',
            'price': '29.99',
            'availability': 'https://schema.org/InStock',
            'validFrom': track.created_at,
          },
          {
            '@type': 'Offer',
            'name': 'WAV Premium Lease',
            'url': pageUrl,
            'priceCurrency': 'USD',
            'price': '49.99',
            'availability': 'https://schema.org/InStock',
            'validFrom': track.created_at,
          },
          {
            '@type': 'Offer',
            'name': 'Stems Trackout License',
            'url': pageUrl,
            'priceCurrency': 'USD',
            'price': '149.99',
            'availability': 'https://schema.org/InStock',
            'validFrom': track.created_at,
          }
        ],
        'recordedAs': {
          '@id': `${pageUrl}#composition`
        }
      },
      {
        '@type': 'MusicComposition',
        '@id': `${pageUrl}#composition`,
        'name': track.title,
        'composer': {
          '@type': 'Person',
          'name': 'Onzieb'
        },
        'lyricist': {
          '@type': 'Person',
          'name': 'Recording Artist / Vocalist'
        },
        'musicArrangement': 'Produced, mixed, and arranged by Onzieb',
        'publisher': {
          '@type': 'Organization',
          'name': 'Different Type of Vibe Music Publishing LLC',
        }
      }
    ]
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Search Engine Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Your Track Storefront Component Layout */}
      <article className="track-details">
        <h1 className="text-3xl font-bold">{track.title}</h1>
        <p className="text-muted-foreground">
          {track.bpm} BPM • Key: {track.key} • {track.genre}
        </p>
        
        {/* Audio Player, Waveform & License Selector UI */}
      </article>
    </main>
  )
}