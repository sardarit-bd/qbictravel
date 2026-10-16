import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  ArrowRight,
} from "lucide-react";
import { Navbar, Footer } from "@/components/layout";
import { FIXTURE_BLOG_POSTS } from "@/features/blog/data/blogFixture";
import { ArticleCard } from "@/components/blog/ArticleCard";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return FIXTURE_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = FIXTURE_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | QbicTravel Blog" };

  return {
    title: `${post.title} | QbicTravel Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | QbicTravel Blog`,
      description: post.excerpt,
      images: [
        {
          url: post.image.url,
          alt: post.image.alt || post.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = FIXTURE_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (same category or latest other posts)
  const relatedPosts = FIXTURE_BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.categoryId === post.categoryId,
  ).slice(0, 3);

  // Fallback to general latest posts if not enough in same category
  const finalRelated =
    relatedPosts.length > 0
      ? relatedPosts
      : FIXTURE_BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-primary-subtle selection:text-primary">
      <Navbar variant="solid" />

      <main className="w-full pt-28 sm:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Back navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all travel stories</span>
          </Link>

          {/* Article Container Card */}
          <article className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            {/* Featured Image Banner */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] bg-slate-900">
              <Image
                src={post.image.url}
                alt={post.image.alt || post.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Title & Category Overlay */}
              <div className="absolute left-6 bottom-6 right-6 text-white space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {post.category}
                </span>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Meta bar: Author, Date, Reading Time */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 text-xs sm:text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800">
                      {post.author?.name || "QbicTravel Editorial"}
                    </span>
                    <span className="text-xs text-slate-400">
                      {post.author?.role || "Travel Curator"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{post.publishedAt}</span>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{post.readingTimeMinutes} min read</span>
                  </span>
                </div>
              </div>

              {/* Excerpt Lead */}
              <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed italic border-l-4 border-primary pl-4 py-1 bg-slate-50 rounded-r-xl">
                {post.excerpt}
              </p>

              {/* Article Body Content */}
              <div className="prose prose-slate max-w-none space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                {post.content ? (
                  post.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <>
                    <p>
                      Traveling opens our minds to new perspectives, breathtaking
                      landscapes, and vibrant cultures. Whether you are setting
                      out on your very first journey or planning an annual
                      adventure, thoughtful preparation turns good trips into
                      unforgettable memories.
                    </p>
                    <p>
                      Explore local markets early in the morning when produce is
                      freshest and vendors have time to converse. Respect local
                      customs, embrace culinary surprises, and take the scenic
                      detour whenever safe opportunities arise.
                    </p>
                  </>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 mr-1">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>

          {/* Related Articles Section */}
          {finalRelated.length > 0 && (
            <div className="mt-14 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Related Travel Stories
                </h2>
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Explore all</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {finalRelated.map((relPost) => (
                  <ArticleCard key={relPost.id} post={relPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
