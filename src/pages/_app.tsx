import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID; // Get your GA ID

  return (
    <>
      <Head>
        <GoogleAnalytics />
        <meta
          name="google-site-verification"
          content="Iy1NBS2IkZ0mW34o2sSSiyesKPK8cfOXtkzhkAQQeq8"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Directly inject the GA4 script */}
        {measurementId && ( // Conditionally render if ID is available
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
        )}
        {measurementId && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', {
                page_path: window.location.pathname,
              });
            `}
          </script>
        )}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
