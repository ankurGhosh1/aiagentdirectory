import React from "react";
import { useRouter } from "next/router";
import { agentData } from "../../data/aiagent";
import Image from "next/image";
import SimilarAgents from "../../components/SimilarAgents";
import Link from "next/link";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import SEO from "@/components/SEO";

const AgentProfile = () => {
  const router = useRouter();
  const { slug } = router.query;
  const agent = agentData.find((agent) => agent.slug === slug);

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <React.Fragment>
      <SEO
        title={`AI Agents ${agent.name} in ${agent.industry}`}
        description={`Top AI Agents in ${agent.name} in ${agent.industry}`}
        url={`https://aiagentlisting.com/agents/${slug}`}
      />
      <Container>
        <Layout>
          <div className="text-gray-300 min-h-screen">
            <div className="py-12 px-4">
              {/* Breadcrumbs */}
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
                {/* Main Content (2/3) */}
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
                  {agent.image &&
                    agent.image.length > 0 && ( //////////for Image
                      <div className="my-8">
                        <Image
                          src={agent.image}
                          alt={`${agent.imageFileName}`}
                          width={500}
                          height={500}
                          layout="responsive"
                          objectFit="cover"
                        />
                      </div>
                    )}
                  <p className="mb-6">{agent.longDescription}</p>

                  {/* Visit Website Button */}
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

                  {agent.video && agent.video.length > 0 && (
                    <div className="mt-8">
                      <div className="relative w-full pb-[56.25%]">
                        {" "}
                        {/* 16:9 Aspect Ratio */}
                        <iframe
                          src={agent.video.replace("watch?v=", "embed/")} // Convert YouTube link to embed format
                          title="YouTube video player"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {/* Overview Section */}
                  <div className="mt-8">
                    <h2 className="text-xl font-bold text-white mb-4">
                      Overview
                    </h2>
                    <p>{agent.longDescription}</p>{" "}
                    {/* Reusing long description for overview */}
                  </div>

                  {agent.keyFeatures && agent.keyFeatures.length > 0 && (
                    <div className="mt-8">
                      <h2 className="text-xl font-bold text-white mb-4">
                        Key Features
                      </h2>
                      <ul className="list-disc pl-6">
                        {agent.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {agent.useCases && agent.useCases.length > 0 && (
                    <div className="mt-8">
                      <h2 className="text-xl font-bold text-white mb-4">
                        Use Cases
                      </h2>
                      <ul className="list-disc pl-6">
                        {agent.useCases.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Sidebar (1/3) */}
                <div className="lg:col-span-1">
                  {/* Links */}
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

                  {/* Details */}
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

export default AgentProfile;
