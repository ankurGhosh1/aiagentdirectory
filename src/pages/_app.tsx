import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <GoogleAnalytics />
        <meta
          name="google-site-verification"
          content="Iy1NBS2IkZ0mW34o2sSSiyesKPK8cfOXtkzhkAQQeq8"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
