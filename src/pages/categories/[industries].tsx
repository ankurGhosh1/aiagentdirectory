// pages/categories/[category].tsx
import React from "react";
import { agentData } from "../../data/aiagent";
import AgentCard from "../../components/AgentCard";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
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
}

const CategoryPage = () => {
  const industryMetaData = [
    {
      industry: "technology",
      metaTitle: "Explore AI Technology Tools",
      metaDescription:
        "Simplify development, enhance efficiency, and streamline workflows with AI solutions built for innovators and tech leaders.",
    },
    {
      industry: "marketing",
      metaTitle: "Explore AI Marketing Tools",
      metaDescription:
        "Discover the best AI agents tailored to elevate your marketing efforts. From personalized customer experiences to automated campaigns, these AI tools help you optimize reach, improve engagement, and drive conversions effortlessly.",
    },
    {
      industry: "sales",
      metaTitle: "Explore AI Sales Tools",
      metaDescription:
        " Explore the top AI agents designed to boost your sales performance. Automate lead generation, improve customer interactions, and close deals faster with smart sales tools built for success.",
    },
    {
      industry: "entertainment",
      metaTitle: "Explore AI Entertainment Tools",
      metaDescription:
        "Explore the top AI agents transforming the entertainment industry. From personalized content recommendations to immersive experiences, these tools redefine how audiences engage with entertainment.",
    },
    {
      industry: "travel-hospitality",
      metaTitle: "Explore AI Travel & Hospitality Tools",
      metaDescription:
        "Discover AI agents tailored for the travel industry. Optimize trip planning, provide personalized itineraries, and improve customer satisfaction with AI tools built for travel experts",
    },
    {
      industry: "real-estate",
      metaTitle: "Explore AI Real Estate Tools",
      metaDescription:
        "Find the best AI agents for the real estate sector. From property matching to customer management, these tools streamline operations and enhance client experiences.",
    },
    {
      industry: "e-commerce",
      metaTitle: "Explore AI E-Commerce Tools",
      metaDescription:
        "Unlock the potential of AI agents for your e-commerce platform. Enhance product recommendations, streamline inventory management, and drive personalized shopping experiences with AI.",
    },
    {
      industry: "finance",
      metaTitle: "Explore AI Finance Tools",
      metaDescription:
        "Explore top AI agents tailored for the finance industry. Improve risk management, automate transactions, and deliver insightful analytics to enhance financial operations and customer satisfaction.",
    },
    {
      industry: "manufacturing",
      metaTitle: "Explore AI Manufacturing Tools",
      metaDescription:
        "Discover AI agents built for manufacturing excellence. Streamline production, improve quality control, and optimize supply chains with cutting-edge AI solutions.",
    },
    {
      industry: "Legal",
      metaTitle: "Explore AI Legal Tools",
      metaDescription:
        "Explore AI agents designed to support legal professionals. From contract analysis to case research, these tools enhance efficiency, accuracy, and client service.",
    },
    {
      industry: "education",
      metaTitle: "Explore AI Education Tools",
      metaDescription:
        "Discover AI agents revolutionizing education. Personalize learning experiences, streamline administrative tasks, and engage students with intelligent education tools.",
    },
    {
      industry: "human-resource",
      metaTitle: "Explore AI Human Resource Tools",
      metaDescription:
        "Discover AI agents revolutionizing HR. Automate talent acquisition, personalize employee experiences, and empower HR teams with intelligent tools.",
    },
    {
      industry: "energy-utilities",
      metaTitle: "Explore AI Energy Utilities Tools",
      metaDescription:
        "Discover AI solutions revolutionizing energy and utilities. Optimize grid management, predict equipment failure, and empower customers with intelligent energy tools.",
    },
  ];

  const router = useRouter();
  const { industries } = router.query;
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [visibleAgents, setVisibleAgents] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      if (industries) {
        const filtered = agentData.filter(
          (agent) =>
            agent.industry?.toLowerCase() ===
            industries.toString().toLowerCase()
        );
        setFilteredAgents(filtered);
        setTotal(filtered.length);
      }
      setIsLoading(false);
    }
  }, [router.isReady, industries]);

  const displayedAgents = filteredAgents.slice(0, visibleAgents); // Agents to display

  const handleLoadMore = () => {
    setVisibleAgents(
      (prevVisibleAgents) =>
        Math.min(prevVisibleAgents + 8, filteredAgents.length) // Load 8 more
    );
  };

  if (isLoading) {
    return <div className="text-center mt-8 text-white">Loading...</div>;
  }

  if (!industries) {
    return (
      <div className="text-center mt-8 text-white">Category not found</div>
    );
  }

  const industryMeta = industryMetaData.find(
    (meta) =>
      meta.industry.toLowerCase() === industries.toString().toLowerCase()
  );

  return (
    <React.Fragment>
      <SEO
        title={`Top ${total} AI Agents in ${industries
          .toString()
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}`}
        description={
          industryMeta
            ? industryMeta.metaDescription
            : "Explore top AI agents in various industries."
        }
        url={`https://aiagentlisting.com/categories/${industries}`}
        canonicalUrl={`https://aiagentlisting.com/categories/${industries}`}
      />
      <Container>
        <Layout>
          <Hero
            title={`Top ${total} AI Agents in <br /> ${industries
              .toString()
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} Productivity Stack`}
            badgeTitle={`${industries
              .toString()
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")} AI Agents`}
          />
          <div className="text-gray-300 py-12 px-4 min-h-screen">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 capitalize">
                {industries.toString().split("-").join(" ")} AI Agents
              </h2>
              {filteredAgents.length === 0 ? (
                <p className="text-center text-gray-500">
                  No agents found in this category.
                </p>
              ) : (
                <div>
                  {" "}
                  {/* Added a wrapping div */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayedAgents.map((agent) => (
                      <AgentCard key={agent._id} agent={agent} />
                    ))}
                  </div>
                  {visibleAgents < filteredAgents.length && (
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
    </React.Fragment>
  );
};

export default CategoryPage;
