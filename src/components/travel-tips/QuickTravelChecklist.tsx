"use client";

import * as React from "react";
import { ClipboardList, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TravelChecklistItem } from "@/features/travel-tips/types/travelTips.types";
import { FIXTURE_CHECKLIST_ITEMS } from "@/features/travel-tips/data/travelTipsFixture";

interface QuickTravelChecklistProps {
  items?: TravelChecklistItem[];
  className?: string;
}

export function QuickTravelChecklist({
  items = FIXTURE_CHECKLIST_ITEMS,
  className,
}: QuickTravelChecklistProps) {
  // Manage checked state in a Set of item IDs
  const [checkedIds, setCheckedIds] = React.useState<Set<string>>(() => {
    return new Set(
      items.filter((i) => i.isDefaultChecked ?? true).map((i) => i.id),
    );
  });

  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Functional download checklist action
  const handleDownloadChecklist = () => {
    const timestamp = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    let content = `========================================\n`;
    content += `       QBICTRAVEL QUICK CHECKLIST       \n`;
    content += `        Date: ${timestamp}              \n`;
    content += `========================================\n\n`;

    items.forEach((item, idx) => {
      const isChecked = checkedIds.has(item.id);
      const mark = isChecked ? "[✓]" : "[ ]";
      content += `${idx + 1}. ${mark} ${item.label}\n`;
    });

    content += `\n----------------------------------------\n`;
    content += `Have a safe and unforgettable holiday!\n`;
    content += `QbicTravel • www.qbictravel.com\n`;

    // Trigger browser file download
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "QbicTravel-Checklist.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-xs p-6 sm:p-7 space-y-5",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center shrink-0 shadow-2xs">
          <ClipboardList className="w-5 h-5" />
        </div>
        <div className="space-y-0.5 min-w-0">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            Quick Travel Checklist
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Don&apos;t forget the essentials before your next trip!
          </p>
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5 pt-1" role="group" aria-label="Travel essentials">
        {items.map((item) => {
          const isChecked = checkedIds.has(item.id);

          return (
            <button
              key={item.id}
              type="button"
              role="checkbox"
              aria-checked={isChecked}
              onClick={() => toggleCheck(item.id)}
              className={cn(
                "w-full flex items-center gap-3 py-2 px-3 rounded-xl text-left text-xs sm:text-[13px] font-medium transition-all cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isChecked
                  ? "bg-slate-50/70 text-slate-800"
                  : "hover:bg-slate-50 text-slate-500",
              )}
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {isChecked ? (
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary fill-primary/15" />
                ) : (
                  <Circle className="w-4.5 h-4.5 text-slate-300" />
                )}
              </div>
              <span
                className={cn(
                  "flex-1 leading-tight transition-colors",
                  isChecked ? "text-slate-900 font-semibold" : "text-slate-600",
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Download Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleDownloadChecklist}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>{downloadSuccess ? "Checklist Downloaded!" : "Download Checklist"}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
