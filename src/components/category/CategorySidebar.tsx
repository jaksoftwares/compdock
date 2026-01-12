// components/CategorySidebar.tsx
"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { categories, Category } from '@/constants/categories';
import Breadcrumb from './Breadcrumb';
import DealsCarousel from './DealsCarousel';
import { flashSalesProducts } from '@/constants/flashSalesProducts';

const FLYOUT_DELAY = 200;
const FLYOUT_WIDTH = 280;

const CategorySidebar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const activeCategoryData = activeCategory 
    ? findCategoryById(activeCategory, categories) 
    : null;

  const clearHoverTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const hideFlyout = useCallback(() => {
    setActiveCategory(null);
  }, []);

  const handleCategoryHover = useCallback((categoryId: string) => {
    clearHoverTimeout();
    setActiveCategory(categoryId);
  }, [clearHoverTimeout]);

  const handleMouseLeave = useCallback(() => {
    clearHoverTimeout();
    timeoutRef.current = setTimeout(() => {
      hideFlyout();
    }, FLYOUT_DELAY);
  }, [clearHoverTimeout, hideFlyout]);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    hideFlyout();
    setShowMobileMenu(false);
  }, [hideFlyout]);

  useEffect(() => {
    return () => clearHoverTimeout();
  }, [clearHoverTimeout]);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white">
      <Breadcrumb currentCategoryId={selectedCategory} />
      
      {/* Mobile Menu Toggle */}
      {isMobileView && (
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      )}

      <div className={`flex flex-1 gap-0 flex-col ${!isMobileView ? 'lg:flex-row' : 'lg:flex-row'} overflow-hidden`}>
        {/* Sidebar - Desktop and Mobile */}
        {(!isMobileView || showMobileMenu) && (
          <Sidebar
            ref={sidebarRef}
            selectedCategory={selectedCategory}
            activeCategory={activeCategory}
            onCategoryHover={handleCategoryHover}
            onCategoryClick={handleCategoryClick}
            onMouseEnter={clearHoverTimeout}
            onMouseLeave={handleMouseLeave}
            isMobile={showMobileMenu && isMobileView}
          />
        )}

        {/* Flyout Menu - Portal to prevent clipping */}
        {activeCategory && activeCategoryData && !isMobileView && (
          <CategoryFlyoutPortal
            category={activeCategoryData}
            sidebarRef={sidebarRef}
            onCategoryClick={handleCategoryClick}
            onMouseEnter={clearHoverTimeout}
            onMouseLeave={handleMouseLeave}
          />
        )}

        {/* Main Content */}
        <MainContent
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </div>
  );
};

// Sidebar Component
interface SidebarProps {
  selectedCategory: string | null;
  activeCategory: string | null;
  onCategoryHover: (categoryId: string) => void;
  onCategoryClick: (categoryId: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isMobile?: boolean;
}

const Sidebar = React.forwardRef<HTMLDivElement | null, SidebarProps>(
  ({ selectedCategory, activeCategory, onCategoryHover, onCategoryClick, onMouseEnter, onMouseLeave, isMobile }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          ${isMobile ? 'w-full border-b' : 'w-64 border-r lg:border-r lg:border-b-0'}
          bg-gray-50 border-gray-200 overflow-y-auto flex-shrink-0 lg:max-h-screen
          transition-all duration-300 ease-in-out
        `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {!isMobile && (
          <div className="sticky top-0 bg-white border-b border-gray-200 z-20 hidden lg:block">
            <h2 className="px-4 py-5 text-lg font-bold text-gray-800">
              IT Product Categories
            </h2>
          </div>
        )}

        <ul className={`${isMobile ? 'px-4 py-4 space-y-2' : 'py-2'}`}>
          {categories.map((category) => (
            <CategoryListItem
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              isActive={activeCategory === category.id}
              onHover={onCategoryHover}
              onClick={onCategoryClick}
              isMobile={isMobile}
            />
          ))}
        </ul>
      </div>
    );
  }
);

Sidebar.displayName = 'Sidebar';

// Category List Item
interface CategoryListItemProps {
  category: Category;
  isSelected: boolean;
  isActive: boolean;
  onHover: (id: string) => void;
  onClick: (id: string) => void;
  isMobile?: boolean;
}

const CategoryListItem = ({ category, isSelected, isActive, onHover, onClick, isMobile }: CategoryListItemProps) => {
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);

  if (isMobile) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => setShowMobileSubmenu(!showMobileSubmenu)}
          className={`w-full px-4 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between text-left ${
            isSelected
              ? 'bg-blue-100 text-blue-700 font-medium'
              : 'hover:bg-gray-100'
          }`}
        >
          <span className="text-sm font-medium">{category.name}</span>
          {category.children && category.children.length > 0 && (
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showMobileSubmenu ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
        </button>

        {/* Mobile Submenu */}
        {category.children && category.children.length > 0 && showMobileSubmenu && (
          <div className="bg-gray-50 border-t border-gray-200">
            <ul className="space-y-2 p-3">
              {category.children.map((child) => (
                <li key={child.id}>
                  <MobileSubcategoryItem
                    item={child}
                    onCategoryClick={onClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <li
      className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${
        isSelected
          ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500'
          : isActive
          ? 'bg-blue-50 border-l-4 border-blue-300'
          : 'hover:bg-gray-100'
      }`}
      onMouseEnter={() => onHover(category.id)}
    >
      <div className="flex items-center justify-between" onClick={() => onClick(category.id)}>
        <span className="text-sm">{category.name}</span>
        {category.children && category.children.length > 0 && (
          <ChevronIcon />
        )}
      </div>
    </li>
  );
};

