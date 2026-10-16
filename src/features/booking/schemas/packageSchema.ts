import { z } from "zod";

export const packageSortOptionSchema = z.enum([
  "popular",
  "price-asc",
  "price-desc",
  "rating",
  "name",
]);

export const packageImageSchema = z.object({
  url: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  isHero: z.boolean().optional(),
});

export const packagePriceSchema = z.object({
  amount: z.number().nonnegative(),
  currency: z.string().default("USD"),
  originalAmount: z.number().optional(),
  discountPercentage: z.number().optional(),
  perPersonLabel: z.string().optional(),
});

export const packageDurationSchema = z.object({
  display: z.string(),
  hours: z.number().optional(),
  days: z.number().optional(),
});

export const packageRatingSchema = z.object({
  average: z.number().min(0).max(5),
  reviewCount: z.number().nonnegative(),
});

export const packageSubcategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  count: z.number().nonnegative(),
  description: z.string().optional(),
});

export const packageCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  count: z.number().nonnegative(),
  iconName: z.string(),
  subcategories: z.array(packageSubcategorySchema).optional(),
});

export const packagePromotionSchema = z.object({
  id: z.string(),
  eyebrow: z.string(),
  heading: z.string(),
  discountPercentage: z.number(),
  subtext: z.string(),
  ctaText: z.string(),
  ctaHref: z.string(),
  imageUrl: z.string().optional(),
});

export const packageSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  location: z.string(),
  description: z.string(),
  category: z.string(),
  categoryId: z.string(),
  subcategory: z.string().optional(),
  subcategoryId: z.string().optional(),
  pricing: packagePriceSchema,
  duration: packageDurationSchema,
  rating: packageRatingSchema,
  image: packageImageSchema,
  includedServices: z.array(z.string()).default([]),
  includedServiceSummary: z.string().optional(),
  hasGuide: z.boolean().default(true),
  isBestseller: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
  isAvailable: z.boolean().optional(),
  maxGroupSize: z.number().optional(),
  highlights: z.array(z.string()).optional(),
  itinerarySummary: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  // Flat compatibility properties
  price: z.number().optional(),
  currency: z.string().optional(),
  includedService: z.string().optional(),
  reviewsCount: z.number().optional(),
});

export const packagePaginationSchema = z.object({
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
  total: z.number().int().nonnegative(),
  totalPages: z.number().int().nonnegative(),
  hasNextPage: z.boolean(),
  hasPrevPage: z.boolean(),
});

export const packageQueryParamsSchema = z.object({
  search: z.string().optional(),
  categoryId: z.string().optional(),
  subcategoryId: z.string().optional(),
  destination: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  duration: z.string().optional(),
  minRating: z.number().optional(),
  sort: packageSortOptionSchema.optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().optional(),
});

export const packageListResponseSchema = z.object({
  packages: z.array(packageSchema),
  pagination: packagePaginationSchema,
  filters: z
    .object({
      availableCategories: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          count: z.number(),
        })
      ),
      minPrice: z.number(),
      maxPrice: z.number(),
      totalAvailable: z.number(),
    })
    .optional(),
  appliedQuery: packageQueryParamsSchema.optional(),
});

export const packageDetailResponseSchema = z.object({
  package: packageSchema,
  relatedPackages: z.array(packageSchema).optional(),
});
