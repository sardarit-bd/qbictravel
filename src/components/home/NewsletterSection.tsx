"use client";

import * as React from "react";
import { Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section
      id="newsletter"
      aria-label="Subscribe to Travel Inspiration Newsletter"
      className="relative w-full bg-white overflow-hidden py-10 sm:py-14 lg:py-16"
    >
      <div className="relative z-10 w-full max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* ===================================================================
            WIDE ROUNDED BANNER CONTAINER WITH SUNSET TRAVEL BACKGROUND IMAGE
            =================================================================== */}
        <div
          className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border border-slate-100 shadow-[0_8px_36px_rgba(15,23,42,0.06)] overflow-hidden bg-cover bg-no-repeat bg-[position:82%_center] sm:bg-[position:80%_center] lg:bg-[position:right_center]"
          style={{ backgroundImage: "url('/images/newsletter/sunset-bg.png')" }}
        >
          {/* Smooth white-to-transparent gradient overlay from the left side so text and form remain crisp & readable */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/60 sm:via-white/85 sm:to-transparent lg:w-3/5 xl:w-[54%] pointer-events-none"
            aria-hidden="true"
          />

          {/* Ambient subtle pink glow matching brand on bottom-left */}
          <div
            className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-primary-subtle/50 blur-2xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          {/* Banner Content (Text & Subscription Form on the Left) */}
          <div className="relative z-10 p-7 sm:p-9 md:p-12 lg:p-14 max-w-xl lg:max-w-2xl text-left">
            {/* Eyebrow: "STAY UPDATED —" */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-primary uppercase">
                STAY UPDATED
              </span>
              <span
                className="w-8 sm:w-10 h-[2px] bg-primary rounded-full"
                aria-hidden="true"
              />
            </div>

            {/* Main Heading: "Get Inspired. Travel More." */}
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-tight leading-[1.14]">
              Get Inspired. <span className="text-primary">Travel More.</span>
            </h2>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm md:text-base text-muted-foreground font-normal leading-relaxed max-w-lg">
              Receive travel inspiration, destination guides, and exclusive updates straight to your inbox.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 max-w-md w-full">
              {isSubmitted ? (
                <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-50 text-emerald-800 text-sm font-semibold border border-emerald-200 animate-in fade-in zoom-in-95">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you for subscribing! Watch your inbox for travel guides.</span>
                </div>
              ) : (
                <div className="relative flex items-center w-full p-1.5 sm:p-2 bg-white rounded-full border border-slate-200/90 shadow-[0_2px_14px_rgba(15,23,42,0.06)] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  {/* Mail Icon */}
                  <Mail
                    className="w-5 h-5 text-muted-foreground ml-3.5 sm:ml-4 shrink-0"
                    aria-hidden="true"
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email address"
                    aria-label="Email address for travel newsletter"
                    className="w-full px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/75 bg-transparent border-none focus:outline-none focus:ring-0"
                  />

                  {/* Pink Subscribe Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-sm active:scale-95 transition-all duration-200 shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                  </button>
                </div>
              )}

              {/* Subtext: Lock Icon + No Spam Guarantee */}
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-3.5 text-[11px] sm:text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5 text-muted-foreground stroke-[1.8]" aria-hidden="true" />
                <span>No spam. Unsubscribe anytime.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
