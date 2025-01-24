// components/Agents.tsx
import React, { useState } from "react";
import axios from "axios";
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
  initialAgents: Agent[];
  initialOffset: string | null;
}

const Agents = ({ initialAgents, initialOffset }: AgentsProps) => {
  const [agents, setAgents] = useState(initialAgents);
  const [offset, setOffset] = useState(initialOffset);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (!offset) return; // Exit if there's no offset

    setLoading(true);

    try {
      const response = await axios.get(`/api/agents`, {
        params: { offset, limit: 30 },
      });

      const { records, offset: newOffset } = response.data;

      setAgents((prev) => [...prev, ...records]);
      setOffset(newOffset || null); // Set to null if no more pages
    } catch (error) {
      console.error("Error loading more agents:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 ">
      <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.length === 0 ? (
          <p className="text-center text-gray-400">No agents to display.</p>
        ) : (
          agents.map((agent) => (
            <Link href={`/agents/${agent.slug}`} key={agent._id}>
              <div className="bg-dark hover:bg-[#111] rounded-md shadow-md overflow-hidden flex flex-col p-1 border border-gray-500 h-full">
                <div className="h-20 w-20 p-4">
                  <Image
                    src={agent.logo ?? "/logo.png"}
                    alt={agent.name}
                    className="w-full rounded-full"
                    width={48}
                    height={48}
                    onError={(e) => {
                      e.currentTarget.src = "/logo.png";
                    }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-white">
                    {agent.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 flex-grow">
                    {agent.shortDescription}
                  </p>
                </div>
                <div className="flex justify-between items-center p-4 border-t border-gray-500">
                  <span className="text-sm text-gray-400">
                    {agent.category}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      agent.pricingModel === "Free"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {agent.pricingModel}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      {offset && (
        <div className="text-center mt-12">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Agents;
