"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const steps = ["Business profile", "Legal & KRA", "Payout details", "Review & submit"] as const;
type Step = (typeof steps)[number];

export default function VendorApplyPage() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("Business profile");

  const goNext = () => {
    const idx = steps.indexOf(currentStep);
    if (idx < steps.length - 1) setCurrentStep(steps[idx + 1]);
  };

  const goPrev = () => {
    const idx = steps.indexOf(currentStep);
    if (idx > 0) setCurrentStep(steps[idx - 1]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      // In real app, send all collected data & documents to backend
      if (user) {
        setUser({ ...user, vendorStatus: "pending" });
      }
      setSubmitting(false);
      router.push("/vendor/onboarding");
    }, 800);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-400">Become a verified vendor</p>
          <h1 className="text-2xl md:text-3xl font-extrabold">Compdock seller verification</h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Share your business, compliance and payout details so the Compdock team can verify your shop before it goes
            live.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6 space-y-4 text-sm">
          {/* Stepper */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-xs">
              {steps.map((step) => {
                const active = step === currentStep;
                const completed = steps.indexOf(step) < steps.indexOf(currentStep);
                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setCurrentStep(step)}
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 border ${
                      active
                        ? "bg-orange-500 text-white border-orange-500"
                        : completed
                        ? "bg-slate-800 text-slate-100 border-slate-700"
                        : "bg-slate-950 text-slate-300 border-slate-800"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center text-[9px]">
                      {steps.indexOf(step) + 1}
                    </span>
                    <span>{step}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-400">
              Signed in as <span className="font-medium text-slate-100">{user?.email ?? "guest"}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {currentStep === "Business profile" && (
              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="shopName">
                      Shop name
                    </label>
                    <input
                      id="shopName"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Urban Tech Hub"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="businessType">
                      Business type
                    </label>
                    <select
                      id="businessType"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select type</option>
                      <option value="sole">Sole proprietor</option>
                      <option value="company">Limited company</option>
                      <option value="retail">Retail shop</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="location">
                      Primary shop location (Nairobi)
                    </label>
                    <input
                      id="location"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Luthuli Avenue, CBD"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="areas">
                      Areas served in Nairobi
                    </label>
                    <input
                      id="areas"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="CBD, Westlands, Kilimani, ..."
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-200">Categories sold</label>
                  <textarea
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 min-h-[72px]"
                    placeholder="Laptops, monitors, components, networking, accessories..."
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="contact">
                      Shop phone / WhatsApp
                    </label>
                    <input
                      id="contact"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="0712 345 678"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="website">
                      Website / social page (optional)
                    </label>
                    <input
                      id="website"
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="e.g. instagram.com/urbantechhub"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === "Legal & KRA" && (
              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="kraPin">
                      KRA PIN
                    </label>
                    <input
                      id="kraPin"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="A123456789B"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="idNumber">
                      Director ID / Passport number
                    </label>
                    <input
                      id="idNumber"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="ID / Passport"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-200" htmlFor="regNumber">
                    Business registration / certificate number
                  </label>
                  <input
                    id="regNumber"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Company or business registration"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-200">Upload supporting documents (UI only)</p>
                  <div className="grid gap-3 md:grid-cols-3 text-[11px] text-slate-400">
                    <div className="h-20 rounded-xl border border-dashed border-slate-700 bg-slate-950 flex items-center justify-center">
                      KRA PIN PDF / image
                    </div>
                    <div className="h-20 rounded-xl border border-dashed border-slate-700 bg-slate-950 flex items-center justify-center">
                      ID / Passport front
                    </div>
                    <div className="h-20 rounded-xl border border-dashed border-slate-700 bg-slate-950 flex items-center justify-center">
                      Business certificate
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    In production, you&apos;ll upload official documents here. For now this is a placeholder.
                  </p>
                </div>
              </div>
            )}

            {currentStep === "Payout details" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-200" htmlFor="payoutMethod">
                    Preferred payout method
                  </label>
                  <select
                    id="payoutMethod"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select payout method</option>
                    <option value="mpesa">M-Pesa Till / Paybill</option>
                    <option value="bank">Bank account</option>
                  </select>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="accountName">
                      Account / Till name
                    </label>
                    <input
                      id="accountName"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Name as per account"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200" htmlFor="accountNumber">
                      Account / Till number
                    </label>
                    <input
                      id="accountNumber"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Account / Till number"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-200" htmlFor="settlementNotes">
                    Settlement notes for Compdock finance team
                  </label>
                  <textarea
                    id="settlementNotes"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 min-h-[72px]"
                    placeholder="Any special payout instructions, e.g. settlement days, reconciliations, etc."
                  />
                </div>
              </div>
            )}

            {currentStep === "Review & submit" && (
              <div className="space-y-3 text-xs text-slate-300">
                <p className="font-semibold text-slate-100">Before you submit</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ensure your legal details (KRA PIN, registration, ID) match your official documents.</li>
                  <li>Provide an accurate payout destination where Compdock can send your earnings.</li>
                  <li>Keep your contact details up to date so the team can reach you if anything needs clarification.</li>
                </ul>

                <div className="flex items-start gap-2 pt-1 text-slate-300">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="mt-0.5 h-3.5 w-3.5 rounded border-slate-600 bg-slate-900"
                  />
                  <label htmlFor="terms">
                    I confirm that the information provided is accurate and I agree to Compdock&apos;s seller terms,
                    including compliance with Kenyan e-commerce and consumer protection regulations.
                  </label>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 text-xs">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentStep === "Business profile"}
                className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-slate-100 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Back
              </button>

              {currentStep !== "Review & submit" ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-1.5 font-semibold text-white"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-1.5 font-semibold text-white disabled:opacity-60"
                >
                  {submitting ? "Submitting application..." : "Submit for verification"}
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
