import Image from "next/image";
import Link from "next/link";
import { MapPin, Truck, Store } from "lucide-react";

const cartItems = [
  {
    id: 1,
    title: "Wireless Mechanical Keyboard",
    priceKES: 7999,
    quantity: 1,
    image: "/image1.jpg",
    vendor: {
      name: "Urban Tech Hub",
      location: "Moi Avenue, Nairobi",
    },
  },
  {
    id: 2,
    title: "Ergonomic Gaming Mouse",
    priceKES: 4950,
    quantity: 2,
    image: "/image2.jpg",
    vendor: {
      name: "Urban Tech Hub",
      location: "Moi Avenue, Nairobi",
    },
  },
];

const getSubtotal = () =>
  cartItems.reduce((sum, item) => sum + item.priceKES * item.quantity, 0);

export default function CheckoutPage() {
  const subtotal = getSubtotal();
  const shipping = 350;
  const total = subtotal + shipping;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Title */}
      <section className="space-y-1 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Checkout</h1>
        <p className="text-sm text-gray-600">
          Confirm your details and choose delivery or pickup from trusted Nairobi tech vendors.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Billing & Shipping Form */}
        <form className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <section className="bg-white rounded-2xl border shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">Contact information</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <input
                type="text"
                placeholder="First name"
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="border rounded-lg px-3 py-2 w-full sm:col-span-2"
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="border rounded-lg px-3 py-2 w-full sm:col-span-2"
                required
              />
            </div>
          </section>

          {/* Delivery vs Pickup */}
          <section className="bg-white rounded-2xl border shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">Delivery or pickup</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <button
                type="button"
                className="flex items-start gap-3 border rounded-xl px-3 py-3 text-left bg-orange-50 border-orange-500"
              >
                <Truck className="w-4 h-4 mt-1 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Doorstep delivery</p>
                  <p className="text-xs text-gray-600">
                    1–3 working days within Nairobi. Rider will call before delivery.
                  </p>
                </div>
              </button>
              <button
                type="button"
                className="flex items-start gap-3 border rounded-xl px-3 py-3 text-left bg-white"
              >
                <Store className="w-4 h-4 mt-1 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Pickup from shop</p>
                  <p className="text-xs text-gray-600">
                    Collect from selected vendor locations across Nairobi.
                  </p>
                </div>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-sm mt-3">
              <input
                type="text"
                placeholder="Estate / building"
                className="border rounded-lg px-3 py-2 w-full sm:col-span-2"
                required
              />
              <input
                type="text"
                placeholder="Town / area"
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Delivery instructions (optional)"
                className="border rounded-lg px-3 py-2 w-full sm:col-span-2"
              />
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-2xl border shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">Payment method</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <button
                type="button"
                className="border rounded-xl px-3 py-3 text-left bg-orange-50 border-orange-500"
              >
                <p className="font-semibold text-gray-900">M-Pesa / Mobile money</p>
                <p className="text-xs text-gray-600">Pay securely via STK push.</p>
              </button>
              <button
                type="button"
                className="border rounded-xl px-3 py-3 text-left bg-white"
              >
                <p className="font-semibold text-gray-900">Card (Visa / Mastercard)</p>
                <p className="text-xs text-gray-600">Processed by a secure payment gateway.</p>
              </button>
            </div>
          </section>
        </form>

        {/* Order Summary */}
        <aside className="bg-white border rounded-2xl p-6 shadow-sm space-y-6 h-fit text-sm">
          <h2 className="text-sm font-semibold text-gray-900 border-b pb-3">Order review</h2>

          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-900 line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-500" /> {item.vendor.location}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Qty {item.quantity} 
                    · KES {item.priceKES.toLocaleString()} each
                  </p>
                </div>
                <p className="text-xs font-semibold text-gray-900">
                  KES {(item.priceKES * item.quantity).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t pt-3 space-y-1 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Items subtotal</span>
              <span>KES {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery (within Nairobi)</span>
              <span>KES {shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 pt-1 text-sm">
              <span>Total to pay</span>
              <span>KES {total.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/order/success"
            className="block text-center w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 font-semibold transition"
          >
            Confirm & pay
          </Link>

          <Link
            href="/cart"
            className="block text-center mt-1 text-xs text-gray-600 hover:text-gray-800"
          >
            Return to cart
          </Link>
        </aside>
      </div>
    </main>
  );
}
