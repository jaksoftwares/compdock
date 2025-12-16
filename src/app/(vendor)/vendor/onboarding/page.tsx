"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function VendorOnboardingStatusPage() {
  const { user } = useAuth();
  const router = useRouter();

  const status = user?.vendorStatus ?? "none";

  const statusConfig: Record<string, { title: string; description: string; tone: "info" | "success" | "danger" }> = {
    none: {
      title: "You haven&apos;t applied to be a vendor yet",
      description:
        "Create a shop profile and submit your details. Our team will review your application and verify your business.",
      tone: "info",
    },
    pending: {
      title: "Your vendor application is under review",
      description:
        "We&apos;re currently reviewing your documents and shop details. This usually takes 1-2 business days.",
      tone: "info",
    },
    approved: {
      title: "You&apos;re an approved vendor!",
      description: "Your shop is live. Go to your vendor dashboard to manage products, orders and payouts.",
      tone: "success",
    },
    rejected: {
      title: "Your vendor application was not approved",
      description:
        "Your application didn&apos;t meet our current requirements. You can update your details and apply again later.",
      tone: "danger",
    },
  };

  const cfg = statusConfig[status];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-400">Vendor onboarding</p>
          <h1 className="text-2xl font-extrabold">Application status</h1>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4 text-sm">
          <div
            className={`rounded-xl border px-4 py-3 text-xs ${
              cfg.tone === "success"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
                : cfg.tone === "danger"
                ? "border-red-500/40 bg-red-500/10 text-red-100"
                : "border-sky-500/40 bg-sky-500/10 text-sky-100"
            }`}
          >
            <p className="font-semibold mb-1">{cfg.title}</p>
            <p>{cfg.description}</p>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <p>
              When your application is approved, you&apos;ll gain access to the full Compdock Seller Dashboard where you can
              manage products, orders, tokens and payouts.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
              <p className="font-semibold text-slate-100">Verification checklist</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Business profile: shop details, Nairobi location, categories and contact numbers.</li>
                <li>Legal & KRA: KRA PIN, director ID / passport and business registration documents.</li>
                <li>Payout details: verified M-Pesa till / paybill or bank account for settlements.</li>
              </ul>
              <p className="text-[11px] text-slate-500">
                The Compdock compliance team reviews these details to protect buyers and ensure only legitimate IT
                businesses sell on the platform.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            {status === "none" && (
              <button
                onClick={() => router.push("/vendor/apply")}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-2 font-semibold text-white"
              >
                Start vendor application
              </button>
            )}

            {status === "pending" && (
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 hover:bg-slate-900 px-4 py-2 font-semibold text-slate-100"
              >
                Continue shopping as a buyer
              </button>
            )}

            {status === "approved" && (
              <button
                onClick={() => router.push("/vendor")}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-2 font-semibold text-white"
              >
                Go to vendor dashboard
              </button>
            )}

            {status === "rejected" && (
              <button
                onClick={() => router.push("/vendor/apply")}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-2 font-semibold text-white"
              >
                Update details and re-apply
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-500">
            Signed in as <span className="font-medium text-slate-100">{user?.email ?? "guest"}</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
