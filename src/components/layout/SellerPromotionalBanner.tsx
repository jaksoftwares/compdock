"use client";

import Link from "next/link";

export default function SellerPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 text-center text-sm md:text-base">
      Want to sell on <span className="font-bold">CompDock</span>?{" "}
      <Link
        href="/vendor/register"
        className="underline font-semibold hover:text-black"
      >
        Join as a Vendor
      </Link>{" "}
      | Use <Link href="/epay" className="underline font-semibold hover:text-black">CompDock ePay</Link> for secure transactions!
    </div>
  );
}
