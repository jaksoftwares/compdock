"use client";

import { Star } from "lucide-react";

const mockReviews = [
  {
    product: "Wireless Mechanical Keyboard",
    vendor: "Urban Tech Hub",
    rating: 5,
    createdAt: "2 days ago",
    comment: "Solid build quality and fast delivery.",
  },
];

export default function AccountReviewsPage() {
  return (
    <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-4 text-sm">
      <div>
        <h2 className="text-sm font-semibold text-gray-900">Your reviews</h2>
        <p className="text-xs text-gray-600">Feedback you&apos;ve shared with vendors.</p>
      </div>
      <div className="space-y-3">
        {mockReviews.map((review, idx) => (
          <div key={idx} className="border rounded-xl px-3 py-2 space-y-1">
            <p className="text-xs font-semibold text-gray-900">{review.product}</p>
            <p className="text-[11px] text-gray-500">{review.vendor} • {review.createdAt}</p>
            <div className="flex items-center gap-1 text-[11px] text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < review.rating ? "fill-yellow-500" : ""}`}
                />
              ))}
            </div>
            <p className="text-[11px] text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
