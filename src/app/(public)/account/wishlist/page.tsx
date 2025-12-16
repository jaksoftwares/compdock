"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function AccountWishlistPage() {
  return (
    <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Wishlist</h2>
          <p className="text-xs text-gray-600">View or edit items saved to your wishlist.</p>
        </div>
      </div>
      <div className="border rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 text-xs text-gray-600">
        <Heart className="w-5 h-5 text-gray-300" />
        <p>
          Wishlist items are available on the main wishlist page.
        </p>
        <Link
          href="/wishlist"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-4 py-2 text-xs font-semibold hover:bg-orange-600"
        >
          Go to wishlist
        </Link>
      </div>
    </section>
  );
}
