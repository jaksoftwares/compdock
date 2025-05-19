import Image from "next/image";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    title: "Wireless Mechanical Keyboard",
    price: 79.99,
    quantity: 1,
    image: "/image1.jpg",
  },
  {
    id: 2,
    title: "Ergonomic Gaming Mouse",
    price: 49.5,
    quantity: 2,
    image: "/image2.jpg",
  },
];

const getSubtotal = () =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default function CheckoutPage() {
  const subtotal = getSubtotal();
  const shipping = 15.0;
  const total = subtotal + shipping;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Billing & Shipping Form */}
        <form className="lg:col-span-2 space-y-10">
          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg p-3 w-full col-span-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-lg p-3 w-full col-span-full"
                required
              />
            </div>
          </section>

          {/* Shipping Address */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Shipping Address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="border rounded-lg p-3 w-full col-span-full"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Country"
                className="border rounded-lg p-3 w-full col-span-full"
                required
              />
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Payment</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                className="border rounded-lg p-3 w-full"
                required
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="border rounded-lg p-3 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border rounded-lg p-3 w-full"
                  required
                />
              </div>
            </div>
          </section>
        </form>

        {/* Order Summary */}
        <aside className="bg-gray-50 border rounded-xl p-6 shadow space-y-6 h-fit">
          <h2 className="text-xl font-semibold border-b pb-4">Order Summary</h2>

          <ul className="space-y-4 text-sm">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded overflow-hidden border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.title}</h4>
                  <p className="text-gray-500">
                    Qty: {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base text-gray-900 pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Confirm & Pay
          </button>

          <Link
            href="/cart"
            className="block text-center mt-2 text-sm text-blue-600 hover:underline"
          >
            Return to Cart
          </Link>
        </aside>
      </div>
    </main>
  );
}
