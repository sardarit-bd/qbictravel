"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { PackageSidebar } from "./PackageSidebar";
import { PackageSearchBar } from "./PackageSearchBar";
import { PackagePromotionBanner } from "./PackagePromotionBanner";
import {
  PackageListingHeader,
  PackageSortOption,
} from "./PackageListingHeader";
import { PackageGrid } from "./PackageGrid";
import { PackagePagination } from "./PackagePagination";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useGetPackagesQuery,
  useGetPackageCategoriesQuery,
  useGetPackagePromotionQuery,
} from "@/features/booking/api/packagesApi";
import {
  PackageQueryParams,
} from "@/features/booking/types/packages";
import { PACKAGE_CATEGORIES } from "@/features/booking/data/packages";

const ITEMS_PER_PAGE = 4;

function PackagesPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize query state from URL search params or approved defaults
  const initialCategory = searchParams.get("category") || "island-tours";
  const initialSubcategory = searchParams.get("subcategory") ?? "phuket-tours";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = (searchParams.get("sort") as PackageSortOption) || "popular";
  const initialPage = searchParams.get("page")
    ? Math.max(1, parseInt(searchParams.get("page")!, 10))
    : 1;

  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string | undefined>(
    initialSubcategory === "none" ? undefined : initialSubcategory
  );
  const [searchQuery, setSearchQuery] = React.useState<string>(initialSearch);
  const [sortBy, setSortBy] = React.useState<PackageSortOption>(initialSort);
  const [currentPage, setCurrentPage] = React.useState<number>(initialPage);

  // Debounce search query by 350ms to avoid unnecessary API requests on every keystroke
  const debouncedSearch = useDebounce(searchQuery, 350);

  // Synchronize URL with active query state
  const syncUrlParams = React.useCallback(
    (params: {
      category?: string;
      subcategory?: string;
      search?: string;
      sort?: string;
      page?: number;
    }) => {
      const sp = new URLSearchParams();
      if (params.category && params.category !== "all") {
        sp.set("category", params.category);
      }
      if (params.subcategory) {
        sp.set("subcategory", params.subcategory);
      }
      if (params.search?.trim()) {
        sp.set("search", params.search.trim());
      }
      if (params.sort && params.sort !== "popular") {
        sp.set("sort", params.sort);
      }
      if (params.page && params.page > 1) {
        sp.set("page", String(params.page));
      }

      const queryString = sp.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(newUrl, { scroll: false });
    },
    [pathname, router]
  );

  // Build query parameter contract for RTK Query
  const queryParams: PackageQueryParams = React.useMemo(() => {
    return {
      categoryId: selectedCategory,
      subcategoryId: selectedSubcategory,
      search: debouncedSearch.trim() || undefined,
      sort: sortBy,
      page: currentPage,
      limit: ITEMS_PER_PAGE,
    };
  }, [selectedCategory, selectedSubcategory, debouncedSearch, sortBy, currentPage]);

  // RTK Query hooks
  const {
    data: packagesResponse,
    isLoading: isPackagesLoading,
    isFetching: isPackagesFetching,
    isError: isPackagesError,
    error: packagesError,
    refetch: refetchPackages,
  } = useGetPackagesQuery(queryParams);

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
  } = useGetPackageCategoriesQuery();

  const {
    data: promotionData,
  } = useGetPackagePromotionQuery();

  // Authoritative server data
  const packages = packagesResponse?.packages ?? [];
  const totalItems = packagesResponse?.pagination?.total ?? 0;
  const totalPages = packagesResponse?.pagination?.totalPages ?? 1;
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const categories = categoriesData && categoriesData.length > 0 ? categoriesData : PACKAGE_CATEGORIES;

  // Handle category/subcategory filter change
  const handleSelectCategory = (categoryId: string, subcategoryId?: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
    setCurrentPage(1);
    syncUrlParams({
      category: categoryId,
      subcategory: subcategoryId,
      search: searchQuery,
      sort: sortBy,
      page: 1,
    });
  };

  // Handle search input change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    syncUrlParams({
      category: selectedCategory,
      subcategory: selectedSubcategory,
      search: query,
      sort: sortBy,
      page: 1,
    });
  };

  // Handle sort change
  const handleSortChange = (newSort: PackageSortOption) => {
    setSortBy(newSort);
    setCurrentPage(1);
    syncUrlParams({
      category: selectedCategory,
      subcategory: selectedSubcategory,
      search: searchQuery,
      sort: newSort,
      page: 1,
    });
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    syncUrlParams({
      category: selectedCategory,
      subcategory: selectedSubcategory,
      search: searchQuery,
      sort: sortBy,
      page: newPage,
    });
  };

  // Reset all filters to default state
  const handleResetFilters = () => {
    setSelectedCategory("island-tours");
    setSelectedSubcategory("phuket-tours");
    setSearchQuery("");
    setSortBy("popular");
    setCurrentPage(1);
    syncUrlParams({
      category: "island-tours",
      subcategory: "phuket-tours",
      search: "",
      sort: "popular",
      page: 1,
    });
  };

  // Format error message from RTK Query error
  const errorMessage = React.useMemo(() => {
    if (!packagesError) return undefined;
    if ("data" in packagesError && typeof packagesError.data === "object" && packagesError.data !== null) {
      const errData = packagesError.data as { message?: string };
      if (errData.message) return errData.message;
    }
    if ("error" in packagesError) {
      return String(packagesError.error);
    }
    return "Failed to communicate with packages service. Please try again.";
  }, [packagesError]);

  // Dynamic titles based on active category / subcategory or active search
  const currentCategoryObj = categories.find((c) => c.id === selectedCategory);
  const currentSubcategoryObj = currentCategoryObj?.subcategories?.find(
    (s) => s.id === selectedSubcategory
  );

  let displayTitle = currentSubcategoryObj
    ? currentSubcategoryObj.name
    : currentCategoryObj
    ? currentCategoryObj.name
    : "All Travel Packages";

  let displayEyebrow = displayTitle.toUpperCase();
  let displayDescription = `Explore the best ${displayTitle.toLowerCase()} with QbicTravel. From island hopping to thrilling excursions, find the ideal package for an unforgettable journey.`;

  if (debouncedSearch.trim()) {
    displayEyebrow = "SEARCH RESULTS";
    displayTitle = `Results for "${debouncedSearch.trim()}"`;
    displayDescription = `Showing ${totalItems} travel package${
      totalItems === 1 ? "" : "s"
    } matching your search query.`;
  }

  return (
    <section
      aria-label="Packages Directory"
      className="w-full bg-slate-50/50 py-8 sm:py-12 md:py-16"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        {/* Two-Column Responsive Layout: Left Sticky Sidebar + Right Content Area */}
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-10">
          {/* ===================================================================
              LEFT COLUMN: Categories Sidebar & Assistance Help Card
              =================================================================== */}
          <PackageSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            onSelectCategory={handleSelectCategory}
            onResetFilters={handleResetFilters}
            isLoading={isCategoriesLoading}
          />

          {/* ===================================================================
              RIGHT COLUMN: Search, Banner, Header, Grid & Pagination
              =================================================================== */}
          <div className="flex-1 w-full space-y-6 sm:space-y-7 min-w-0">
            {/* 1. Package Search Bar */}
            <PackageSearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />

            {/* 2. Promotional Special Offer Banner */}
            <PackagePromotionBanner promotion={promotionData} />

            {/* 3. Package Listing Header & Sorting Control */}
            <PackageListingHeader
              title={displayTitle}
              eyebrow={displayEyebrow}
              description={displayDescription}
              resultsCount={totalItems}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            {/* 4. Two-Column Package Grid (Supports Loading Skeleton & Error States) */}
            <PackageGrid
              packages={packages}
              isLoading={isPackagesLoading || isPackagesFetching}
              isError={isPackagesError}
              errorMessage={errorMessage}
              onRetry={refetchPackages}
              onResetFilters={handleResetFilters}
            />

            {/* 5. Pagination */}
            {!isPackagesLoading && !isPackagesError && totalPages > 1 && (
              <PackagePagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PackagesPageClient() {
  return (
    <React.Suspense
      fallback={
        <section className="w-full bg-slate-50/50 py-16">
          <div className="w-full max-w-[1440px] mx-auto px-4 text-center text-slate-400">
            Loading travel packages...
          </div>
        </section>
      }
    >
      <PackagesPageContent />
    </React.Suspense>
  );
}

export default PackagesPageClient;
