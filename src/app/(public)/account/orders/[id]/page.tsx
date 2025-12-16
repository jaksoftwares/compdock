"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowLeft, MessageCircle } from "lucide-react";

const mockOrder = {
  id: "CD-2025-0001",
  status: "Pending confirmation",
  totalKES: 38999,
  items: [
    {
      title: "Wireless Mechanical Keyboard",
      quantity: 1,
      priceKES: 7999,
      vendor: "Urban Tech Hub",
      location: "Moi Avenue, Nairobi",
    },
    {
      title: "Ergonomic Gaming Mouse",
      quantity: 2,
      priceKES: 4950,
      vendor: "Urban Tech Hub",
      location: "Moi Avenue, Nairobi",
    },
  ],
};

export default function AccountOrderDetailPage() {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const order = id === mockOrder.id ? mockOrder : mockOrder; // Single mock

  const itemsTotal = order.items.reduce(
    (sum, item) => sum + item.priceKES * item.quantity,
    0
  );

  return (
    <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-4 text-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-900">Order {order.id}</p>
          <p className="text-[11px] text-gray-600">Status: {order.status}</p>
        </div>
        <Link
          href="/account/orders"
          className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-3 h-3" /> Back to orders
        </Link>
      </div>

      <div className="space-y-3">
        {order.items.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-3 border rounded-xl px-3 py-2"
          >
            <div>
              <p className="text-xs font-semibold text-gray-900">{item.title}</p>
              <p className="text-[11px] text-gray-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-orange-500" /> {item.vendor} • {item.location}
              </p>
              <p className="text-[11px] text-gray-500">
                Qty {item.quantity} · KES {item.priceKES.toLocaleString()} each
              </p>
            </div>
            <p className="text-xs font-semibold text-gray-900">
              KES {(item.priceKES * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 space-y-1 text-xs text-gray-600">
        <div className="flex justify-between">
          <span>Items total</span>
          <span>KES {itemsTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery (estimated)</span>
          <span>KES 350</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900 pt-1 text-sm">
          <span>Order total</span>
          <span>KES {(itemsTotal + 350).toLocaleString()}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/messages"
          className="inline-flex items-center gap-1 rounded-full bg-orange-500 text-white px-4 py-2 text-xs font-semibold hover:bg-orange-600"
        >
          <MessageCircle className="w-3 h-3" /> Chat with vendor
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 py-2 text-xs font-semibold hover:bg-gray-50"
        >
          Shop more items
        </Link>
      </div>
    </section>
  );
}
