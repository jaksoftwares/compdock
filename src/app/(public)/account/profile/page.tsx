"use client";

export default function AccountProfilePage() {
  return (
    <section className="bg-white border rounded-2xl shadow-sm p-5 space-y-4 text-sm">
      <div>
        <h2 className="text-sm font-semibold text-gray-900">Profile details</h2>
        <p className="text-xs text-gray-600">Update your personal information.</p>
      </div>
      <form className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Full name"
          className="border rounded-lg px-3 py-2 w-full"
        />
        <input
          type="email"
          placeholder="Email address"
          className="border rounded-lg px-3 py-2 w-full"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="border rounded-lg px-3 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Default delivery address"
          className="border rounded-lg px-3 py-2 w-full sm:col-span-2"
        />
        <button
          type="button"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-4 py-2 text-xs font-semibold hover:bg-orange-600 sm:col-span-2 w-full sm:w-auto"
        >
          Save changes (UI only)
        </button>
      </form>
    </section>
  );
}
