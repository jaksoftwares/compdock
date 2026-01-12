"use client";

import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1",
  },
];

export default function ProductCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Featured Products</h2>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[260px] snap-start bg-white border rounded-lg shadow-sm"
          >
            <div className="relative h-40 w-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-blue-600 font-semibold">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
