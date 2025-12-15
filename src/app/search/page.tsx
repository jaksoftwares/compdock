"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useMemo } from "react";
import { products } from "@/constants/products";
import VendorCard from "@/components/vendor/VendorCard";
import ProductCard from "@/components/home/ProductCard";
import EmptyState from "@/components/common/EmptyState";
import { toSlug } from "@/lib/slug";
import { Search } from "lucide-react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [tab, setTab] = useState<"products" | "vendors">("products");
  const [query] = useState(initialQuery);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const vendors = useMemo(() => {
    const map = new Map<string, { name: string; location: string; contact: string; rating: number; count: number }>();
    for (const p of products) {
      if (!query.trim()) continue;
      const q = query.toLowerCase();
      const matches =
        p.shop.name.toLowerCase().includes(q) ||
        p.shop.location.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      if (!matches) continue;

      const existing = map.get(p.shop.name);
      if (existing) {
        existing.rating = (existing.rating * existing.count + p.rating) / (existing.count + 1);
        existing.count += 1;
      } else {
        map.set(p.shop.name, {
          name: p.shop.name,
          location: p.shop.location,
          contact: p.shop.contact,
          rating: p.rating,
          count: 1,
        });
      }
    }
    return Array.from(map.values());
  }, [query]);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <section className="space-y-2">
        <p className="text-xs text-orange-600 font-semibold uppercase flex items-center gap-1">
          <Search className="w-3 h-3" /> Search results
        </p>
        <h1 className="text-2xl font-extrabold text-gray-900">{query || "Search CompDock"}</h1>
      </section>

      {/* Tabs */}
      <section className="flex gap-3 border-b text-sm">
        <button
          className={`pb-2 px-1 border-b-2 -mb-px ${
            tab === "products" ? "border-orange-500 text-orange-600" : "border-transparent text-gray-500"
          }`}
          onClick={() => setTab("products")}
        >
          Products
        </button>
        <button
          className={`pb-2 px-1 border-b-2 -mb-px ${
            tab === "vendors" ? "border-orange-500 text-orange-600" : "border-transparent text-gray-500"
          }`}
          onClick={() => setTab("vendors")}
        >
          Vendors
        </button>
      </section>

      {tab === "products" ? (
        filteredProducts.length === 0 ? (
          <EmptyState
            title={query ? "No matching products found" : "Start searching"}
            description={
              query
                ? "Try another search term or check spelling."
                : "Search for laptops, monitors, components, accessories and more."
            }
            actionLabel={!query ? "Browse all products" : undefined}
            actionHref={!query ? "/products" : undefined}
          />
        ) : (
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
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
        )
      ) : vendors.length === 0 ? (
        <EmptyState
          title={query ? "No matching vendors found" : "Search for vendors"}
          description={
            query
              ? "Try searching by shop name, location or the products they sell."
              : "Find trusted tech vendors across Nairobi."
          }
        />
      ) : (
        <section className="space-y-3">
          {vendors.map((v) => (
            <Link
              key={v.name}
              href={`/shop/${toSlug(v.name)}`}
              className="block"
            >
              <VendorCard
                name={v.name}
                location={v.location}
                rating={v.rating}
                totalProducts={v.count}
              />
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
