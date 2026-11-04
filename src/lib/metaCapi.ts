// src/lib/metaCapi.ts
import crypto from 'crypto';

// ==========================================
// EXISTING PURCHASE EVENT SYSTEM (DO NOT REMOVE)
// ==========================================
interface CapiUserPayload {
  email?: string;
  clientIpAddress?: string;
  userAgent?: string;
  fbp?: string; // _fbp cookie value
  fbc?: string; // _fbc cookie value
}

interface CapiCustomData {
  value: number;
  currency: string;
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  order_id?: string;
}

// SHA-256 helper to hash User Data as required by Meta CAPI
function hashDataExisting(value?: string): string | undefined {
  if (!value) return undefined;
  return crypto
    .createHash('sha256')
    .update(value.trim().toLowerCase())
    .digest('hex');
}

export async function sendCapiPurchaseEvent({
  eventId,
  user,
  customData,
}: {
  eventId: string; // Used for deduplication with browser Pixel
  user: CapiUserPayload;
  customData: CapiCustomData;
}) {
  const pixelId = process.env.META_PIXEL_ID || "339067334980938";
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn('Meta Pixel ID or Access Token missing in env variables.');
    return;
  }

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId, // Deduplication key
        action_source: 'website',
        user_data: {
          em: user.email ? [hashDataExisting(user.email)] : undefined,
          client_ip_address: user.clientIpAddress,
          client_user_agent: user.userAgent,
          fbp: user.fbp,
          fbc: user.fbc,
        },
        custom_data: {
          currency: customData.currency,
          value: customData.value,
          content_name: customData.content_name,
          content_ids: customData.content_ids,
          content_type: customData.content_type,
          order_id: customData.order_id,
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending Meta CAPI event:', error);
  }
}

// ==========================================
// NEW MULTI-EVENT SYSTEM (metaCapi.ts)
// ==========================================
interface CapiEventParams {
  eventName: 'Lead' | 'Purchase' | 'InitiateCheckout' | 'ViewContent';
  eventId: string;
  email?: string;
  sourceUrl?: string;
  customData?: Record<string, any>;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  cookieHeader?: string | null;
}

// SHA-256 hash helper required by Meta for PII
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export function extractMetaCookies(cookieHeader?: string | null): { fbp?: string; fbc?: string } {
  if (!cookieHeader) return {};
  const fbpMatch = cookieHeader.match(/(?:^|;\s*)_fbp=([^;]+)/);
  const fbcMatch = cookieHeader.match(/(?:^|;\s*)_fbc=([^;]+)/);
  return {
    fbp: fbpMatch ? decodeURIComponent(fbpMatch[1]) : undefined,
    fbc: fbcMatch ? decodeURIComponent(fbcMatch[1]) : undefined,
  };
}

export async function sendMetaCapiEvent({
  eventName,
  eventId,
  email,
  sourceUrl,
  customData = {},
  clientIp,
  userAgent,
  fbp,
  fbc,
  cookieHeader,
}: CapiEventParams) {
  const PIXEL_ID = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID || "339067334980938";
  const ACCESS_TOKEN =
    process.env.META_CAPI_ACCESS_TOKEN ||
    process.env.META_PAGE_ACCESS_TOKEN ||
    process.env.META_ACCESS_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn('⚠️ Meta CAPI variables missing. Skipping server event.');
    return;
  }

  const parsedCookies = extractMetaCookies(cookieHeader);
  const resolvedFbp = fbp || parsedCookies.fbp;
  const resolvedFbc = fbc || parsedCookies.fbc;

  const userData: Record<string, any> = {
    client_ip_address: clientIp || undefined,
    client_user_agent: userAgent || undefined,
    fbp: resolvedFbp || undefined,
    fbc: resolvedFbc || undefined,
  };
  if (email && email.includes('@')) {
    userData.em = [hashData(email)];
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId, // Deduplication key matching client-side
        event_source_url: sourceUrl || 'https://differenttypeofvibe.com',
        action_source: 'website',
        user_data: userData,
        custom_data: customData,
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v26.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    if (!response.ok) {
      console.error('❌ Meta CAPI Error:', result);
    } else {
      console.log(`✅ Meta CAPI ${eventName} event sent successfully.`);
    }
  } catch (err) {
    console.error('❌ Failed to send CAPI event:', err);
  }
}
