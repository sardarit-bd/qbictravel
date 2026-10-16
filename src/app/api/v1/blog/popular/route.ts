import { NextResponse } from "next/server";
import { FIXTURE_POPULAR_POSTS } from "@/features/blog/data/blogFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        popularPosts: FIXTURE_POPULAR_POSTS,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve popular blog posts",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
