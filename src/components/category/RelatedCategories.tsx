'use client';

import Link from 'next/link';
import { Category } from '@/constants/categories';
import { categoryIdToSlug } from '@/lib/categoryUtils';
import { ChevronRight } from 'lucide-react';

interface RelatedCategoriesProps {
  categories?: Category[];
  related?: Category[];
  title?: string;
  showViewMore?: boolean;
}

export default function RelatedCategories({
  categories: children,
  related,
  title,
  showViewMore = true,
}: RelatedCategoriesProps) {
  const categories = children || related || [];

  if (categories.length === 0) {
    return null;
  }

  // Determine which categories to show
  const displayedCategories = categories.slice(0, 6);
  const hasMore = categories.length > 6;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {title || (children ? 'Subcategories' : 'Related Categories')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayedCategories.map((category) => {
          const slug = categoryIdToSlug(category.id);
          const href = `/categories/${slug}`;

          return (
            <Link
              key={category.id}
              href={href}
              className="group flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-all"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </p>
                {category.children && category.children.length > 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    {category.children.length} subcategories
                  </p>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors flex-shrink-0 ml-2" />
            </Link>
          );
        })}
      </div>

      {hasMore && showViewMore && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            and {categories.length - displayedCategories.length} more
          </p>
        </div>
      )}
    </div>
  );
}
