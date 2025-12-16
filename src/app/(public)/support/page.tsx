import { Mail, Phone, MessageCircle, HelpCircle, Truck, RefreshCcw, Shield } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-700 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Customer Support</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Need help? We&apos;re here to assist you with orders, returns, shipping, account issues, and more.
        </p>
      </section>

      {/* Quick Access Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportLinks.map(({ title, description, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            className="border rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition"
          >
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </a>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 p-8 rounded-2xl space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">Still Need Help?</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto">
          If you can&apos;t find your answer in our help topics, feel free to reach out to us directly.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
          <div className="flex-1 p-4 border rounded-xl">
            <Phone className="mx-auto mb-2 text-blue-600" />
            <p className="font-medium">Call Us</p>
            <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
          </div>
          <div className="flex-1 p-4 border rounded-xl">
            <Mail className="mx-auto mb-2 text-blue-600" />
            <p className="font-medium">Email Support</p>
            <p className="text-sm text-gray-600">support@compdock.com</p>
          </div>
          <div className="flex-1 p-4 border rounded-xl">
            <MessageCircle className="mx-auto mb-2 text-blue-600" />
            <p className="font-medium">Live Chat</p>
            <p className="text-sm text-gray-600">Available 9am–6pm (Mon–Fri)</p>
          </div>
        </div>
      </section>

      {/* FAQ Prompt */}
      <section className="text-center space-y-4 pt-10">
        <HelpCircle className="mx-auto w-10 h-10 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Looking for Frequently Asked Questions?</h2>
        <p className="text-gray-600">
          Visit our <a href="/faq" className="text-blue-600 underline">FAQ page</a> for answers to common inquiries.
        </p>
      </section>
    </main>
  );
}

// Support cards data
const supportLinks = [
  {
    title: "Order Help",
    description: "Track orders, update shipping info, or cancel orders.",
    icon: Truck,
    href: "/orders",
  },
  {
    title: "Returns & Refunds",
    description: "Learn about returns, get a refund, or start a return.",
    icon: RefreshCcw,
    href: "/returns",
  },
  {
    title: "Shipping Info",
    description: "Get information on delivery timelines and costs.",
    icon: Truck,
    href: "/shipping",
  },
  {
    title: "Account Assistance",
    description: "Manage your account, password, or preferences.",
    icon: Shield,
    href: "/account",
  },
  {
    title: "Privacy Policy",
    description: "Understand how we handle your personal data.",
    icon: Shield,
    href: "/privacy",
  },
  {
    title: "Contact Us",
    description: "Need to speak directly? Reach out to our team.",
    icon: MessageCircle,
    href: "/contact",
  },
];
