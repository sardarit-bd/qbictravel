"use client";

import React from "react";
import { ContactHero } from "./ContactHero";
import { ContactInfoCards } from "./ContactInfoCards";
import { ContactForm } from "./ContactForm";
import { OfficeMap } from "./OfficeMap";
import { OfficeDetails } from "./OfficeDetails";
import { FAQAccordion } from "./FAQAccordion";
import { ContactCtaBanner } from "./ContactCtaBanner";

export function ContactPageClient() {
  return (
    <div className="min-h-screen bg-[#FDFCFD] text-slate-900 antialiased selection:bg-pink-100 selection:text-primary">
      {/* Section A: Full-width Tropical Hero Banner */}
      <ContactHero />

      {/* Section B: 4 Elevated Contact Cards */}
      <ContactInfoCards />

      {/* Sections C, D, E: Main 2-Column Section (Form + Office Info) */}
      <section
        aria-label="Contact Details and Inquiries"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Form (58% desktop width) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Office Map, Details, Hours & Social Links (42% desktop width) */}
          <div className="lg:col-span-5 space-y-4">
            <OfficeMap />
            <OfficeDetails />
          </div>
        </div>
      </section>

      {/* Section F: Frequently Asked Questions Accordion */}
      <FAQAccordion />

      {/* Section G: Bottom Travel CTA Banner */}
      <ContactCtaBanner />
    </div>
  );
}
