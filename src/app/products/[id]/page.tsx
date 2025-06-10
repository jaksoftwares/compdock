import { notFound } from "next/navigation";
import { products } from "@/constants/products";
import Image from "next/image";
import { Star } from "lucide-react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-blue-600 text-2xl font-semibold mb-2">
            KES {product.priceKES.toFixed(2)}
          </p>
          <div className="flex items-center text-yellow-500 mb-4">
            <Star size={20} className="mr-1" /> {product.rating} / 5
          </div>

          <p className="text-gray-700 mb-6">
            Discover premium quality with this item. Trusted by tech vendors across Nairobi.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition">
              Contact Seller
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Category: {product.category}</li>
              <li>
                <span className="block font-medium">Vendor: {product.shop?.name || "Tech Shop"}</span>
                <span className="block">Contact: {product.shop?.contact || "N/A"}</span>
                <span className="block">Location: {product.shop?.location || "Nairobi"}</span>
                </li>
              <li>Availability: In Stock</li>
              <li>Delivery: 1-3 working days within Nairobi</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
