"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, MapPin, Compass, Search, Minus, Plus } from "lucide-react";

const POPULAR_LOCATIONS = [
  "Where are you going?",
  "Bali, Indonesia",
  "Swiss Alps, Switzerland",
  "Kyoto, Japan",
  "Paris, France",
  "Cairo, Egypt",
  "Santorini, Greece",
];

const THEMES = [
  "Adventure",
  "Beach & Island",
  "Cultural Heritage",
  "Mountain Trek",
  "Wildlife Safari",
  "Romantic Getaway",
];

export function HeroSearchPanel() {
  const router = useRouter();
  const [location, setLocation] = React.useState("Where are you going?");
  const [theme, setTheme] = React.useState("Adventure");
  const [travelers, setTravelers] = React.useState(2);

  const [activeDropdown, setActiveDropdown] = React.useState<
    "location" | "theme" | "travelers" | null
  >(null);

  const panelRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (location !== "Where are you going?") queryParams.set("location", location);
    queryParams.set("theme", theme);
    queryParams.set("travelers", travelers.toString());
    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <div
      ref={panelRef}
      className="relative z-20 w-full max-w-xl md:max-w-2xl bg-white rounded-2xl md:rounded-full shadow-2xl p-2.5 md:p-2 border border-white/30 text-zinc-800"
    >
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-stretch md:items-center divide-y md:divide-y-0 md:divide-x divide-zinc-200"
      >
        {/* Field 1: Location */}
        <div className="relative flex-1 px-3 py-2 md:py-1">
          <label
            htmlFor="hero-location-btn"
            className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5 cursor-pointer"
          >
            Location
          </label>
          <button
            id="hero-location-btn"
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "location" ? null : "location")
            }
            className="w-full flex items-center justify-between gap-1 text-left text-xs md:text-sm font-semibold text-zinc-900 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-expanded={activeDropdown === "location"}
          >
            <span
              className={`truncate ${
                location === "Where are you going?"
                  ? "text-zinc-500 font-normal"
                  : "text-zinc-900"
              }`}
            >
              {location}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          </button>

          {/* Location Dropdown */}
          {activeDropdown === "location" && (
            <div className="absolute left-0 bottom-full md:bottom-auto md:top-full mb-2 md:mb-0 md:mt-3 w-64 rounded-xl bg-white shadow-xl border border-zinc-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2 py-1">
                Select Destination
              </div>
              <div className="max-h-48 overflow-y-auto space-y-0.5">
                {POPULAR_LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setLocation(loc);
                      setActiveDropdown(null);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                      location === loc
                        ? "bg-primary-subtle text-primary-subtle-foreground font-semibold"
                        : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{loc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Field 2: Themes */}
        <div className="relative flex-1 px-3 py-2 md:py-1">
          <label
            htmlFor="hero-themes-btn"
            className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5 cursor-pointer"
          >
            Themes
          </label>
          <button
            id="hero-themes-btn"
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "theme" ? null : "theme")
            }
            className="w-full flex items-center justify-between gap-1 text-left text-xs md:text-sm font-semibold text-zinc-900 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-expanded={activeDropdown === "theme"}
          >
            <span className="truncate">{theme}</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          </button>

          {/* Theme Dropdown */}
          {activeDropdown === "theme" && (
            <div className="absolute left-0 bottom-full md:bottom-auto md:top-full mb-2 md:mb-0 md:mt-3 w-56 rounded-xl bg-white shadow-xl border border-zinc-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2 py-1">
                Travel Styles
              </div>
              <div className="space-y-0.5">
                {THEMES.map((th) => (
                  <button
                    key={th}
                    type="button"
                    onClick={() => {
                      setTheme(th);
                      setActiveDropdown(null);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-colors ${
                      theme === th
                        ? "bg-primary-subtle text-primary-subtle-foreground font-semibold"
                        : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{th}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Field 3: Traveler */}
        <div className="relative px-3 py-2 md:py-1 min-w-[100px] md:min-w-[110px]">
          <label
            htmlFor="hero-travelers-btn"
            className="block text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5 cursor-pointer"
          >
            Traveler
          </label>
          <button
            id="hero-travelers-btn"
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "travelers" ? null : "travelers")
            }
            className="w-full flex items-center justify-between gap-1 text-left text-xs md:text-sm font-semibold text-zinc-900 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            aria-expanded={activeDropdown === "travelers"}
          >
            <span>{travelers}</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          </button>

          {/* Traveler Counter Dropdown */}
          {activeDropdown === "travelers" && (
            <div className="absolute left-0 bottom-full md:bottom-auto md:top-full mb-2 md:mb-0 md:mt-3 w-52 rounded-xl bg-white shadow-xl border border-zinc-100 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-zinc-800">Guests</p>
                  <p className="text-[10px] text-zinc-400">Total travelers</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    disabled={travelers <= 1}
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 disabled:opacity-40 transition-colors"
                    aria-label="Decrease travelers"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold w-4 text-center">
                    {travelers}
                  </span>
                  <button
                    type="button"
                    onClick={() => setTravelers(Math.min(10, travelers + 1))}
                    disabled={travelers >= 10}
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 disabled:opacity-40 transition-colors"
                    aria-label="Increase travelers"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveDropdown(null)}
                className="mt-3 w-full py-1 text-[11px] font-semibold text-center rounded bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Submit Action Button */}
        <div className="p-1 md:pl-2 flex justify-end">
          <button
            type="submit"
            className="w-full md:w-10 h-10 rounded-xl md:rounded-full bg-primary hover:bg-primary-hover text-primary-foreground flex items-center justify-center gap-2 font-semibold text-xs transition-all duration-200 hover:shadow-md hover:shadow-pink-500/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Search tours and packages"
          >
            <Search className="w-4 h-4 text-white" />
            <span className="md:hidden">Search Tours</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeroSearchPanel;
