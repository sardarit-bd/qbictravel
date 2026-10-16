"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/features/blog/types/blog.types";

interface ArticleCardProps {
  post: BlogPost;
  className?: string;
}

export function ArticleCard({ post, className }: ArticleCardProps) {
  const detailUrl = `/blog/${post.slug}`;

  return (
    <article
      className={`group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full ${
        className || ""
      }`}
    >
      {/* Thumbnail with Category Badge */}
      <Link
        href={detailUrl}
        className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 block shrink-0"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={post.image.url}
          alt={post.image.alt || post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge overlay on top-left */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-pink-500/30">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Metadata Row: Date & Reading Time */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{post.publishedAt}</span>
            </span>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <span className="font-medium text-slate-500">
              {post.readingTimeMinutes} min read
            </span>
          </div>

          {/* Article Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug line-clamp-2">
            <Link href={detailUrl} className="focus-visible:outline-none focus-visible:underline">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-1">
          <Link
            href={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:text-primary-hover transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
