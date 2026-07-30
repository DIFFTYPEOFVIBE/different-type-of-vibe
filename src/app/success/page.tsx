import Link from 'next/link';

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Order Confirmed!</h1>
      <p className="text-gray-300 mb-8 max-w-md">
        Thank you for your purchase. Your licensing agreement and download link are ready below.
      </p>

      {sessionId ? (
        <a
          href={`/api/download?session_id=${sessionId}`}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition mb-4"
        >
          Download Track & License
        </a>
      ) : null}

      <Link href="/" className="text-sm text-gray-400 hover:underline mt-4">
        Return to Beat Store
      </Link>
    </div>
  );
}