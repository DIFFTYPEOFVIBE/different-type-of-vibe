import React from 'react';
import internalLinksMap from '@/data/internal_links_map.json';

interface RelatedBeatsProps {
  slug: string;
}

interface LinkItem {
  target_title: string;
  target_slug: string;
  similarity_score: number;
  anchor_html: string;
}

interface BeatMapItem {
  title: string;
  related_links: LinkItem[];
}

export default function RelatedBeats({ slug }: RelatedBeatsProps) {
  const mapData = internalLinksMap as Record<string, BeatMapItem>;
  const beatInfo = mapData[slug];

  if (!beatInfo || !beatInfo.related_links || beatInfo.related_links.length === 0) {
    return null;
  }

  return (
    <div className="related-beats-box my-6 rounded-lg border border-slate-800 bg-slate-900/80 p-5 font-sans text-slate-200 shadow-md">
      <h4 className="mb-3 text-lg font-semibold text-purple-400">
        Recommended For You (Inspired by &apos;{beatInfo.title.split(' - ')[0]}&apos;)
      </h4>
      <ul className="space-y-2 pl-0 text-sm leading-relaxed text-slate-300">
        {beatInfo.related_links.map((link, idx) => (
          <li
            key={idx}
            className="transition-colors hover:text-purple-300"
            dangerouslySetInnerHTML={{ __html: link.anchor_html }}
          />
        ))}
      </ul>
    </div>
  );
}
