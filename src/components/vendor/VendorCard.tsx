import Image from "next/image";

interface VendorCardProps {
  name: string;
  logoUrl?: string;
  rating?: number;
  location?: string;
  totalProducts?: number;
}

export default function VendorCard({ name, logoUrl, rating, location, totalProducts }: VendorCardProps) {
  return (
    <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 flex items-center gap-4">
      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
        {logoUrl ? (
          <Image src={logoUrl} alt={name} fill className="object-cover" />
        ) : (
          <span>{name.charAt(0)}</span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{name}</h3>
        {location && <p className="text-xs text-gray-500">{location}</p>}
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
          {typeof rating === "number" && (
            <span className="inline-flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span>{rating.toFixed(1)}</span>
            </span>
          )}
          {typeof totalProducts === "number" && (
            <span className="hidden sm:inline">· {totalProducts} products</span>
          )}
        </div>
      </div>
    </div>
  );
}
