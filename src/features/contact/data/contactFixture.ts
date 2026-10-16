/**
 * Contact Us Fixtures and Structured Data
 *
 * Provides authoritative default contact details, office hours,
 * social channels, and frequently asked questions matching the reference design.
 */

import {
  ContactInfoCardItem,
  OfficeLocationInfo,
  SocialLink,
  FAQItem,
} from "../types/contact.types";

export const FIXTURE_CONTACT_CARDS: ContactInfoCardItem[] = [
  {
    id: "card-call",
    iconName: "Phone",
    title: "Call Us",
    primaryValue: "+66 99 123 4567",
    secondaryValue: "Mon - Fri, 9:00 AM - 6:00 PM (Thailand Time)",
    actionHref: "tel:+66991234567",
    isActionable: true,
  },
  {
    id: "card-email",
    iconName: "Mail",
    title: "Email Us",
    primaryValue: "hello@qbictravel.com",
    secondaryValue: "We typically respond within 24 hours.",
    actionHref: "mailto:hello@qbictravel.com",
    isActionable: true,
  },
  {
    id: "card-visit",
    iconName: "MapPin",
    title: "Visit Our Office",
    primaryValue: "Phuket, Thailand",
    secondaryValue: "123/45 Patong Beach Road, Phuket 83150, Thailand",
    actionHref: "https://maps.google.com/?q=Patong+Beach+Road+Phuket+Thailand",
    isActionable: true,
  },
  {
    id: "card-chat",
    iconName: "MessageCircle",
    title: "Live Chat",
    primaryValue: "Chat with our team",
    secondaryValue: "Available on our website during business hours.",
    isActionable: false,
  },
];

export const FIXTURE_OFFICE_LOCATION: OfficeLocationInfo = {
  companyName: "QBIC Travel Co., Ltd.",
  addressLine1: "123/45 Patong Beach Road",
  addressLine2: "Patong",
  city: "Phuket",
  country: "Thailand",
  postalCode: "83150",
  directionsUrl:
    "https://maps.google.com/?q=Patong+Beach+Road+Phuket+83150+Thailand",
  coordinates: {
    lat: 7.8966,
    lng: 98.2974,
  },
  officeHours: [
    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  timezoneNotice: "(Thailand Time, UTC+7)",
};

export const FIXTURE_SOCIAL_LINKS: SocialLink[] = [
  { platform: "facebook", label: "Facebook", href: "https://facebook.com" },
  { platform: "instagram", label: "Instagram", href: "https://instagram.com" },
  { platform: "youtube", label: "YouTube", href: "https://youtube.com" },
  { platform: "tiktok", label: "TikTok", href: "https://tiktok.com" },
  { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

export const FIXTURE_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book a tour or package?",
    answer:
      "You can browse our curated selection of tours and packages online, choose your preferred travel dates and group size, and submit a reservation request. Our travel specialists will confirm availability and send your comprehensive confirmation itinerary.",
    category: "Booking",
  },
  {
    id: "faq-2",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards (Visa, MasterCard, JCB), secure international bank transfers, and verified online payment gateways. Full payment terms and secure payment links are provided upon itinerary confirmation.",
    category: "Payment",
  },
  {
    id: "faq-3",
    question: "Can you help with visa requirements?",
    answer:
      "Yes, our destination advisors can guide you through entry regulations, Visa on Arrival (VoA) eligibility, and eVisa procedures for Thailand and neighboring Southeast Asian destinations. However, final visa issuance is determined by relevant immigration authorities.",
    category: "Visa",
  },
  {
    id: "faq-4",
    question: "Can I change or cancel my booking?",
    answer:
      "Booking amendments and cancellations are subject to the specific terms of each tour operator and hotel partner. Most excursions offer flexible rescheduling up to 48 hours prior to scheduled departure. Contact our support team promptly for assistance.",
    category: "Booking",
  },
  {
    id: "faq-5",
    question: "Do you offer custom travel packages?",
    answer:
      "Absolutely! We specialize in tailored private tours, luxury island charters, family celebrations, and corporate retreats. Simply select 'Custom Travel Planning' in our contact form or speak directly with our private travel designers.",
    category: "Custom Planning",
  },
  {
    id: "faq-6",
    question: "How can I contact you for urgent assistance?",
    answer:
      "For urgent same-day tour assistance or in-destination support, existing clients can call our 24/7 emergency hotline displayed on their booking voucher, or reach our support team via telephone during business hours.",
    category: "Support",
  },
];
