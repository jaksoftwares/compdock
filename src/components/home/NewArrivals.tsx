"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const NewArrivals = () => {
  // Use the Product type in the state
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    // Mock new product data (replace with real API call)
    setNewArrivals([
      { id: 1, name: "Gaming Laptop", price: 999, image: "/image1.jpg" },
      { id: 2, name: "Wireless Mouse", price: 49, image: "/image2.jpg" },
      { id: 3, name: "Mechanical Keyboard", price: 79, image: "/image3.jpg" },
      { id: 4, name: "Monitor", price: 299, image: "/image4.jpg" },
      { id: 5, name: "Bluetooth Headphones", price: 89, image: "/image5.jpg" },
    ]);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] text-center mb-12">
        New Arrivals
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {newArrivals.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
