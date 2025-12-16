"use client";

import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    id: "r1",
    rating: 5,
    title: "Great service and original laptop",
    text: "The ThinkPad was exactly as described. Seller answered my questions quickly.",
    buyer: "Aisha Kamau",
    date: "Today",
    product: "Lenovo ThinkPad X1 Carbon (Gen 11)",
    replied: true,
  },
  {
    id: "r2",
    rating: 4,
    title: "Fast delivery to CBD",
    text: "Delivery was same-day as promised. Packaging could be slightly better.",
    buyer: "John Mwangi",
    date: "Yesterday",
    product: "Samsung 1TB NVMe SSD 980 PRO",
    replied: false,
  },
];

export default function VendorReviewsPage() {
  return (
    <>
      <section className="space-y-1">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Reviews & ratings</h1>
        <p className="text-sm text-slate-400">
          See what buyers are saying about your products and respond professionally to build trust.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-2">
            <p className="text-slate-400 text-xs">Shop rating</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-yellow-300">4.6</span>
              <span className="text-xs text-slate-400">out of 5</span>
            </div>
            <p className="text-xs text-slate-400">Based on 128 reviews across all products.</p>
          </div>
        </div>

        <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs md:text-sm">
          <div className="divide-y divide-slate-800">
            {reviews.map((r) => (
              <div key={r.id} className="py-3 space-y-1.5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-yellow-300 text-[11px]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className={`w-3.5 h-3.5 ${idx < r.rating ? "fill-yellow-300" : "fill-slate-700"}`} />
                      ))}
                    </div>
                    <p className="text-slate-100 font-semibold text-xs md:text-sm">{r.title}</p>
                    <p className="text-slate-300 text-xs">{r.text}</p>
                  </div>
                  <div className="text-right text-[11px] text-slate-400">
                    <p>{r.buyer}</p>
                    <p>{r.date}</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500">Product: {r.product}</p>
                <div className="flex items-center justify-between pt-1">
                  <button className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-[11px] text-slate-100 hover:bg-slate-800">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {r.replied ? "View your reply" : "Reply to review"}
                  </button>
                  {r.replied && <span className="text-[11px] text-emerald-300">Replied</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
