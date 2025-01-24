import React, { useState } from "react";
import Link from "next/link";
import Container from "./Container";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <header className="flex flex-col md:flex-row justify-between items-center p-4 text-white relative">
        <div className="md:hidden flex justify-between items-center w-full">
          <img src="/logo.png" className="h-12 w-12" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex flex-col gap-4 items-start justify-start" : "hidden"
          } md:flex gap-4 mb-4 md:mb-0 w-full md:w-auto`}
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/categories" className="hover:underline">
            Categories
          </Link>
          <Link
            className="md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded decoration-none"
            href="/contact"
          >
            Submit a new listing
          </Link>
        </nav>
        <img src="/logo.png" className="hidden md:block h-12 w-12" />
        <Link
          className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded decoration-none"
          href="/contact"
        >
          Submit a new listing
        </Link>
      </header>
    </Container>
  );
}

export default Header;
