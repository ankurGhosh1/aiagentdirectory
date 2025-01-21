import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr_1fr] gap-8">
        {/* AI Agents List Section */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2">AI Agents List</h4>
          <p className="text-sm">
            Discover the best AI agents from across the internet.
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Categories</h4>
          <ul className="text-sm space-y-2 columns-2">
            <li>Coding</li>
            <li>AI Agent Builders</li>
            <li>Productivity</li>
            <li>Personal Assistant</li>
            <li>General Purpose</li>
            <li>Content Creation</li>
            <li>Research</li>
            <li>Digital Workers</li>
            <li>Business Intelligence</li>
            <li>Sales</li>
            <li>Marketing</li>
            <li>Finance</li>
            <li>Design</li>
            <li>Data Analysis</li>
            <li>Customer Service</li>
            <li>Science</li>
            <li>HR</li>
            <li>Other</li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Navigation</h4>
          <ul className="text-sm space-y-1">
            <li>Submit an agent</li>
            <li>Blog</li>
            <li>All categories</li>
            <li>About</li>
          </ul>
        </div>

        {/* Collaboration Section */}
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Collaboration</h4>
          <ul className="text-sm space-y-1">
            <li>hello@aiagentslist.com</li>
            <li className="font-bold mt-2 text-white">See also</li>
            <li>Sprunki Mod</li>
            <li>AI Tool Trek</li>
            <li>AIStage</li>
            <li>AI Toolz Dir</li>
            <li>Free AI Tools Directory</li>
            <li>Startup Fame</li>
          </ul>
        </div>
      </div>

      {/* Copyright and X Section */}
      <div className="container mx-auto mt-12 flex justify-between items-center text-sm">
        <p>© 2025 AI Agents List. All rights reserved.</p>
        <p>X</p> {/* Or an actual X icon/component */}
      </div>
    </footer>
  );
};

export default Footer;
