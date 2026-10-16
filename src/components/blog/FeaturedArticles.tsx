"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/features/blog/types/blog.types";

interface FeaturedArticlesProps {
  posts?: BlogPost[];
}

export function FeaturedArticles({ posts = [] }: FeaturedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  // Main featured card (first post)
  const mainPost = posts[0];
  // Secondary featured cards (up to 2 posts)
  const secondaryPosts = posts.slice(1, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
      {/* ===================================================================
          1. MAIN LARGE FEATURED ARTICLE CARD (Left Column - 7/12 cols)
          =================================================================== */}
      {mainPost && (
        <article className="lg:col-span-7 group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            {/* Image Banner */}
            <Link
              href={`/blog/${mainPost.slug}`}
              className="relative w-full aspect-[16/11] overflow-hidden bg-slate-100 block shrink-0"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={mainPost.image.url}
                alt={mainPost.image.alt || mainPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category Pill Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-pink-500/30">
                  {mainPost.category}
                </span>
              </div>
            </Link>

            {/* Content Body */}
            <div className="p-6 sm:p-7 space-y-3.5">
              {/* Meta row */}
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>{mainPost.publishedAt}</span>
                </span>
                <span className="text-slate-300" aria-hidden="true">
                  |
                </span>
                <span className="font-medium text-slate-500">
                  {mainPost.readingTimeMinutes} min read
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug">
                <Link
                  href={`/blog/${mainPost.slug}`}
                  className="focus-visible:outline-none focus-visible:underline"
                >
                  {mainPost.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
                {mainPost.excerpt}
              </p>
            </div>
          </div>

          {/* Read More Link */}
          <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1">
            <Link
              href={`/blog/${mainPost.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-hover transition-colors"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      )}

      {/* ===================================================================
          2. SECONDARY FEATURED ARTICLES STACK (Right Column - 5/12 cols)
          =================================================================== */}
      <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 justify-between">
        {secondaryPosts.map((post) => (
          <article
            key={post.id}
            className="group flex-1 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 block shrink-0"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={post.image.url}
                  alt={post.image.alt || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-primary text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-pink-500/30">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content Body */}
              <div className="p-5 sm:p-5.5 space-y-2.5">
                {/* Meta row */}
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

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="focus-visible:outline-none focus-visible:underline"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="px-5 pb-5 sm:px-5.5 sm:pb-5.5 pt-1">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:text-primary-hover transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
