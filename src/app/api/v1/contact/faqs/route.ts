import { NextResponse } from "next/server";
import { FIXTURE_FAQS } from "@/features/contact/data/contactFixture";

export async function GET() {
  return NextResponse.json({
    data: {
      faqs: FIXTURE_FAQS,
    },
    meta: {
      total: FIXTURE_FAQS.length,
      timestamp: new Date().toISOString(),
    },
  });
}
