"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { products } from "@/constants/products";
import { toSlug } from "@/lib/slug";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";

export default function ShopVisitPage() {
  const params = useParams();
  const rawSlug = params?.vendorSlug;
  const vendorSlug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  if (!vendorSlug) return notFound();

  const vendorProduct = products.find(
    (p) => toSlug(p.shop.name) === vendorSlug.toLowerCase()
  );

  if (!vendorProduct) return notFound();

  const vendor = vendorProduct.shop;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <section className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-xs text-orange-600 font-semibold uppercase">Visit shop</p>
          <h1 className="text-2xl font-extrabold text-gray-900">{vendor.name}</h1>
          <p className="text-sm text-gray-600">
            Plan your visit to this CompDock partner shop in Nairobi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="space-y-2">
            <p className="inline-flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-500 mt-0.5" />
              <span>{vendor.location}</span>
            </p>
            <p className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>{vendor.contact}</span>
            </p>
            <p className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Mon–Sat, 9:00am – 6:00pm</span>
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 border flex items-center justify-center text-xs text-gray-500 p-4">
            Map preview placeholder (embed Google Maps here in production)
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-xs">
          <button className="inline-flex items-center gap-1 rounded-full bg-orange-500 text-white px-4 py-2 font-semibold hover:bg-orange-600">
            <Navigation className="w-4 h-4" />
            Get directions
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 py-2 font-semibold hover:bg-gray-50">
            Call shop
          </button>
        </div>
      </section>
    </main>
  );
}
