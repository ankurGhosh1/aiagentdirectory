import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import SimilarAgents from "../../components/SimilarAgents";
import Link from "next/link";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import SEO from "@/components/SEO";
import axios from "axios";

interface Agent {
  _id: string;
  name: string;
  logo: string | null;
  shortDescription: string;
  longDescription?: string;
  keyFeatures?: string[];
  useCases?: string[];
  industry: string;
  pricingModel: string;
  access: string;
  website?: string;
  image?: string;
  video?: string;
  slug: string;
  category: string;
  keyFeatures0: string;
  keyFeatures1: string;
  keyFeatures2: string;
  keyFeatures3: string;
  keyFeatures4: string;
  keyFeatures5: string;
  keyFeatures6: string;
  useCases1: string;
  useCases2: string;
  useCases3: string;
  useCases4: string;
}

interface Props {
  agent: Agent | null;
  error?: string;
}

const AgentProfile = ({ agent }: Props) => {
  console.log(agent);
  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <React.Fragment>
      <SEO
        title={`${agent.name} - AI Agent Review & Alternatives (2025)`}
        description={`Top AI Agents ${agent.name} in ${agent.industry}`}
        url={`https://aiagentlisting.com/agents/${agent.slug}`}
        canonicalUrl={`https://aiagentlisting.com/agents/${agent.slug}`}
      />
      <Container>
        <Layout>
          <div className="text-gray-300 min-h-screen">
            <div className="py-12 px-4">
              <div className="mb-8 text-sm">
                <Link href="/" legacyBehavior>
                  <a className="text-gray-500 hover:text-white">Home</a>
                </Link>{" "}
                {">"}
                <Link
                  href={`/categories/${agent.industry.toLowerCase()}`}
                  legacyBehavior
                >
                  <a className="text-gray-500 hover:text-white ml-1 capitalize">
                    {agent.industry}
                  </a>
                </Link>{" "}
                {">"}
                <span className="text-white ml-1">{agent.name}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-dark rounded-md p-6">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <Image
                        src={agent.logo ?? ""}
                        alt={agent.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-white mb-1">
                        {agent.name}
                      </h1>
                      <p className="text-sm">{agent.shortDescription}</p>
                    </div>
                  </div>

                  {agent.image && (
                    <div className="my-8">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        width={500}
                        height={500}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  )}

                  <p className="mb-6">{agent.longDescription}</p>

                  {agent.website && (
                    <a
                      href={agent.website}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                    >
                      Visit {agent.name}
                    </a>
                  )}

                  {agent.video && (
                    <div className="mt-8">
                      <div className="relative w-full pb-[56.25%]">
                        <iframe
                          src={agent.video.replace("watch?v=", "embed/")}
                          title="YouTube video player"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  <div className="mt-8">
                    <h2 className="text-xl font-bold text-white mb-4">
                      Overview
                    </h2>
                    <p>{agent.longDescription}</p>
                  </div>

                  {agent.useCases1 && (
                    <div className="mt-8">
                      <h2 className="text-xl font-bold text-white mb-4">
                        Use Cases
                      </h2>
                      <ul className="list-disc pl-6">
                        {agent.useCases1 && <li>{agent.useCases1}</li>}
                        {agent.useCases2 && <li>{agent.useCases2}</li>}
                        {agent.useCases3 && <li>{agent.useCases3}</li>}
                        {agent.useCases4 && <li>{agent.useCases4}</li>}
                      </ul>
                    </div>
                  )}

                  {agent.keyFeatures0 && (
                    <div className="mt-8">
                      <h2 className="text-xl font-bold text-white mb-4">
                        Key Features
                      </h2>
                      <ul className="list-disc pl-6">
                        {agent.keyFeatures0 && <li>{agent.keyFeatures0}</li>}
                        {agent.keyFeatures1 && <li>{agent.keyFeatures1}</li>}
                        {agent.keyFeatures2 && <li>{agent.keyFeatures2}</li>}
                        {agent.keyFeatures3 && <li>{agent.keyFeatures3}</li>}
                        {agent.keyFeatures4 && <li>{agent.keyFeatures4}</li>}
                        {agent.keyFeatures5 && <li>{agent.keyFeatures5}</li>}
                        {agent.keyFeatures6 && <li>{agent.keyFeatures6}</li>}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-dark rounded-md p-6 mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Links</h3>
                    {agent.website && (
                      <a
                        href={agent.website}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-500 hover:underline block"
                      >
                        Website
                      </a>
                    )}
                  </div>

                  <div className="bg-dark rounded-md p-6">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Details
                    </h3>
                    <p>
                      <span className="text-gray-500 mr-2">Pricing:</span>
                      <span
                        className={`font-medium ${
                          agent.pricingModel === "Free"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {agent.pricingModel}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-500 mr-2">Source:</span>
                      <span className="text-red-500">{agent.access}</span>
                    </p>
                  </div>
                </div>
              </div>
              <SimilarAgents currentAgent={agent} />
            </div>
          </div>
        </Layout>
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

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

    // Use filter and retrieve the first matching agent
    const filteredAgents = allAgents.filter((agent) => agent.slug === slug);

    const agent = filteredAgents[0] || null;

    if (!agent) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        agent,
      },
    };
  } catch (error) {
    console.error("Airtable Fetch Error:", error);
    return {
      props: {
        agent: null,
      },
    };
  }
};

export default AgentProfile;
