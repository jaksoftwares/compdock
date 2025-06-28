"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const deals = [
  "🔥 10% OFF on all Laptops — Today Only!",
  "⚡ Free Delivery for orders above KES 5,000 in Nairobi",
  "🎧 Buy Headphones, Get 20% OFF on Accessories",
  "💻 Clearance Sale: Up to 50% OFF on Refurbished PCs",
  "🕒 Limited Time Offer: Free Mouse with Every Laptop Stand",
];

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deals.length);
    }, 4000); // Change deal every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white w-full py-2 px-4 flex items-center justify-between text-sm md:text-base">
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + deals.length) % deals.length)}
        className="p-1 hover:text-yellow-400"
        aria-label="Previous Deal"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex-1 text-center truncate">
        {deals[currentIndex]}
      </div>

      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % deals.length)}
        className="p-1 hover:text-yellow-400"
        aria-label="Next Deal"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
