// components/Breadcrumb.tsx
import { Category, categories } from '@/constants/categories';
import Link from 'next/link';

interface BreadcrumbProps {
  currentCategoryId?: string | null; 
}

const Breadcrumb = ({ currentCategoryId }: BreadcrumbProps) => {
  // Function to find the breadcrumb path for a category
  const findBreadcrumbPath = (id: string, categories: Category[], path: Category[] = []): Category[] | null => {
    for (const category of categories) {
      // If we found the category, return the current path + this category
      if (category.id === id) {
        return [...path, category];
      }
      
      // If this category has children, search recursively
      if (category.children) {
        const newPath = [...path, category];
        const found = findBreadcrumbPath(id, category.children, newPath);
        if (found) return found;
      }
    }
    return null;
  };

  // Get the breadcrumb path for the current category
  const breadcrumbPath = currentCategoryId 
    ? findBreadcrumbPath(currentCategoryId, categories) 
    : null;

  // If no category is selected, show home only
  if (!breadcrumbPath || breadcrumbPath.length === 0) {
    return (
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">All Categories</span>
        </nav>
      </div>
    );
  }

  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4">
      <nav className="flex items-center flex-wrap gap-2">
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
          Home
        </Link>
        <span className="text-gray-300">/</span>
        
        {breadcrumbPath.map((category, index) => (
          <div key={category.id} className="flex items-center gap-2">
            {index === breadcrumbPath.length - 1 ? (
              <span className="text-gray-900 font-medium">{category.name}</span>
            ) : (
              <>
                <Link 
                  href={`/category/${category.id}`} 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {category.name}
                </Link>
                <span className="text-gray-300">/</span>
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;