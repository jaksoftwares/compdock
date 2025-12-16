"use client";

import { Coins, ArrowDownRight, ArrowUpRight } from "lucide-react";

const tokenHistory = [
  {
    id: "t1",
    type: "debit",
    reason: "Published product: Lenovo ThinkPad X1 Carbon",
    amount: 3,
    date: "Today, 10:32am",
  },
  {
    id: "t2",
    type: "debit",
    reason: "Renewed listing: Samsung 1TB NVMe SSD",
    amount: 1,
    date: "Yesterday, 5:12pm",
  },
  {
    id: "t3",
    type: "credit",
    reason: "Purchased token pack (100)",
    amount: 100,
    date: "Mon, 9 Dec",
  },
];

export default function VendorTokensPage() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Tokens & credits</h1>
        <p className="text-sm text-slate-400">
          Tokens power your listings and promotions. Track usage and top up before you run low.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Coins className="w-5 h-5 text-orange-300" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-slate-400">Current balance</p>
                <p className="text-xl font-semibold text-orange-300">120 tokens</p>
              </div>
            </div>
            <div className="space-y-1 text-xs text-slate-300">
              <p>
                New product publish: <span className="font-semibold text-slate-100">3 tokens</span>
              </p>
              <p>
                Renew expired listing: <span className="font-semibold text-slate-100">1 token</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-slate-100">Token usage history</h2>
              <span className="text-[11px] text-slate-500">Last 30 days</span>
            </div>
            <div className="divide-y divide-slate-800 text-xs">
              {tokenHistory.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="space-y-0.5">
                    <p className="text-slate-100">{entry.reason}</p>
                    <p className="text-slate-500">{entry.date}</p>
                  </div>
                  <div className="text-right text-xs">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border ${
                        entry.type === "debit"
                          ? "border-red-500/40 bg-red-500/10 text-red-200"
                          : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                      }`}
                    >
                      {entry.type === "debit" ? (
                        <ArrowDownRight className="w-3 h-3" />
                      ) : (
                        <ArrowUpRight className="w-3 h-3" />
                      )}
                      <span>{entry.type === "debit" ? "-" : "+"}{entry.amount} tokens</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Buy tokens</h2>
            <div className="grid gap-2 text-xs">
              <button className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-left hover:bg-slate-900">
                <p className="font-semibold text-slate-100">50 tokens</p>
                <p className="text-slate-400">KES 1,500 • For ~15 new listings</p>
              </button>
              <button className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-left hover:bg-slate-900">
                <p className="font-semibold text-slate-100">100 tokens</p>
                <p className="text-slate-400">KES 2,800 • Best value</p>
              </button>
              <button className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-left hover:bg-slate-900">
                <p className="font-semibold text-slate-100">250 tokens</p>
                <p className="text-slate-400">KES 6,500 • For high-volume sellers</p>
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Token purchases are processed via Compdock ePay in production. This is a UI-only preview.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 space-y-2">
            <h2 className="text-sm font-semibold text-slate-100">Token rules</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Tokens are only consumed when a product is first published or renewed.</li>
              <li>Editing titles, descriptions or prices does not consume tokens.</li>
              <li>Compdock may grant bonus tokens during campaigns.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
