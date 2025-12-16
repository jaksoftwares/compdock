"use client";

export default function VendorEarningsPage() {
  const payouts = [
    {
      id: "pay1",
      date: "Mon, 8 Dec",
      amount: "KES 120,000",
      status: "completed",
      reference: "MPESA-XYZ123",
    },
    {
      id: "pay2",
      date: "Mon, 1 Dec",
      amount: "KES 86,400",
      status: "completed",
      reference: "BANK-AB12CD",
    },
  ];

  return (
    <>
      <section className="space-y-1">
        <h1 className="text-xl md:text-2xl font-extrabold text-slate-50">Earnings & payouts</h1>
        <p className="text-sm text-slate-400">
          Review your marketplace earnings, upcoming payouts and settlement history.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm grid gap-3 md:grid-cols-3">
            <div>
              <p className="text-xs text-slate-400">Available balance</p>
              <p className="text-lg font-semibold text-slate-50">KES 48,500</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Pending clearance</p>
              <p className="text-lg font-semibold text-slate-50">KES 32,000</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Last payout</p>
              <p className="text-lg font-semibold text-slate-50">KES 120,000</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs md:text-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-slate-100">Payout history</h2>
              <span className="text-[11px] text-slate-500">Last 60 days</span>
            </div>
            <div className="divide-y divide-slate-800">
              {payouts.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <p className="text-slate-100">{p.amount}</p>
                    <p className="text-[11px] text-slate-500">{p.date}</p>
                  </div>
                  <div className="text-right text-[11px] text-slate-400">
                    <p className="text-emerald-300">Completed</p>
                    <p>{p.reference}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 space-y-2">
            <h2 className="text-sm font-semibold text-slate-100">Payout settings</h2>
            <p>In production, configure your preferred payout method (M-Pesa, bank account) and schedule.</p>
            <p className="text-[11px] text-slate-500">For now this is a UI-only placeholder.</p>
          </div>
        </div>
      </section>
    </>
  );
}
