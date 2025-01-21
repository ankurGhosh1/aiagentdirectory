// pages/categories/index.js (or .tsx if using TypeScript)
import { agentData } from "../../data/aiagent";
import AgentCard from "../../components/AgentCard";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

const CategoriesPage = () => {
  // Get unique categories
  const uniqueCategories = [
    ...new Set(agentData.map((agent) => agent.industry).filter(Boolean)),
  ];

  return (
    <Container>
      <Layout>
        <Hero title={`Discover Your Next <br /> AI Productivity Stack`} />
        <div className="text-gray-300 py-12 min-h-screen">
          <h1 className="text-3xl font-bold text-white mb-8">All Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueCategories.map((industry) => (
              <div key={industry} className="bg-dark rounded-md p-6">
                {" "}
                {/* Category card */}
                <h2 className="text-xl font-bold text-white mb-4 capitalize">
                  {industry}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agentData
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
  );
};

export default CategoriesPage;
