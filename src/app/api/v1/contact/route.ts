import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/features/contact/schemas/contact.schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error.issues[0]?.message || "Invalid contact form data",
        },
        { status: 400 },
      );
    }

    const ticketId = `QBIC-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      data: {
        success: true,
        message:
          "Thank you for reaching out! Our travel specialists will get back to you shortly.",
        ticketId,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process contact inquiry",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
