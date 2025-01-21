import axios from "axios";

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID; // Make sure to use server-side env vars
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_AI_AGENT; // Use the server-side API key
const AIRTABLE_TABLE_NAME = "Emails";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email address" });
    }

    try {
      // Send the email to the Airtable table
      const response = await axios.post(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          fields: {
            Email: email, // Assuming the Airtable column name is "Email"
          },
        },
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Return a success response
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
