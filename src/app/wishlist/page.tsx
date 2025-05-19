"use client";

import Image from "next/image";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Logitech G Pro Wireless Mouse",
      price: 129.99,
      image: "/image1.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Razer BlackWidow V4 Keyboard",
      price: 179.99,
      image: "/image2.jpg",
      inStock: false,
    },
    {
      id: 3,
      name: "Samsung 990 Pro NVMe SSD 2TB",
      price: 229.49,
      image: "/image3.jpg",
      inStock: true,
    },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-700">
      {/* Header */}
      <section className="text-center mb-12 space-y-2">
        <Heart className="w-10 h-10 mx-auto text-red-500" />
        <h1 className="text-4xl font-bold text-gray-900">Your Wishlist</h1>
        <p className="text-gray-600">
          Save items you love and easily move them to your cart when you&apos;re ready.
        </p>
      </section>

      {/* Wishlist Items */}
      {wishlist.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map(item => (
            <div
              key={item.id}
              className="border rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-semibold text-lg text-gray-900">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">${item.price.toFixed(2)}</p>
              <p
                className={`text-sm font-medium mb-4 ${
                  item.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.inStock ? "In Stock" : "Out of Stock"}
              </p>
              <div className="mt-auto flex justify-between items-center gap-2">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50"
                  disabled={!item.inStock}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="text-center py-20">
          <Heart className="w-12 h-12 mx-auto text-gray-300" />
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-4">Start saving your favorite products now!</p>
          <a
            href="/shop"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
          >
            Browse Products
          </a>
        </div>
      )}
    </main>
  );
}
