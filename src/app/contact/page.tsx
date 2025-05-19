import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="text-gray-600">
          We&apos;re here to help. Reach out and our team will get back to you.
        </p>
      </section>

      {/* Contact Info + Map */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-gray-600">support@compdock.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-gray-600">
                1234 Tech Avenue<br />
                Silicon City, TX 75001
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Map (Static Image or real iframe if needed) */}
        <div className="w-full h-64 md:h-full">
          <iframe
            title="Compdock Location"
            src="https://maps.google.com/maps?q=Silicon%20Valley&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 rounded-xl p-8 shadow space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Send a Message</h2>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="p-3 border rounded-lg w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border rounded-lg w-full"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 border rounded-lg w-full"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
