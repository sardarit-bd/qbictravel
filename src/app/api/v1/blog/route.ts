import { NextRequest, NextResponse } from "next/server";
import { filterAndPaginateBlogPosts } from "@/features/blog/data/blogFixture";
import { BlogQueryParams } from "@/features/blog/types/blog.types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const sortParam = searchParams.get("sort") as "latest" | "popular" | "oldest" | null;
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");

    const params: BlogQueryParams = {
      search: searchParams.get("search") || undefined,
      category: searchParams.get("category") || undefined,
      tag: searchParams.get("tag") || undefined,
      sort: sortParam || "latest",
      page: pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1,
      limit: limitParam ? Math.max(1, parseInt(limitParam, 10)) : 3,
    };

    const data = filterAndPaginateBlogPosts(params);

    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve blog posts",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
