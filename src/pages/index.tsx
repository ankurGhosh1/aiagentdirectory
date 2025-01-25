// pages/index.tsx
import React from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Agents from "@/components/Agents";
import axios from "axios";
import { GetServerSideProps } from "next";

interface Agent {
  _id: string;
  logo: string | null;
  name: string;
  shortDescription: string;
  access: string;
  pricingModel: string;
  category: string;
  slug: string;
}

interface Props {
  initialAgents: Agent[];
  initialOffset: string | null;
}

const Home = ({ initialAgents, initialOffset }: Props) => {
  return (
    <React.Fragment>
      <SEO
        title={`AI Agents Listing & Directory - Find Best AI Agents`}
        description={`Discover the best AI agents in our comprehensive listing and directory. Compare features, reviews, and pricing to find the perfect AI agent for your needs. Explore now!`}
        url={`https://www.aiagentlisting.com/`}
        canonicalUrl={`https://www.aiagentlisting.com/`}
      />
      <Container>
        <Layout>
          <Hero title={`Find The Best AI Agents <br /> For Your Business`} />
          <Agents initialAgents={initialAgents} initialOffset={initialOffset} />
        </Layout>
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const response = await axios.get(`${apiUrl}/api/agents`, {
      params: { limit: 30 },
    });
    const { records, offset } = response.data;

    return {
      props: {
        initialAgents: records,
        initialOffset: offset || null,
      },
    };
  } catch (error) {
    console.error("Error fetching initial agents:", error);
    return {
      props: {
        initialAgents: [],
        initialOffset: null,
      },
    };
  }
};

export default Home;
