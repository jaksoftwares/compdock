"use client";

import { useRouter } from "next/navigation";
import { Package, Plus, Filter } from "lucide-react";

const mockProducts = [
  {
    id: "p1",
    name: "Lenovo ThinkPad X1 Carbon (Gen 11)",
    status: "active",
    stock: 8,
    price: "KES 185,000",
    tokenCost: 3,
  },
  {
    id: "p2",
    name: "Dell UltraSharp 27\" 4K Monitor",
    status: "active",
    stock: 3,
    price: "KES 68,500",
    tokenCost: 3,
  },
  {
    id: "p3",
    name: "Logitech MX Keys Mechanical Keyboard",
    status: "draft",
    stock: 0,
    price: "KES 17,900",
    tokenCost: 3,
  },
  {
    id: "p4",
    name: "Samsung 1TB NVMe SSD 980 PRO",
    status: "out_of_stock",
    stock: 0,
    price: "KES 12,400",
    tokenCost: 3,
  },
];

export default function VendorProductsPage() {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Products</h1>
          <p className="text-sm text-slate-400">
            Manage your Compdock catalog, pricing and stock. Publishing and renewing listings consumes tokens.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:bg-slate-800">
            <Filter className="w-3.5 h-3.5" /> Filters
          </button>
          <button
            onClick={() => router.push("/vendor/products/new")}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-1.5 text-xs font-semibold text-white"
          >
            <Plus className="w-3.5 h-3.5" /> New product
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 md:p-4 text-xs md:text-sm">
        <div className="hidden md:grid grid-cols-[2fr,0.8fr,0.6fr,0.8fr,0.7fr] gap-3 px-2 pb-2 text-slate-400 border-b border-slate-800">
          <span>Product</span>
          <span>Status</span>
          <span>Stock</span>
          <span>Price</span>
          <span>Tokens</span>
        </div>

        <div className="divide-y divide-slate-800">
          {mockProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => router.push(`/vendor/products/${product.id}/edit`)}
              className="w-full text-left py-3 px-2 hover:bg-slate-900/80 flex flex-col md:grid md:grid-cols-[2fr,0.8fr,0.6fr,0.8fr,0.7fr] gap-2 items-start md:items-center"
            >
              <div className="flex items-start gap-2 w-full">
                <div className="mt-0.5 hidden md:block">
                  <Package className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-100 text-xs md:text-sm font-medium line-clamp-2">{product.name}</p>
                  <p className="md:hidden text-[11px] text-slate-400 mt-0.5">{product.price}</p>
                </div>
              </div>

              <div className="w-full flex md:block justify-between md:justify-start items-center gap-2">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] md:text-xs border ${
                    product.status === "active"
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/40"
                      : product.status === "draft"
                      ? "bg-slate-800 text-slate-200 border-slate-600"
                      : "bg-red-500/10 text-red-200 border-red-500/40"
                  }`}
                >
                  {product.status === "active"
                    ? "Active"
                    : product.status === "draft"
                    ? "Draft"
                    : "Out of stock"}
                </span>
              </div>

              <div className="hidden md:block w-full text-slate-200 text-xs">
                {product.stock > 0 ? `${product.stock} in stock` : "0 in stock"}
              </div>

              <div className="hidden md:block w-full text-slate-100 text-xs font-semibold">{product.price}</div>

              <div className="w-full flex md:block justify-between md:justify-start items-center gap-2 text-[11px] md:text-xs text-slate-300">
                <span>{product.tokenCost} tokens to publish</span>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          Publishing a new product consumes <span className="font-semibold text-slate-200">3 tokens</span>. Renewing an
          expired listing consumes <span className="font-semibold text-slate-200">1 token</span>.
        </p>
      </section>
    </>
  );
}
