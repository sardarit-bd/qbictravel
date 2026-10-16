"use client";

import * as React from "react";
import {
  MapPin,
  LayoutGrid,
  Calendar,
  Search,
  ArrowRight,
  ChevronDown,
  Check,
} from "lucide-react";
import {
  AVAILABLE_DESTINATIONS,
  TOUR_TYPES,
  DURATION_OPTIONS,
} from "@/features/tours/data/tours";
import { DurationFilterOption } from "@/features/tours/types";
import { cn } from "@/lib/utils";

export interface TourSearchParamsState {
  destination: string;
  tourType: string;
  duration: DurationFilterOption;
}

export interface TourSearchBarProps {
  initialValues?: TourSearchParamsState;
  onSearch: (params: TourSearchParamsState) => void;
  className?: string;
}

export function TourSearchBar({
  initialValues = {
    destination: "All Destinations",
    tourType: "All Types",
    duration: "all",
  },
  onSearch,
  className,
}: TourSearchBarProps) {
  const [destination, setDestination] = React.useState(initialValues.destination);
  const [tourType, setTourType] = React.useState(initialValues.tourType);
  const [duration, setDuration] = React.useState<DurationFilterOption>(
    initialValues.duration
  );

  const [activeDropdown, setActiveDropdown] = React.useState<
    "destination" | "tourType" | "duration" | null
  >(null);

  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    onSearch({ destination, tourType, duration });
  };

  const getDurationLabel = (val: DurationFilterOption) => {
    const opt = DURATION_OPTIONS.find((o) => o.value === val);
    return opt ? opt.label : "Any Duration";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-5xl mx-auto bg-white rounded-2xl md:rounded-[22px] shadow-xl shadow-slate-900/10 border border-slate-100 p-3 sm:p-4 md:p-3",
        className
      )}
    >
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-0"
      >
        {/* =====================================================================
            FIELD 1: DESTINATION
            ===================================================================== */}
        <div className="relative flex-1 px-3 sm:px-4 py-2.5 md:py-2 hover:bg-slate-50/80 rounded-xl transition-colors">
          <button
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "destination" ? null : "destination")
            }
            className="w-full flex items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-expanded={activeDropdown === "destination"}
            aria-haspopup="listbox"
            aria-label="Select destination"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Pink Icon Circle */}
              <div className="w-9 h-9 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Destination
                </span>
                <span className="block text-sm font-bold text-slate-800 truncate">
                  {destination === "All Destinations"
                    ? "Where do you want to go?"
                    : destination}
                </span>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
                activeDropdown === "destination" && "rotate-180 text-primary"
              )}
            />
          </button>

          {/* Destination Dropdown Menu */}
          {activeDropdown === "destination" && (
            <div
              role="listbox"
              className="absolute left-0 top-full mt-2 w-full min-w-[240px] max-w-xs bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-60 overflow-y-auto"
            >
              {AVAILABLE_DESTINATIONS.map((dest) => (
                <button
                  key={dest}
                  type="button"
                  role="option"
                  aria-selected={destination === dest}
                  onClick={() => {
                    setDestination(dest);
                    setActiveDropdown(null);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium flex items-center justify-between hover:bg-primary-subtle/50 transition-colors",
                    destination === dest
                      ? "text-primary font-bold bg-primary-subtle/30"
                      : "text-slate-700"
                  )}
                >
                  <span>{dest}</span>
                  {destination === dest && (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical Divider 1 */}
        <div
          className="hidden md:block h-10 w-px bg-slate-200 shrink-0 mx-1"
          aria-hidden="true"
        />

        {/* =====================================================================
            FIELD 2: TOUR TYPE
            ===================================================================== */}
        <div className="relative flex-1 px-3 sm:px-4 py-2.5 md:py-2 hover:bg-slate-50/80 rounded-xl transition-colors">
          <button
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "tourType" ? null : "tourType")
            }
            className="w-full flex items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-expanded={activeDropdown === "tourType"}
            aria-haspopup="listbox"
            aria-label="Select tour type"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Pink Icon Circle */}
              <div className="w-9 h-9 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                <LayoutGrid className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Tour Type
                </span>
                <span className="block text-sm font-bold text-slate-800 truncate">
                  {tourType}
                </span>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
                activeDropdown === "tourType" && "rotate-180 text-primary"
              )}
            />
          </button>

          {/* Tour Type Dropdown Menu */}
          {activeDropdown === "tourType" && (
            <div
              role="listbox"
              className="absolute left-0 top-full mt-2 w-full min-w-[200px] bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            >
              {TOUR_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  role="option"
                  aria-selected={tourType === type}
                  onClick={() => {
                    setTourType(type);
                    setActiveDropdown(null);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium flex items-center justify-between hover:bg-primary-subtle/50 transition-colors",
                    tourType === type
                      ? "text-primary font-bold bg-primary-subtle/30"
                      : "text-slate-700"
                  )}
                >
                  <span>{type}</span>
                  {tourType === type && <Check className="w-3.5 h-3.5 text-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical Divider 2 */}
        <div
          className="hidden md:block h-10 w-px bg-slate-200 shrink-0 mx-1"
          aria-hidden="true"
        />

        {/* =====================================================================
            FIELD 3: DURATION
            ===================================================================== */}
        <div className="relative flex-1 px-3 sm:px-4 py-2.5 md:py-2 hover:bg-slate-50/80 rounded-xl transition-colors">
          <button
            type="button"
            onClick={() =>
              setActiveDropdown(activeDropdown === "duration" ? null : "duration")
            }
            className="w-full flex items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-expanded={activeDropdown === "duration"}
            aria-haspopup="listbox"
            aria-label="Select duration"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Pink Icon Circle */}
              <div className="w-9 h-9 rounded-full bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Duration
                </span>
                <span className="block text-sm font-bold text-slate-800 truncate">
                  {getDurationLabel(duration)}
                </span>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
                activeDropdown === "duration" && "rotate-180 text-primary"
              )}
            />
          </button>

          {/* Duration Dropdown Menu */}
          {activeDropdown === "duration" && (
            <div
              role="listbox"
              className="absolute left-0 top-full mt-2 w-full min-w-[200px] bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            >
              {DURATION_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={duration === opt.value}
                  onClick={() => {
                    setDuration(opt.value as DurationFilterOption);
                    setActiveDropdown(null);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium flex items-center justify-between hover:bg-primary-subtle/50 transition-colors",
                    duration === opt.value
                      ? "text-primary font-bold bg-primary-subtle/30"
                      : "text-slate-700"
                  )}
                >
                  <span>{opt.label}</span>
                  {duration === opt.value && (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* =====================================================================
            SEARCH CTA BUTTON
            ===================================================================== */}
        <div className="px-2 pt-1 md:pt-0 shrink-0">
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 md:py-3.5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-pink-500/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 active:scale-95 cursor-pointer"
          >
            <Search className="w-4 h-4 shrink-0" />
            <span>Find Tours</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TourSearchBar;
