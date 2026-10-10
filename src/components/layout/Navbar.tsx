"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, MapPin, ArrowRight } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Tours", href: "/tours" },
  { label: "Packages", href: "/tours" },
  { label: "Blog", href: "/blog" },
  { label: "Travel Guides", href: "/destinations" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  // Close menus on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="relative z-30 w-full px-5 sm:px-8 md:px-12 pt-5 md:pt-7">
      <div className="flex items-center justify-between">
        {/* Left Side: Brand Logo (Official Client Logo Asset) */}
        <Link
          href="/"
          className="group flex items-center px-3 py-1.5 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="QbicTravel Home"
        >
          <Image
            src="/images/brand/qbic-logo-2.png"
            alt="QbicTravel Logo"
            width={150}
            height={80}
            priority
            className="h-15 sm:h-15 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            if (item.isActive) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-semibold text-primary py-1 transition-colors hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {item.label}
                  {/* Subtle active underline indicator matching reference */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/85 hover:text-white py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Search and Menu Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Button */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open search dialog"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Menu / Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 rounded-2xl bg-brand-navy/95 backdrop-blur-md border border-white/15 p-5 shadow-2xl text-white animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50 px-2">
              Menu Navigation
            </span>
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    item.isActive
                      ? "bg-primary/15 text-primary font-semibold"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Quick Search</span>
              </button>
              <Link
                href="/tours"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-full bg-primary text-white font-bold text-sm shadow-md hover:bg-primary-hover transition-colors"
              >
                Book Your Next Tour
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Quick Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-lg rounded-2xl bg-white text-zinc-900 shadow-2xl p-5 border border-zinc-200"
            role="dialog"
            aria-modal="true"
            aria-label="Search Destinations & Tours"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-800">
                <Search className="w-5 h-5 text-zinc-400" />
                <span className="font-semibold text-base">Search QbicTravel</span>
              </div>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  setIsSearchOpen(false);
                  router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                }
              }}
              className="mt-4"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where are you going? (e.g. Bali, Paris, Swiss Alps)"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 px-3.5 py-1.5 rounded-lg bg-teal-800 text-white font-medium text-xs hover:bg-teal-900 transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Popular quick searches */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Popular Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Bali", "Swiss Alps", "Kyoto", "Paris", "Iceland", "Dubai"].map(
                    (dest) => (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => {
                          setSearchQuery(dest);
                          setIsSearchOpen(false);
                          router.push(`/search?q=${encodeURIComponent(dest)}`);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-700 hover:bg-primary-subtle hover:text-primary-subtle-foreground transition-colors"
                      >
                        <MapPin className="w-3 h-3 text-primary" />
                        <span>{dest}</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
