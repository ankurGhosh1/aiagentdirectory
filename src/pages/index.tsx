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
  agents: Agent[];
}

const Home = ({ agents }: Props) => {
  return (
    <React.Fragment>
      <SEO
        title={`Top AI Agents to Boost Your Productivity`}
        description={`Discover the best AI agents to enhance your workflows and productivity.`}
        url={`https://aiagentlisting.com/`}
        canonicalUrl={`https://www.aiagentlisting.com/`}
      />
      <Container>
        <Layout>
          <Hero title={`Discover Your Next <br />AI Productivity Stack`} />
          <Agents agents={agents} />
        </Layout>
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;
  const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_AI_AGENT!;
  const AIRTABLE_TABLE_NAME = "Agents";

  try {
    const allAgents: Agent[] = [];
    let offset: string | undefined = undefined;

    do {
      const response: { data: { records: any[]; offset?: string } } =
        await axios.get(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
            params: {
              offset,
            },
          }
        );
      allAgents.push(
        ...response.data.records.map((record: any) => ({
          _id: record.id,
          ...record.fields,
        }))
      );
      offset = response.data.offset;
    } while (offset);

    return {
      props: {
        agents: allAgents,
      },
    };
  } catch (error) {
    console.error("Airtable Fetch Error:", error);
    return {
      props: {
        agents: [],
      },
    };
  }
};

export default Home;
