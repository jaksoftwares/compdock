"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-gray-700">
      <AlertCircle className="w-20 h-20 text-[#ff6f00] mb-6" />
      <h1 className="text-6xl font-extrabold mb-4 tracking-wide">404</h1>
      <p className="text-xl mb-6 max-w-md text-center">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#ff6f00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e65c00] transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
