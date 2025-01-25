import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="Iy1NBS2IkZ0mW34o2sSSiyesKPK8cfOXtkzhkAQQeq8"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
