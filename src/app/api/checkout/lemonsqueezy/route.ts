import { NextResponse } from 'next/server';

type TierType = 'standard' | 'pro' | 'mp3' | 'wav' | 'stems';

const TIER_ENV_MAP: Record<TierType, string | undefined> = {
  standard: process.env.LEMONSQUEEZY_STANDARD_VARIANT_ID || '2326670',
  pro: process.env.LEMONSQUEEZY_PRO_VARIANT_ID || '2342061',
  mp3: process.env.LEMONSQUEEZY_MP3_VARIANT_ID || '2343084',
  wav: process.env.LEMONSQUEEZY_WAV_VARIANT_ID || '2343089',
  stems: process.env.LEMONSQUEEZY_STEMS_VARIANT_ID || '2343093',
};

const TIER_PRICE_CENTS: Record<TierType, number> = {
  standard: 999,
  pro: 2499,
  mp3: 2999,
  wav: 4999,
  stems: 14999,
};

const TIER_LABELS: Record<TierType, string> = {
  standard: 'Standard Pass (5 Untagged WAV Leases / Mo)',
  pro: 'Pro Creator Pass (Unlimited WAVs + Full Stems)',
  mp3: 'MP3 Basic Lease (Untagged MP3 + 50k Streams)',
  wav: 'WAV Premium Lease (Untagged WAV + MP3 + 100k Streams)',
  stems: 'Unlimited Stems / Trackout License (WAV + MP3 + ZIP Stems)',
};

async function resolveVariantId(tier?: string, explicitVariantId?: string | number): Promise<string | null> {
  if (explicitVariantId) {
    return String(explicitVariantId);
  }

  const normalizedTier = (tier || '').toLowerCase() as TierType;
  if (normalizedTier && TIER_ENV_MAP[normalizedTier]) {
    return String(TIER_ENV_MAP[normalizedTier]);
  }

  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (!apiKey || !storeId) return null;

  try {
    const res = await fetch(
      `https://api.lemonsqueezy.com/v1/products?filter[store_id]=${storeId}&include=variants`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/vnd.api+json',
        },
        cache: 'no-store',
      }
    );
    if (!res.ok) return null;
    const payload = await res.json();
    const products = payload?.data || [];
    const includedVariants = (payload?.included || []).filter((i: any) => i?.type === 'variants');

    if (normalizedTier === 'mp3' || normalizedTier === 'wav' || normalizedTier === 'stems') {
      const targetPrice = TIER_PRICE_CENTS[normalizedTier];
      const keyword = normalizedTier === 'stems' ? 'stem' : normalizedTier;

      const matchedVariant = includedVariants.find((v: any) => {
        const vName = String(v?.attributes?.name || '').toLowerCase();
        const vPrice = Number(v?.attributes?.price || 0);
        return vName.includes(keyword) || vPrice === targetPrice;
      });

      if (matchedVariant?.id) {
        return String(matchedVariant.id);
      }
    }

    const targetKeyword = normalizedTier === 'pro' ? 'pro' : normalizedTier || 'standard';
    const matchedProduct = products.find((p: any) =>
      String(p?.attributes?.name || '').toLowerCase().includes(targetKeyword)
    );

    const firstVariantId = matchedProduct?.relationships?.variants?.data?.[0]?.id;
    return firstVariantId ? String(firstVariantId) : null;
  } catch (err) {
    console.error('[Lemon Squeezy] Error resolving variant ID dynamically:', err);
    return null;
  }
}

async function createLemonSqueezyCheckout({
  variantId,
  tier,
  email,
  beatTitle,
  beatId,
  audioUrl,
  custom,
}: {
  variantId?: string | number;
  tier?: string;
  email?: string;
  beatTitle?: string;
  beatId?: string;
  audioUrl?: string;
  custom?: Record<string, any>;
}) {
  const normalizedTier = (tier || '').toLowerCase() as TierType;
  const resolvedVariantId = await resolveVariantId(normalizedTier, variantId);

  if (!resolvedVariantId) {
    return {
      error: `Variant ID could not be resolved for tier '${tier || variantId}'. Ensure the product/variant exists in Lemon Squeezy.`,
      status: 400,
    };
  }

  const cleanBeatTitle = beatTitle ? beatTitle.split(' - ')[0].trim() : undefined;
  const licenseLabel = TIER_LABELS[normalizedTier] || custom?.license_type || 'Beat License';

  const customData: Record<string, string> = {
    ...(custom || {}),
    ...(normalizedTier ? { tier: normalizedTier } : {}),
    ...(beatTitle ? { beat_title: String(beatTitle) } : {}),
    ...(cleanBeatTitle ? { clean_beat_title: String(cleanBeatTitle) } : {}),
    ...(beatId ? { beat_id: String(beatId) } : {}),
    ...(audioUrl ? { audio_url: String(audioUrl) } : {}),
    ...(licenseLabel ? { license_type: String(licenseLabel) } : {}),
  };

  const productOptions: Record<string, any> = {};
  if (cleanBeatTitle) {
    productOptions.name = `${cleanBeatTitle} — ${licenseLabel}`;
    productOptions.description = `Instant untagged digital delivery for "${cleanBeatTitle}" (${licenseLabel}). High-resolution files + commercial license emailed immediately upon checkout.`;
  }

  const res = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
    body: JSON.stringify({
      data: {
        type: 'checkouts',
        attributes: {
          ...(Object.keys(productOptions).length > 0 ? { product_options: productOptions } : {}),
          checkout_data: {
            email: email || undefined,
            custom: customData,
          },
        },
        relationships: {
          store: { data: { type: 'stores', id: String(process.env.LEMONSQUEEZY_STORE_ID) } },
          variant: { data: { type: 'variants', id: String(resolvedVariantId) } },
        },
      },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('[Lemon Squeezy] Checkout creation failed:', data);
    return { error: 'Failed to create checkout', status: 500 };
  }

  const checkoutUrl = data?.data?.attributes?.url;
  if (!checkoutUrl) {
    return { error: 'No checkout URL returned', status: 500 };
  }

  return { url: checkoutUrl, variantId: resolvedVariantId, status: 200 };
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tier = searchParams.get('tier') || 'wav';
    const variantId = searchParams.get('variantId') || undefined;
    const beatTitle = searchParams.get('beat') || searchParams.get('title') || undefined;
    const beatId = searchParams.get('beatId') || undefined;
    const audioUrl = searchParams.get('audioUrl') || undefined;
    const email = searchParams.get('email') || undefined;

    const result = await createLemonSqueezyCheckout({
      variantId,
      tier,
      email,
      beatTitle,
      beatId,
      audioUrl,
    });

    if (result.url) {
      return NextResponse.redirect(result.url, 302);
    }

    return NextResponse.json({ error: result.error }, { status: result.status || 400 });
  } catch (err: any) {
    console.error('[Lemon Squeezy GET Checkout Error]:', err);
    return NextResponse.json({ error: err.message || 'Checkout redirect failed' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { variantId, tier, email, beatTitle, beatId, audioUrl, custom } = body;

    const result = await createLemonSqueezyCheckout({
      variantId,
      tier,
      email,
      beatTitle: beatTitle || custom?.beat_title,
      beatId: beatId || custom?.beat_id,
      audioUrl: audioUrl || custom?.audio_url,
      custom,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status || 400 });
    }

    return NextResponse.json({ url: result.url, variantId: result.variantId });
  } catch (err: any) {
    console.error('[Lemon Squeezy Checkout Error]:', err);
    return NextResponse.json({ error: err.message || 'Checkout failed' }, { status: 500 });
  }
}
