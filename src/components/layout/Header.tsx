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
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/95 backdrop-blur relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 md:py-3 gap-2">
          {/* Left: Menu toggle + Logo */}
          <div className="flex items-center gap-2">
            {/* Menu Toggle (all breakpoints) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 text-xl md:text-2xl font-extrabold tracking-wide uppercase text-[#ff6f00]"
            >
              <span>Compdock</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-4 items-center bg-white px-3 py-1.5 rounded-full border border-orange-200 shadow-sm focus-within:ring-2 focus-within:ring-[#ffcc00] focus-within:border-[#ffcc00] transition"
          >
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands and categories"
              className="ml-2 flex-grow bg-transparent text-sm text-gray-900 outline-none placeholder-gray-500"
              aria-label="Search"
            />
            <button
              type="submit"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-[#ff6f00] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#e65c00] transition"
            >
              Search
            </button>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Account with dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountDropdown(!accountDropdown)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#ff6f00] focus:outline-none"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline text-xs font-medium uppercase tracking-wide">Account</span>
              </button>

              {accountDropdown && (
                <div className="absolute right-0 mt-2 w-52 bg-white text-gray-900 rounded-lg shadow-lg z-50 py-2 border border-gray-100">
                  <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Link>
                  <Link href="/account" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50">
                    <User className="w-4 h-4" />
                    My Account
                  </Link>
                  <Link href="/orders" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50">
                    <ListOrdered className="w-4 h-4" />
                    Orders
                  </Link>
                  <Link href="/wishlist" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50">
                    <Heart className="w-4 h-4" />
                    Wishlist
                  </Link>
                </div>
              )}
            </div>

            {/* Help Center Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setHelpDropdown(!helpDropdown)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#ff6f00] focus:outline-none text-xs font-medium uppercase tracking-wide"
                aria-label="Help Center"
              >
                <HelpCircle className="w-4 h-4" />
                <span className="hidden md:inline">Help</span>
              </button>

              {helpDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-900 rounded-lg shadow-lg z-50 py-2 border border-gray-100">
                  <Link href="/help/place-order" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Place your Order
                  </Link>
                  <Link href="/help/payment-options" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Payment Options
                  </Link>
                  <Link href="/help/delivery-tracking" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Delivery Timelines &amp; Track your Order
                  </Link>
                  <Link href="/help/returns-refunds" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Returns &amp; Refunds
                  </Link>
                  <Link href="/help/warranty" className="block px-4 py-2 text-sm hover:bg-gray-50">
                    Warranty
                  </Link>
                  <div className="px-4 py-2">
                    <button className="w-full bg-[#ff6f00] text-white py-2 rounded-md text-sm font-semibold hover:bg-[#e65c00] transition">
                      Live Chat
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-1 text-gray-700 hover:text-[#ff6f00]"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                  {cartCount}
                </span>
              )}
              <span className="hidden md:inline text-xs font-medium uppercase tracking-wide">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Collapsed Navigation Menu (overlays content, does not push it down) */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-white text-[#1e1e2f] shadow-xl border-t border-gray-100">
          <nav className="px-6 py-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Shop column */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Shop</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/categories"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/categories" && "text-[#ff6f00]"
                      )}
                    >
                      Categories
                    </Link>
                    <p className="text-xs text-gray-500">Browse all IT & tech categories.</p>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/products" && "text-[#ff6f00]"
                      )}
                    >
                      Products
                    </Link>
                    <p className="text-xs text-gray-500">See the full CompDock catalog.</p>
                  </li>
                  <li>
                    <Link
                      href="/deals"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/deals" && "text-[#ff6f00]"
                      )}
                    >
                      Deals & Offers
                    </Link>
                    <p className="text-xs text-gray-500">Discounts and limited-time offers.</p>
                  </li>
                </ul>
              </div>

              {/* Vendors column */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Vendors</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/account/shops"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/account/shops" && "text-[#ff6f00]"
                      )}
                    >
                      My Shops
                    </Link>
                    <p className="text-xs text-gray-500">Stores and vendors you interact with.</p>
                  </li>
                  <li>
                    <Link
                      href="/vendor/register"
                      onClick={() => setMenuOpen(false)}
                      className="font-medium hover:text-[#ff6f00]"
                    >
                      Become a Vendor
                    </Link>
                    <p className="text-xs text-gray-500">Open your shop and start selling on CompDock.</p>
                  </li>
                  <li>
                    <Link
                      href="/epay"
                      onClick={() => setMenuOpen(false)}
                      className="font-medium hover:text-[#ff6f00]"
                    >
                      CompDock ePay
                    </Link>
                    <p className="text-xs text-gray-500">Secure payments for buyers and sellers.</p>
                  </li>
                </ul>
              </div>

              {/* Support column */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/help/place-order"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/help/place-order" && "text-[#ff6f00]"
                      )}
                    >
                      Help Center
                    </Link>
                    <p className="text-xs text-gray-500">How to order, pay, and track deliveries.</p>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/contact" && "text-[#ff6f00]"
                      )}
                    >
                      Contact Us
                    </Link>
                    <p className="text-xs text-gray-500">Get in touch with the CompDock team.</p>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "font-medium hover:text-[#ff6f00]",
                        pathname === "/about" && "text-[#ff6f00]"
                      )}
                    >
                      About CompDock
                    </Link>
                    <p className="text-xs text-gray-500">Learn more about our marketplace.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-2">
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#ff6f00]"
              >
                Sign In to your account
              </Link>

              <form
                onSubmit={handleSearch}
                className="flex items-center bg-gray-100 px-4 py-2 rounded-full"
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
