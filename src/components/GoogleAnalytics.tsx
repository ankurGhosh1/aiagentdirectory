import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
    if (!measurementId) {
      console.error("Google Analytics Measurement ID is missing.");
      return;
    }
    console.log("Adds GA4");
    // Inject GA4 script into the head tag
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: any[]) {
        if (window.dataLayer) {
          window.dataLayer.push(args);
        }
      };

      // Initialize GA4 with the measurement ID
      window.gtag("js", new Date());
      window.gtag("config", measurementId, {
        page_path: window.location.pathname,
      });
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
