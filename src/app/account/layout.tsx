"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, Heart, Store, Star } from "lucide-react";

const navItems = [
  { href: "/account", label: "Overview", icon: User },
  { href: "/account/orders", label: "Orders", icon: ShoppingBag },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/shops", label: "Shops", icon: Store },
  { href: "/account/reviews", label: "Reviews", icon: Star },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 space-y-4">
        <section className="bg-white border rounded-2xl shadow-sm p-4">
          <h1 className="text-base font-extrabold text-gray-900">My Account</h1>
          <p className="text-xs text-gray-600">Manage your profile, orders and saved items.</p>
        </section>
        <nav className="bg-white border rounded-2xl shadow-sm p-2 text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl mb-1 last:mb-0 ${
                  active
                    ? "bg-orange-50 text-orange-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <section className="flex-1 min-w-0 space-y-4">{children}</section>
    </main>
  );
}
