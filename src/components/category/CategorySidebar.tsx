// components/CategorySidebar.tsx
import { useState, useRef, useEffect } from 'react';
import { categories, Category } from '@/constants/categories';
import Breadcrumb from './Breadcrumb';

const CategorySidebar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [flyoutPosition, setFlyoutPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryHover = (categoryId: string, event: React.MouseEvent) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setFlyoutPosition({
        top: event.currentTarget.getBoundingClientRect().top - rect.top,
        left: rect.width
      });
    }
    
    setActiveCategory(categoryId);
    setIsVisible(true);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsVisible(false);
    setActiveCategory(null);
  };

  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => {
      setIsVisible(false);
      setActiveCategory(null);
    }, 200);
  };

  const findCategory = (id: string, categories: Category[]): Category | undefined => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.children) {
        const found = findCategory(id, category.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  const activeCategoryData = activeCategory ? findCategory(activeCategory, categories) : null;

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      {/* Breadcrumb */}
      <Breadcrumb currentCategoryId={selectedCategory} />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <div 
          ref={sidebarRef}
          className="w-64 bg-gray-50 border-r border-gray-200 shadow-inner overflow-y-auto"
        >
          <h2 className="px-4 py-5 text-lg font-bold text-gray-800 border-b sticky top-0 bg-white z-10">
            IT Product Categories
          </h2>
          <ul className="py-2">
            {categories.map((category) => (
              <li 
                key={category.id}
                onMouseEnter={(e) => handleCategoryHover(category.id, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{category.name}</span>
                  {category.children && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Category Flyout */}
        {isVisible && activeCategoryData && (
          <div 
            className={`absolute bg-white border border-gray-200 shadow-lg rounded-md py-3 z-20 transition-opacity duration-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: `${flyoutPosition.top}px`,
              left: `${flyoutPosition.left}px`,
              minWidth: '320px'
            }}
            onMouseEnter={() => hoverTimer.current && clearTimeout(hoverTimer.current)}
            onMouseLeave={handleMouseLeave}
          >
            <CategoryFlyout 
              category={activeCategoryData} 
              onCategoryClick={handleCategoryClick}
            />
          </div>
        )}
        
        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {selectedCategory ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {findCategory(selectedCategory, categories)?.name} Products
              </h2>
              <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-12 text-center">
                <p className="text-gray-500 mb-4">Products will be displayed here</p>
                <p className="text-sm text-gray-400">Selected category: {selectedCategory}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-12 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">IT Accessories Marketplace</h2>
                <p className="text-gray-600 max-w-lg">
                  Browse our extensive catalog of IT products and accessories. 
                  Select a category from the sidebar to view products.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Recursive component for nested categories
const CategoryFlyout = ({ 
  category, 
  onCategoryClick 
}: { 
  category: Category; 
  onCategoryClick: (id: string) => void;
}) => {
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b">
        {category.name}
      </h3>
      
      <ul className="space-y-2">
        {category.children?.map((child) => (
          <li 
            key={child.id}
            className="relative group"
            onMouseEnter={() => setHoveredSub(child.id)}
            onMouseLeave={() => setHoveredSub(null)}
          >
            <div 
              className="flex items-center justify-between py-1 px-2 rounded hover:bg-blue-50 cursor-pointer"
              onClick={() => onCategoryClick(child.id)}
            >
              <span className="text-gray-700">{child.name}</span>
              {child.children && (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            
            {/* Third-level flyout */}
            {child.children && hoveredSub === child.id && (
              <div className="absolute left-full top-0 ml-1 bg-white border border-gray-200 shadow-lg rounded-md py-3 w-64 z-30">
                <ul className="space-y-2 p-2">
                  {child.children.map((grandchild) => (
                    <li 
                      key={grandchild.id} 
                      className="py-1 px-2 rounded hover:bg-blue-50 cursor-pointer"
                      onClick={() => onCategoryClick(grandchild.id)}
                    >
                      <span className="text-gray-700">{grandchild.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;