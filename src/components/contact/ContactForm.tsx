"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/features/contact/schemas";
import { useSubmitContactMessageMutation } from "@/features/contact/api/contactApi";

const COUNTRY_CODES = [
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
];

const SUBJECT_OPTIONS = [
  "Tour Inquiry",
  "Package Inquiry",
  "Booking Support",
  "Custom Travel Planning",
  "Payment Question",
  "General Question",
  "Other",
];

export function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(
    null
  );
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const [submitContactMessage, { isLoading }] =
    useSubmitContactMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "+66",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionSuccess(null);
    setSubmissionError(null);

    try {
      const response = await submitContactMessage({
        ...data,
        countryCode: selectedCountry.code,
      }).unwrap();

      setSubmissionSuccess(
        response.message ||
          "Thank you! Your message has been received. Our travel specialists will get back to you shortly."
      );
      reset();
    } catch (err: unknown) {
      const errorMsg =
        err && typeof err === "object" && "data" in err
          ? (err as { data?: { error?: string } }).data?.error ||
            "Failed to send message. Please try again."
          : "An unexpected error occurred. Please try again or reach out directly via email.";
      setSubmissionError(errorMsg);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]">
      {/* Eyebrow Header */}
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-6 h-0.5 bg-primary rounded-full"
          aria-hidden="true"
        />
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          SEND US A MESSAGE
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        We&apos;d Love to Hear from You
      </h2>
      <p className="mt-1.5 text-sm text-slate-500 leading-relaxed max-w-xl">
        Fill out the form below and our travel specialists will get back to you
        as soon as possible.
      </p>

      {/* Success Notification */}
      {submissionSuccess && (
        <div
          role="status"
          className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-emerald-900">Message Delivered!</p>
            <p className="mt-0.5 text-emerald-700">{submissionSuccess}</p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submissionError && (
        <div
          role="alert"
          className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-rose-900">Delivery Notice</p>
            <p className="mt-0.5 text-rose-700">{submissionError}</p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 sm:space-y-5" noValidate>
        {/* Row 1: Full Name and Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your full name"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.fullName
                  ? "border-rose-400 focus:border-rose-500"
                  : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="mt-1 text-xs text-rose-500 font-medium"
              >
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.email
                  ? "border-rose-400 focus:border-rose-500"
                  : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-xs text-rose-500 font-medium"
              >
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone Number with Country Code & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone Number */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Phone Number
            </label>
            <div className="relative flex rounded-xl border border-slate-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all bg-white">
              {/* Country Code Trigger */}
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2.5 border-r border-slate-200 bg-slate-50/70 hover:bg-slate-100 rounded-l-xl text-xs font-medium text-slate-700 transition-colors shrink-0"
                aria-haspopup="listbox"
                aria-expanded={isCountryDropdownOpen}
                aria-label="Select Country Code"
              >
                <span className="text-base leading-none">{selectedCountry.flag}</span>
                <span>{selectedCountry.code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Country Code Dropdown Menu */}
              {isCountryDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCountryDropdownOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    role="listbox"
                    aria-label="Country Codes"
                    className="absolute top-full left-0 mt-1 w-64 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1"
                  >
                    {COUNTRY_CODES.map((item) => (
                      <button
                        key={item.code + item.country}
                        type="button"
                        role="option"
                        aria-selected={selectedCountry.code === item.code}
                        onClick={() => {
                          setSelectedCountry(item);
                          setIsCountryDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-pink-50/60 transition-colors ${
                          selectedCountry.code === item.code
                            ? "bg-pink-50 text-primary font-semibold"
                            : "text-slate-700"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.flag}</span>
                          <span>{item.country}</span>
                        </span>
                        <span className="text-slate-400 font-mono">
                          {item.code}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Phone Input */}
              <input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                {...register("phone")}
                className="w-full px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 rounded-r-xl outline-none bg-transparent"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-500 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Subject Dropdown */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Subject <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <select
                id="subject"
                {...register("subject")}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full appearance-none px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer ${
                  errors.subject
                    ? "border-rose-400 focus:border-rose-500"
                    : "border-slate-200 focus:border-primary"
                }`}
              >
                <option value="">Select a subject</option>
                {SUBJECT_OPTIONS.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                aria-hidden="true"
              />
            </div>
            {errors.subject && (
              <p
                id="subject-error"
                className="mt-1 text-xs text-rose-500 font-medium"
              >
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Your Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Your Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your travel plans, questions or special requests..."
            {...register("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20 resize-y min-h-[120px] ${
              errors.message
                ? "border-rose-400 focus:border-rose-500"
                : "border-slate-200 focus:border-primary"
            }`}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-xs text-rose-500 font-medium"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Full-width Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-hover active:bg-primary-active text-white font-semibold text-sm shadow-[0_4px_16px_rgba(236,0,140,0.3)] hover:shadow-[0_6px_20px_rgba(236,0,140,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
