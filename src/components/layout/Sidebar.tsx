"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Sliders, X } from "lucide-react";

const categories: string[] = ["Laptops", "Keyboards", "Mice", "Monitors", "Storage", "Processors"];

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button 
        className="md:hidden bg-[#ff6f00] text-white px-4 py-2 rounded-lg flex items-center"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Sliders className="w-5 h-5 mr-2" />
        Filters
      </button>

      {/* Sidebar Container */}
      <aside
        className={`bg-[#1e1e2f] text-white p-5 w-64 md:w-72 fixed top-16 left-0 h-full overflow-y-auto transition-transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <button className="md:hidden text-white mb-4" onClick={() => setMobileOpen(false)}>
          <X className="w-6 h-6" />
        </button>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffcc00]">Categories</h3>
          <ul className="mt-3 space-y-2">
            {categories.map((category) => (
              <li key={category} className="border-b border-gray-600 pb-2">
                <button
                  className="flex justify-between w-full text-left hover:text-[#ff6f00]"
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                >
                  {category}
                  {selectedCategory === category ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {selectedCategory === category && (
                  <ul className="mt-2 ml-4 text-gray-300 space-y-1">
                    <li><Link href={`/products/${category.toLowerCase()}`}>All {category}</Link></li>
                    <li><Link href={`/products/${category.toLowerCase()}?filter=latest`}>Latest</Link></li>
                    <li><Link href={`/products/${category.toLowerCase()}?filter=popular`}>Popular</Link></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#ffcc00]">Price Range</h3>
          <input type="range" min="0" max="5000" className="w-full mt-3" />
        </div>

        {/* Featured Products */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#ffcc00]">Best Sellers</h3>
          <div className="mt-3 space-y-3">
            <Link href="/products/1" className="flex items-center space-x-3">
              <Image src="/image1.jpg" alt="Product" width={48} height={48} className="rounded" />
              <span>Gaming Laptop</span>
            </Link>
            <Link href="/products/2" className="flex items-center space-x-3">
              <Image src="/image2.jpg" alt="Product" width={48} height={48} className="rounded" />
              <span>Wireless Mouse</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
