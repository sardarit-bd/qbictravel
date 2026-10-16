"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { TravelTipAccordionItem } from "@/features/travel-tips/types/travelTips.types";
import { FIXTURE_ACCORDION_ITEMS } from "@/features/travel-tips/data/travelTipsFixture";

interface TravelTipsAccordionProps {
  items?: TravelTipAccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function TravelTipsAccordion({
  items = FIXTURE_ACCORDION_ITEMS,
  defaultOpenId = "tip-1",
  className,
}: TravelTipsAccordionProps) {
  // Manage open item in React state (single-open accordion matching reference)
  const [openItemId, setOpenItemId] = React.useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenItemId((current) => (current === id ? null : id));
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xs divide-y divide-slate-100 overflow-hidden",
        className,
      )}
      role="tablist"
      aria-label="Essential Travel Information Topics"
    >
      {items.map((item) => {
        const isOpen = openItemId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;

        return (
          <div key={item.id} className="transition-colors">
            {/* Accordion Row Header Button */}
            <button
              id={headerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full px-5 sm:px-7 py-4 sm:py-4.5 flex items-center justify-between text-left transition-colors cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
                isOpen ? "bg-slate-50/60" : "hover:bg-slate-50/50",
              )}
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
                {/* Numbered Pink Badge */}
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs shadow-pink-500/25">
                  {item.order}
                </span>

                {/* Topic Title */}
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </div>

              {/* Expand/Collapse Chevron */}
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary transition-transform duration-200 shrink-0",
                  isOpen ? "rotate-180 text-primary" : "rotate-0",
                )}
              >
                <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
            </button>

            {/* Accordion Expanded Panel */}
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 sm:px-7 pb-6 pt-2 animate-in fade-in duration-200"
              >
                {item.image ? (
                  /* Two-Column Layout with Image (Matching Item 1 in Screenshot) */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start pt-2">
                    {/* Left Column Image */}
                    <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-xs shrink-0">
                      <Image
                        src={item.image.url}
                        alt={item.image.alt || item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Right Column Text Paragraphs */}
                    <div className="md:col-span-7 space-y-3 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}

                      {/* Bullet Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="pt-2 space-y-1.5">
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="text-slate-700 text-xs font-medium">
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Standard Paragraph Block */
                  <div className="space-y-3 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed pt-1 pl-10 sm:pl-12">
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {/* Bullet Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="pt-2 space-y-1.5">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-xs font-medium">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
