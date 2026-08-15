declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const reportConversion = (url?: string) => {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-985653416/Woh5CMj7ofIbEKjB_9UD",
      event_callback: callback,
    });
  } else if (url) {
    // Fallback if gtag hasn't loaded yet so user isn't stuck
    window.location.href = url;
  }

  return false;
};