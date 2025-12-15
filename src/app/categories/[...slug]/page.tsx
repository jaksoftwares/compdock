"use client";

import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { products as allProducts } from "@/constants/products";
import SkeletonGrid from "@/components/common/SkeletonGrid";
import EmptyState from "@/components/common/EmptyState";
import ProductCard from "@/components/home/ProductCard";
import { SlidersHorizontal, MapPin, CircleDollarSign } from "lucide-react";

const brands = ["HP", "Dell", "Lenovo", "ASUS", "Acer", "Apple"];
const conditions = ["New", "Refurbished", "Used"];
const locations = ["Nairobi CBD", "Westlands", "Ngong Road", "Online only"];

export default function CategorySlugPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedCondition, setSelectedCondition] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [isLoading] = useState(false);

  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const categoryNameFromSlug = slug
    ? slug
        .split("-")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ")
    : "Category";

  const filteredProducts = useMemo(() => {
    let items = allProducts.filter((p) =>
      slug ? p.category.toLowerCase().includes(slug.toLowerCase()) : true
    );

    items = items.filter((p) => p.priceKES >= priceRange[0] && p.priceKES <= priceRange[1]);

    if (selectedBrand !== "All") {
      items = items.filter((p) =>
        p.tags?.some((tag) => tag.toLowerCase() === selectedBrand.toLowerCase())
      );
    }

    if (selectedCondition !== "All") {
      items = items.filter((p) =>
        p.tags?.some((tag) => tag.toLowerCase() === selectedCondition.toLowerCase())
      );
    }

    if (selectedLocation !== "All") {
      items = items.filter((p) => p.shop?.location === selectedLocation);
    }

    if (sortBy === "price-low") items.sort((a, b) => a.priceKES - b.priceKES);
    if (sortBy === "price-high") items.sort((a, b) => b.priceKES - a.priceKES);
    if (sortBy === "rating") items.sort((a, b) => b.rating - a.rating);

    return items;
  }, [slug, priceRange, selectedBrand, selectedCondition, selectedLocation, sortBy]);

  const query = searchParams.get("q") ?? "";

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <section className="space-y-1">
        <p className="text-xs text-orange-600 font-semibold uppercase flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3" /> CompDock · Tech in Nairobi
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          {categoryNameFromSlug}
        </h1>
        {query && (
          <p className="text-xs text-gray-500">Filtered by search: "{query}"</p>
        )}
      </section>

      <section className="grid lg:grid-cols-4 gap-6">
        {/* Filters */}
        <aside className="lg:col-span-1 bg-white rounded-2xl border shadow-sm p-4 space-y-5 h-fit">
          <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-orange-500" />
            Filters
          </h2>

          {/* Price */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-700 flex items-center gap-1">
              <CircleDollarSign className="w-3 h-3 text-orange-500" /> Price range (KES)
            </h3>
            <div className="flex items-center gap-2 text-xs">
              <input
                type="number"
                className="w-1/2 border rounded-lg px-2 py-1 text-xs"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value) || 0, priceRange[1]])
                }
                placeholder="Min"
              />
              <span className="text-gray-400">—</span>
              <input
                type="number"
                className="w-1/2 border rounded-lg px-2 py-1 text-xs"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value) || 0])
                }
                placeholder="Max"
              />
            </div>
          </div>

          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-700">Brand</h3>
            <select
              className="w-full border rounded-lg px-2 py-1 text-xs"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All">All brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Condition */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-700">Condition</h3>
            <div className="flex flex-wrap gap-1">
              {["All", ...conditions].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCondition(c)}
                  className={`px-2 py-1 rounded-full text-xs border ${
                    selectedCondition === c
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-gray-700 hover:border-orange-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-orange-500" /> Pickup location
            </h3>
            <select
              className="w-full border rounded-lg px-2 py-1 text-xs"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="All">Anywhere in Nairobi</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              setPriceRange([0, 300000]);
              setSelectedBrand("All");
              setSelectedCondition("All");
              setSelectedLocation("All");
              setSortBy("relevance");
            }}
            className="w-full mt-2 text-xs font-medium text-orange-600 hover:text-orange-700"
          >
            Clear filters
          </button>
        </aside>

        {/* Results */}
        <section className="lg:col-span-3 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> results
              {query && (
                <span>
                  {" "}for <span className="font-semibold">“{query}”</span>
                </span>
              )}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Sort by</span>
              <select
                className="border rounded-lg px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <SkeletonGrid />
          ) : filteredProducts.length === 0 ? (
            <EmptyState
              title="No products found in this category"
              description="Try adjusting your filters, or explore other categories for more tech deals across Nairobi."
              actionLabel="Browse all products"
              actionHref="/products"
            />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
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
            </div>
          )}

          {/* Pagination placeholder */}
          <div className="pt-4 flex justify-center gap-2 text-xs">
            <button className="px-3 py-1 rounded-full border bg-white text-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 rounded-full bg-orange-500 text-white font-semibold">
              1
            </button>
            <button className="px-3 py-1 rounded-full border bg-white text-gray-700">
              2
            </button>
            <button className="px-3 py-1 rounded-full border bg-white text-gray-700">
              Next
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
