"use client";

import { useMemo } from "react";
import { products } from "@/constants/products";
import ProductCard from "@/components/home/ProductCard";
import { Timer } from "lucide-react";

export default function DealsPage() {
  const deals = useMemo(
    () =>
      products
        .filter((p) => typeof p.discountPercent === "number")
        .slice(0, 24),
    []
  );

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <section className="space-y-2">
        <p className="text-xs text-orange-600 font-semibold uppercase flex items-center gap-1">
          <Timer className="w-3 h-3" /> Flash deals
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Today&apos;s Tech Deals</h1>
        <p className="text-sm text-gray-600 max-w-2xl">
          Limited-time offers from verified CompDock vendors across Nairobi. Prices may change
          when the countdown ends.
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {deals.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: Number(product.id),
              name: product.name,
              price: product.priceKES,
              image: product.imageUrl,
            }}
          />
        ))}
      </section>
    </main>
  );
}
