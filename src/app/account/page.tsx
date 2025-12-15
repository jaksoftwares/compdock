"use client";

import Link from "next/link";
import { ShoppingBag, Heart, MessageCircle, Store } from "lucide-react";

export default function AccountOverviewPage() {
  return (
    <div className="space-y-4">
      <section className="bg-white border rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Welcome back to CompDock</h2>
          <p className="text-xs text-gray-600">
            Track your orders, manage saved items and continue chats with vendors.
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        <Link
          href="/account/orders"
          className="bg-white border rounded-2xl shadow-sm p-4 flex items-start gap-3 hover:border-orange-300"
        >
          <ShoppingBag className="w-4 h-4 mt-1 text-orange-600" />
          <div>
            <p className="font-semibold text-gray-900">Orders</p>
            <p className="text-xs text-gray-600">View your recent and past orders.</p>
          </div>
        </Link>
        <Link
          href="/account/wishlist"
          className="bg-white border rounded-2xl shadow-sm p-4 flex items-start gap-3 hover:border-orange-300"
        >
          <Heart className="w-4 h-4 mt-1 text-orange-600" />
          <div>
            <p className="font-semibold text-gray-900">Wishlist</p>
            <p className="text-xs text-gray-600">Items you saved for later.</p>
          </div>
        </Link>
        <Link
          href="/messages"
          className="bg-white border rounded-2xl shadow-sm p-4 flex items-start gap-3 hover:border-orange-300"
        >
          <MessageCircle className="w-4 h-4 mt-1 text-orange-600" />
          <div>
            <p className="font-semibold text-gray-900">Chats</p>
            <p className="text-xs text-gray-600">Conversations with vendors.</p>
          </div>
        </Link>
        <Link
          href="/account/shops"
          className="bg-white border rounded-2xl shadow-sm p-4 flex items-start gap-3 hover:border-orange-300"
        >
          <Store className="w-4 h-4 mt-1 text-orange-600" />
          <div>
            <p className="font-semibold text-gray-900">Shops</p>
            <p className="text-xs text-gray-600">Vendors you&apos;ve bought from or follow.</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
