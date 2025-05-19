export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700">
      {/* Title */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
        <p className="text-gray-600">Last updated: May 19, 2025</p>
      </section>

      {/* Introduction */}
      <section className="space-y-4">
        <p>
          These Terms & Conditions (“Terms”) govern your use of the Compdock website and services. By accessing or using our platform, you agree to be bound by these Terms.
        </p>
      </section>

      {/* Section 1 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">1. Use of Our Services</h2>
        <p>
          You agree to use our website and services only for lawful purposes. You must not use Compdock for any activity that is fraudulent, harmful, or otherwise illegal.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">2. Account Responsibility</h2>
        <p>
          When you create an account with Compdock, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">3. Product Information & Availability</h2>
        <p>
          We make every effort to display accurate product details. However, we do not guarantee the availability or accuracy of product descriptions, pricing, or images.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">4. Payments</h2>
        <p>
          All transactions on Compdock are processed securely. By purchasing a product, you agree to pay the listed price and applicable taxes and fees.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">5. Returns & Refunds</h2>
        <p>
          Our returns policy is outlined on our <a href="/returns" className="text-blue-600 underline">Returns & Refunds</a> page. Please review it before initiating any return.
        </p>
      </section>

      {/* Section 6 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">6. Intellectual Property</h2>
        <p>
          All content on this site—including text, images, logos, and software—is the property of Compdock or its licensors. You may not reproduce or use it without permission.
        </p>
      </section>

      {/* Section 7 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">7. Limitation of Liability</h2>
        <p>
          Compdock shall not be liable for any indirect, incidental, or consequential damages arising from your use of our platform or services.
        </p>
      </section>

      {/* Section 8 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in inappropriate conduct.
        </p>
      </section>

      {/* Section 9 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">9. Changes to These Terms</h2>
        <p>
          Compdock may update these Terms at any time. Continued use of our platform after changes means you accept the new Terms.
        </p>
      </section>

      {/* Section 10 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">10. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us via our <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
        </p>
      </section>
    </main>
  );
}
