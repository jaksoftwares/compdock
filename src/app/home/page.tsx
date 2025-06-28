"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const featuredProducts = [
  { id: 1, name: "Mechanical Keyboard", price: 129.99, image: "/image4.jpg" },
  { id: 2, name: "Gaming Mouse", price: 79.99, image: "/image7.jpg" },
  { id: 3, name: "Curved Monitor", price: 299.99, image: "/image10.jpg" },
  { id: 4, name: "Noise Cancelling Headset", price: 199.99, image: "/image4.jpg" },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <main className="w-full">
      {/* Category Sidebar */}
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image src="/image1.jpeg" alt="Hero" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold animate-fade-in">Upgrade Your Setup</h1>
          <p className="text-lg mt-2">Premium Accessories for Professionals & Gamers</p>
          <Link href="/shop" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-md p-4 rounded-lg transform hover:scale-105 transition">
                <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-md" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Countdown */}
      <section className="py-12 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Limited Time Offer - Ends in {formatTime(timeLeft)}</h2>
        <p className="mt-2 text-lg">Exclusive discounts on selected products!</p>
        <Link href="/shop" className="mt-4 inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
          Grab the Deal
        </Link>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Keyboards", "Monitors", "Laptops", "Accessories"].map((category, index) => (
              <Link key={index} href={`/shop?category=${category.toLowerCase()}`} className="block bg-gray-200 rounded-lg p-6 text-center hover:bg-gray-300 transition">
                <h3 className="text-xl font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Best store for accessories!", "High-quality products!", "Fast delivery & great support!"].map(
              (review, index) => (
                <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                  <p className="text-gray-700">{review}</p>
                  <p className="text-gray-500 mt-2">- Verified Buyer</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-4">Subscribe and get 10% off your first order!</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="w-1/2 px-4 py-2 border rounded-l-md focus:outline-none" />
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}


