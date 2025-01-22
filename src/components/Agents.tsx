// components/Agents.tsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

interface AgentsProps {
  agents: Agent[];
}

const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <Link href={`/agents/${agent.slug}`} key={agent._id}>
      <div className="bg-dark hover:bg-[#111] rounded-md shadow-md overflow-hidden flex flex-col p-1 border border-gray-500 h-full">
        <div className="h-24 w-24 p-4">
          <Image
            src={agent.logo ?? "/default-logo.png"} // Fallback to default logo
            alt={agent.name}
            className="w-full rounded-full"
            width={48}
            height={48}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-medium text-white">{agent.name}</h3>
          <p className="text-gray-400 text-sm mt-1 flex-grow">
            {agent.shortDescription}
          </p>
          <div className="mt-3 text-sm">
            <span className="text-gray-400 mr-1">
              Access: {agent.access} | Pricing:
            </span>
            <span
              className={`font-medium ${
                agent.pricingModel === "Free"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {agent.pricingModel}
            </span>
            <div className="mt-3">
              <span className="text-gray-400 mr-1">Category:</span>
              <span className="font-medium text-white">{agent.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Agents = ({ agents }: AgentsProps) => {
  const [visibleAgents, setVisibleAgents] = useState(21);

  const handleLoadMore = () => {
    setVisibleAgents((prevVisibleAgents) =>
      Math.min(prevVisibleAgents + 21, agents.length)
    );
  };

  const displayedAgents = agents.slice(0, visibleAgents);

  return (
    <div className="py-24">
      <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedAgents.map((agent) => (
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
  );
};

export default Agents;
