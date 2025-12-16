export default function ReturnsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Returns & Refunds</h1>
        <p className="text-gray-600">
          Hassle-free returns to give you peace of mind.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">1. Return Eligibility</h2>
        <p>
          We accept returns within <strong>14 days</strong> of delivery. Items must be:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>In original packaging</li>
          <li>Unused and in resellable condition</li>
          <li>Accompanied by a receipt or proof of purchase</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">2. Non-returnable Items</h2>
        <p>
          The following items are not eligible for return:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Opened software and digital goods</li>
          <li>Gift cards</li>
          <li>Clearance and final sale items</li>
          <li>Used or damaged products not due to our error</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">3. How to Return</h2>
        <p>To initiate a return, follow these steps:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Go to your <strong>Orders</strong> page and click &quote;Request Return&quote;.</li>
          <li>Pack the item securely in its original box with all accessories.</li>
          <li>Ship it to the return address provided in your return instructions.</li>
        </ol>
        <p className="mt-2">You are responsible for return shipping unless the item arrived damaged or incorrect.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">4. Refunds</h2>
        <p>
          Once your return is received and inspected, we will notify you via email.
          Approved refunds will be issued to your original payment method within <strong>5–10 business days</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">5. Exchanges</h2>
        <p>
          To exchange an item, please initiate a return and place a new order for the item you wish to receive.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">6. Damaged or Incorrect Items</h2>
        <p>
          If your order arrives damaged or the wrong item was sent, please contact us within <strong>48 hours</strong> of delivery at{" "}
          <a href="/contact" className="text-blue-600 underline">compdock.com/contact</a>. We will arrange a replacement or refund at no extra cost.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">7. Contact Us</h2>
        <p>
          If you have any questions about our return policy, feel free to reach out via our{" "}
          <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
        </p>
      </section>
    </main>
  );
}
