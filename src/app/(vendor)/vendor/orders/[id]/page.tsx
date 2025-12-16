"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, MessageCircle, MapPin, Phone } from "lucide-react";

export default function VendorOrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = Array.isArray(params?.id) ? params.id[0] : (params?.id as string | undefined);

  const order = {
    id: orderId ?? "CDK-20250123-01",
    status: "pending" as const,
    buyer: "John Mwangi",
    phone: "0712 345 678",
    location: "CBD Nairobi",
    fulfilment: "pickup" as const,
    items: [
      {
        id: "p1",
        name: "Lenovo ThinkPad X1 Carbon (Gen 11)",
        quantity: 1,
        price: "KES 185,000",
      },
      {
        id: "p2",
        name: "Logitech MX Keys Mechanical Keyboard",
        quantity: 1,
        price: "KES 17,900",
      },
    ],
    total: "KES 202,900",
  };

  return (
    <>
      <section className="flex items-center justify-between gap-3">
        <button
          onClick={() => router.push("/vendor/orders")}
          className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-100 hover:bg-slate-800"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to orders
        </button>
        <div className="flex gap-2 text-xs">
          <button className="inline-flex items-center gap-1 rounded-full border border-emerald-500/60 px-3 py-1.5 text-emerald-200 hover:bg-emerald-500/10">
            Mark as completed
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-red-500/60 px-3 py-1.5 text-red-200 hover:bg-red-500/10">
            Cancel order
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm md:text-base font-semibold text-slate-100">Order {order.id}</h1>
                <p className="text-xs text-slate-400">2 items • {order.fulfilment === "pickup" ? "Pickup" : "Delivery"}</p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] border border-amber-500/40 bg-amber-500/10 text-amber-200">
                Pending
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Items</h2>
            <div className="divide-y divide-slate-800 text-xs">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <p className="text-slate-100">{item.name}</p>
                    <p className="text-slate-400">Qty {item.quantity}</p>
                  </div>
                  <p className="text-slate-100 font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400">Order total</span>
              <span className="text-slate-100 font-semibold">{order.total}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Buyer & fulfilment</h2>
            <div className="space-y-1 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">{order.buyer}</p>
              <p className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> {order.phone}
              </p>
              <p className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {order.location}
              </p>
              <p>Fulfilment: {order.fulfilment === "pickup" ? "Pickup from shop" : "Delivery"}</p>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-1 rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:bg-slate-800">
              <MessageCircle className="w-3.5 h-3.5" /> Chat with buyer
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
