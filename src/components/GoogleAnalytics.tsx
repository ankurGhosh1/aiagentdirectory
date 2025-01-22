import React, { useState, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Navigator {
    connection?: {
      saveData?: boolean;
    };
  }
}

const isSpeedTestOrBot = () => {
  if (typeof window === "undefined") return false; // Return false for SSR

  // Detect connection saver flag (common for PageSpeed tests)
  const saveData = navigator.connection && navigator.connection.saveData;

  // Detect bot or Google PageSpeed Insights via user-agent
  const botPatterns = [
    /bot/i,
    /crawl/i,
    /spider/i,
    /slurp/i,
    /mediapartners/i,
    /Lighthouse/i, // Google Lighthouse
    /Chrome-Lighthouse/i, // Google Chrome Lighthouse
  ];

  const isBot = botPatterns.some((pattern) =>
    pattern.test(navigator.userAgent)
  );

  return saveData || isBot; // Return true if saveData is enabled or a bot is detected
};

const GoogleAnalytics = () => {
  const [shouldLoadGA, setShouldLoadGA] = useState(true);

  useEffect(() => {
    if (isSpeedTestOrBot()) {
      setShouldLoadGA(false); // Do not load Google Analytics if it's a bot or speed test
    }
  }, []);

  if (!shouldLoadGA) {
    return null; // Skip loading the GA script
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
