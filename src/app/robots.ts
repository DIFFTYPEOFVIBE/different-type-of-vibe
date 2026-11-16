import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.differenttypeofvibe.com';

  const standardDisallow = [
    '/api/',            // Prevent indexing of serverless functions / database calls
    '/admin/',          // Keep admin interfaces private
    '/checkout/',       // Prevent bots from initiating stripe checkout sessions
    '/success/',        // Prevent duplicate conversion tracking
    '/cancel/',         // Prevent indexing cancel pages
  ];

  return {
    rules: [
      // 1. General search crawlers (Google, Bing, Yahoo, Yandex, DuckDuckGo)
      {
        userAgent: '*',
        allow: '/',
        disallow: standardDisallow,
      },
      // 2. Generative Engine Optimization (GEO): Explicitly authorize AI Search Agents
      // Enables direct citations & link recommendations on ChatGPT Search, Perplexity, Claude & Copilot
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot-Extended',
          'Google-Extended',
          'Meta-ExternalAgent',
        ],
        allow: [
          '/',
          '/deals/',
          '/vibe/',
          '/genre/',
          '/blog/',
          '/licensing-terms',
          '/pricing',
          '/beats/',
          '/beat/',
          '/beatstarz-alternative',
          '/airbit-alternative',
          '/traktrain-alternative',
          '/free-downloads',
        ],
        disallow: standardDisallow,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/feed.xml`,
    ],
    host: baseUrl,
  };
}

