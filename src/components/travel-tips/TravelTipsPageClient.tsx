"use client";

import * as React from "react";
import {
  useGetTravelTipsTopicsQuery,
  useGetTravelTipsAccordionQuery,
  useGetPopularTravelTipsQuery,
  useGetTravelChecklistQuery,
} from "@/features/travel-tips/api/travelTipsApi";
import { TopicBrowser } from "./TopicBrowser";
import { TravelTipsAccordion } from "./TravelTipsAccordion";
import { QuickTravelChecklist } from "./QuickTravelChecklist";
import { TripPlanningHelp } from "./TripPlanningHelp";
import { PopularTravelTips } from "./PopularTravelTips";
import { TravelTipsPromoBanner } from "./TravelTipsPromoBanner";

function TravelTipsContent() {
  // Active topic filter state
  const [activeTopicId, setActiveTopicId] = React.useState<string | undefined>(
    undefined,
  );

  // RTK Query Hooks
  const { data: topicsData } = useGetTravelTipsTopicsQuery();
  const { data: accordionData, isLoading: isAccordionLoading } =
    useGetTravelTipsAccordionQuery(activeTopicId);
  const { data: popularTipsData } = useGetPopularTravelTipsQuery();
  const { data: checklistData } = useGetTravelChecklistQuery();

  const handleSelectTopic = (topicId: string) => {
    setActiveTopicId((curr) => (curr === topicId ? undefined : topicId));

    // Smooth scroll to the Essential Travel Information section
    const targetSection = document.getElementById("essential-travel-info");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleViewAllTopics = () => {
    setActiveTopicId(undefined);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 flex flex-col">
      <main className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 space-y-12 sm:space-y-16">
        {/* ===================================================================
            SECTION A: Browse by Topic (8 Horizontal Topic Cards)
            =================================================================== */}
        <TopicBrowser
          topics={topicsData}
          activeTopicId={activeTopicId}
          onSelectTopic={handleSelectTopic}
          onViewAllClick={handleViewAllTopics}
        />

        {/* ===================================================================
            SECTION B: Essential Travel Information (70% Accordion + 30% Sidebar)
            =================================================================== */}
        <section
          id="essential-travel-info"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start scroll-mt-28"
          aria-labelledby="essential-travel-heading"
        >
          {/* Main Content Area (70% / 8 cols on desktop) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7 min-w-0">
            {/* Main Section Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-[2.5px] bg-primary rounded-full inline-block" />
                <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.18em]">
                  Travel Tips
                </span>
              </div>

              <h1
                id="essential-travel-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
              >
                Essential Travel Information
              </h1>

              <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-3xl">
                Everything you need to know before, during and after your trip.
                Click on each topic to explore detailed tips, checklists and
                useful information.
              </p>
            </div>

            {/* 13 Reference Accordion Items */}
            {isAccordionLoading ? (
              <div className="bg-white rounded-2xl p-8 border border-slate-100 animate-pulse space-y-4">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <div className="h-5 bg-slate-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <TravelTipsAccordion items={accordionData} />
            )}
          </div>

          {/* Right Sidebar Area (30% / 4 cols on desktop) */}
          <aside
            className="lg:col-span-4 space-y-6 sm:space-y-7 w-full"
            aria-label="Travel tips sidebar"
          >
            {/* 1. Quick Travel Checklist with Download action */}
            <QuickTravelChecklist items={checklistData} />

            {/* 2. Need Help Planning Your Trip Card */}
            <TripPlanningHelp />

            {/* 3. Popular Travel Tips Card */}
            <PopularTravelTips
              tips={popularTipsData}
              onViewAllClick={handleViewAllTopics}
            />
          </aside>
        </section>

        {/* ===================================================================
            SECTION C: Bottom Promotional Banner (Explore Our Tour Packages)
            =================================================================== */}
        <TravelTipsPromoBanner />
      </main>
    </div>
  );
}

export function TravelTipsPageClient() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      }
    >
      <TravelTipsContent />
    </React.Suspense>
  );
}
