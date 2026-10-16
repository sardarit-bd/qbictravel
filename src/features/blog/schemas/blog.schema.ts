import { z } from "zod";

export const blogImageSchema = z.object({
  url: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const blogAuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatarUrl: z.string().optional(),
  role: z.string().optional(),
  bio: z.string().optional(),
});

export const blogCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  iconName: z.string(),
  count: z.number().nonnegative(),
  description: z.string().optional(),
});

export const blogPostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string().min(1),
  excerpt: z.string(),
  content: z.string().optional(),
  image: blogImageSchema,
  category: z.string(),
  categoryId: z.string(),
  publishedAt: z.string(),
  readingTimeMinutes: z.number().positive(),
  author: blogAuthorSchema.optional(),
  tags: z.array(z.string()).optional(),
  isFeatured: z.boolean().optional(),
  featuredRank: z.number().optional(),
  isPopular: z.boolean().optional(),
  viewsCount: z.number().optional(),
});

export const popularPostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string().min(1),
  publishedAt: z.string(),
  image: blogImageSchema,
  readingTimeMinutes: z.number().optional(),
  category: z.string().optional(),
});

export const blogPaginationSchema = z.object({
  page: z.number().positive(),
  limit: z.number().positive(),
  total: z.number().nonnegative(),
  totalPages: z.number().nonnegative(),
  hasNextPage: z.boolean(),
  hasPrevPage: z.boolean(),
});

export const blogQueryParamsSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  tag: z.string().optional(),
  page: z.number().positive().optional(),
  limit: z.number().positive().optional(),
  sort: z.enum(["latest", "popular", "oldest"]).optional(),
});

export const blogListResponseSchema = z.object({
  posts: z.array(blogPostSchema),
  featuredPosts: z.array(blogPostSchema).optional(),
  pagination: blogPaginationSchema,
  filters: z
    .object({
      availableCategories: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          count: z.number(),
        }),
      ),
      totalAvailable: z.number(),
    })
    .optional(),
  appliedQuery: blogQueryParamsSchema.optional(),
});

export const newsletterSubscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  source: z.string().optional(),
});
