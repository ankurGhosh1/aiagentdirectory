import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import AgentCard from "@/components/AgentCard";

interface Agent {
  _id: string;
  logo: string | null;
  name: string;
  shortDescription: string;
  access: string;
  pricingModel: string;
  category: string;
  slug: string;
  website?: string;
  longDescription?: string;
  keyFeatures?: string[];
  industry?: string;
}

interface Props {
  agents: Agent[];
  industry: string;
  total: number;
  meta: string;
  error?: string;
}

const CategoryPage = ({ agents, industry, total, meta }: Props) => {
  const [visibleAgents, setVisibleAgents] = React.useState(30);

  const handleLoadMore = () => {
    setVisibleAgents((prev) => Math.min(prev + 8, agents.length));
  };

  return (
    <>
      <SEO
        title={`Top ${total} AI Agents in ${industry}`}
        description={
          meta || `Find the best AI agents in ${industry} productivity stack.`
        }
        url={`https://aiagentlisting.com/categories/${industry}`}
        canonicalUrl={`https://www.aiagentlisting.com/categories/${industry}`}
      />
      <Container>
        <Layout>
          <Hero
            title={`Top ${total} AI Agents in ${industry}`}
            badgeTitle={`${industry} AI Agents`}
          />
          <div className="text-gray-300 py-12 px-4 min-h-screen">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 capitalize">
                {industry} AI Agents
              </h2>
              {agents.length === 0 ? (
                <p className="text-center text-gray-500">
                  No agents found in this category.
                </p>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agents.slice(0, visibleAgents).map((agent) => (
                      <AgentCard key={agent._id} agent={agent} />
                    ))}
                  </div>
                  {visibleAgents < agents.length && (
                    <div className="text-center mt-12">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLoadMore}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Layout>
      </Container>
    </>
  );
};

// Server-Side Props
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;
  const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_AI_AGENT!;
  const AIRTABLE_TABLE_NAME = "Agents";
  const AIRTABLE_META_TABLE = "Metas";

  const { industries } = context.params || {};
  if (!industries) {
    return {
      notFound: true,
    };
  }

  try {
    const allAgents: Agent[] = [];
    let offset: string | undefined = undefined;

    // Fetch agents from Airtable
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

    // Filter agents by industry
    const filteredAgents = allAgents.filter(
      (agent) =>
        agent.industry?.toLowerCase() === industries.toString().toLowerCase()
    );

    // Fetch meta description for the category
    const metaResponse: { data: { records: any[] } } = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_META_TABLE}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    const metaRecord = metaResponse.data.records.find(
      (record) => record.fields.slug === industries
    );

    const meta = metaRecord ? metaRecord.fields.meta : "";

    return {
      props: {
        agents: filteredAgents,
        industry: industries.toString().replace(/-/g, " ").toLowerCase(),
        total: filteredAgents.length,
        meta,
      },
    };
  } catch (error) {
    console.error("Airtable Fetch Error:", error);
    return {
      props: {
        agents: [],
        industry: industries.toString().replace(/-/g, " ").toLowerCase(),
        total: 0,
        meta: "",
        error: "Failed to fetch data.",
      },
    };
  }
};

export default CategoryPage;
