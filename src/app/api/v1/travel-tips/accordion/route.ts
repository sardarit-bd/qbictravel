import { NextRequest, NextResponse } from "next/server";
import { FIXTURE_ACCORDION_ITEMS } from "@/features/travel-tips/data/travelTipsFixture";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const topicId = searchParams.get("topic");

    let items = [...FIXTURE_ACCORDION_ITEMS];
    if (topicId && topicId !== "all") {
      items = items.filter((item) => item.topicId === topicId);
      // If none match specific topicId, return all items to avoid empty accordion
      if (items.length === 0) {
        items = [...FIXTURE_ACCORDION_ITEMS];
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        items,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve travel tips accordion",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
