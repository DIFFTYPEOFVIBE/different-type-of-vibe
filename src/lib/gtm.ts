// src/lib/gtm.ts

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fires custom events to GTM DataLayer, GA4 (via gtag), and Meta Pixel
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

  // 2. Direct Google Analytics 4 Event (bypasses ad-blockers and GTM delays)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 3. Fire Meta / Facebook Pixel
  if (window.fbq) {
    if (fbEventName) {
      window.fbq('track', fbEventName, eventParams);
    } else {
      window.fbq('trackCustom', eventName, eventParams);
    }
  }
};
