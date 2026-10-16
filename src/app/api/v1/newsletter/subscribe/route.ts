import { NextRequest, NextResponse } from "next/server";
import { newsletterSubscriptionSchema } from "@/features/blog/schemas/blog.schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = newsletterSubscriptionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0]?.message || "Invalid email address",
        },
        { status: 400 },
      );
    }

    // In development mode, simulate a successful subscription
    return NextResponse.json({
      success: true,
      data: {
        success: true,
        message: "Thank you for subscribing to QbicTravel Inspiration!",
        email: result.data.email,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process newsletter subscription",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
