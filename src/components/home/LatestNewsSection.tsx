"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export interface NewsArticle {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-destinations-2025",
    category: "DESTINATIONS",
    date: "Jan 12, 2025",
    title: "Top 10 Breathtaking Destinations to Visit in 2025",
    image: "/images/news/santorini-destinations.jpg",
    alt: "Top 10 Breathtaking Destinations to Visit in 2025 - Santorini whitewashed architecture and Aegean sunset",
    href: "/blog/top-10-destinations-2025",
  },
  {
    id: "news-travel-tips-stress-free",
    category: "TRAVEL TIPS",
    date: "Jan 08, 2025",
    title: "Essential Travel Tips for a Stress-Free Vacation",
    image: "/images/news/travel-tips.jpg",
    alt: "Essential Travel Tips for a Stress-Free Vacation - Travelers with hats and backpacks enjoying scenic vistas",
    href: "/blog/essential-travel-tips",
  },
  {
    id: "news-culture-hidden-treasures",
    category: "CULTURE",
    date: "Jan 05, 2025",
    title: "Hidden Treasures You Need to Explore This Year",
    image: "/images/news/japan-culture.jpg",
    alt: "Hidden Treasures You Need to Explore This Year - Traditional pagoda and authentic lantern-lit travel destination",
    href: "/blog/hidden-treasures-to-explore",
  },
];

export function LatestNewsSection() {
  return (
    <section
      id="latest-news"
      aria-label="Latest Travel News and Inspiration"
      className="relative w-full bg-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14"
    >
      <div className="relative z-10 w-full max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ===================================================================
            SECTION HEADER: Eyebrow, Main Heading, Subtitle & Action Button
            =================================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          {/* Left: Eyebrow + Heading + Subtitle */}
          <div className="max-w-2xl text-left">
            {/* Eyebrow: "TRAVEL INSPIRATION —" */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase">
                TRAVEL INSPIRATION
              </span>
              <span
                className="w-8 sm:w-10 h-[2px] bg-primary rounded-full"
                aria-hidden="true"
              />
            </div>

            {/* Main Heading: "Explore Latest News" */}
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-[2.65rem] lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]">
              Explore Latest News
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-xs sm:text-sm md:text-base text-muted-foreground font-normal leading-relaxed">
              Get inspired with travel stories, destination guides, and expert travel tips.
            </p>
          </div>

          {/* Right: View All Articles Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 shrink-0 self-start sm:self-center"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </Link>
        </div>

        {/* ===================================================================
            NEWS CARDS GRID (3 Columns Desktop, 2 Tablet, 1 Mobile)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-10 sm:mt-12">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-100/90 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_14px_38px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* White Content Area */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                {/* Category Badge & Date Row */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary-subtle text-primary text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground stroke-[1.8]" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Article Title & Circular Light-Pink Arrow Action Row */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>

                  <Link
                    href={article.href}
                    aria-label={`Read article: ${article.title}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-2xs"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNewsSection;
