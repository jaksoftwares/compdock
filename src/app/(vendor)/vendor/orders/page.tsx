"use client";

import { useRouter } from "next/navigation";
import { ShoppingBag, Filter } from "lucide-react";

const orders = [
  {
    id: "CDK-20250123-01",
    buyer: "John Mwangi",
    items: 2,
    total: "KES 12,500",
    status: "pending",
    fulfilment: "pickup",
  },
  {
    id: "CDK-20250122-08",
    buyer: "Aisha Kamau",
    items: 1,
    total: "KES 68,500",
    status: "paid",
    fulfilment: "delivery",
  },
  {
    id: "CDK-20250120-03",
    buyer: "TechHub Ltd",
    items: 5,
    total: "KES 240,000",
    status: "completed",
    fulfilment: "delivery",
  },
];

export default function VendorOrdersPage() {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Orders</h1>
          <p className="text-sm text-slate-400">
            Track new, in-progress and completed orders. Keep your fulfilment performance strong.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-slate-100 hover:bg-slate-800">
            <Filter className="w-3.5 h-3.5" /> Status filters
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 md:p-4 text-xs md:text-sm">
        <div className="hidden md:grid grid-cols-[1.4fr,1fr,0.6fr,0.8fr,0.8fr] gap-3 px-2 pb-2 text-slate-400 border-b border-slate-800">
          <span>Order</span>
          <span>Buyer</span>
          <span>Items</span>
          <span>Total</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-slate-800">
          {orders.map((order) => (
            <button
              key={order.id}
              onClick={() => router.push(`/vendor/orders/${order.id}`)}
              className="w-full text-left py-3 px-2 hover:bg-slate-900/80 flex flex-col md:grid md:grid-cols-[1.4fr,1fr,0.6fr,0.8fr,0.8fr] gap-2 items-start md:items-center"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="hidden md:block w-4 h-4 text-slate-500" />
                <div className="flex flex-col">
                  <span className="text-slate-100 font-medium text-xs md:text-sm">{order.id}</span>
                  <span className="md:hidden text-[11px] text-slate-400">{order.total}</span>
                </div>
              </div>
              <span className="text-slate-200 text-xs">{order.buyer}</span>
              <span className="hidden md:block text-slate-200 text-xs">{order.items}</span>
              <span className="hidden md:block text-slate-100 text-xs font-semibold">{order.total}</span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] border ${
                  order.status === "pending"
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                    : order.status === "paid"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                    : "border-slate-500/40 bg-slate-500/10 text-slate-200"
                }`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
