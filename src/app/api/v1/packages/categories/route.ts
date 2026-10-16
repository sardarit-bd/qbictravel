import { NextResponse } from "next/server";
import { FIXTURE_CATEGORIES } from "@/features/booking/data/packagesFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: FIXTURE_CATEGORIES,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve package categories",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
