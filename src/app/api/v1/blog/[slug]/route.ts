import { NextRequest, NextResponse } from "next/server";
import { FIXTURE_BLOG_POSTS } from "@/features/blog/data/blogFixture";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(
  _request: NextRequest,
  { params }: RouteParams,
) {
  try {
    const { slug } = await params;

    const post = FIXTURE_BLOG_POSTS.find(
      (p) => p.slug === slug || p.id === slug,
    );

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: `Blog post '${slug}' not found`,
        },
        { status: 404 },
      );
    }

    // Related posts in same category
    const relatedPosts = FIXTURE_BLOG_POSTS.filter(
      (p) => p.categoryId === post.categoryId && p.id !== post.id,
    ).slice(0, 3);

    return NextResponse.json({
      success: true,
      data: {
        post,
        relatedPosts,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve blog post",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
