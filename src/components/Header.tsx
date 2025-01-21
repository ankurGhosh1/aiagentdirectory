import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 text-white">
      <nav className="flex gap-4 mb-4 md:mb-0">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/categories" className="hover:underline">
          Categories
        </Link>
      </nav>
      <div className="flex-1 text-center text-2xl font-bold mb-4 md:mb-0">
        Logo
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit a new listing
      </button>
    </header>
  );
}

export default Header;
