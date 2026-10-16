/**
 * Blog Domain Types
 *
 * Strongly-typed domain models for QbicTravel Blog feature.
 * Supports editorial featured posts, standard posts, categories,
 * author details, query parameters, and pagination envelopes.
 */

export interface BlogImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BlogAuthor {
  id: string;
  name: string;
  avatarUrl?: string;
  role?: string;
  bio?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  count: number;
  description?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: BlogImage;
  category: string;
  categoryId: string;
  publishedAt: string; // ISO date or formatted date (e.g., "Oct 16, 2026")
  readingTimeMinutes: number;
  author?: BlogAuthor;
  tags?: string[];
  isFeatured?: boolean;
  featuredRank?: number; // 1 = Main large card, 2 = Secondary top, 3 = Secondary bottom
  isPopular?: boolean;
  viewsCount?: number;
}

export interface PopularPost {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  image: BlogImage;
  readingTimeMinutes?: number;
  category?: string;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface BlogFilters {
  availableCategories: Array<{ id: string; name: string; count: number }>;
  totalAvailable: number;
}

export interface BlogQueryParams {
  search?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
  sort?: "latest" | "popular" | "oldest";
}

export interface BlogListResponse {
  posts: BlogPost[];
  featuredPosts?: BlogPost[];
  pagination: BlogPagination;
  filters?: BlogFilters;
  appliedQuery?: BlogQueryParams;
}

export interface BlogDetailResponse {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export interface BlogCategoryResponse {
  categories: BlogCategory[];
}

export interface PopularPostsResponse {
  popularPosts: PopularPost[];
}

export interface NewsletterSubscriptionRequest {
  email: string;
  source?: string;
}

export interface NewsletterSubscriptionResponse {
  success: boolean;
  message: string;
  email?: string;
}
