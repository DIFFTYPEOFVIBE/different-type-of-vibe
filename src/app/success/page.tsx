// src/app/success/page.tsx
import Link from 'next/link';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Invalid Session</h1>
        <p className="mt-2 text-gray-400">No checkout session ID was provided.</p>
        <Link href="/" className="mt-6 px-4 py-2 bg-white text-black font-semibold rounded-md">
          Return Home
        </Link>
      </div>
    );
  }

  // Fetch session details from Stripe using the ID in URL
  const session = await stripe.checkout.sessions.retrieve(session_id);
  const productName = session.metadata?.productName || 'Your Purchased Item';
  const customerEmail = session.customer_details?.email;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-black text-white">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-xl">
        <div className="text-4xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-emerald-400">Payment Successful!</h1>
        <p className="mt-2 text-zinc-400">Thank you for your order.</p>

        <div className="my-6 p-4 bg-zinc-800/50 rounded-lg text-left space-y-2 border border-zinc-700/50">
          <p className="text-sm text-zinc-400">Item: <span className="text-white font-medium">{productName}</span></p>
          <p className="text-sm text-zinc-400">Receipt sent to: <span className="text-white font-medium">{customerEmail}</span></p>
        </div>

        {/* Temporary Download Placeholder */}
        <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-colors">
          Download Beat & License (ZIP)
        </button>

        <Link href="/" className="inline-block mt-6 text-sm text-zinc-400 hover:text-white transition-colors">
          ← Back to Beatstore
        </Link>
      </div>
    </div>
  );
}
<a
  href={`/api/download?session_id=${session_id}`}
  className="block text-center w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-colors"
>
  Download Beat & License (ZIP)
</a>
// src/app/success/page.tsx
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    return (
      <main className="max-w-md mx-auto mt-20 p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-white">
        <h1 className="text-xl font-bold text-red-400">Invalid Session</h1>
        <p className="text-sm text-zinc-400 mt-2">No Stripe session ID was provided.</p>
        <Link href="/" className="inline-block mt-4 text-xs font-semibold text-emerald-400 underline">
          Return to Catalog
        </Link>
      </main>
    );
  }

  // 1. Fetch order details from Supabase using Stripe session ID
  const { data: order } = await supabase
    .from('orders')
    .select('*, beats(*)')
    .eq('stripe_session_id', sessionId)
    .single();

  if (!order) {
    return (
      <main className="max-w-md mx-auto mt-20 p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-white">
        <h1 className="text-2xl font-bold">Processing Order...</h1>
        <p className="text-sm text-zinc-400 mt-2">
          Your payment was successful! If your download link doesn't show up in a few seconds, refresh this page.
        </p>
      </main>
    );
  }

  // 2. Generate a secure, 60-minute signed URL from private storage
  const fileKey = `${order.beat_id}/${order.license_type}.zip`; // Path pattern
  const { data: signedData } = await supabase.storage
    .from('beat-masters')
    .createSignedUrl(fileKey, 3600); // 1 hour expiration

  const downloadUrl = signedData?.signedUrl || order.beats?.audio_url;

  return (
    <main className="max-w-lg mx-auto mt-16 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl text-white text-center space-y-6">
      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
        ✓
      </div>

      <div>
        <h1 className="text-2xl font-bold">Payment Successful!</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Thank you for purchasing <span className="text-white font-semibold">{order.beats?.title}</span>.
        </p>
      </div>

      <div className="bg-zinc-800/60 p-4 rounded-xl border border-zinc-700/50 text-left text-xs space-y-2">
        <div className="flex justify-between">
          <span className="text-zinc-400">License Purchased:</span>
          <span className="font-bold uppercase text-emerald-400">{order.license_type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Amount Paid:</span>
          <span className="font-bold text-white">${order.amount_total}</span>
        </div>
      </div>

      {/* Secure Download Button */}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="block w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold rounded-xl transition shadow-lg shadow-emerald-500/20"
        >
          📥 Download Purchased Files
        </a>
      )}

      <p className="text-xs text-zinc-500">
        Note: Your download link expires in 60 minutes for security reasons.
      </p>

      <div className="pt-2">
        <Link href="/" className="text-xs text-zinc-400 hover:text-white transition">
          ← Back to Beat Catalog
        </Link>
      </div>
    </main>
  );
}