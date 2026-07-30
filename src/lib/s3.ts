// src/lib/s3.ts
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'auto',
  endpoint: process.env.STORAGE_ENDPOINT, // Optional: Required if using Cloudflare R2
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function generateDownloadUrl(beatId: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.STORAGE_BUCKET_NAME!,
    Key: `beats/${beatId}.zip`, // File path inside your private bucket
  });

  // Generates a temporary link that expires in 1 hour (3600 seconds)
  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  return url;
}