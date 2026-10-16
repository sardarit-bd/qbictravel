import { NextResponse } from "next/server";
import { FIXTURE_PROMOTION } from "@/features/booking/data/packagesFixture";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: FIXTURE_PROMOTION,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve promotional offer",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
