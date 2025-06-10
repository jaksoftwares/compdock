"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { products, categories } from "@/constants/products";
import { Search, Star } from "lucide-react";
import Link from "next/link";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) =>
      selectedCategory === "All" || product.category === selectedCategory
    );

    if (searchQuery.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === "price-low") filtered.sort((a, b) => a.priceKES - b.priceKES);
    if (sortBy === "price-high") filtered.sort((a, b) => b.priceKES - a.priceKES);
    if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

    return filtered;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.jpg"
            alt="Shop Banner"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="bg-black/60 p-6 rounded-md text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shop Top Computer Accessories
          </h1>
          <p className="mt-2 text-lg">
            Explore best deals from trusted tech vendors in Nairobi
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-gray-100 border-t border-b">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:justify-between gap-4">
          {/* Search */}
          <div className="relative w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full px-4 py-2 pl-10 border rounded-md shadow-sm focus:outline-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          {/* Category Filter */}
          <div className="w-full lg:w-1/3">
            <select
              className="w-full px-4 py-2 border rounded-md shadow-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="w-full lg:w-1/3">
            <select
              className="w-full px-4 py-2 border rounded-md shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grouped Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {categories.map((category) => {
            const categoryProducts = filteredProducts.filter(
              (product) => product.category === category
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 group"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-blue-600 font-bold mt-1">
                        KES {product.priceKES.toFixed(2)}
                      </p>
                      <div className="flex items-center text-yellow-500 mt-1">
                        <Star size={16} className="mr-1" /> {product.rating}
                      </div>
                      <div className="mt-4 space-y-2">
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                      <Link href={`/products/${product.id}`}>
                        <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition">
                          View Product
                        </button>
                      </Link>
                    </div>

                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-12">
              No matching products found.
            </p>
          )}
        </div>
      </section>

      {/* Pagination - Placeholder */}
      <section className="py-6 flex justify-center space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded-md">Previous</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">2</button>
        <button className="px-4 py-2 bg-gray-200 rounded-md">Next</button>
      </section>
    </main>
  );
}
