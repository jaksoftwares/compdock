"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "Mechanical Keyboard", price: 129.99, image: "/image1.jpg", category: "Keyboards", brand: "Logitech", rating: 4.5 },
  { id: 2, name: "Gaming Mouse", price: 79.99, image: "/image2.jpg", category: "Mice", brand: "Razer", rating: 4.7 },
  { id: 3, name: "Curved Monitor", price: 299.99, image: "/image3.jpg", category: "Monitors", brand: "Samsung", rating: 4.8 },
  { id: 4, name: "Noise Cancelling Headset", price: 199.99, image: "/image4.jpg", category: "Headsets", brand: "Sony", rating: 4.6 },
  { id: 5, name: "Gaming Chair", price: 349.99, image: "/image5.jpg", category: "Accessories", brand: "Secretlab", rating: 4.9 },
  { id: 6, name: "Webcam", price: 99.99, image: "/image6.jpg", category: "Accessories", brand: "Logitech", rating: 4.4 },
  { id: 7, name: "RGB Mousepad", price: 39.99, image: "/image7.jpg", category: "Accessories", brand: "Corsair", rating: 4.3 },
  { id: 8, name: "Wireless Gaming Headset", price: 159.99, image: "/image8.jpg", category: "Headsets", brand: "SteelSeries", rating: 4.7 },
  { id: 9, name: "1080p HD Webcam", price: 89.99, image: "/image9.jpg", category: "Accessories", brand: "Microsoft", rating: 4.5 },
  { id: 10, name: "Ergonomic Office Chair", price: 279.99, image: "/image10.jpg", category: "Accessories", brand: "Herman Miller", rating: 4.9 },
  { id: 11, name: "UltraWide Gaming Monitor", price: 499.99, image: "/image1.jpg", category: "Monitors", brand: "LG", rating: 4.8 },
  { id: 12, name: "Mechanical Gaming Keyboard", price: 159.99, image: "/image2.jpg", category: "Keyboards", brand: "HyperX", rating: 4.6 },
  { id: 13, name: "Gaming Desk", price: 189.99, image: "/image3.jpg", category: "Accessories", brand: "Arozzi", rating: 4.5 },
  { id: 14, name: "Wireless Gaming Mouse", price: 129.99, image: "/image4.jpg", category: "Mice", brand: "Logitech", rating: 4.8 },
  { id: 15, name: "Surround Sound Speaker System", price: 299.99, image: "/image5.jpg", category: "Accessories", brand: "Bose", rating: 4.9 },
  { id: 16, name: "108 Key Mechanical Keyboard", price: 139.99, image: "/image6.jpg", category: "Keyboards", brand: "Ducky", rating: 4.7 },
  { id: 17, name: "Curved UltraWide Monitor", price: 599.99, image: "/image7.jpg", category: "Monitors", brand: "Alienware", rating: 4.8 },
  { id: 18, name: "Ergonomic Wrist Rest", price: 19.99, image: "/image8.jpg", category: "Accessories", brand: "Razer", rating: 4.2 },
  { id: 19, name: "Professional Studio Headphones", price: 249.99, image: "/image9.jpg", category: "Headsets", brand: "Audio-Technica", rating: 4.7 },
  { id: 20, name: "Wireless Charging Mousepad", price: 69.99, image: "/image10.jpg", category: "Accessories", brand: "ASUS", rating: 4.5 },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Products
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Sorting Logic
  if (sortBy === "price-low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") filteredProducts.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filteredProducts.sort((a, b) => b.rating - a.rating);

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-bg.jpg" alt="Shop Banner" layout="fill" objectFit="cover" quality={100} />
        </div>
        <h1 className="text-5xl font-bold">Shop Computer Accessories</h1>
      </section>

      {/* Search & Filters */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Keyboards">Keyboards</option>
            <option value="Mice">Mice</option>
            <option value="Monitors">Monitors</option>
            <option value="Headsets">Headsets</option>
            <option value="Accessories">Accessories</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white shadow-md p-4 rounded-lg transform hover:scale-105 transition">
                  <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-md" />
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <p className="text-yellow-500">⭐ {product.rating}</p>
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </section>

      {/* Pagination */}
      <section className="py-6 flex justify-center">
        <button className="px-4 py-2 mx-2 bg-gray-300 rounded-md">Previous</button>
        <button className="px-4 py-2 mx-2 bg-blue-600 text-white rounded-md">1</button>
        <button className="px-4 py-2 mx-2 bg-gray-300 rounded-md">2</button>
        <button className="px-4 py-2 mx-2 bg-gray-300 rounded-md">Next</button>
      </section>
    </main>
  );
}
