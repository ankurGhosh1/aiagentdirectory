import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";

const trackingID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackingId={trackingID} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
