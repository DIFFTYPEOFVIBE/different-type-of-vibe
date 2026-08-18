// src/lib/metaCapi.ts
import crypto from "crypto";

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
function hashData(value?: string): string | undefined {
  if (!value) return undefined;
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
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
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn("Meta Pixel ID or Access Token missing in env variables.");
    return;
  }

  const payload = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId, // Deduplication key
        action_source: "website",
        user_data: {
          em: user.email ? [hashData(user.email)] : undefined,
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error sending Meta CAPI event:", error);
  }
}