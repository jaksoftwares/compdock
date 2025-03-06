"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, User, X, Search } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#ff6f00] text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          Compdock
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/products" className="hover:text-[#ffcc00] transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-[#ffcc00] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#ffcc00] transition">
            Contact
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white px-3 py-1 rounded-lg">
            <Search className="w-5 h-5 text-[#ff6f00]" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 text-black outline-none w-40 placeholder-gray-500"
            />
          </div>

          {/* Shopping Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 text-white hover:text-[#ffcc00]" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </Link>

          {/* User Account */}
          <Link href="/auth/login" className="hover:text-[#ffcc00] transition">
            <User className="w-7 h-7" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full py-5 px-6 flex flex-col space-y-4 text-[#1e1e2f]">
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
