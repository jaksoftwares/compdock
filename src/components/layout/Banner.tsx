"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
    <div className="w-full bg-[#111827] text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        {/* Deals ticker */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + deals.length) % deals.length)}
            className="p-1 hover:text-yellow-400"
            aria-label="Previous Deal"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex-1 truncate text-center md:text-left">
            {deals[currentIndex]}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % deals.length)}
            className="p-1 hover:text-yellow-400"
            aria-label="Next Deal"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Seller promotion / ePay CTA */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] md:text-xs whitespace-nowrap">
          <span>Want to sell on</span>
          <span className="font-bold">CompDock</span>?
          <Link
            href="/vendor/register"
            className="underline font-semibold hover:text-yellow-400 ml-1"
          >
            Join as a Vendor
          </Link>
          <span className="mx-1">|</span>
          <span className="hidden md:inline">Use</span>
          <Link
            href="/epay"
            className="underline font-semibold hover:text-yellow-400 ml-1"
          >
            CompDock ePay
          </Link>
          <span className="hidden md:inline">for secure transactions!</span>
        </div>
      </div>
    </div>
  );
}
