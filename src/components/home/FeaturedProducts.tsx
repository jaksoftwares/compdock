"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Gaming Laptop XYZ",
    image: "/image1.jpg",
    price: "KSh 145,000",
    slug: "gaming-laptop-xyz",
  },
  {
    id: 2,
    name: "Mechanical Keyboard Pro",
    image: "/image2.jpg",
    price: "KSh 7,500",
    slug: "mechanical-keyboard-pro",
  },
  {
    id: 3,
    name: "4K LED Monitor 27''",
    image: "/image5.jpg",
    price: "KSh 22,000",
    slug: "4k-led-monitor-27",
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    image: "/image6.jpg",
    price: "KSh 4,200",
    slug: "wireless-gaming-mouse",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-[#ff6f00] font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="bg-[#ff6f00] hover:bg-[#ff8c33] text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
