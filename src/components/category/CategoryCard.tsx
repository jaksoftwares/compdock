import Link from "next/link";
import { ReactNode } from "react";

interface CategoryCardProps {
  href: string;
  name: string;
  icon?: ReactNode;
  itemsCount?: number;
}

export default function CategoryCard({ href, name, icon, itemsCount }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-lg">
        {icon ?? name.charAt(0)}
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900 text-sm group-hover:text-orange-600 line-clamp-1">{name}</p>
        {typeof itemsCount === "number" && (
          <p className="text-xs text-gray-500">{itemsCount.toLocaleString()} items</p>
        )}
      </div>
    </Link>
  );
}
