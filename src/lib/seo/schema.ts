// src/lib/seo/schema.ts

export interface TrackSchemaInput {
  id: string;
  title: string;
  slug?: string;
  bpm?: number;
  key?: string;
  duration?: number; // in seconds
  audioUrl?: string;
  coverArtUrl?: string;
  createdAt?: string;
}

export function generateMusicPlaylistSchema({
  playlistName,
  description,
  url,
  tracks,
}: {
  playlistName: string;
  description: string;
  url: string;
  tracks: TrackSchemaInput[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicPlaylist",
    "name": playlistName,
    "description": description,
    "url": url,
    "numTracks": tracks.length,
    "track": tracks.map((track, index) => ({
      "@type": "MusicRecording",
      "position": index + 1,
      "name": track.title,
      "url": `${url}#track-${track.id}`,
      "byArtist": {
        "@type": "MusicGroup",
        "name": "Onzieb",
        "url": "https://differenttypeofvibe.com",
      },
      "inAlbum": {
        "@type": "MusicAlbum",
        "name": "Different Type of Vibe Catalog",
      },
      "genre": playlistName.replace(" Beats & Instrumentals", ""),
      ...(track.duration && { "duration": `PT${track.duration}S` }),
      ...(track.audioUrl && { "audio": track.audioUrl }),
      ...(track.coverArtUrl && { "image": track.coverArtUrl }),
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Different Type of Vibe",
        },
      },
    })),
  };
}