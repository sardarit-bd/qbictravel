import { NextResponse } from "next/server";
import { FIXTURE_CHECKLIST_ITEMS } from "@/features/travel-tips/data/travelTipsFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        checklist: FIXTURE_CHECKLIST_ITEMS,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve travel checklist",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
