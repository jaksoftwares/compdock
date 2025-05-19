"use client";

import Image from "next/image";
import { BadgeCheck, Clock, XCircle } from "lucide-react";

const orders = [
  {
    id: "ORD-1023",
    date: "May 10, 2025",
    total: "$249.99",
    status: "Delivered",
    products: [
      {
        name: "Logitech MX Master 3S Mouse",
        image: "/image1.jpg",
        quantity: 1,
        price: "$99.99",
      },
      {
        name: "Dell Ultrasharp 27'' Monitor",
        image: "/image2.jpg",
        quantity: 1,
        price: "$150.00",
      },
    ],
  },
  {
    id: "ORD-1019",
    date: "May 6, 2025",
    total: "$129.00",
    status: "Pending",
    products: [
      {
        name: "Razer BlackWidow V4 Keyboard",
        image: "/image3.jpg",
        quantity: 1,
        price: "$129.00",
      },
    ],
  },
  {
    id: "ORD-1005",
    date: "April 28, 2025",
    total: "$89.00",
    status: "Cancelled",
    products: [
      {
        name: "TP-Link AX3000 Wi-Fi 6 Router",
        image: "/image4.jpg",
        quantity: 1,
        price: "$89.00",
      },
    ],
  },
];

const statusBadge = (status: string) => {
  switch (status) {
    case "Delivered":
      return (
        <span className="inline-flex items-center text-green-600 font-medium">
          <BadgeCheck className="w-5 h-5 mr-1" /> Delivered
        </span>
      );
    case "Pending":
      return (
        <span className="inline-flex items-center text-yellow-600 font-medium">
          <Clock className="w-5 h-5 mr-1" /> Pending
        </span>
      );
    case "Cancelled":
      return (
        <span className="inline-flex items-center text-red-600 font-medium">
          <XCircle className="w-5 h-5 mr-1" /> Cancelled
        </span>
      );
    default:
      return null;
  }
};

export default function OrdersPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Your Orders</h1>
        <p className="text-gray-600 mt-2">
          Track, review and manage all your past orders.
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-6 shadow-sm bg-white space-y-4"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <p className="text-sm text-gray-600">
                  Order ID: <span className="font-medium text-gray-800">{order.id}</span>
                </p>
                <p className="text-sm text-gray-600">Date: {order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total: <strong>{order.total}</strong></p>
                <p className="text-sm">{statusBadge(order.status)}</p>
              </div>
            </div>

            {/* Products List */}
            <div className="divide-y border-t pt-4">
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4"
                >
                  <div className="relative w-16 h-16 rounded overflow-hidden border">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    {product.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
