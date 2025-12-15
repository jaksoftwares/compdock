import Link from "next/link";
import Image from "next/image";
import { Star, Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  priceKES: number;
  imageUrl: string;
  rating: number;
  shopName?: string;
  discountPercent?: number;
}

export default function ProductCard({
  id,
  name,
  priceKES,
  imageUrl,
  rating,
  shopName,
  discountPercent,
}: ProductCardProps) {
  const hasDiscount = typeof discountPercent === "number";
  const discounted = hasDiscount
    ? Math.round(priceKES * (1 - (discountPercent || 0) / 100))
    : priceKES;

  return (
    <div className="group bg-white border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      <Link href={`/product/${id}`} className="relative w-full h-40 sm:h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
        {hasDiscount && (
          <span className="absolute top-2 left-2 text-[10px] font-semibold bg-red-500 text-white px-2 py-0.5 rounded-full">
            -{discountPercent}%
          </span>
        )}
        <button
          type="button"
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-600 hover:text-red-500"
        >
          <Heart className="w-4 h-4" />
        </button>
      </Link>

      <div className="flex-1 flex flex-col px-3 pt-3 pb-3">
        <Link href={`/product/${id}`} className="flex-1">
          <p className="text-xs font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {name}
          </p>
        </Link>

        <div className="mt-1 space-y-0.5">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-orange-600">
              KES {discounted.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-[11px] text-gray-400 line-through">
                KES {priceKES.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span className="inline-flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500" />
              {rating.toFixed(1)}
            </span>
            {shopName && <span className="line-clamp-1">{shopName}</span>}
          </div>
        </div>

        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 hover:bg-orange-600"
        >
          <ShoppingCart className="w-3 h-3" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
