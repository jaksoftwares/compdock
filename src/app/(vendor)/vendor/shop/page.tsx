"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function VendorShopPage() {
  const { user } = useAuth();

  const shop = {
    id: user?.shopId ?? "shop_1",
    name: user?.name ?? "Urban Tech Hub",
    location: "Luthuli Avenue, CBD Nairobi",
    categories: ["Laptops", "Monitors", "Keyboards", "Storage"],
    status: "active" as const,
    tokenBalance: 120,
    rating: 4.6,
    totalReviews: 128,
    totalProducts: 42,
    bannerUrl: "/shop-banner-placeholder.jpg",
  };

  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Shop profile</h1>
        <p className="text-sm text-slate-400">
          Manage how your shop appears to buyers on Compdock and keep your details up to date.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <div className="h-32 md:h-40 bg-slate-800 flex items-center justify-center text-xs text-slate-500">
              Shop banner preview (upload UI placeholder)
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-50">{shop.name}</h2>
                  <p className="text-xs text-slate-400">{shop.location}</p>
                </div>
                <div className="text-right text-xs">
                  <p className="text-slate-400">Status</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                    Active
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                <span>
                  {shop.rating.toFixed(1)}★ • {shop.totalReviews} reviews
                </span>
                <span>· {shop.totalProducts} products</span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {shop.categories.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-slate-200 border border-slate-700"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-xs pt-2">
                <Link
                  href={`/shop/${encodeURIComponent(shop.name.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-slate-100 hover:bg-slate-800"
                >
                  Preview public shop
                </Link>
                <Link
                  href={`/shop/${encodeURIComponent(shop.name.toLowerCase().replace(/\s+/g, "-"))}/visit`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-1.5 text-slate-100 hover:bg-slate-800"
                >
                  View visit info
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 text-sm">
            <h2 className="text-sm font-semibold text-slate-100">Shop details</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="shopName">
                  Shop name
                </label>
                <input
                  id="shopName"
                  defaultValue={shop.name}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="location">
                  Physical location (Nairobi)
                </label>
                <input
                  id="location"
                  defaultValue={shop.location}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="categories">
                Categories sold
              </label>
              <textarea
                id="categories"
                defaultValue={shop.categories.join(", ")}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 min-h-[64px]"
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="openingHours">
                  Opening hours
                </label>
                <input
                  id="openingHours"
                  defaultValue="Mon–Sat, 9:00am – 6:00pm"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="contact">
                  Contact phone / email
                </label>
                <input
                  id="contact"
                  defaultValue={`${user?.email ?? "shop@example.com"}`}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-2 text-xs font-semibold text-white">
                Save changes
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Shop status</h2>
            <p className="text-xs text-slate-300">
              Your shop is currently <span className="font-semibold text-emerald-300">active</span>. Buyers can view your
              products and place orders.
            </p>
            <button className="w-full inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800">
              Pause shop temporarily
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-2">
            <h2 className="text-sm font-semibold text-slate-100">Quick stats</h2>
            <div className="space-y-1 text-xs text-slate-300">
              <p>
                Token balance: <span className="font-semibold text-orange-300">{shop.tokenBalance} tokens</span>
              </p>
              <p>Orders last 30 days: 128</p>
              <p>Cancellation rate: 1.2%</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
