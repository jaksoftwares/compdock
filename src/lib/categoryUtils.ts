import { categories, Category } from '@/constants/categories';

/**
 * Find a category by its ID or slug
 */
export function findCategoryById(id: string): Category | null {
  function search(cats: Category[]): Category | null {
    for (const cat of cats) {
      if (cat.id === id) {
        return cat;
      }
      if (cat.children) {
        const found = search(cat.children);
        if (found) return found;
      }
    }
    return null;
  }
  return search(categories);
}

/**
 * Convert category ID to URL-friendly slug
 */
export function categoryIdToSlug(id: string): string {
  return id.replace(/_/g, '-');
}

/**
 * Convert URL slug to category ID
 */
export function slugToCategoryId(slug: string): string {
  return slug.replace(/-/g, '_');
}

/**
 * Get the full breadcrumb path for a category
 */
export function getCategoryBreadcrumbs(categoryId: string): Category[] {
  const breadcrumbs: Category[] = [];

  function search(cats: Category[], target: string): boolean {
    for (const cat of cats) {
      if (cat.id === target) {
        breadcrumbs.push(cat);
        return true;
      }
      if (cat.children) {
        if (search(cat.children, target)) {
          breadcrumbs.unshift(cat);
          return true;
        }
      }
    }
    return false;
  }

  search(categories, categoryId);
  return breadcrumbs;
}

/**
 * Get immediate children of a category
 */
export function getCategoryChildren(categoryId: string): Category[] {
  const category = findCategoryById(categoryId);
  return category?.children || [];
}

/**
 * Check if a category has children
 */
export function hasCategoryChildren(categoryId: string): boolean {
  const category = findCategoryById(categoryId);
  return (category?.children?.length || 0) > 0;
}

/**
 * Get all leaf categories (final level with no children)
 */
export function getLeafCategories(): Category[] {
  const leaves: Category[] = [];

  function traverse(cats: Category[]) {
    for (const cat of cats) {
      if (!cat.children || cat.children.length === 0) {
        leaves.push(cat);
      } else {
        traverse(cat.children);
      }
    }
  }

  traverse(categories);
  return leaves;
}

/**
 * Get all categories at a specific depth level
 */
export function getCategoriesByDepth(depth: number): Category[] {
  const result: Category[] = [];
  let currentLevel = categories;
  let currentDepth = 0;

  if (depth === 0) {
    return categories;
  }

  function traverse(cats: Category[], d: number) {
    if (d === depth) {
      result.push(...cats);
      return;
    }
    for (const cat of cats) {
      if (cat.children) {
        traverse(cat.children, d + 1);
      }
    }
  }

  traverse(categories, 0);
  return result;
}

/**
 * Get the depth level of a category
 */
export function getCategoryDepth(categoryId: string): number {
  const breadcrumbs = getCategoryBreadcrumbs(categoryId);
  return breadcrumbs.length - 1;
}

/**
 * Parse slug array to get category ID
 */
export function parseSlugToCategory(slugArray: string | string[]): Category | null {
  const slugs = Array.isArray(slugArray) ? slugArray : [slugArray];
  
  if (slugs.length === 0) {
    return null;
  }

  // Get the last slug (the actual category)
  const lastSlug = slugs[slugs.length - 1];
  const categoryId = slugToCategoryId(lastSlug);

  return findCategoryById(categoryId);
}

/**
 * Get related categories (siblings, parent, etc.)
 */
export function getRelatedCategories(categoryId: string): Category[] {
  const breadcrumbs = getCategoryBreadcrumbs(categoryId);

  if (breadcrumbs.length === 0) {
    return [];
  }

  // Get siblings
  if (breadcrumbs.length === 1) {
    // Root category: return all root categories except this one
    return categories.filter((cat) => cat.id !== categoryId);
  } else {
    // Child category: return siblings
    const parent = breadcrumbs[breadcrumbs.length - 2];
    return (parent.children || []).filter((cat) => cat.id !== categoryId);
  }
}

/**
 * Build full URL path for a category
 */
export function getCategoryUrl(categoryId: string): string {
  const breadcrumbs = getCategoryBreadcrumbs(categoryId);
  if (breadcrumbs.length === 0) {
    return '/';
  }

  const slugs = breadcrumbs.map((cat) => categoryIdToSlug(cat.id));
  return `/categories/${slugs.join('/')}`;
}

/**
 * Check if one category is parent of another
 */
export function isParentCategory(parentId: string, childId: string): boolean {
  const breadcrumbs = getCategoryBreadcrumbs(childId);
  return breadcrumbs.some((cat) => cat.id === parentId);
}

/**
 * Get all parent categories (ancestors)
 */
export function getParentCategories(categoryId: string): Category[] {
  const breadcrumbs = getCategoryBreadcrumbs(categoryId);
  // Exclude the category itself, return all ancestors
  return breadcrumbs.slice(0, -1);
}

/**
 * Search categories by name
 */
export function searchCategories(query: string): Category[] {
  const results: Category[] = [];
  const lowerQuery = query.toLowerCase();

  function traverse(cats: Category[]) {
    for (const cat of cats) {
      if (cat.name.toLowerCase().includes(lowerQuery)) {
        results.push(cat);
      }
      if (cat.children) {
        traverse(cat.children);
      }
    }
  }

  traverse(categories);
  return results;
}

/**
 * Format category name for display
 */
export function formatCategoryName(category: Category): string {
  return category.name;
}

/**
 * Get description or default text for a category
 */
export function getCategoryDescription(category: Category): string {
  return `Browse our extensive collection of ${category.name.toLowerCase()}. Find the best products with amazing deals and discounts.`;
}
