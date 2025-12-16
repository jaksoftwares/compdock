"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

const mockOrders = [
  {
    id: "CD-2025-0001",
    status: "Pending confirmation",
    totalKES: 38999,
    createdAt: "Today",
    vendor: "Urban Tech Hub",
  },
  {
    id: "CD-2025-0000",
    status: "Delivered",
    totalKES: 12500,
    createdAt: "Yesterday",
    vendor: "Digital Republic",
  },
];

export default function AccountOrdersPage() {
  return (
    <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-4 text-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Orders</h2>
          <p className="text-xs text-gray-600">Track your CompDock orders and statuses.</p>
        </div>
      </div>

      <div className="space-y-3">
        {mockOrders.map((order) => (
          <Link
            key={order.id}
            href={`/account/orders/${order.id}`}
            className="block border rounded-xl px-4 py-3 hover:border-orange-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-900">Order {order.id}</p>
                <p className="text-[11px] text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-500" /> {order.vendor} • {order.createdAt}
                </p>
              </div>
              <div className="text-right text-xs">
                <p className="font-semibold text-gray-900">KES {order.totalKES.toLocaleString()}</p>
                <p className="text-[11px] text-gray-600">{order.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
