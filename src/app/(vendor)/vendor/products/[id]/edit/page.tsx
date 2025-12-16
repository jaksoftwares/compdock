"use client";

import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { Coins, Trash2 } from "lucide-react";

export default function VendorEditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = Array.isArray(params?.id) ? params?.id[0] : (params?.id as string | undefined);

  const [saving, setSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      router.push("/vendor/products");
    }, 800);
  };

  const handleDelete = () => {
    router.push("/vendor/products");
  };

  return (
    <form onSubmit={handleSave} className="space-y-5">
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Edit product</h1>
          <p className="text-sm text-slate-400">
            Update details, stock and pricing. Changes go live immediately on the marketplace.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex items-center gap-1 rounded-full border border-red-500/60 px-4 py-1.5 text-xs font-semibold text-red-200 hover:bg-red-500/10"
        >
          <Trash2 className="w-3.5 h-3.5" /> Delete product
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 text-sm">
            <h2 className="text-sm font-semibold text-slate-100">Core details</h2>
            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="name">
                Product name
              </label>
              <input
                id="name"
                defaultValue="Lenovo ThinkPad X1 Carbon (Gen 11)"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  defaultValue="laptops"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="laptops">Laptops</option>
                  <option value="monitors">Monitors</option>
                  <option value="keyboards">Keyboards</option>
                  <option value="storage">Storage</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="brand">
                  Brand
                </label>
                <input
                  id="brand"
                  defaultValue="Lenovo"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                defaultValue="Premium 14 business laptop with 13th Gen Intel, 32GB RAM and 1TB SSD. Ideal for professionals."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 min-h-[96px]"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 text-sm">
            <h2 className="text-sm font-semibold text-slate-100">Pricing & stock</h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="price">
                  Price (KES)
                </label>
                <input
                  id="price"
                  type="number"
                  defaultValue={185000}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="discount">
                  Discount (%)
                </label>
                <input
                  id="discount"
                  type="number"
                  defaultValue={10}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="stock">
                  Stock quantity
                </label>
                <input
                  id="stock"
                  type="number"
                  defaultValue={8}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="condition">
                Condition
              </label>
              <select
                id="condition"
                defaultValue="new"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="new">Brand new</option>
                <option value="used">Used - like new</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Listing status & tokens</h2>
            <div className="space-y-2 text-xs text-slate-300">
              <p>
                Current status: <span className="font-semibold text-emerald-300">Active</span>
              </p>
              <p>
                Renewing this listing later will consume <span className="font-semibold text-slate-100">1 token</span>.
              </p>
              <p>
                Promoting this product in featured placements may require additional tokens.
              </p>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 hover:bg-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-100">
              <Coins className="w-3.5 h-3.5 text-orange-300" />
              View token rules
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 space-y-2">
            <p className="font-semibold text-slate-100">Product ID</p>
            <p>{productId ?? "p1"}</p>
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-2 text-xs">
        <button
          type="button"
          onClick={() => router.push("/vendor/products")}
          className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-slate-100 hover:bg-slate-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-1.5 font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </form>
  );
}
