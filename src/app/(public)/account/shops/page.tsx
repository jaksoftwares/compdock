"use client";

import VendorCard from "@/components/vendor/VendorCard";

const mockShops = [
  {
    name: "Urban Tech Hub",
    location: "Moi Avenue, Nairobi",
    rating: 4.6,
    totalProducts: 58,
  },
  {
    name: "Digital Republic",
    location: "Luthuli Avenue, Nairobi",
    rating: 4.4,
    totalProducts: 32,
  },
];

export default function AccountShopsPage() {
  return (
    <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-4 text-sm">
      <div>
        <h2 className="text-sm font-semibold text-gray-900">Your shops</h2>
        <p className="text-xs text-gray-600">Vendors you&apos;ve ordered from or interacted with.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {mockShops.map((shop) => (
          <VendorCard
            key={shop.name}
            name={shop.name}
            location={shop.location}
            rating={shop.rating}
            totalProducts={shop.totalProducts}
          />
        ))}
      </div>
    </section>
  );
}
