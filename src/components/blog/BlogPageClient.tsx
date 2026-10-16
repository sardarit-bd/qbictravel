"use client";

import * as React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useGetBlogPostsQuery,
  useGetBlogCategoriesQuery,
  useGetPopularPostsQuery,
} from "@/features/blog/api/blogApi";
import { BlogQueryParams } from "@/features/blog/types/blog.types";
import { BlogHero } from "./BlogHero";
import { BlogCategoryNav } from "./BlogCategoryNav";
import { FeaturedArticles } from "./FeaturedArticles";
import { FeaturedArticlesSkeleton } from "./ArticleCardSkeleton";
import { ArticleGrid } from "./ArticleGrid";
import { BlogSidebar } from "./BlogSidebar";
import { BlogPagination } from "./BlogPagination";

function BlogPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Read initial state from URL parameters
  const categoryParam = searchParams.get("category") || "all";
  const searchParam = searchParams.get("search") || "";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);

  // 2. Local interactive state
  const [activeCategory, setActiveCategory] = React.useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = React.useState<string>(searchParam);
  const [currentPage, setCurrentPage] = React.useState<number>(pageParam || 1);

  // 3. Debounce text search to avoid spamming network requests
  const debouncedSearch = useDebounce(searchQuery, 400);

  // 4. Synchronize state with URL search parameters
  const syncUrlParams = React.useCallback(
    (newCategory: string, newSearch: string, newPage: number) => {
      const params = new URLSearchParams();

      if (newCategory && newCategory !== "all") {
        params.set("category", newCategory);
      }
      if (newSearch && newSearch.trim()) {
        params.set("search", newSearch.trim());
      }
      if (newPage > 1) {
        params.set("page", String(newPage));
      }

      const queryString = params.toString();
      const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(targetUrl, { scroll: false });
    },
    [pathname, router],
  );

  // Sync URL when debounced search query or category changes
  React.useEffect(() => {
    syncUrlParams(activeCategory, debouncedSearch, currentPage);
  }, [debouncedSearch, activeCategory, currentPage, syncUrlParams]);

  // 5. Query parameters for RTK Query
  const queryParams = React.useMemo<BlogQueryParams>(() => {
    return {
      category: activeCategory !== "all" ? activeCategory : undefined,
      search: debouncedSearch.trim() || undefined,
      page: currentPage,
      limit: 3, // 3 articles per page in the "More Travel Inspiration" grid
      sort: "latest",
    };
  }, [activeCategory, debouncedSearch, currentPage]);

  // 6. RTK Query Hooks
  const {
    data: blogData,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
    isError: isPostsError,
    error: postsError,
    refetch: refetchPosts,
  } = useGetBlogPostsQuery(queryParams);

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
  } = useGetBlogCategoriesQuery();

  const {
    data: popularPostsData,
  } = useGetPopularPostsQuery();

  // 7. Event Handlers
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    syncUrlParams(categoryId, searchQuery, 1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    syncUrlParams(activeCategory, searchQuery, page);

    // Smooth scroll back to the grid section
    const gridEl = document.getElementById("latest-blog-heading");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setCurrentPage(1);
    syncUrlParams("all", "", 1);
  };

  const handleViewAllClick = () => {
    handleResetFilters();
  };

  // Derive data with safe fallbacks
  const posts = blogData?.posts || [];
  const featuredPosts = blogData?.featuredPosts || [];
  const totalPages = blogData?.pagination?.totalPages || 1;
  const isFilterActive = (activeCategory !== "all" && activeCategory !== "") || Boolean(debouncedSearch.trim());

  // Error message normalization
  const errorMessage =
    postsError && "data" in postsError && typeof postsError.data === "object" && postsError.data && "message" in postsError.data
      ? String(postsError.data.message)
      : "Unable to connect to the article service. Please check your network.";

  return (
    <div className="w-full min-h-screen bg-slate-50/60 flex flex-col">
      {/* 1. Hero Section with Travel Landscape and Search Box */}
      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* 2. Horizontal Category Chips Navigation */}
      <BlogCategoryNav
        categories={categoriesData}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        isLoading={isCategoriesLoading}
      />

      {/* 3. Main Content Editorial Layout */}
      <main className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16 py-8 sm:py-12 md:py-14">
        {/* Two-Column Layout: Left Editorial (~74%) + Right Sidebar (~26%) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-10">
          {/* ===================================================================
              LEFT COLUMN: Featured Articles + Latest Grid + Pagination
              =================================================================== */}
          <div className="flex-1 w-full space-y-10 sm:space-y-12 min-w-0">
            {/* Featured Articles Section: Only show if on page 1 and no active search query */}
            {!isFilterActive && currentPage === 1 && (
              <section aria-label="Featured travel stories">
                {isPostsLoading ? (
                  <FeaturedArticlesSkeleton />
                ) : (
                  <FeaturedArticles posts={featuredPosts} />
                )}
              </section>
            )}

            {/* Latest Articles Grid ("More Travel Inspiration") */}
            <ArticleGrid
              posts={posts}
              isLoading={isPostsLoading || isPostsFetching}
              isError={isPostsError}
              errorMessage={errorMessage}
              onRetry={refetchPosts}
              onResetFilters={handleResetFilters}
              onViewAllClick={handleViewAllClick}
            />

            {/* Pagination Controls */}
            {!isPostsLoading && !isPostsError && totalPages > 1 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          {/* ===================================================================
              RIGHT COLUMN: Sidebar (Search, Categories, Popular, Newsletter)
              =================================================================== */}
          <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 sticky top-[138px]">
            <BlogSidebar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              categories={categoriesData}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
              popularPosts={popularPostsData}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export function BlogPageClient() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      }
    >
      <BlogPageContent />
    </React.Suspense>
  );
}
