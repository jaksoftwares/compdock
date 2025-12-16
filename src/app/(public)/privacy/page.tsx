export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600">
          Last updated: May 19, 2025
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
        <p>
          At Compdock, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and disclose your data when you visit or make a purchase from our site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, shipping address, phone number, payment details.</li>
          <li><strong>Device Information:</strong> IP address, browser type, time zone, and cookies.</li>
          <li><strong>Order Information:</strong> Items purchased, order total, and order date.</li>
          <li><strong>Usage Data:</strong> Pages visited, time on site, click activity, and referral source.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To process and fulfill orders</li>
          <li>To provide customer support</li>
          <li>To send updates, promotions, and transactional emails</li>
          <li>To improve our services and website experience</li>
          <li>To detect and prevent fraud</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share your data with trusted third parties such as:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Payment processors (e.g., Stripe, PayPal)</li>
          <li>Shipping providers (e.g., DHL, UPS)</li>
          <li>Marketing and analytics tools (e.g., Google Analytics)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access and review your personal data</li>
          <li>Request corrections to your data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">6. Data Security</h2>
        <p>
          We use industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">7. Cookies</h2>
        <p>
          We use cookies to enhance user experience, track site performance, and enable personalized content. You can control cookie preferences through your browser settings.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">8. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time to reflect operational or legal changes. The latest version will always be available on this page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{" "}
          <a href="/contact" className="text-blue-600 underline">compdock.com/contact</a>
        </p>
      </section>
    </main>
  );
}
