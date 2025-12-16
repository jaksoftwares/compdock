"use client";

import { ArrowUpRight, ArrowDownRight, BarChart3 } from "lucide-react";

export default function VendorAnalyticsPage() {
  const metrics = [
    { label: "Revenue (30d)", value: "KES 342,000", change: "+8.4%", positive: true },
    { label: "Orders (30d)", value: "128", change: "+12.1%", positive: true },
    { label: "Cancellation rate", value: "1.2%", change: "-0.3pp", positive: true },
  ];

  const weeklyData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <>
      <section className="space-y-1">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Analytics</h1>
        <p className="text-sm text-slate-400">
          Monitor your sales performance, spot trends and optimise your catalog.
        </p>
      </section>

      <section className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 md:p-4 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-400">{m.label}</span>
                <BarChart3 className="w-4 h-4 text-slate-500" />
              </div>
              <p className="text-lg md:text-xl font-semibold text-slate-50">{m.value}</p>
              <p
                className={`mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] ${
                  m.positive
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                    : "bg-red-500/10 text-red-200 border border-red-500/40"
                }`}
              >
                {m.positive ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span>{m.change} vs prev 30d</span>
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-100 text-sm font-semibold">Orders over time</span>
              <span className="text-[11px] text-slate-500">Last 7 days</span>
            </div>
            <div className="flex items-end gap-2 h-32">
              {weeklyData.map((day, idx) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-orange-500/80"
                    style={{ height: `${40 + idx * 8}px` }}
                  ></div>
                  <span className="text-[10px] text-slate-400">{day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-100 text-sm font-semibold">Top products</span>
              <span className="text-[11px] text-slate-500">By revenue</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-slate-100">Lenovo ThinkPad X1 Carbon</p>
                <p className="text-slate-300">KES 120,000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-100">Dell UltraSharp 27" 4K Monitor</p>
                <p className="text-slate-300">KES 98,500</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-100">Logitech MX Keys Keyboard</p>
                <p className="text-slate-300">KES 45,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
