"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Laptops",
    image: "/categories/laptop.jpg",
    link: "/products?category=laptops",
  },
  {
    title: "Desktops",
    image: "/categories/desktop.jpg",
    link: "/products?category=desktops",
  },
  {
    title: "Accessories",
    image: "/categories/accessories.jpg",
    link: "/products?category=accessories",
  },
  {
    title: "Gaming Gear",
    image: "/categories/gaming.jpg",
    link: "/products?category=gaming",
  },
  {
    title: "Networking",
    image: "/categories/networking.jpg",
    link: "/products?category=networking",
  },
  {
    title: "Monitors",
    image: "/categories/monitor.jpg",
    link: "/products?category=monitors",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.link}
              className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-4">
                <h3 className="text-white font-semibold text-lg text-center">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
