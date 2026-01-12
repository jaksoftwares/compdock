"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Deal {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  stockLeft?: number;
  stockTotal?: number;
}

interface DealsCarouselProps {
  deals: Deal[];
}

const DealsCarousel: React.FC<DealsCarouselProps> = ({ deals }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per view
  const itemsPerView = isMobile ? 2 : 4;
  const totalSlides = Math.ceil(deals.length / itemsPerView);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    autoplayRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [autoplay, currentSlide, totalSlides]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const visibleDeals = deals.slice(currentSlide * itemsPerView, (currentSlide + 1) * itemsPerView);

  return (
    <div className="w-full h-full bg-white p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl md:text-3xl">🔥</span>
            Flash Sales
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1">Limited time deals on popular items</p>
        </div>
        <Link href="/deals" className="text-blue-600 hover:text-blue-700 font-semibold text-xs md:text-sm flex items-center gap-1 transition-colors whitespace-nowrap">
          See All
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Main Carousel Container */}
      <div className="relative">
        {/* Products Grid */}
        <div className={`grid gap-3 md:gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
          {visibleDeals.map((deal) => (
            <ProductCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Navigation Buttons - Hidden on Mobile */}
        {totalSlides > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-500 w-6 md:w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile Navigation - Slide Indicators */}
      {isMobile && totalSlides > 1 && (
        <div className="flex items-center justify-between mt-4 px-2">
          <button
            onClick={handlePrev}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-sm text-gray-600 font-medium">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ deal }: { deal: Deal }) => {
  const savingPercent = deal.oldPrice ? Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100) : null;
  const stockPercent = deal.stockTotal ? Math.round((deal.stockLeft! / deal.stockTotal) * 100) : null;

  return (
    <Link href={`/product/${deal.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-32 md:h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
          <Image
            src={deal.imageUrl}
            alt={deal.name}
            width={200}
            height={200}
            className="object-contain w-full h-full p-2 md:p-3 group-hover:scale-110 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {savingPercent && savingPercent > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{savingPercent}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-2 md:p-3 flex-1 flex flex-col">
          {/* Product Name */}
          <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
            {deal.name}
          </h3>

          {/* Pricing */}
          <div className="mb-2 md:mb-3">
            <div className="flex items-baseline gap-1 md:gap-2">
              <span className="text-base md:text-lg font-bold text-gray-900">
                KSh {deal.price.toLocaleString()}
              </span>
              {deal.oldPrice && (
                <span className="text-xs text-gray-500 line-through">
                  KSh {deal.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Stock Indicator */}
          {deal.stockTotal && stockPercent !== null && (
            <div className="mb-2 md:mb-3">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="flex-1">
                  <div className="w-full h-1 md:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        stockPercent > 50
                          ? "bg-green-500"
                          : stockPercent > 20
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${stockPercent}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
                  {deal.stockLeft}/{deal.stockTotal}
                </span>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-semibold py-1.5 md:py-2 px-3 rounded transition-colors duration-200">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DealsCarousel;