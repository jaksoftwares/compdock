import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const cartItems = [
  {
    id: 1,
    title: "Wireless Mechanical Keyboard",
    priceKES: 7999,
    quantity: 1,
    image: "/image1.jpg",
    vendor: {
      name: "Urban Tech Hub",
      slug: "urban-tech-hub",
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
      slug: "urban-tech-hub",
    },
  },
  {
    id: 3,
    title: "4K USB-C Monitor",
    priceKES: 25999,
    quantity: 1,
    image: "/image3.jpg",
    vendor: {
      name: "Digital Republic",
      slug: "digital-republic",
    },
  },
];

const groupByVendor = () => {
  const map = new Map<string, { name: string; slug: string; items: typeof cartItems }>();
  for (const item of cartItems) {
    const key = item.vendor.slug;
    const existing = map.get(key);
    if (existing) {
      existing.items.push(item);
    } else {
      map.set(key, { name: item.vendor.name, slug: item.vendor.slug, items: [item] });
    }
  }
  return Array.from(map.values());
};

const getVendorTotal = (items: typeof cartItems) =>
  items.reduce((total, item) => total + item.priceKES * item.quantity, 0);

const getCartTotal = () =>
  groupByVendor().reduce((sum, vendor) => sum + getVendorTotal(vendor.items), 0);

export default function CartPage() {
  const groups = groupByVendor();
  const grandTotal = getCartTotal();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <section className="space-y-1 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Your Cart</h1>
        <p className="text-sm text-gray-600">
          Items are grouped by vendor. You can chat with each seller before checkout.
        </p>
      </section>

      {/* Cart Content */}
      <section className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Cart Items grouped by vendor */}
        <div className="lg:col-span-2 space-y-6">
          {groups.map((group) => (
            <div key={group.slug} className="bg-white border rounded-2xl shadow-sm p-4 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">{group.name}</h2>
                  <p className="text-xs text-gray-500">Multivendor partner • Nairobi</p>
                </div>
                <button className="inline-flex items-center gap-1 rounded-full border border-orange-500 text-orange-600 text-xs font-semibold px-3 py-1.5 hover:bg-orange-50">
                  <MessageCircle className="w-4 h-4" />
                  Chat seller
                </button>
              </div>

              <div className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-xl p-3"
                  >
                    <div className="w-full sm:w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1 text-center sm:text-left">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        KES {item.priceKES.toLocaleString()} each
                      </p>
                      <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                        <button className="px-2 py-1 rounded-full border text-xs">-</button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button className="px-2 py-1 rounded-full border text-xs">+</button>
                        <button className="ml-3 text-xs text-gray-500 hover:text-red-600">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      KES {(item.priceKES * item.quantity).toLocaleString()
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2 border-t text-xs text-gray-600">
                <span>Vendor subtotal</span>
                <span className="font-semibold text-gray-900">
                  KES {getVendorTotal(group.items).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <aside className="bg-white p-6 rounded-2xl border space-y-6 shadow-sm h-fit">
          <h2 className="text-sm font-semibold text-gray-900">Order summary</h2>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Items total</span>
              <span>KES {grandTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated delivery</span>
              <span>KES 350</span>
            </div>
            <div className="flex justify-between">
              <span>Service & handling</span>
              <span>KES 0</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 pt-1 text-sm">
              <span>Total</span>
              <span>KES {(grandTotal + 350).toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/checkout"
              className="block text-center rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 transition"
            >
              Proceed to checkout
            </Link>
            <Link
              href="/products"
              className="block text-center rounded-full border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium py-2.5 transition"
            >
              Continue shopping
            </Link>
          </div>

          <p className="text-[11px] text-gray-500 text-center">
            Prices and availability are subject to change at checkout depending on vendor
            confirmation.
          </p>
        </aside>
      </section>
    </main>
  );
}
