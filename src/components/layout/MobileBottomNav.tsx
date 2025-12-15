"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid2X2, Percent, ShoppingCart, User } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Categories", icon: Grid2X2 },
  { href: "/deals", label: "Deals", icon: Percent },
  { href: "/cart", label: "Cart", icon: ShoppingCart },
  { href: "/account", label: "Account", icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t bg-white/95 backdrop-blur md:hidden">
      <ul className="flex justify-around py-2 text-xs">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 ${
                  active ? "text-orange-600" : "text-gray-500"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
