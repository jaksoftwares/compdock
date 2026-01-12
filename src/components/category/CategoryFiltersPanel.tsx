'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FiltersProps {
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
  brands?: FilterOption[];
  conditions?: FilterOption[];
  onSortChange?: (sort: string) => void;
  sortBy?: string;
}

const RATING_OPTIONS = [
  { label: '★★★★★ 4.5+', value: 4.5 },
  { label: '★★★★ 4.0+', value: 4 },
  { label: '★★★ 3.0+', value: 3 },
  { label: '★★ 2.0+', value: 2 },
];

const SORT_OPTIONS = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
];

export default function CategoryFiltersPanel({
  priceRange,
  onPriceChange,
  selectedBrands,
  onBrandChange,
  selectedRating,
  onRatingChange,
  brands = [],
  conditions = [],
  onSortChange,
  sortBy = 'popularity',
}: FiltersProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    price: true,
    brands: true,
    rating: false,
    condition: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleMinPrice = (value: number) => {
    onPriceChange([value, priceRange[1]]);
  };

  const handleMaxPrice = (value: number) => {
    onPriceChange([priceRange[0], value]);
  };

  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandChange([...selectedBrands, brand]);
    }
  };

  return (
    <>
      {/* Sort Dropdown - Mobile & Desktop */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange?.(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-sm font-semibold text-gray-900">Price Range</h3>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>

        {expandedSections.price && (
          <div className="mt-4 space-y-4">
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">Min</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handleMinPrice(Number(e.target.value))}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                  min="0"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">Max</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handleMaxPrice(Number(e.target.value))}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                  min="0"
                />
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="300000"
                value={priceRange[0]}
                onChange={(e) => handleMinPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <input
                type="range"
                min="0"
                max="300000"
                value={priceRange[1]}
                onChange={(e) => handleMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
            </div>
          </div>
        )}
      </div>

      {/* Brands Filter */}
      {brands.length > 0 && (
        <div className="border-b border-gray-200 py-4">
          <button
            onClick={() => toggleSection('brands')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-sm font-semibold text-gray-900">Brand</h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expandedSections.brands ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSections.brands && (
            <div className="mt-4 space-y-2">
              {brands.map((brand) => (
                <label key={brand.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.value)}
                    onChange={() => handleBrandToggle(brand.value)}
                    className="w-4 h-4 accent-orange-600 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{brand.label}</span>
                  {brand.count !== undefined && (
                    <span className="text-xs text-gray-500">({brand.count})</span>
                  )}
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Rating Filter */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-sm font-semibold text-gray-900">Rating</h3>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`}
          />
        </button>

        {expandedSections.rating && (
          <div className="mt-4 space-y-2">
            {RATING_OPTIONS.map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === option.value}
                  onChange={() => onRatingChange(selectedRating === option.value ? null : option.value)}
                  className="w-4 h-4 accent-orange-600 cursor-pointer"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Condition Filter */}
      {conditions.length > 0 && (
        <div className="border-b border-gray-200 py-4">
          <button
            onClick={() => toggleSection('condition')}
            className="flex items-center justify-between w-full text-left"
          >
            <h3 className="text-sm font-semibold text-gray-900">Condition</h3>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expandedSections.condition ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedSections.condition && (
            <div className="mt-4 space-y-2">
              {conditions.map((condition) => (
                <label key={condition.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="w-4 h-4 accent-orange-600 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{condition.label}</span>
                  {condition.count !== undefined && (
                    <span className="text-xs text-gray-500">({condition.count})</span>
                  )}
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
