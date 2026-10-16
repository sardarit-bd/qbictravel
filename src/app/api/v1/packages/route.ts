import { NextRequest, NextResponse } from "next/server";
import { filterAndPaginateFixturePackages } from "@/features/booking/data/packagesFixture";
import {
  PackageQueryParams,
  PackageSortOption,
} from "@/features/booking/types/packages";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const sortParam = searchParams.get("sort") as PackageSortOption | null;
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const minRatingParam = searchParams.get("minRating");

    const params: PackageQueryParams = {
      search: searchParams.get("search") || undefined,
      categoryId: searchParams.get("categoryId") || undefined,
      subcategoryId: searchParams.get("subcategoryId") || undefined,
      destination: searchParams.get("destination") || undefined,
      sort: sortParam || "popular",
      page: pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1,
      limit: limitParam ? Math.max(1, parseInt(limitParam, 10)) : 4,
      minPrice: minPriceParam ? parseFloat(minPriceParam) : undefined,
      maxPrice: maxPriceParam ? parseFloat(maxPriceParam) : undefined,
      minRating: minRatingParam ? parseFloat(minRatingParam) : undefined,
    };

    const data = filterAndPaginateFixturePackages(params);

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve travel packages",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
