# Category System Implementation Guide

## Overview

This document explains the professional Jumia-like category system implemented in Compdock.

## Architecture

### 1. **Category Utilities** (`src/lib/categoryUtils.ts`)

Comprehensive utilities for working with the hierarchical category structure:

#### Core Functions:

- **`findCategoryById(id)`** - Find a category by its unique ID (recursive search)
- **`categoryIdToSlug(id)`** - Convert category ID to URL-friendly slug
- **`slugToCategoryId(slug)`** - Convert URL slug back to category ID
- **`getCategoryBreadcrumbs(categoryId)`** - Get full breadcrumb path for a category
- **`getCategoryChildren(categoryId)`** - Get immediate children of a category
- **`hasCategoryChildren(categoryId)`** - Check if a category has subcategories
- **`getLeafCategories()`** - Get all final-level categories (no children)
- **`getCategoryDepth(categoryId)`** - Get nesting level of a category
- **`getCategoryUrl(categoryId)`** - Build full URL path for a category
- **`getRelatedCategories(categoryId)`** - Get sibling and related categories
- **`searchCategories(query)`** - Search categories by name
- **`getCategoryDescription(category)`** - Get or generate category description

### 2. **Dynamic Routing**

URL structure: `/categories/[level1]/[level2]/[level3]/...`

Example routes:
- `/categories/computing` → Computing category
- `/categories/computing/laptops` → Laptops (child of Computing)
- `/categories/computing/laptops/gaming-laptops` → Gaming Laptops (grandchild)
- `/categories/networking/network-devices/routers` → Routers

The `[...slug]` catch-all route handles all category depth levels.

### 3. **Components**

#### `Breadcrumb.tsx`
Professional breadcrumb navigation with:
- Home icon link
- Proper nesting display
- Current category highlighted
- Chevron separators
- Mobile-responsive design
- Hover effects with orange color scheme

Usage:
```tsx
<Breadcrumb categoryId={category.id} />
// OR
<Breadcrumb breadcrumbs={breadcrumbsArray} />
```

#### `CategoryFiltersPanel.tsx`
Advanced filtering UI with collapsible sections:
- **Sorting**: Popularity, Newest, Price (Low-High), Price (High-Low), Best Rating
- **Price Range**: Dual slider + min/max inputs
- **Brands**: Checkbox list with counts
- **Ratings**: 5-star rating filter (4.5+, 4.0+, 3.0+, 2.0+)
- **Conditions**: New, Refurbished, Used

Features:
- Expandable/collapsible filter sections
- Real-time price range updates
- Accessible inputs
- Mobile-optimized

#### `RelatedCategories.tsx`
Display related subcategories or sibling categories:
- Grid layout (1-3 columns responsive)
- Shows subcategory count
- "View more" indicator if truncated
- Hover effects
- Proper linking with slugs

### 4. **Category Page** (`src/app/(public)/categories/[...slug]/page.tsx`)

Complete professional category listing page with:

#### Features:
1. **Header Section**
   - Category name
   - Description
   - Product count
   - Last updated timestamp

2. **Subcategories Display** (if category has children)
   - Grid of up to 6 subcategories
   - Shows count if more exist
   - Quick navigation

3. **Two-Column Layout**
   - Left: Sticky filters panel (desktop)
   - Right: Product grid + pagination

4. **Product Grid**
   - Responsive: 1 column mobile → 2 columns tablet → 3 columns desktop
   - 12 products per page
   - Pagination with smart page number display

5. **Mobile Experience**
   - Collapsible filters
   - Show/hide filters toggle
   - Full-width product grid
   - Touch-friendly controls

6. **Filter & Sort**
   - Price range filtering
   - Brand selection
   - Rating filtering
   - Multiple sort options
   - Real-time product updates

7. **Related Categories Section**
   - Shows all subcategories at the bottom
   - Helpful for navigation

## Category Data Structure

Located in `src/constants/categories.ts`:

```typescript
export type Category = {
  id: string;
  name: string;
  children?: Category[];
};
```

Example:
```typescript
{
  id: "computing",
  name: "Computing",
  children: [
    {
      id: "laptops",
      name: "Laptops",
      children: [
        { id: "gaming-laptops", name: "Gaming Laptops" },
        // ... more subcategories
      ]
    },
    // ... more categories
  ]
}
```

## How It Works

### 1. URL to Category Resolution

```tsx
// URL: /categories/computing/laptops/gaming-laptops
const slugArray = ['computing', 'laptops', 'gaming-laptops'];
const category = parseSlugToCategory(slugArray);
// Returns the "gaming-laptops" category with full context
```

### 2. Breadcrumb Generation

```tsx
const breadcrumbs = getCategoryBreadcrumbs('gaming-laptops');
// Returns: [
//   { id: 'computing', name: 'Computing' },
//   { id: 'laptops', name: 'Laptops' },
//   { id: 'gaming-laptops', name: 'Gaming Laptops' }
// ]
```

### 3. Product Filtering

Products are filtered by:
1. Category name matching
2. Price range
3. Selected brands
4. Rating threshold
5. Then sorted by selected criteria

## SEO & Accessibility

- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- Breadcrumb navigation for search engines
- URL-based navigation (no query params)
- Mobile-responsive design
- Accessible form controls
- Keyboard navigation support

## Styling

- **Color Scheme**: Orange primary (#f97316), Gray neutrals
- **Responsive**: Mobile-first approach
- **State Indicators**: Active filters, current page, hover effects
- **Icons**: Lucide React icons throughout

## Scalability

The system is designed to handle:
- **Deep nesting**: Unlimited category levels
- **Large datasets**: Efficient recursive searches
- **Performance**: Memoized filtering and sorting
- **Growth**: Easy to add new categories without code changes

## Example Usage

### Display category with all features:

```tsx
import CategoryPage from '@/app/(public)/categories/[...slug]/page';

// User navigates to: /categories/computing/laptops/gaming-laptops
// The page automatically:
// 1. Parses the URL
// 2. Finds the category
// 3. Displays breadcrumbs: Home > Computing > Laptops > Gaming Laptops
// 4. Shows subcategories (if any)
// 5. Displays products with filters
// 6. Enables sorting and pagination
```

### Programmatic navigation:

```tsx
import { getCategoryUrl } from '@/lib/categoryUtils';

const url = getCategoryUrl('gaming-laptops');
// Returns: /categories/computing/laptops/gaming-laptops
```

## Future Enhancements

1. **Analytics**: Track category views and conversions
2. **Personalization**: Recommend categories based on history
3. **Search Integration**: Full-text search within category
4. **Filters API**: Dynamic filter options from backend
5. **Category Images**: Add images for categories
6. **Meta Tags**: Dynamic SEO meta tags per category
7. **Infinite Scroll**: Alternative to pagination
8. **Multi-select Filters**: More complex filter combinations

## Testing URLs

Test these categories:

- `/categories/computing` - Computing (root)
- `/categories/computing/laptops` - Laptops (child)
- `/categories/computing/laptops/gaming-laptops` - Gaming Laptops (grandchild)
- `/categories/mobile-devices/smartphones` - Smartphones
- `/categories/accessories/cables-adapters` - Cables & Adapters
- `/categories/gaming` - Gaming (root with children)

All pages will display:
- ✅ Proper breadcrumbs
- ✅ Category header with description
- ✅ Subcategories (if applicable)
- ✅ Product grid with filters
- ✅ Sorting and pagination
- ✅ Related categories section

---

**Last Updated**: January 12, 2026
**Status**: Production Ready
