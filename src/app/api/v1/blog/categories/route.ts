import { NextResponse } from "next/server";
import { FIXTURE_CATEGORIES } from "@/features/blog/data/blogFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        categories: FIXTURE_CATEGORIES,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve blog categories",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
