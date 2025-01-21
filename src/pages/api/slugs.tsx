// pages/api/slugs.ts

import { NextApiRequest, NextApiResponse } from "next";
import { agentData } from "../../data/aiagent"; // adjust the path accordingly

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Extract both slugs and industries
  const paths = agentData.map((agent) => ({
    slug: agent.slug,
    industry: agent.industry,
  }));

  // Return both slug and industry
  res.status(200).json(paths);
}
