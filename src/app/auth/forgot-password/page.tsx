"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const emailError = showErrors && !email ? "Email is required" : "";

  return (
    <main className="max-w-md mx-auto px-4 py-10 space-y-6">
      <section className="space-y-2 text-center">
        <h1 className="text-2xl font-extrabold text-gray-900">Reset your password</h1>
        <p className="text-sm text-gray-600">
          Enter the email linked to your CompDock account and we&apos;ll send reset instructions.
        </p>
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Send reset link
          </button>
        </form>

        {submitted && (
          <p className="text-xs text-green-600">
            If an account exists for this email, a reset link has been sent.
          </p>
        )}

        <p className="text-xs text-gray-600 text-center">
          Remembered your password?{" "}
          <Link href="/auth/login" className="text-orange-600 font-semibold hover:underline">
            Go back to login
          </Link>
        </p>
      </section>
    </main>
  );
}
