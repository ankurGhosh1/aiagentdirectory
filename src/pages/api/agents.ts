import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
  const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_AI_AGENT;
  const AIRTABLE_TABLE_NAME = "Agents";

  const { offset = "", limit = 30 } = req.query;

  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
        params: {
          offset,
          pageSize: limit, // Airtable's page size
        },
      }
    );

    const { records, offset: newOffset } = response.data;

    // Format records to match the Agent interface
    const formattedRecords = records.map((record: any) => ({
      _id: record.id,
      logo: record.fields.logo ?? null,
      name: record.fields.name,
      shortDescription: record.fields.shortDescription ?? "",
      access: record.fields.access ?? "",
      pricingModel: record.fields.pricingModel ?? "",
      category: record.fields.category ?? "",
      slug: record.fields.slug,
    }));

    res
      .status(200)
      .json({ records: formattedRecords, offset: newOffset || null });
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    res.status(500).json({ error: "Failed to fetch data from Airtable." });
  }
}
