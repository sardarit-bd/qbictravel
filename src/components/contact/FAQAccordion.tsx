"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { FAQItem } from "@/features/contact/types";
import { FIXTURE_FAQS } from "@/features/contact/data/contactFixture";
import { useGetContactFAQsQuery } from "@/features/contact/api/contactApi";

interface FAQAccordionProps {
  initialFaqs?: FAQItem[];
  allFaqsHref?: string;
}

export function FAQAccordion({
  initialFaqs = FIXTURE_FAQS,
  allFaqsHref = "/faq",
}: FAQAccordionProps) {
  const { data: remoteData } = useGetContactFAQsQuery();
  const faqs = remoteData && remoteData.length > 0 ? remoteData : initialFaqs;

  // Track expanded state for independent toggles
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Split into 2 columns for desktop (left: 0, 2, 4; right: 1, 3, 5 matching reference)
  const leftColumnFaqs = faqs.filter((_: FAQItem, idx: number) => idx % 2 === 0);
  const rightColumnFaqs = faqs.filter((_: FAQItem, idx: number) => idx % 2 !== 0);

  const renderFAQCard = (item: FAQItem) => {
    const isOpen = !!openIds[item.id];
    const buttonId = `faq-btn-${item.id}`;
    const panelId = `faq-panel-${item.id}`;

    return (
      <div
        key={item.id}
        className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? "border-primary/40 shadow-sm ring-1 ring-primary/10"
            : "border-slate-200 hover:border-slate-300 shadow-xs"
        }`}
      >
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => toggleItem(item.id)}
          className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 text-slate-800 hover:text-primary transition-colors cursor-pointer group"
        >
          <span className="text-sm font-semibold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
            {item.question}
          </span>
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              isOpen
                ? "bg-pink-50 text-primary"
                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
            }`}
            aria-hidden="true"
          >
            {isOpen ? (
              <Minus className="w-3.5 h-3.5" />
            ) : (
              <Plus className="w-3.5 h-3.5" />
            )}
          </span>
        </button>

        {isOpen && (
          <div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-in fade-in duration-200"
          >
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-6 h-0.5 bg-primary rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Quick Answers
          </h2>
        </div>

        {/* View All FAQs Link */}
        <Link
          href={allFaqsHref}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group transition-colors self-start sm:self-end"
        >
          <span>View All FAQs</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 2-Column Accordion Grid on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumnFaqs.map(renderFAQCard)}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumnFaqs.map(renderFAQCard)}
        </div>
      </div>
    </section>
  );
}
