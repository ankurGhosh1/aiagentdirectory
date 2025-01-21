import React from "react";
import Categories from "./Categories";
interface HeroProps {
  title: string;
}

function Hero({ title }: HeroProps) {
  // Using function declaration
  const splitTitle = title.split("<br />");

  return (
    <section className="text-white py-16">
      <div className="px-4 text-center mb-16">
        {/* New AI Agents Badge */}
        <div className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full inline-block mb-8">
          🔥 38 new AI agents added last week
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
          Browse our elite collection of AI agents and build your digital
          workforce in minutes, not months.
        </p>

        {/* Email Subscription Form */}
        <div className="max-w-md mx-auto flex items-center flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 w-full md:w-auto text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-white hover:bg-white-500 text-black font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 w-full md:w-auto flex-1">
            Subscribe
          </button>
        </div>

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
