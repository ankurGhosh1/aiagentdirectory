import axios from "axios";

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID; // Get the base ID from .env.local
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_AI_AGENT; // Get the API key from .env.local
const AIRTABLE_TABLE_NAME = "Contact";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { agentName, email, links, repoUrl, pricingModel, category } =
      req.body;

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          fields: {
            agentName: agentName,
            email: email,
            links: links,
            repoUrl: repoUrl,
            pricingModel: pricingModel,
            category: category,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error(
        "Airtable API Error:",
        error.response?.data || error.message
      );
      return res
        .status(500)
        .json({ success: false, error: error.response?.data || error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
