"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, User, X, Search } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = 3; // Replace with dynamic state/store integration

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#ff6f00] text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide uppercase">
          Compdock
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "hover:text-[#ffcc00] transition font-medium",
                pathname === link.href && "underline underline-offset-8 text-[#ffcc00]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-white px-3 py-1 rounded-full focus-within:ring-2 focus-within:ring-[#ffcc00] transition"
          >
            <Search className="w-5 h-5 text-[#ff6f00]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="ml-2 w-40 bg-transparent text-black outline-none placeholder-gray-500"
              aria-label="Search products"
            />
          </form>

          {/* Cart Icon */}
          <Link href="/cart" className="relative" aria-label="Cart">
            <ShoppingCart className="w-7 h-7 hover:text-[#ffcc00]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          <Link href="/auth/login" className="hover:text-[#ffcc00]" aria-label="Login">
            <User className="w-7 h-7" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-[#1e1e2f] shadow-xl">
          <nav className="px-6 py-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "text-lg font-medium hover:text-[#ff6f00]",
                  pathname === link.href && "text-[#ff6f00] underline underline-offset-4"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>

            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="mt-4 flex items-center bg-gray-100 px-3 py-2 rounded-full"
            >
              <Search className="w-5 h-5 text-[#ff6f00]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="ml-2 flex-1 bg-transparent outline-none placeholder-gray-500 text-black"
              />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
