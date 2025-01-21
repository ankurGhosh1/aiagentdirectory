// pages/categories/[category].tsx
import { agentData } from "../../data/aiagent";
import AgentCard from "../../components/AgentCard";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

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
  const router = useRouter();
  const { industries } = router.query;
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [visibleAgents, setVisibleAgents] = useState(30);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      if (industries) {
        const filtered = agentData.filter(
          (agent) =>
            agent.industry?.toLowerCase() ===
            industries.toString().toLowerCase()
        );
        setFilteredAgents(filtered);
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

  return (
    <Container>
      <Layout>
        <Hero
          title={`Discover Your Next <br /> ${industries} Productivity Stack`}
        />
        <div className="text-gray-300 py-12 px-4 min-h-screen">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8 capitalize">
              Category: {industries}
            </h1>
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
  );
};

export default CategoryPage;
