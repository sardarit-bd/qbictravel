/**
 * Packages RTK Query API Feature
 *
 * Injects package catalog endpoints into the unified `baseApi` service.
 * Supports query parameters for search, category filtering, subcategory filtering,
 * sorting, and pagination.
 */

import { baseApi } from "@/services/api/baseApi";
import { ApiResponse } from "@/types/api";
import {
  PackageCategory,
  PackagePromotion,
  PackageQueryParams,
  PackageListResponse,
  PackageDetailResponse,
} from "../types/packages";

export const PACKAGE_ENDPOINTS = {
  PACKAGES: "/packages",
  PACKAGE_BY_SLUG: (slug: string) => `/packages/${slug}`,
  CATEGORIES: "/packages/categories",
  PROMOTION: "/packages/promotions/special-offer",
} as const;

/**
 * Serializes PackageQueryParams into standard URL query strings.
 */
export function buildPackageQueryString(params: PackageQueryParams = {}): string {
  const query = new URLSearchParams();

  if (params.search?.trim()) {
    query.set("search", params.search.trim());
  }
  if (params.categoryId && params.categoryId !== "all") {
    query.set("categoryId", params.categoryId);
  }
  if (params.subcategoryId) {
    query.set("subcategoryId", params.subcategoryId);
  }
  if (params.destination?.trim()) {
    query.set("destination", params.destination.trim());
  }
  if (typeof params.minPrice === "number") {
    query.set("minPrice", String(params.minPrice));
  }
  if (typeof params.maxPrice === "number") {
    query.set("maxPrice", String(params.maxPrice));
  }
  if (params.duration) {
    query.set("duration", params.duration);
  }
  if (typeof params.minRating === "number") {
    query.set("minRating", String(params.minRating));
  }
  if (params.sort) {
    query.set("sort", params.sort);
  }
  if (typeof params.page === "number" && params.page > 0) {
    query.set("page", String(params.page));
  }
  if (typeof params.limit === "number" && params.limit > 0) {
    query.set("limit", String(params.limit));
  }

  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

export const packagesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Get paginated list of packages with optional filtering and sorting
     */
    getPackages: builder.query<PackageListResponse, PackageQueryParams | void>({
      query: (params = {}) => ({
        url: `${PACKAGE_ENDPOINTS.PACKAGES}${buildPackageQueryString(params ?? {})}`,
        method: "GET",
      }),
      transformResponse: (
        response: ApiResponse<PackageListResponse> | PackageListResponse
      ): PackageListResponse => {
        // Unwrap standard API envelope if present
        if ("data" in response && "success" in response) {
          return response.data;
        }
        return response;
      },
      providesTags: (result) =>
        result?.packages
          ? [
              ...result.packages.map(({ id }) => ({
                type: "Package" as const,
                id,
              })),
              { type: "PackageList" as const, id: "LIST" },
            ]
          : [{ type: "PackageList" as const, id: "LIST" }],
    }),

    /**
     * Get package detail by slug or ID
     */
    getPackageBySlug: builder.query<PackageDetailResponse, string>({
      query: (slug) => ({
        url: PACKAGE_ENDPOINTS.PACKAGE_BY_SLUG(slug),
        method: "GET",
      }),
      transformResponse: (
        response: ApiResponse<PackageDetailResponse> | PackageDetailResponse
      ): PackageDetailResponse => {
        if ("data" in response && "success" in response) {
          return response.data;
        }
        return response;
      },
      providesTags: (result, error, slug) => [
        { type: "Package" as const, id: slug },
      ],
    }),

    /**
     * Get package categories hierarchy
     */
    getPackageCategories: builder.query<PackageCategory[], void>({
      query: () => ({
        url: PACKAGE_ENDPOINTS.CATEGORIES,
        method: "GET",
      }),
      transformResponse: (
        response: ApiResponse<PackageCategory[]> | PackageCategory[]
      ): PackageCategory[] => {
        if ("data" in response && "success" in response) {
          return response.data;
        }
        return response;
      },
      providesTags: [{ type: "PackageCategory" as const, id: "CATEGORIES" }],
    }),

    /**
     * Get current promotional offer banner
     */
    getPackagePromotion: builder.query<PackagePromotion, void>({
      query: () => ({
        url: PACKAGE_ENDPOINTS.PROMOTION,
        method: "GET",
      }),
      transformResponse: (
        response: ApiResponse<PackagePromotion> | PackagePromotion
      ): PackagePromotion => {
        if ("data" in response && "success" in response) {
          return response.data;
        }
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPackagesQuery,
  useGetPackageBySlugQuery,
  useGetPackageCategoriesQuery,
  useGetPackagePromotionQuery,
} = packagesApi;
