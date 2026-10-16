/**
 * Blog RTK Query API Feature
 *
 * Injects blog endpoints into the unified `baseApi` service.
 * Supports query parameters for search, category filtering,
 * pagination, and newsletter subscriptions.
 */

import { baseApi } from "@/services/api/baseApi";
import { ApiResponse } from "@/types/api";
import {
  BlogCategory,
  BlogQueryParams,
  BlogListResponse,
  BlogDetailResponse,
  PopularPost,
  NewsletterSubscriptionRequest,
  NewsletterSubscriptionResponse,
} from "../types/blog.types";

export const BLOG_ENDPOINTS = {
  POSTS: "/blog",
  POST_BY_SLUG: (slug: string) => `/blog/${slug}`,
  CATEGORIES: "/blog/categories",
  POPULAR: "/blog/popular",
  NEWSLETTER_SUBSCRIBE: "/newsletter/subscribe",
} as const;

/**
 * Serializes typed BlogQueryParams to URL query string
 */
export function buildBlogQueryString(params: BlogQueryParams = {}): string {
  const searchParams = new URLSearchParams();

  if (params.search && params.search.trim()) {
    searchParams.set("search", params.search.trim());
  }

  if (params.category && params.category !== "all") {
    searchParams.set("category", params.category);
  }

  if (params.tag) {
    searchParams.set("tag", params.tag);
  }

  if (params.sort) {
    searchParams.set("sort", params.sort);
  }

  if (params.page && params.page > 1) {
    searchParams.set("page", String(params.page));
  }

  if (params.limit) {
    searchParams.set("limit", String(params.limit));
  }

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogPosts: builder.query<BlogListResponse, BlogQueryParams | void>({
      query: (params) => {
        const qs = buildBlogQueryString(params || {});
        return `${BLOG_ENDPOINTS.POSTS}${qs}`;
      },
      transformResponse: (response: ApiResponse<BlogListResponse>) => {
        return response.data;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.posts.map(({ id }) => ({
                type: "BlogPost" as const,
                id,
              })),
              { type: "BlogList" as const, id: "LIST" },
            ]
          : [{ type: "BlogList" as const, id: "LIST" }],
    }),

    getBlogPostBySlug: builder.query<BlogDetailResponse, string>({
      query: (slug) => BLOG_ENDPOINTS.POST_BY_SLUG(slug),
      transformResponse: (response: ApiResponse<BlogDetailResponse>) => {
        return response.data;
      },
      providesTags: (_result, _error, slug) => [
        { type: "BlogPost" as const, id: slug },
      ],
    }),

    getBlogCategories: builder.query<BlogCategory[], void>({
      query: () => BLOG_ENDPOINTS.CATEGORIES,
      transformResponse: (response: ApiResponse<{ categories: BlogCategory[] }>) => {
        return response.data.categories;
      },
      providesTags: [{ type: "BlogCategory" as const, id: "LIST" }],
    }),

    getPopularPosts: builder.query<PopularPost[], void>({
      query: () => BLOG_ENDPOINTS.POPULAR,
      transformResponse: (response: ApiResponse<{ popularPosts: PopularPost[] }>) => {
        return response.data.popularPosts;
      },
      providesTags: [{ type: "PopularPost" as const, id: "LIST" }],
    }),

    subscribeNewsletter: builder.mutation<
      NewsletterSubscriptionResponse,
      NewsletterSubscriptionRequest
    >({
      query: (body) => ({
        url: BLOG_ENDPOINTS.NEWSLETTER_SUBSCRIBE,
        method: "POST",
        body,
      }),
      transformResponse: (
        response: ApiResponse<NewsletterSubscriptionResponse>,
      ) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBlogPostsQuery,
  useGetBlogPostBySlugQuery,
  useGetBlogCategoriesQuery,
  useGetPopularPostsQuery,
  useSubscribeNewsletterMutation,
} = blogApi;
