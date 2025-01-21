// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
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
    <Container>
      <Layout>
        <Hero title={`Discover Your Next <br />AI Productivity Stack`} />
        <Categories />
        <Agents />
      </Layout>
    </Container>
  );
}
