"use client";

import { useAuth } from "@/context/AuthContext";

export default function VendorSettingsPage() {
  const { user } = useAuth();

  return (
    <>
      <section className="space-y-1">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Settings</h1>
        <p className="text-sm text-slate-400">
          Manage your profile, notifications and security preferences for Compdock Seller.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Profile</h2>
            <div className="space-y-1 text-xs">
              <label className="text-slate-300" htmlFor="name">
                Display name
              </label>
              <input
                id="name"
                defaultValue={user?.name ?? "Seller"}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="text-slate-300" htmlFor="email">
                Contact email
              </label>
              <input
                id="email"
                defaultValue={user?.email ?? "seller@example.com"}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="flex justify-end pt-1">
              <button className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-1.5 text-xs font-semibold text-white">
                Save profile
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Notifications</h2>
            <div className="space-y-2 text-xs text-slate-300">
              <label className="flex items-center justify-between gap-3">
                <span>New orders</span>
                <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>New chats from buyers</span>
                <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Low token balance</span>
                <input type="checkbox" defaultChecked className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950" />
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">Security</h2>
            <div className="space-y-2 text-xs text-slate-300">
              <p>Change password and manage login sessions in the full production build.</p>
              <button className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:bg-slate-800">
                Change password (UI only)
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 space-y-2">
            <h2 className="text-sm font-semibold text-slate-100">Shop preferences</h2>
            <p>Configure default fulfilment options, delivery notes and other preferences in a future iteration.</p>
          </div>
        </div>
      </section>
    </>
  );
}
