"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, RefreshCw, FileQuestion } from "lucide-react";
import { BlogPost } from "@/features/blog/types/blog.types";
import { ArticleCard } from "./ArticleCard";
import { ArticleCardSkeleton } from "./ArticleCardSkeleton";

interface ArticleGridProps {
  posts?: BlogPost[];
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  onResetFilters?: () => void;
  onViewAllClick?: () => void;
}

export function ArticleGrid({
  posts = [],
  isLoading = false,
  isError = false,
  errorMessage = "Unable to load travel articles.",
  onRetry,
  onResetFilters,
  onViewAllClick,
}: ArticleGridProps) {
  return (
    <section className="space-y-6 sm:space-y-8" aria-labelledby="latest-blog-heading">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="space-y-1.5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2.5px] bg-primary rounded-full inline-block" />
            <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.18em]">
              Latest from our blog
            </span>
          </div>

          {/* Heading */}
          <h2
            id="latest-blog-heading"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
          >
            More Travel Inspiration
          </h2>
        </div>

        {/* View All Posts Action */}
        <div>
          {onViewAllClick ? (
            <button
              type="button"
              onClick={onViewAllClick}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          ) : (
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover transition-colors group"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>

      {/* Loading Skeleton State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
        </div>
      )}

      {/* Error State */}
      {!isLoading && isError && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50/60 p-6 sm:p-8 text-center space-y-4"
        >
          <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Failed to load articles
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {errorMessage}
            </p>
          </div>
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-500/20 transition-all cursor-pointer active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          )}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && posts.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <FileQuestion className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              No matching articles found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find any articles matching your search criteria.
              Try adjusting your keywords or category.
            </p>
          </div>
          {onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Successful Articles Grid */}
      {!isLoading && !isError && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
