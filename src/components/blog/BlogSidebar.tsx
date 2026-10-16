"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Calendar,
  Mail,
  Send,
  Compass,
  MapPin,
  BookOpen,
  UtensilsCrossed,
  Mountain,
  Bell,
  LucideIcon,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BlogCategory, PopularPost } from "@/features/blog/types/blog.types";
import { FIXTURE_CATEGORIES, FIXTURE_POPULAR_POSTS } from "@/features/blog/data/blogFixture";
import { useSubscribeNewsletterMutation } from "@/features/blog/api/blogApi";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Compass,
  MapPin,
  BookOpen,
  Calendar,
  UtensilsCrossed,
  Mountain,
  Bell,
};

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit?: () => void;
  categories?: BlogCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  popularPosts?: PopularPost[];
  className?: string;
}

export function BlogSidebar({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  categories = FIXTURE_CATEGORIES,
  activeCategory = "all",
  onSelectCategory,
  popularPosts = FIXTURE_POPULAR_POSTS,
  className,
}: BlogSidebarProps) {
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [subscribeNewsletter, { isLoading: isSubscribing, isSuccess, isError, error }] =
    useSubscribeNewsletterMutation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;

    try {
      await subscribeNewsletter({ email: newsletterEmail, source: "blog_sidebar" }).unwrap();
      setNewsletterEmail("");
    } catch {
      // Handled by RTK Query isError state
    }
  };

  // Filter out "All Posts" from the sidebar categories list to match the screenshot
  const sidebarCategories = categories.filter((c) => c.id !== "all");

  return (
    <aside
      className={cn("w-full space-y-6 sm:space-y-7", className)}
      aria-label="Blog sidebar"
    >
      {/* ===================================================================
          1. SEARCH BLOG CARD
          =================================================================== */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
          Search Blog
        </h3>

        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="flex items-center bg-white rounded-full p-1.5 border border-slate-200/90 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-2xs">
            <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent px-2.5 py-1 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              aria-label="Search articles"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="w-8 h-8 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {/* ===================================================================
          2. CATEGORIES CARD
          =================================================================== */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
          Categories
        </h3>

        <div className="space-y-1">
          {sidebarCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.iconName] || Compass;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  "w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-left text-xs sm:text-sm transition-all duration-150 cursor-pointer select-none group",
                  isActive
                    ? "bg-primary-subtle text-primary font-bold shadow-2xs"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium",
                )}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform group-hover:scale-110",
                      isActive ? "text-primary" : "text-primary/80",
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{cat.name}</span>
                </div>
                <span
                  className={cn(
                    "text-xs shrink-0 font-normal",
                    isActive ? "text-primary" : "text-slate-400",
                  )}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================================================================
          3. POPULAR POSTS CARD
          =================================================================== */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
          Popular Posts
        </h3>

        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex items-center gap-3.5 group rounded-xl p-1 -m-1 hover:bg-slate-50 transition-colors"
            >
              {/* Thumbnail */}
              <div className="relative w-16 h-14 sm:w-18 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                <Image
                  src={post.image.url}
                  alt={post.image.alt || post.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Date */}
              <div className="space-y-1 min-w-0 flex-1">
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{post.publishedAt}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===================================================================
          4. NEWSLETTER SIGNUP CARD (Soft Blush Pink Theme)
          =================================================================== */}
      <div className="bg-gradient-to-br from-pink-50/90 to-pink-100/50 rounded-2xl border border-pink-200/70 p-6 shadow-xs space-y-4 relative overflow-hidden">
        {/* Whimsical decorative flight path / paper plane background */}
        <div
          className="absolute -top-1 -right-1 text-pink-300/40 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
            <path
              d="M10 80 Q 40 20, 95 20 Q 110 20, 115 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M110 5 L118 10 L112 18 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Top Icon Badge */}
        <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-xs border border-pink-100">
          <Mail className="w-5 h-5" />
        </div>

        {/* Text Copy */}
        <div className="space-y-1.5 relative z-10">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            Get Travel Inspiration in Your Inbox
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Subscribe to our newsletter for the latest travel tips, guides and
            exclusive offers.
          </p>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleNewsletterSubmit} className="space-y-2 relative z-10">
          <div className="flex items-center bg-white rounded-full p-1.5 border border-pink-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-xs">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={isSubscribing}
              className="w-full bg-transparent px-3 py-1 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:opacity-50"
              aria-label="Email address for travel newsletter"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              aria-label="Subscribe to newsletter"
              className="w-8 h-8 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer disabled:opacity-50 shadow-xs"
            >
              {isSubscribing ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Feedback states */}
          {isSuccess && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium pt-1 animate-in fade-in">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Subscribed successfully! Thank you.</span>
            </div>
          )}

          {isError && (
            <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium pt-1 animate-in fade-in">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>
                {error && "data" in error && typeof error.data === "object" && error.data && "message" in error.data
                  ? String(error.data.message)
                  : "Failed to subscribe. Please try again."}
              </span>
            </div>
          )}
        </form>
      </div>
    </aside>
  );
}
