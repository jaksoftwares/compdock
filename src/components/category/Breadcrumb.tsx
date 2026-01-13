'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { Category } from '@/constants/categories';
import { categoryIdToSlug, getCategoryBreadcrumbs } from '@/lib/categoryUtils';

interface BreadcrumbProps {
  categoryId?: string | null;
  breadcrumbs?: Category[];
}

export default function Breadcrumb({ categoryId, breadcrumbs: providedBreadcrumbs }: BreadcrumbProps) {
  const pathname = usePathname();

  // Use provided breadcrumbs or fetch them
  let breadcrumbs = providedBreadcrumbs || [];
  let currentCategory: Category | null = null;

  if (categoryId && !providedBreadcrumbs) {
    breadcrumbs = getCategoryBreadcrumbs(categoryId);
    if (breadcrumbs.length > 0) {
      currentCategory = breadcrumbs[breadcrumbs.length - 1];
      breadcrumbs = breadcrumbs.slice(0, -1);
    }
  }

  if (breadcrumbs.length === 0 && !currentCategory) {
    const isHome = pathname === '/';
    return (
      <nav className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          {isHome ? (
            <span className="flex items-center text-gray-900 font-medium">
              <Home className="w-4 h-4" />
              <span className="ml-1 hidden sm:inline">Home</span>
            </span>
          ) : (
            <Link
              href="/"
              className="flex items-center hover:text-orange-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="ml-1 hidden sm:inline">Home</span>
            </Link>
          )}
        </div>
      </nav>
    );
  }

  // Build paths progressively
  const allItems = [...breadcrumbs];
  if (currentCategory) {
    allItems.push(currentCategory);
  }

  const breadcrumbItems = allItems.map((item, index) => {
    const slugs = allItems.slice(0, index + 1).map((cat) => categoryIdToSlug(cat.id));
    const href = `/categories/${slugs.join('/')}`;
    return { ...item, href, isLast: index === allItems.length - 1 };
  });

  return (
    <nav className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="flex items-center space-x-1 text-sm text-gray-600 flex-wrap">
        {/* Home link */}
        <Link
          href="/"
          className="flex items-center hover:text-orange-600 transition-colors"
          title="Go to homepage"
        >
          <Home className="w-4 h-4" />
          <span className="ml-1 hidden sm:inline">Home</span>
        </Link>

        {/* Breadcrumb items */}
        {breadcrumbItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            {item.isLast ? (
              <span className="text-gray-900 font-medium truncate">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-orange-600 transition-colors truncate"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
