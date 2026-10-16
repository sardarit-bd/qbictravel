import { NextResponse } from "next/server";
import { FIXTURE_POPULAR_TIPS } from "@/features/travel-tips/data/travelTipsFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        popularTips: FIXTURE_POPULAR_TIPS,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve popular travel tips",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
