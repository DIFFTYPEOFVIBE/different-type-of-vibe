'use client';

export const dynamic = 'force-static';
export const revalidate = false;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', fontFamily: 'monospace' }}>
        <h2>An error occurred</h2>
        <button onClick={() => reset()} style={{ padding: '8px 16px', marginTop: '1rem', cursor: 'pointer' }}>
          Try Again
        </button>
      </body>
    </html>
  );
}
