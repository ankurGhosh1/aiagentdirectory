import AgentCard from "./AgentCard";
import { agentData } from "../data/aiagent";

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

const SimilarAgents = ({ currentAgent }: { currentAgent: Agent | null }) => {
  if (!currentAgent) {
    return null;
  }

  const similarAgents = agentData
    .filter(
      (agent) =>
        agent.category === currentAgent.category &&
        agent._id !== currentAgent._id
    )
    .slice(0, 3);

  if (similarAgents.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-white mb-6">
        Explore similar agents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {similarAgents.map((agent) => (
          <AgentCard key={agent._id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default SimilarAgents;
