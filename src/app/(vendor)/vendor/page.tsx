"use client";

import { useAuth } from "@/context/AuthContext";
import { ArrowUpRight, MessageCircle, ShoppingBag, Package, Coins } from "lucide-react";

export default function VendorDashboardPage() {
  const { user } = useAuth();

  const kpis = [
    { label: "Orders", value: "128", change: "+12%", icon: ShoppingBag },
    { label: "Products", value: "42", change: "+3", icon: Package },
    { label: "Revenue (30d)", value: "KES 342,000", change: "+8%", icon: ArrowUpRight },
    { label: "Chats", value: "19", change: "3 new", icon: MessageCircle },
  ];

  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Vendor dashboard</h1>
        <p className="text-sm text-slate-400">
          Welcome back, {user?.name || "Seller"}. Track your performance, manage products and keep customers happy.
        </p>
      </section>

      <section className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 md:p-4 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{kpi.label}</span>
                <Icon className="w-4 h-4 text-slate-500" />
              </div>
              <div className="text-lg md:text-xl font-semibold text-slate-50">{kpi.value}</div>
              <div className="text-xs text-emerald-400">{kpi.change}</div>
            </div>
          );
        })}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">Recent orders</h2>
            <button className="text-xs text-orange-300 hover:text-orange-200">View all</button>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 divide-y divide-slate-800 text-xs">
            {[1, 2, 3, 4].map((order) => (
              <div
                key={order}
                className="flex items-center justify-between px-3 py-2.5 hover:bg-slate-900/80 cursor-pointer"
              >
                <div className="space-y-0.5">
                  <div className="font-medium text-slate-100">Order #{"CDK-2025" + order}</div>
                  <div className="text-slate-400">2 items · Pickup · CBD Nairobi</div>
                </div>
                <div className="text-right space-y-0.5">
                  <div className="font-semibold text-slate-50">KES 12,500</div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">
                    Paid
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">Tokens</h2>
            <button className="text-xs text-orange-300 hover:text-orange-200">Manage</button>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-slate-400">Current balance</p>
                <p className="text-lg font-semibold text-orange-300 flex items-center gap-2">
                  <Coins className="w-4 h-4" />
                  120 tokens
                </p>
              </div>
            </div>
            <p className="text-slate-400">
              Each new product publish costs <span className="font-semibold text-slate-200">3 tokens</span>. Renewing an
              expired listing costs <span className="font-semibold text-slate-200">1 token</span>.
            </p>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-xs font-semibold py-2 text-white">
              <Coins className="w-4 h-4" /> Buy more tokens
            </button>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-100">Notifications</h2>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-2 text-xs text-slate-300">
              <p>3 new chats from buyers awaiting your response.</p>
              <p>Your token balance is healthy. Consider promoting your top products.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
