// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Agents from "@/components/Agents";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <React.Fragment>
      <SEO
        title={`Top AI Agents in to Boost Your Productivity`}
        description={`Top AI Agents in to Boost Your Productivity`}
        url={`https://aiagentlisting.com/`}
      />
      <Container>
        <Layout>
          <Hero title={`Discover Your Next <br />AI Productivity Stack`} />
          <Agents />
        </Layout>
      </Container>
    </React.Fragment>
  );
}
