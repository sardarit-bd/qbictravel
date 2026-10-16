"use client";

import * as React from "react";
import Image from "next/image";
import {
  Luggage,
  FileText,
  Plane,
  Hotel,
  Car,
  ShieldCheck,
  Palmtree,
  Camera,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TravelTipTopic } from "@/features/travel-tips/types/travelTips.types";

const TOPIC_ICONS: Record<string, LucideIcon> = {
  Luggage,
  FileText,
  Plane,
  Hotel,
  Car,
  ShieldCheck,
  Palmtree,
  Camera,
};

interface TopicCardProps {
  topic: TravelTipTopic;
  isActive?: boolean;
  onClick: () => void;
}

export function TopicCard({ topic, isActive = false, onClick }: TopicCardProps) {
  const Icon = TOPIC_ICONS[topic.iconName] || Luggage;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex flex-col w-full bg-white rounded-2xl border transition-all duration-300 text-left overflow-hidden cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs hover:shadow-md hover:-translate-y-1",
        isActive
          ? "border-primary ring-2 ring-primary/20 shadow-sm"
          : "border-slate-100 hover:border-pink-200",
      )}
    >
      {/* Top Image Inset */}
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        <Image
          src={topic.image.url}
          alt={topic.image.alt || topic.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
          className="object-cover transition-transform duration-500 group-hover:scale-108"
        />

        {/* Floating circular icon badge overlapping bottom seam */}
        <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-10">
          <div
            className={cn(
              "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 border",
              isActive
                ? "bg-primary text-white border-primary scale-110 shadow-pink-500/30"
                : "text-primary border-pink-100 group-hover:border-primary group-hover:scale-105",
            )}
          >
            <Icon
              className={cn(
                "w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors",
                isActive ? "text-white" : "text-primary",
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="pt-5 sm:pt-5.5 pb-3 px-2 sm:px-2.5 text-center flex-1 flex flex-col justify-center">
        <span
          className={cn(
            "text-xs sm:text-[13px] font-bold leading-tight transition-colors line-clamp-1",
            isActive
              ? "text-primary font-black"
              : "text-slate-800 group-hover:text-primary",
          )}
        >
          {topic.name}
        </span>
      </div>
    </button>
  );
}
