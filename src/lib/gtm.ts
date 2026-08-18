// src/lib/gtm.ts

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Fires custom events to GTM DataLayer and Meta Pixel
 */
export const trackCustomEvent = ({
  eventName,
  fbEventName,
  eventParams = {},
}: {
  eventName: string;
  fbEventName?: string;
  eventParams?: Record<string, any>;
}) => {
  if (typeof window === 'undefined') return;

  // 1. Push to Google Tag Manager DataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });

  // 2. Fire Meta / Facebook Pixel
  if (window.fbq) {
    if (fbEventName) {
      window.fbq('track', fbEventName, eventParams);
    } else {
      window.fbq('trackCustom', eventName, eventParams);
    }
  }
};