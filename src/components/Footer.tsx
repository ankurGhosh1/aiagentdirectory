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
            <h4 className="text-white font-bold text-lg mb-2">
              AI Agents List
            </h4>
            <p className="text-sm">
              Discover the best AI agents from across the internet.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-2">Categories</h4>
            <ul className="text-sm space-y-2 columns-2">
              <li>
                <Link href="/technology">Technology</Link>
              </li>
              <li>
                <Link href="/human-resource">Human Resource</Link>
              </li>
              <li>
                <Link href="/marketing">Marketing</Link>
              </li>
              <li>
                <Link href="/e-commerce">E-Commerce</Link>
              </li>
              <li>
                <Link href="/healthcare">Healthcare</Link>
              </li>
              <li>
                <Link href="/education">Education</Link>
              </li>
              <li>
                <Link href="/travel-hospitality">Travel & Hospitality</Link>
              </li>
              <li>
                <Link href="/real-estate">Real Estate</Link>
              </li>
              <li>
                <Link href="/sales"></Link>
              </li>
              <li>
                <Link href="/marketing">Marketing</Link>
              </li>
              <li>
                <Link href="/finance">Finance</Link>
              </li>
              <li>
                <Link href="/manufaturing">Manufaturing</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
              <li>
                <Link href="/horizontal">Horizontal</Link>
              </li>
              <li>
                <Link href="/vertical">Vertical</Link>
              </li>
              <li>
                <Link href="/energy-utilities">Energy & Utilities</Link>
              </li>
              <li>
                <Link href="/others">Others</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-2">Navigation</h4>
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
            <h4 className="text-white font-bold text-lg mb-2">Collaboration</h4>
            <ul className="text-sm space-y-1">
              <li>hello@aiagentslist.com</li>
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
          <p>X</p> {/* Or an actual X icon/component */}
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
