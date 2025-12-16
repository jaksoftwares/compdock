"use client";

import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { LayoutDashboard, Store, Package, Coins, ShoppingBag, MessageCircle, Star, BarChart3, Wallet, Settings } from "lucide-react";

interface VendorLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/vendor", label: "Overview", icon: LayoutDashboard },
  { href: "/vendor/shop", label: "Shop", icon: Store },
  { href: "/vendor/products", label: "Products", icon: Package },
  { href: "/vendor/tokens", label: "Tokens", icon: Coins },
  { href: "/vendor/orders", label: "Orders", icon: ShoppingBag },
  { href: "/vendor/messages", label: "Messages", icon: MessageCircle },
  { href: "/vendor/reviews", label: "Reviews", icon: Star },
  { href: "/vendor/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/vendor/earnings", label: "Earnings", icon: Wallet },
  { href: "/vendor/settings", label: "Settings", icon: Settings },
];

export default function VendorLayout({ children }: VendorLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isOnboardingRoute =
    pathname === "/vendor/apply" || pathname === "/vendor/onboarding";

  // For onboarding/verification routes, use a clean full-screen layout
  if (isOnboardingRoute) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 xl:w-72 border-r border-slate-800 bg-slate-950/95">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="text-lg font-extrabold tracking-tight">
            Compdock <span className="text-orange-400">Seller</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          <div className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Dashboard
          </div>
          <nav className="px-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => router.push(item.href)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    active
                      ? "bg-orange-500/15 text-orange-300 border border-orange-500/40"
                      : "text-slate-200 hover:bg-slate-800/70"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="px-4 py-4 border-t border-slate-800 text-xs text-slate-500">
          {user ? (
            <>
              Signed in as
              <div className="text-slate-100 font-medium text-sm truncate">{user.name}</div>
              <div className="text-slate-400 truncate">{user.email}</div>
            </>
          ) : (
            <div className="text-slate-400">Not signed in</div>
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-800 bg-slate-950/90 backdrop-blur flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="lg:hidden text-lg font-extrabold tracking-tight">
              Compdock <span className="text-orange-400">Seller</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xs text-slate-400 uppercase tracking-wide">Shop</span>
              <span className="text-sm font-semibold text-slate-100 truncate">{user?.name ?? "Your shop"}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end text-xs">
              <span className="text-slate-400">Token balance</span>
              <span className="font-semibold text-orange-300">120 tokens</span>
            </div>
            <button className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-xs font-semibold px-3 py-1.5 text-white">
              Buy tokens
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-slate-950 px-4 md:px-6 py-4 md:py-6">
          <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
