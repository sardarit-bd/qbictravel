import { NextRequest, NextResponse } from "next/server";
import { FIXTURE_PACKAGES } from "@/features/booking/data/packagesFixture";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const pkg = FIXTURE_PACKAGES.find(
      (p) => p.slug === slug || p.id === slug
    );

    if (!pkg) {
      return NextResponse.json(
        {
          success: false,
          message: `Package with identifier "${slug}" not found`,
        },
        { status: 404 }
      );
    }

    const related = FIXTURE_PACKAGES.filter(
      (p) => p.categoryId === pkg.categoryId && p.id !== pkg.id
    ).slice(0, 3);

    return NextResponse.json({
      success: true,
      data: {
        package: pkg,
        relatedPackages: related,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve package details",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
