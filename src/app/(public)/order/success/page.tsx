"use client";

import Link from "next/link";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-8 text-center">
      <div className="flex justify-center">
        <CheckCircle2 className="w-14 h-14 text-green-500" />
      </div>
      <section className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Order placed successfully
        </h1>
        <p className="text-sm text-gray-600">
          Your CompDock order has been shared with the vendor(s). You&apos;ll receive a call or SMS
          shortly to confirm delivery or pickup.
        </p>
      </section>

      <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-3 text-sm text-left">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900">Order #CD-2025-0001</p>
            <p className="text-xs text-gray-500">Placed today • Mock data</p>
          </div>
          <span className="text-xs rounded-full bg-green-50 text-green-700 px-3 py-1 font-semibold">
            Pending confirmation
          </span>
        </div>
        <div className="flex items-start gap-2 text-xs text-gray-600">
          <MapPin className="w-3 h-3 text-orange-500 mt-0.5" />
          <p>
            Delivery within Nairobi. Your exact location and timing will be confirmed by phone
            with the vendor.
          </p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row justify-center gap-3 text-sm">
        <Link
          href="/account/orders/CD-2025-0001"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-4 py-2 font-semibold hover:bg-orange-600"
        >
          View order details
        </Link>
        <Link
          href="/messages"
          className="inline-flex items-center justify-center gap-1 rounded-full border border-gray-200 text-gray-700 px-4 py-2 font-semibold hover:bg-gray-50"
        >
          <MessageCircle className="w-4 h-4" />
          Chat with vendor
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 text-gray-700 px-4 py-2 font-semibold hover:bg-gray-50"
        >
          Continue shopping
        </Link>
      </section>
    </main>
  );
}
