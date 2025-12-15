"use client";

import CategoryCard from "@/components/category/CategoryCard";
import { Monitor, Keyboard, MousePointer2, Laptop, Headphones, Router, HardDrive, Gamepad2 } from "lucide-react";

const categories = [
  { slug: "laptops", name: "Laptops & Ultrabooks", icon: Laptop },
  { slug: "desktops", name: "Desktops & Workstations", icon: Monitor },
  { slug: "monitors", name: "Monitors & Displays", icon: Monitor },
  { slug: "keyboards", name: "Keyboards", icon: Keyboard },
  { slug: "mice", name: "Mice & Pointing Devices", icon: MousePointer2 },
  { slug: "audio", name: "Headsets & Audio", icon: Headphones },
  { slug: "networking", name: "Routers & Networking", icon: Router },
  { slug: "storage", name: "Storage & SSDs", icon: HardDrive },
  { slug: "components", name: "PC Components", icon: HardDrive },
  { slug: "gaming", name: "Gaming & Consoles", icon: Gamepad2 },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <section className="space-y-2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Shop by Category
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
          Browse professional IT categories from trusted multivendor shops across Nairobi.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <CategoryCard
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                name={cat.name}
                icon={<Icon className="w-5 h-5" />}
                itemsCount={Math.floor(Math.random() * 400) + 20}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
