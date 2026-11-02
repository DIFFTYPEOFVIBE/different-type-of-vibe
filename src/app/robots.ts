import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.differenttypeofvibe.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',            // Prevent indexing of serverless functions / database calls
        '/admin/',          // Keep admin interfaces private
        '/checkout/',       // Prevent search bots from initiating stripe checkout sessions
        '/success/',        // Prevent duplicate conversions / fake page indexings
        '/cancel/',         // Prevent indexing cancel pages
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
