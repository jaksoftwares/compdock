"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { products } from "@/constants/products";
import { toSlug } from "@/lib/slug";
import VendorCard from "@/components/vendor/VendorCard";
import ProductCard from "@/components/home/ProductCard";
import { MapPin, MessageCircle, Clock } from "lucide-react";

export default function ShopPage() {
  const params = useParams();
  const rawSlug = params?.vendorSlug;
  const vendorSlug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  if (!vendorSlug) return notFound();

  const vendorProducts = products.filter(
    (p) => toSlug(p.shop.name) === vendorSlug.toLowerCase()
  );

  if (vendorProducts.length === 0) return notFound();

  const vendor = vendorProducts[0].shop;
  const rating = vendorProducts.reduce((acc, p) => acc + p.rating, 0) / vendorProducts.length;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <section className="space-y-4 bg-white rounded-2xl border shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <VendorCard
            name={vendor.name}
            location={vendor.location}
            rating={rating}
            totalProducts={vendorProducts.length}
          />
          <div className="flex flex-wrap gap-2 text-xs">
            <button className="inline-flex items-center gap-1 rounded-full border border-orange-500 text-orange-600 px-3 py-1.5 font-semibold hover:bg-orange-50">
              <MessageCircle className="w-4 h-4" />
              Chat with vendor
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-4 h-4 text-orange-500" />
            {vendor.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4 text-orange-500" />
            Mon–Sat, 9:00am – 6:00pm
          </span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-900">Products from this shop</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {vendorProducts.map((product) => (
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
      </section>
    </main>
  );
}
