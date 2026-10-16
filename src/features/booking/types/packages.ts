/**
 * Package Domain Types for QbicTravel
 * Defines backend-ready models, query contracts, and API response structures.
 */

export type PackageSortOption =
  | "popular"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "name";

export interface PackageImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  isHero?: boolean;
}

export interface PackagePrice {
  amount: number;
  currency: string;
  originalAmount?: number;
  discountPercentage?: number;
  perPersonLabel?: string;
}

export interface PackageDuration {
  display: string;
  hours?: number;
  days?: number;
}

export interface PackageRating {
  average: number;
  reviewCount: number;
}

export interface PackageSubcategory {
  id: string;
  name: string;
  slug: string;
  count: number;
  description?: string;
}

export interface PackageCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
  iconName: string;
  subcategories?: PackageSubcategory[];
}

export interface PackagePromotion {
  id: string;
  eyebrow: string;
  heading: string;
  discountPercentage: number;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  imageUrl?: string;
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  location: string;
  description: string;
  category: string;
  categoryId: string;
  subcategory?: string;
  subcategoryId?: string;
  pricing: PackagePrice;
  duration: PackageDuration;
  rating: PackageRating;
  image: PackageImage;
  includedServices: string[];
  includedServiceSummary?: string;
  hasGuide: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
  isAvailable?: boolean;
  maxGroupSize?: number;
  highlights?: string[];
  itinerarySummary?: string[];
  createdAt?: string;
  updatedAt?: string;

  // Convenience flat properties for UI backward compatibility
  price?: number;
  currency?: string;
  includedService?: string;
  reviewsCount?: number;
}

/** Alias for backward compatibility with UI components */
export type PackageItem = Package;

export interface PackagePagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PackageFilters {
  categoryId?: string;
  subcategoryId?: string;
  destination?: string;
  minPrice?: number;
  maxPrice?: number;
  duration?: string;
  minRating?: number;
  search?: string;
}

export interface PackageQueryParams extends PackageFilters {
  sort?: PackageSortOption;
  page?: number;
  limit?: number;
}

export interface PackageSearchParams {
  q?: string;
  category?: string;
  subcategory?: string;
  sort?: PackageSortOption;
  page?: number;
}

export interface PackageListFilterMeta {
  availableCategories: { id: string; name: string; count: number }[];
  minPrice: number;
  maxPrice: number;
  totalAvailable: number;
}

export interface PackageListResponse {
  packages: Package[];
  pagination: PackagePagination;
  filters?: PackageListFilterMeta;
  appliedQuery?: PackageQueryParams;
}

export interface PackageDetailResponse {
  package: Package;
  relatedPackages?: Package[];
}

export function formatPrice(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
