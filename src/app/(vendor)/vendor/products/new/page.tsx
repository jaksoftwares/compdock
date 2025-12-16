"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Coins } from "lucide-react";

const steps = ["Basic info", "Pricing & stock", "Media", "Delivery & pickup", "Review & publish"] as const;

type Step = (typeof steps)[number];

export default function VendorNewProductPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("Basic info");

  const goNext = () => {
    const idx = steps.indexOf(currentStep);
    if (idx < steps.length - 1) setCurrentStep(steps[idx + 1]);
  };

  const goPrev = () => {
    const idx = steps.indexOf(currentStep);
    if (idx > 0) setCurrentStep(steps[idx - 1]);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/vendor/products");
  };

  return (
    <form onSubmit={handlePublish} className="space-y-5">
      <section className="space-y-2">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">New product</h1>
        <p className="text-sm text-slate-400">
          Create a high-quality listing. Clear titles, accurate specs and competitive pricing improve your conversion
          rate.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-4">
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
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 border text-[11px] ${
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

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Coins className="w-4 h-4 text-orange-300" />
            <span>
              Publishing this product will consume <span className="font-semibold text-orange-200">3 tokens</span>.
            </span>
          </div>
        </div>

        {currentStep === "Basic info" && (
          <div className="space-y-3 text-sm">
            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="name">
                Product name
              </label>
              <input
                id="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                placeholder="e.g. Lenovo ThinkPad X1 Carbon (Gen 11)"
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select category</option>
                  <option value="laptops">Laptops</option>
                  <option value="monitors">Monitors</option>
                  <option value="keyboards">Keyboards</option>
                  <option value="storage">Storage</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="brand">
                  Brand
                </label>
                <input
                  id="brand"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g. Lenovo"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 min-h-[96px]"
                placeholder="Highlight key specs, condition and what&apos;s included."
              />
            </div>
          </div>
        )}

        {currentStep === "Pricing & stock" && (
          <div className="space-y-3 text-sm">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="price">
                  Price (KES)
                </label>
                <input
                  id="price"
                  type="number"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="discount">
                  Discount (%)
                </label>
                <input
                  id="discount"
                  type="number"
                  min={0}
                  max={90}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-300" htmlFor="stock">
                  Stock quantity
                </label>
                <input
                  id="stock"
                  type="number"
                  required
                  min={0}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="condition">
                Condition
              </label>
              <select
                id="condition"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select condition</option>
                <option value="new">Brand new</option>
                <option value="used">Used - like new</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === "Media" && (
          <div className="space-y-3 text-sm">
            <p className="text-xs text-slate-300">
              Upload clear photos of the actual product where possible. Good images significantly increase buyer trust.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {[1, 2, 3].map((slot) => (
                <div
                  key={slot}
                  className="h-28 rounded-xl border border-dashed border-slate-700 bg-slate-950 flex items-center justify-center text-[11px] text-slate-400"
                >
                  Image slot {slot}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === "Delivery & pickup" && (
          <div className="space-y-3 text-sm">
            <div className="space-y-1">
              <p className="text-xs text-slate-300">Fulfilment options</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <label className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-slate-100 cursor-pointer">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950" />
                  <span>Delivery within Nairobi</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-slate-100 cursor-pointer">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-950" />
                  <span>Pickup from shop</span>
                </label>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="deliveryNotes">
                Delivery & pickup notes
              </label>
              <textarea
                id="deliveryNotes"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 min-h-[72px]"
                placeholder="e.g. Same-day delivery within CBD, free pickup from Luthuli Avenue."
              />
            </div>
          </div>
        )}

        {currentStep === "Review & publish" && (
          <div className="space-y-3 text-sm">
            <p className="text-xs text-slate-300">
              Review your listing and confirm token usage before publishing. You can edit or unpublish later from the
              Products page.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs space-y-2 text-slate-200">
              <p>
                Publishing will consume <span className="font-semibold text-orange-200">3 tokens</span> from your shop
                balance.
              </p>
              <p>
                If you unpublish and later re-activate this listing, renewal will consume
                <span className="font-semibold text-slate-50"> 1 token</span>.
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 text-xs">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentStep === "Basic info"}
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-slate-100 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {currentStep !== "Review & publish" ? (
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
              className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 px-5 py-1.5 font-semibold text-white"
            >
              Confirm & publish
            </button>
          )}
        </div>
      </section>
    </form>
  );
}
