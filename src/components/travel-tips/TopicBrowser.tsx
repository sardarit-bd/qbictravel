"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { TravelTipTopic } from "@/features/travel-tips/types/travelTips.types";
import { FIXTURE_TOPICS } from "@/features/travel-tips/data/travelTipsFixture";
import { TopicCard } from "./TopicCard";

interface TopicBrowserProps {
  topics?: TravelTipTopic[];
  activeTopicId?: string;
  onSelectTopic: (topicId: string) => void;
  onViewAllClick?: () => void;
}

export function TopicBrowser({
  topics = FIXTURE_TOPICS,
  activeTopicId,
  onSelectTopic,
  onViewAllClick,
}: TopicBrowserProps) {
  return (
    <section className="space-y-5 sm:space-y-6" aria-labelledby="browse-by-topic-heading">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="space-y-1.5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2.5px] bg-primary rounded-full inline-block" />
            <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.18em]">
              Browse by topic
            </span>
          </div>

          {/* Heading */}
          <h2
            id="browse-by-topic-heading"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
          >
            Find Travel Tips by Category
          </h2>
        </div>

        {/* View All Topics link */}
        <div>
          <button
            type="button"
            onClick={onViewAllClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group"
          >
            <span>View All Topics</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Responsive Grid of 8 Topic Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isActive={activeTopicId === topic.id}
            onClick={() => onSelectTopic(topic.id)}
          />
        ))}
      </div>
    </section>
  );
}
