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

  // 2. Build Schema.org MusicRecording object
  const jsonLd = {
    '@context': 'https://schema.org',
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
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Different Type of Vibe Music Publishing LLC',
    },
    'audio': {
      '@type': 'AudioObject',
      'contentUrl': track.audio_url,
      'encodingFormat': 'audio/mpeg',
      'description': `${track.title} Beat Preview - ${track.bpm} BPM, Key: ${track.key}`,
    },
    'offers': {
      '@type': 'Offer',
      'url': pageUrl,
      'priceCurrency': 'USD',
      'price': '29.99', // Starting non-exclusive license price
      'availability': 'https://schema.org/InStock',
      'validFrom': track.created_at,
    },
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