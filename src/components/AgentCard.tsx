import Link from "next/link";
import Image from "next/image";

interface Agent {
  _id: string;
  logo: string | null;
  name: string;
  shortDescription: string;
  pricingModel: string;
  category: string;
  slug: string;
  website?: string;
  longDescription?: string;
  keyFeatures?: string[];
}

const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <Link href={`/agents/${agent.slug}`} key={agent._id} className="block">
      <div className="bg-dark rounded-md p-4 hover:bg-[#111] transition duration-200 h-full flex flex-col border border-gray-700">
        {agent.logo && (
          <div className="h-12 w-12  mb-4 relative">
            <Image
              src={agent.logo}
              alt={agent.name}
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
              className="rounded-full"
            />
          </div>
        )}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-medium text-white mb-2">{agent.name}</h3>
          <p className="text-gray-400 text-sm flex-grow py-3">
            {agent.shortDescription}
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-400">{agent.category}</span>
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
      </div>
    </Link>
  );
};

export default AgentCard;
