export default function ShippingPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Shipping Policy</h1>
        <p className="text-gray-600">
          Learn how and when we deliver your Compdock orders.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">1. Shipping Locations</h2>
        <p>
          We currently ship across the country and internationally to select regions. To confirm delivery availability, enter your location at checkout.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">2. Processing Time</h2>
        <p>
          Orders are processed within <strong>1–2 business days</strong>. Orders placed on weekends or holidays are processed on the next business day.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">3. Shipping Methods & Rates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Standard Shipping:</strong> 3–7 business days — Free for orders over $75</li>
          <li><strong>Express Shipping:</strong> 1–3 business days — Rates calculated at checkout</li>
          <li><strong>International Shipping:</strong> 7–14 business days — Rates vary by location</li>
        </ul>
        <p className="mt-2">
          Shipping costs are calculated at checkout based on weight, delivery speed, and location.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">4. Order Tracking</h2>
        <p>
          Once your order is shipped, you will receive a confirmation email with a tracking number. You can also track your shipment in the{" "}
          <a href="/orders" className="text-blue-600 underline">Orders</a> section of your account.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">5. Delays & Issues</h2>
        <p>
          Shipping delays may occur due to high order volume, carrier issues, or external factors such as weather. If your order is delayed beyond the estimated timeframe, please{" "}
          <a href="/contact" className="text-blue-600 underline">contact us</a> and we’ll be happy to assist.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">6. Customs, Duties & Taxes (International Orders)</h2>
        <p>
          Compdock is not responsible for any additional charges incurred during international shipping. These costs are the responsibility of the customer and may vary by destination country.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">7. Lost or Stolen Packages</h2>
        <p>
          If your tracking information shows that your order was delivered but you did not receive it, please contact the carrier first. If unresolved, reach out to us and we’ll do our best to help recover your package.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">8. Contact Us</h2>
        <p>
          Questions about shipping? Reach out via our{" "}
          <a href="/contact" className="text-blue-600 underline">Contact Page</a> and our support team will respond promptly.
        </p>
      </section>
    </main>
  );
}
