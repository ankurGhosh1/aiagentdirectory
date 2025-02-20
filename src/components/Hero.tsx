import React, { useState } from "react";
import Categories from "./Categories";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  badgeTitle?: string;
  desc?: string;
}

function Hero({ title, badgeTitle, desc }: HeroProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const splitTitle = title.split("<br />");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! 🎉");
        setEmail(""); // Clear input
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="text-white py-16">
      <div className="px-4 text-center mb-16">
        {/* New AI Agents Badge */}
        <div className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full inline-block mb-8">
          {badgeTitle || `AI AGENT LISTING`}
        </div>

        {/* Dynamic Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !leading-tight">
          {splitTitle.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < splitTitle.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* Sub Heading/Description */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {desc
            ? desc
            : `Browse our elite collection of AI agents and build your digital
          workforce in minutes, not months.`}
        </p>

        <Link
          href="https://www.producthunt.com/posts/ai-agent-listing?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;agent&#0045;listing"
          target="_blank"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=816515&theme=light&t=1737735525133"
            alt="AI&#0032;Agent&#0032;Listing - The&#0032;AI&#0032;Finder | Product Hunt"
            width={250}
            height={54}
            className="w-[250px] h-[54px] mx-auto mb-8"
          />
        </Link>
        {/* Email Subscription Form */}
        <form
          className="max-w-md mx-auto flex items-center flex-col md:flex-row gap-4"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 w-full md:w-auto text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-white hover:bg-white-500 text-black font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 w-full md:w-auto flex-1"
          >
            Subscribe
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p
            className={`text-sm mt-4 ${
              typeof message === "string" &&
              message.startsWith("Subscription successful")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Join Community Text */}
        <p className="text-sm mt-6 text-gray-400">
          Join 1000+ AI agents enthusiasts
        </p>
      </div>

      {/* Categories Component */}
      <Categories />
    </section>
  );
}

export default Hero;
