import React from "react";
import Link from "next/link";
import Container from "./Container";
const Footer = () => {
  return (
    <Container>
      <footer className=" text-gray-400 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr_1fr] gap-8">
          {/* AI Agents List Section */}
          <div>
            <p className="text-white font-bold text-lg mb-2">AI Agents List</p>
            <p className="text-sm">
              Discover the best AI agents from across the internet.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <p className="text-white font-bold text-lg mb-2">Categories</p>
            <ul className="text-sm space-y-2 columns-2">
              <li>
                <Link href="/categories/technology">Technology</Link>
              </li>
              <li>
                <Link href="/categories/human-resources">Human Resource</Link>
              </li>
              <li>
                <Link href="/categories/marketing">Marketing</Link>
              </li>
              <li>
                <Link href="/categories/e-commerce">E-Commerce</Link>
              </li>
              <li>
                <Link href="/categories/healthcare">Healthcare</Link>
              </li>
              <li>
                <Link href="/categories/education">Education</Link>
              </li>
              <li>
                <Link href="/categories/travel-hospitality">
                  Travel & Hospitality
                </Link>
              </li>
              <li>
                <Link href="/categories/real-estate">Real Estate</Link>
              </li>
              <li>
                <Link href="/categories/sales">Sales</Link>
              </li>
              <li>
                <Link href="/categories/marketing">Marketing</Link>
              </li>
              <li>
                <Link href="/categories/finance">Finance</Link>
              </li>
              <li>
                <Link href="/categories/manufacturing">Manufaturing</Link>
              </li>
              <li>
                <Link href="/categories/legal">Legal</Link>
              </li>
              <li>
                <Link href="/categories/horizontal">Horizontal</Link>
              </li>
              <li>
                <Link href="/categories/vertical">Vertical</Link>
              </li>
              <li>
                <Link href="/categories/energy-utilities">
                  Energy & Utilities
                </Link>
              </li>
              <li>
                <Link href="/categories/other">Others</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <p className="text-white font-bold text-lg mb-2">Navigation</p>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="/">All Agents</Link>
              </li>
              <li>
                <Link href="/contact">Submit An Agent</Link>
              </li>
              <li>
                <Link href="/categories">All Categories</Link>
              </li>
            </ul>
          </div>

          {/* Collaboration Section */}
          <div>
            <p className="text-white font-bold text-lg mb-2">Collaboration</p>
            <ul className="text-sm space-y-1">
              <li>aiagentlisting@gmail.com</li>
              {/* <li className="font-bold mt-2 text-white">See also</li>
              <li>Sprunki Mod</li>
              <li>AI Tool Trek</li>
              <li>AIStage</li>
              <li>AI Toolz Dir</li>
              <li>Free AI Tools Directory</li>
              <li>Startup Fame</li> */}
            </ul>
          </div>
        </div>

        {/* Copyright and X Section */}
        <div className="container mx-auto mt-12 flex justify-between items-center text-sm">
          <p>© 2025 AI Agents List. All rights reserved.</p>
          <Link href="https://x.com/aiagentlisting" target="_blank">
            X
          </Link>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
