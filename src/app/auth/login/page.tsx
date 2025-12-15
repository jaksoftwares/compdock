"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    if (!email || !password) return;
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1200);
  };

  const emailError = showErrors && !email ? "Email is required" : "";
  const passwordError = showErrors && !password ? "Password is required" : "";

  return (
    <main className="max-w-md mx-auto px-4 py-10 space-y-6">
      <section className="space-y-2 text-center">
        <h1 className="text-2xl font-extrabold text-gray-900">Welcome back</h1>
        <p className="text-sm text-gray-600">Sign in to manage your orders, chats and wishlist.</p>
      </section>

      <section className="bg-white rounded-2xl border shadow-sm p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700" htmlFor="email">Email</label>
            <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 bg-white ${
              emailError ? "border-red-500" : "border-gray-200 focus-within:border-orange-500"
            }`}>
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-sm outline-none bg-transparent"
                placeholder="you@example.com"
                aria-invalid={!!emailError}
              />
            </div>
            {emailError && <p className="text-xs text-red-600">{emailError}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700" htmlFor="password">Password</label>
            <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 bg-white ${
              passwordError ? "border-red-500" : "border-gray-200 focus-within:border-orange-500"
            }`}>
              <Lock className="w-4 h-4 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 text-sm outline-none bg-transparent"
                placeholder="••••••••"
                aria-invalid={!!passwordError}
              />
            </div>
            {passwordError && <p className="text-xs text-red-600">{passwordError}</p>}
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Forgot password?</span>
            <Link href="/auth/forgot-password" className="text-orange-600 font-semibold hover:underline">
              Reset it
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Continue
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center">
          New to CompDock?{" "}
          <Link href="/auth/register" className="text-orange-600 font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}
