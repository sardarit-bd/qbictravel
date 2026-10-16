import { NextResponse } from "next/server";
import { FIXTURE_TOPICS } from "@/features/travel-tips/data/travelTipsFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        topics: FIXTURE_TOPICS,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve travel tips topics",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
