// pages/categories/index.tsx
import React from "react";
import axios from "axios";
import AgentCard from "../../components/AgentCard";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { GetServerSideProps } from "next";
import Link from "next/link";
interface Agent {
  _id: string;
  logo: string | null;
  name: string;
  shortDescription: string;
  industry: string;
  pricingModel: string;
  category: string;
  slug: string;
}

interface CategoriesPageProps {
  agents: Agent[];
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ agents }) => {
  // Get unique categories
  const uniqueCategories = [
    ...new Set(agents.map((agent) => agent.industry).filter(Boolean)),
  ];

  return (
    <React.Fragment>
      <SEO
        title={`Top AI Agents of All Categories`}
        description={`Top AI Agents Categories to Boost Your Productivity`}
        url={`https://aiagentlisting.com/categories`}
        canonicalUrl={`https://www.aiagentlisting.com/categories`}
      />
      <Container>
        <Layout>
          <Hero title={`Find The Best AI Agent <br /> For Your Business`} />
          <div className="text-gray-300 py-12 min-h-screen">
            <h1 className="text-3xl font-bold text-white mb-8">
              All Categories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uniqueCategories.map((industry) => (
                <div key={industry} className="bg-dark rounded-md p-6">
                  {/* Category card */}
                  <Link href={`/categories/${industry}`}>
                    <h2 className="text-xl font-bold text-white mb-4 capitalize">
                      {industry}
                    </h2>
                  </Link>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {agents
                      .filter((agent) => agent.industry === industry)
                      .slice(0, 4)
                      .map((agent) => (
                        <AgentCard key={agent._id} agent={agent} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<
  CategoriesPageProps
> = async () => {
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

export default CategoriesPage;
