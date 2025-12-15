"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants/products";
import { fromSlugMatches, toSlug } from "@/lib/slug";
import VendorCard from "@/components/vendor/VendorCard";
import ProductCard from "@/components/home/ProductCard";
import { Star, Heart, MessageCircle, ShoppingCart, Tag } from "lucide-react";

export default function ProductSlugPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  if (!slug) return notFound();

  const product = products.find(
    (p) => p.id === slug || fromSlugMatches(slug, p.name)
  );

  if (!product) return notFound();

  const hasDiscount = typeof product.discountPercent === "number";
  const discounted = product.discountedPriceKES ??
    (hasDiscount
      ? Math.round(product.priceKES * (1 - (product.discountPercent || 0) / 100))
      : product.priceKES);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const createdDate = new Date(product.createdAt).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-6 space-y-8">
      <section className="grid md:grid-cols-2 gap-8">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative w-full h-72 sm:h-96 bg-white rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 text-xs text-gray-500">
            <div className="border rounded-lg px-2 py-1 text-center">Pickup in Nairobi</div>
            <div className="border rounded-lg px-2 py-1 text-center">1–3 day delivery</div>
            <div className="border rounded-lg px-2 py-1 text-center">Verified vendor</div>
            <div className="border rounded-lg px-2 py-1 text-center">Returns supported</div>
          </div>

          {/* Simple thumbnail strip (mock gallery) */}
          <div className="grid grid-cols-4 gap-2">
            {[product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="relative h-16 rounded-lg overflow-hidden border bg-gray-50"
                >
                  <Image src={src} alt={product.name} fill className="object-cover" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-2xl font-semibold text-orange-600">
              KES {discounted.toLocaleString()}
            </p>
            {hasDiscount && (
              <>
                <p className="text-sm line-through text-gray-400">
                  KES {product.priceKES.toLocaleString()}
                </p>
                <span className="text-xs font-semibold bg-red-50 text-red-600 px-2 py-1 rounded-full">
                  -{product.discountPercent}%
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{product.rating.toFixed(1)} / 5</span>
            <span className="text-gray-300">•</span>
            <span>{product.inStock ? "In stock" : "Out of stock"}</span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-900">Sold by</h2>
            <Link href={`/shop/${toSlug(product.shop.name)}`} className="block">
              <VendorCard
                name={product.shop.name}
                location={product.shop.location}
                rating={product.rating}
                totalProducts={48}
              />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">Delivery & pickup</h3>
            <p className="text-xs text-gray-600">
              Same-day delivery within Nairobi CBD on orders placed before 3pm. Free pickup
              available at select partner shops.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 hover:bg-orange-600 transition">
              <ShoppingCart className="w-4 h-4" />
              Add to cart
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-500 text-orange-600 text-sm font-semibold px-4 py-2.5 hover:bg-orange-50 transition">
              <MessageCircle className="w-4 h-4" />
              Chat seller
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-600 p-2 hover:bg-gray-50">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Specs & description */}
      <section className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Product details</h2>
            <p className="text-xs text-gray-600">
              Genuine accessories and components from verified Nairobi tech vendors.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 text-[11px] text-gray-600">
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2 py-1">
              <Tag className="w-3 h-3 text-orange-500" /> {product.category}
            </span>
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-700">
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Category: </span>
              {product.category}
            </p>
            <p>
              <span className="font-semibold">Vendor: </span>
              {product.shop.name}
            </p>
            <p>
              <span className="font-semibold">Location: </span>
              {product.shop.location}
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Created: </span>
              {createdDate}
            </p>
            <p>
              <span className="font-semibold">Stock status: </span>
              {product.inStock ? "Available" : "Out of stock"}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">
          CompDock connects you to professional tech vendors across Nairobi for genuine
          accessories, components and repair essentials. This product is listed and fulfilled
          by <span className="font-medium">{product.shop.name}</span>.
        </p>
      </section>

      {/* Reviews (mock) */}
      <section className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Customer reviews</h2>
            <p className="text-xs text-gray-600">Ratings are based on past orders (mock).</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span className="font-semibold text-gray-900">{product.rating.toFixed(1)}</span>
            <span className="text-gray-500">/ 5</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-gray-700">
          <div className="border rounded-xl px-3 py-2">
            <p className="font-semibold text-gray-900">Tech buyer (mock)</p>
            <p className="text-[11px] text-gray-500 mb-1">Verified purchase • Nairobi</p>
            <p>
              Great value for money and fast delivery from the vendor. Works perfectly for daily
              use.
            </p>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-900">Related products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((item) => (
              <ProductCard
                key={item.id}
                product={{
                  id: Number(item.id),
                  name: item.name,
                  price: item.priceKES,
                  image: item.imageUrl,
                }}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
