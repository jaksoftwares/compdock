"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  ShoppingCart,
  User,
  X,
  Search,
  Heart,
  ListOrdered,
  LogIn,
  HelpCircle,
} from "lucide-react";
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
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);
  const cartCount = 3; // Replace with actual cart count logic

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#ff6f00] text-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide uppercase">
          Compdock
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
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
            className="hidden md:flex items-center bg-white px-4 py-1 rounded-full focus-within:ring-2 focus-within:ring-[#ffcc00] transition w-96"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands and categories"
              className="flex-grow bg-transparent text-black outline-none placeholder-gray-500"
              aria-label="Search"
            />
            <button type="submit" className="ml-2 text-[#ff6f00] hover:text-[#e65c00]">
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* Account with dropdown */}
          <div className="relative">
            <button
              onClick={() => setAccountDropdown(!accountDropdown)}
              className="flex items-center gap-1 hover:text-[#ffcc00] focus:outline-none"
              aria-label="Account"
            >
              <User className="w-6 h-6" />
              <span className="hidden md:inline text-sm font-medium">Account</span>
            </button>

            {accountDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 py-2">
                <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
                <Link href="/account" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <User className="w-4 h-4" />
                  My Account
                </Link>
                <Link href="/orders" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <ListOrdered className="w-4 h-4" />
                  Orders
                </Link>
                <Link href="/wishlist" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative flex items-center gap-1 hover:text-[#ffcc00]" aria-label="Cart">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">
                {cartCount}
              </span>
            )}
            <span className="hidden md:inline text-sm font-medium">Cart</span>
          </Link>
          {/* Help Center Dropdown */}
          <div className="relative">
            <button
              onClick={() => setHelpDropdown(!helpDropdown)}
              className="flex items-center gap-1 hover:text-[#ffcc00] focus:outline-none"
              aria-label="Help Center"
            >
              <HelpCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Help Center</span>
            </button>

            {helpDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-50 py-2">
                <Link href="/help/place-order" className="block px-4 py-2 hover:bg-gray-100">
                  Place your Order
                </Link>
                <Link href="/help/payment-options" className="block px-4 py-2 hover:bg-gray-100">
                  Payment Options
                </Link>
                <Link href="/help/delivery-tracking" className="block px-4 py-2 hover:bg-gray-100">
                  Delivery Timelines & Track your Order
                </Link>
                <Link href="/help/returns-refunds" className="block px-4 py-2 hover:bg-gray-100">
                  Returns & Refunds
                </Link>
                <Link href="/help/warranty" className="block px-4 py-2 hover:bg-gray-100">
                  Warranty
                </Link>
                <div className="px-4 py-2">
                  <button className="w-full bg-[#ff6f00] text-white py-2 rounded-md hover:bg-[#e65c00] transition">
                    Live Chat
                  </button>
                </div>
              </div>
            )}
          </div>

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
              Sign In
            </Link>
            <form
              onSubmit={handleSearch}
              className="mt-4 flex items-center bg-gray-100 px-4 py-2 rounded-full"
            >
              <Search className="w-5 h-5 text-[#ff6f00]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands and categories"
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
