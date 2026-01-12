'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { products as allProducts } from '@/constants/products';
import EmptyState from '@/components/common/EmptyState';
import ProductCard from '@/components/home/ProductCard';
import Breadcrumb from '@/components/category/Breadcrumb';
import CategoryFiltersPanel from '@/components/category/CategoryFiltersPanel';
import RelatedCategories from '@/components/category/RelatedCategories';
import {
  parseSlugToCategory,
  getCategoryBreadcrumbs,
  getCategoryChildren,
  hasCategoryChildren,
  getCategoryDescription,
  getCategoryUrl,
  categoryIdToSlug,
} from '@/lib/categoryUtils';
import { Menu, X } from 'lucide-react';

const BRANDS = [
  { label: 'HP', value: 'hp', count: 145 },
  { label: 'Dell', value: 'dell', count: 128 },
  { label: 'Lenovo', value: 'lenovo', count: 112 },
  { label: 'ASUS', value: 'asus', count: 98 },
  { label: 'Acer', value: 'acer', count: 87 },
  { label: 'Apple', value: 'apple', count: 76 },
];

const CONDITIONS = [
  { label: 'New', value: 'new', count: 432 },
  { label: 'Refurbished', value: 'refurbished', count: 218 },
  { label: 'Used', value: 'used', count: 156 },
];

export default function CategoryPage() {
  const params = useParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [currentPage, setCurrentPage] = useState(1);

  // Parse slug to category
  const slugArray = Array.isArray(params?.slug) ? params.slug : [params?.slug];
  const category = useMemo(() => parseSlugToCategory(slugArray), [slugArray]);
  const breadcrumbs = useMemo(
    () => (category ? getCategoryBreadcrumbs(category.id) : []),
    [category]
  );
  const categoryChildren = useMemo(
    () => (category && hasCategoryChildren(category.id) ? getCategoryChildren(category.id) : []),
    [category]
  );

  // If category not found, show 404
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Breadcrumb />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <EmptyState
            title="Category Not Found"
            description="We couldn't find the category you're looking for."
          />
        </div>
      </div>
    );
  }

  // Filter products based on category and filters
  const filteredProducts = useMemo(() => {
    let items = allProducts.filter((p) =>
      p.category.toLowerCase().includes(category.name.toLowerCase())
    );

    // Price filter
    items = items.filter(
      (p) => p.priceKES >= priceRange[0] && p.priceKES <= priceRange[1]
    );

    // Brand filter
    if (selectedBrands.length > 0) {
      items = items.filter((p) =>
        selectedBrands.some((brand) =>
          p.tags?.some((tag) => tag.toLowerCase() === brand.toLowerCase())
        )
      );
    }

    // Rating filter
    if (selectedRating !== null) {
      items = items.filter((p) => (p.rating || 0) >= selectedRating);
    }

    // Sorting
    const sorted = [...items];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.priceKES - b.priceKES);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.priceKES - a.priceKES);
        break;
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        break;
      case 'popularity':
      default:
        // Keep original order or add view count if available
        break;
    }

    return sorted;
  }, [category.name, priceRange, selectedBrands, selectedRating, sortBy]);

  // Pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categoryDescription = getCategoryDescription(category);
  const hasChildren = categoryChildren.length > 0;
  const breadcrumbItems = breadcrumbs.slice(0, -1); // All except the current category

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <Breadcrumb categoryId={category.id} />

      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">{categoryDescription}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>{filteredProducts.length} Products Available</span>
            <span>•</span>
            <span>Updated Today</span>
          </div>
        </div>
      </div>

      {/* Subcategories (if any) */}
      {hasChildren && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Explore Subcategories</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categoryChildren.slice(0, 6).map((child) => {
                const slug = categoryIdToSlug(child.id);
                const href = getCategoryUrl(child.id);
                return (
                  <a
                    key={child.id}
                    href={href}
                    className="group p-4 text-center border border-gray-200 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-all"
                  >
                    <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      {child.name}
                    </p>
                  </a>
                );
              })}
            </div>
            {categoryChildren.length > 6 && (
              <p className="text-sm text-gray-600 mt-4">
                +{categoryChildren.length - 6} more subcategories
              </p>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>
              <CategoryFiltersPanel
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                selectedBrands={selectedBrands}
                onBrandChange={setSelectedBrands}
                selectedRating={selectedRating}
                onRatingChange={setSelectedRating}
                brands={BRANDS}
                conditions={CONDITIONS}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
          </aside>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {showMobileFilters ? (
                  <>
                    <X className="w-4 h-4" />
                    Hide Filters
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4" />
                    Show Filters
                  </>
                )}
              </button>
            </div>

            {/* Mobile Filters */}
            {showMobileFilters && (
              <div className="lg:hidden mb-6 bg-white rounded-lg border border-gray-200 p-6">
                <CategoryFiltersPanel
                  priceRange={priceRange}
                  onPriceChange={setPriceRange}
                  selectedBrands={selectedBrands}
                  onBrandChange={setSelectedBrands}
                  selectedRating={selectedRating}
                  onRatingChange={setSelectedRating}
                  brands={BRANDS}
                  conditions={CONDITIONS}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            )}

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>

                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }).map((_, i) => {
                        const page = i + 1;
                        const isNear = Math.abs(page - currentPage) <= 1;
                        const isStart = page === 1;
                        const isEnd = page === totalPages;

                        if (!isStart && !isEnd && !isNear && page !== 2 && page !== totalPages - 1) {
                          if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <span key={page} className="px-2 py-2 text-gray-500">
                                ...
                              </span>
                            );
                          }
                          return null;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-2 rounded-lg transition-colors ${
                              currentPage === page
                                ? 'bg-orange-600 text-white'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState
                title="No Products Found"
                description="Try adjusting your filters or search for something else."
              />
            )}
          </div>
        </div>
      </div>

      {/* Related Categories Section */}
      {categoryChildren.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedCategories
              children={categoryChildren}
              title="Explore Subcategories"
            />
          </div>
        </div>
      )}
    </div>
  );
}