// Mobile Subcategory Item
const MobileSubcategoryItem = ({ item, onCategoryClick }: { item: Category; onCategoryClick: (id: string) => void }) => {
  const [showNested, setShowNested] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowNested(!showNested)}
        className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 text-gray-700 text-sm font-medium flex items-center justify-between transition-colors"
      >
        <span>{item.name}</span>
        {item.children && item.children.length > 0 && (
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${showNested ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        )}
      </button>

      {/* Third level items */}
      {item.children && item.children.length > 0 && showNested && (
        <ul className="mt-2 ml-3 space-y-1 border-l-2 border-gray-300 pl-3">
          {item.children.map((grandchild) => (
            <li key={grandchild.id}>
              <button
                onClick={() => onCategoryClick(grandchild.id)}
                className="text-left w-full text-xs text-gray-600 hover:text-blue-600 py-1 px-2 rounded hover:bg-blue-50 transition-colors"
              >
                {grandchild.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Flyout Portal Component
interface FlyoutPortalProps {
  category: Category;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  onCategoryClick: (id: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CategoryFlyoutPortal = ({ category, sidebarRef, onCategoryClick, onMouseEnter, onMouseLeave }: FlyoutPortalProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const flyoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sidebarRef.current) return;

    const sidebarRect = sidebarRef.current.getBoundingClientRect();
    setPosition({
      top: sidebarRect.top,
      left: sidebarRect.right
    });
  }, [sidebarRef]);

  return (
    <div
      ref={flyoutRef}
      className="fixed bg-white border border-gray-200 shadow-xl rounded-lg py-2 z-50 animate-in fade-in duration-150"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        minWidth: `${FLYOUT_WIDTH}px`,
        maxHeight: 'calc(100vh - 120px)',
        overflow: 'hidden'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CategoryFlyout
        category={category}
        onCategoryClick={onCategoryClick}
      />
    </div>
  );
};

// Main Flyout Menu
interface FlyoutProps {
  category: Category;
  onCategoryClick: (id: string) => void;
}

const CategoryFlyout = ({ category, onCategoryClick }: FlyoutProps) => {
  return (
    <div className="p-3">
      <h3 className="text-sm font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-200">
        {category.name}
      </h3>

      {category.children && category.children.length > 0 ? (
        <ul className="space-y-1">
          {category.children.map((child) => (
            <SubcategoryItem
              key={child.id}
              item={child}
              onCategoryClick={onCategoryClick}
            />
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-500 py-2">No subcategories</p>
      )}
    </div>
  );
};

// Subcategory Item with nested menu
interface SubcategoryItemProps {
  item: Category;
  onCategoryClick: (id: string) => void;
}

const SubcategoryItem = ({ item, onCategoryClick }: SubcategoryItemProps) => {
  const [showNested, setShowNested] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={itemRef}
      className="relative group"
      onMouseEnter={() => setShowNested(true)}
      onMouseLeave={() => setShowNested(false)}
    >
      <div
        className="flex items-center justify-between py-2 px-2 rounded hover:bg-blue-50 cursor-pointer text-gray-700 text-sm transition-colors"
        onClick={() => onCategoryClick(item.id)}
      >
        <span>{item.name}</span>
        {item.children && item.children.length > 0 && (
          <ChevronIcon className="w-3 h-3" />
        )}
      </div>

      {/* Nested third-level menu */}
      {item.children && item.children.length > 0 && showNested && (
        <div className="absolute left-full top-0 ml-1 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-50 min-w-max">
          <ul className="space-y-1">
            {item.children.map((grandchild) => (
              <li
                key={grandchild.id}
                className="py-2 px-3 hover:bg-blue-50 cursor-pointer text-gray-700 text-xs whitespace-nowrap transition-colors"
                onClick={() => onCategoryClick(grandchild.id)}
              >
                {grandchild.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Main Content Area
interface MainContentProps {
  selectedCategory: string | null;
  onCategoryClick: (id: string) => void;
}

const MainContent = ({ selectedCategory }: MainContentProps) => {
  const selectedCategoryData = selectedCategory
    ? findCategoryById(selectedCategory, categories)
    : null;

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 w-full">
      {selectedCategory ? (
        <div className="h-full flex flex-col">
          {/* Category Header - Responsive */}
          <div className="bg-white border-b border-gray-200 sticky top-0 z-10 px-4 md:px-8 py-4 md:py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {selectedCategoryData?.name}
            </h1>
            <p className="text-gray-600 text-xs md:text-sm">
              Explore our collection of {selectedCategoryData?.name} products
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Product catalog coming soon</h3>
                <p className="text-sm md:text-base text-gray-600">We&apos;re loading products for {selectedCategoryData?.name}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <DealsCarousel deals={flashSalesProducts} />
        </div>
      )}
    </div>
  );
};

// Chevron Icon Component
const ChevronIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} text-gray-400`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Utility function
function findCategoryById(id: string, categoryList: Category[]): Category | undefined {
  for (const category of categoryList) {
    if (category.id === id) return category;
    if (category.children) {
      const found = findCategoryById(id, category.children);
      if (found) return found;
    }
  }
  return undefined;
}

export default CategorySidebar;



