"use client";

import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

const conversations = [
  {
    id: "c1",
    buyer: "John Mwangi",
    lastMessage: "Is this available for pickup today?",
    unread: 2,
    relatedOrder: "CDK-20250123-01",
  },
  {
    id: "c2",
    buyer: "Aisha Kamau",
    lastMessage: "Can you deliver to Kilimani?",
    unread: 0,
    relatedOrder: "CDK-20250122-08",
  },
];

export default function VendorMessagesPage() {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Messages</h1>
          <p className="text-sm text-slate-400">Chat with buyers about orders, availability and product details.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 md:p-4 text-xs md:text-sm">
        <div className="divide-y divide-slate-800">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => router.push(`/vendor/messages/${c.id}`)}
              className="w-full flex items-center justify-between gap-3 py-2.5 px-2 hover:bg-slate-900/80 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[11px] text-slate-200">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-100 text-xs md:text-sm font-medium">{c.buyer}</span>
                  <span className="text-slate-400 line-clamp-1">{c.lastMessage}</span>
                  <span className="text-[11px] text-slate-500">Order {c.relatedOrder}</span>
                </div>
              </div>
              {c.unread > 0 && (
                <span className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white text-[11px] px-2 py-0.5 font-semibold">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
