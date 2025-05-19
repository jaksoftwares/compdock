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
  {
    id: 3,
    title: "4K USB-C Monitor",
    price: 259.99,
    quantity: 1,
    image: "/image3.jpg",
  },
];

const getTotal = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default function CartPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Your Cart</h1>
        <p className="text-gray-600">Review your items before checking out.</p>
      </section>

      {/* Cart Content */}
      <section className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start border rounded-xl p-4 gap-4 shadow-sm"
            >
              <div className="w-full sm:w-32 h-32 relative rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
                <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                  <button className="bg-gray-200 px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="bg-gray-200 px-2 rounded">+</button>
                </div>
              </div>
              <div className="text-center sm:text-right font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <aside className="bg-gray-50 p-6 rounded-xl border space-y-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 text-base">
              <span>Total</span>
              <span>${(parseFloat(getTotal()) + 15).toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-3">
            <Link
              href="/checkout"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/shop"
              className="block text-center border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 rounded-xl transition"
            >
              Continue Shopping
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
