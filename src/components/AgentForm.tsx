import React, { useState } from "react";

export default function AgentForm() {
  const [agentName, setAgentName] = useState("");
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [pricingModel, setPricingModel] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = {
      agentName,
      email,
      links,
      repoUrl,
      pricingModel,
      category,
    };

    try {
      const response = await fetch("/api/submit-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage("Agent submitted successfully!");
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 bg-dark p-8 rounded-2xl w-[700px] max-w-full`}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="agentName" className="text-sm font-bold">
          Agent Name
        </label>
        <input
          type="text"
          id="agentName"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          required
          placeholder="Enter Your Agent's Name"
          className="input text-gray-500 bg-transparent placeholder-white-500 text-sm border border-gray-500 p-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-sm font-bold">
          Contact Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="hello@example.com"
          className="input text-gray-500 bg-transparent placeholder-white-500 text-sm border border-gray-500 p-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="links" className="text-sm font-bold">
          Links
        </label>
        <input
          type="text"
          id="links"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          required
          placeholder="Website, documentation, and other related links (comma separated)"
          className="input text-gray-500 bg-transparent placeholder-white-500 text-sm border border-gray-500 p-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="repoUrl" className="text-sm font-bold">
          Repository URL
        </label>
        <input
          type="url"
          id="repoUrl"
          value={repoUrl}
          placeholder="https://github.com/yourname/yourrepo"
          onChange={(e) => setRepoUrl(e.target.value)}
          className="input text-gray-500 bg-transparent placeholder-white-500 text-sm border border-gray-500 p-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="pricingModel" className="text-sm font-bold">
          Pricing Model
        </label>
        <select
          id="pricingModel"
          value={pricingModel}
          onChange={(e) => setPricingModel(e.target.value)}
          required
          className="input text-gray-500 bg-transparent placeholder-white-500 text-sm border border-gray-500 p-3 rounded-lg"
        >
          <option value="" className="bg-dark">
            Select Pricing Model
          </option>
          <option value="Free" className="bg-dark">
            Free
          </option>
          <option value="Paid" className="bg-dark">
            Paid
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="category" className="text-sm font-bold">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="input text-gray-500 bg-transparent placeholder-white-500 text-sm border border-gray-500 p-3 rounded-lg"
        >
          <option value="" className="bg-dark ">
            Select Category
          </option>
          <option value="Technology" className="bg-dark">
            Technology
          </option>
          <option value="Human Resource" className="bg-dark">
            Human Resource
          </option>
          <option value="Marketing" className="bg-dark">
            Marketing
          </option>
          {/* Add more categories here */}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white hover:bg-gray text-black font-bold py-3 px-6  rounded-lg transition duration-300"
      >
        {loading ? "Submitting..." : "Submit Agent"}
      </button>
      {message && <div className="mt-4">{message}</div>}
    </form>
  );
}
