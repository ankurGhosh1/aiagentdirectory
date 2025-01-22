import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string; // e.g., 'website', 'article'
  schemaType?: string; // e.g., 'WebPage', 'Article'
  canonicalUrl?: string;
}

function SEO(props: SEOProps) {
  const {
    title,
    description,
    url,
    image = "/logo.png",
    type = "website",
    schemaType = "WebPage",
    canonicalUrl,
  } = props;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    description: description,
    url: url,
    image: image,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}

export default SEO;
