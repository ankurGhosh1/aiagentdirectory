// components/GoogleAnalytics.tsx
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (window.gtag) return;

    // Inject GA4 script into the head tag
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer && window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());

      // Initialize GA4 with your tracking ID
      window.gtag("config", process.env.NEXT_PUBLIC_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
