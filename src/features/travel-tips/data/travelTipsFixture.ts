/**
 * Travel Tips Development Fixtures
 *
 * Dedicated fixture module containing structured travel advice,
 * topics, accordion content, checklist items, and popular tips.
 */

import {
  TravelTipTopic,
  TravelTipAccordionItem,
  TravelChecklistItem,
  PopularTravelTip,
} from "../types/travelTips.types";

export const FIXTURE_TOPICS: TravelTipTopic[] = [
  {
    id: "trip-planning",
    slug: "trip-planning",
    name: "Trip Planning",
    iconName: "Luggage",
    image: {
      url: "/images/travel-tips/topic-planning.jpg",
      alt: "Travel map, camera, and travel planning accessories",
    },
    description: "Itinerary creation, budgeting, and seasonal advice",
    itemCount: 18,
  },
  {
    id: "visa-entry",
    slug: "visa-entry",
    name: "Visa & Entry",
    iconName: "FileText",
    image: {
      url: "/images/travel-tips/topic-visa.jpg",
      alt: "Passports, visas, and international entry paperwork",
    },
    description: "Entry regulations, passport validity, and e-visas",
    itemCount: 12,
  },
  {
    id: "flights-airports",
    slug: "flights-airports",
    name: "Flights & Airports",
    iconName: "Plane",
    image: {
      url: "/images/travel-tips/topic-flights.jpg",
      alt: "Commercial airplane at runway during golden sunset",
    },
    description: "Luggage rules, flight connections, and check-in tips",
    itemCount: 15,
  },
  {
    id: "accommodation",
    slug: "accommodation",
    name: "Accommodation",
    iconName: "Hotel",
    image: {
      url: "/images/travel-tips/topic-accommodation.jpg",
      alt: "Tropical overwater bungalows and luxury resort villas",
    },
    description: "Hotels, resorts, eco-lodges, and booking safety",
    itemCount: 14,
  },
  {
    id: "transport",
    slug: "transport",
    name: "Transport",
    iconName: "Car",
    image: {
      url: "/images/travel-tips/topic-transport.jpg",
      alt: "Scenic coastal highway with travel vehicle",
    },
    description: "Car rentals, public transport, ferries, and road rules",
    itemCount: 11,
  },
  {
    id: "safety-health",
    slug: "safety-health",
    name: "Safety & Health",
    iconName: "ShieldCheck",
    image: {
      url: "/images/travel-tips/topic-safety.jpg",
      alt: "Hiker with backpack overlooking scenic mountain trail",
    },
    description: "Vaccinations, travel insurance, and emergency prep",
    itemCount: 16,
  },
  {
    id: "on-holiday",
    slug: "on-holiday",
    name: "On Holiday",
    iconName: "Palmtree",
    image: {
      url: "/images/travel-tips/topic-holiday.jpg",
      alt: "Sunny tropical beach with crystalline blue water",
    },
    description: "Cultural etiquette, tipping, currency, and local customs",
    itemCount: 20,
  },
  {
    id: "destinations",
    slug: "destinations",
    name: "Destinations",
    iconName: "Camera",
    image: {
      url: "/images/travel-tips/topic-destinations.jpg",
      alt: "Dramatic coastal limestone cliffs and turquoise water",
    },
    description: "Top regional highlights, hidden gems, and local secrets",
    itemCount: 25,
  },
];

export const FIXTURE_ACCORDION_ITEMS: TravelTipAccordionItem[] = [
  {
    id: "tip-1",
    order: 1,
    title: "Choosing Your Holiday",
    topicId: "trip-planning",
    image: {
      url: "/images/travel-tips/choosing-holiday.jpg",
      alt: "Travel planning layout with map, sunglasses, hat, and camera",
    },
    paragraphs: [
      "Start with your holiday package by choosing a guided tour package. It's the best way to travel with family because all the details are pre-planned for you. This is especially important if you are not keen on researching destinations yourself. Take time to create a complete itinerary following some research on the destination you are visiting. Pay special attention to festivals, weather and local events when you are working on the itinerary.",
      "The itinerary also ensures that everything is planned based on what you and your family want to see and experience.",
    ],
    highlights: [
      "Family-friendly guided tour options tailored for all age groups",
      "Special attention to monsoon seasons, tropical weather & local festivals",
      "Pacing your days between active excursions and rejuvenating downtime",
    ],
  },
  {
    id: "tip-2",
    order: 2,
    title: "Prep Work for Travel",
    topicId: "trip-planning",
    paragraphs: [
      "Before departing, verify all personal travel identification, confirm flight itineraries 24 hours prior to departure, and establish digital copies of key travel documents on secure cloud storage.",
      "Notify your financial institution of international travel dates to prevent unexpected card freezes while making overseas transactions.",
    ],
    highlights: [
      "Store encrypted digital copies of passports, visas & hotel reservations",
      "Set up international roaming or purchase a local eSIM before landing",
      "Reconfirm hotel check-in times and airport transfer rendezvous spots",
    ],
  },
  {
    id: "tip-3",
    order: 3,
    title: "Medical Requirement",
    topicId: "safety-health",
    paragraphs: [
      "Review destination-specific vaccination advisories at least 4 to 6 weeks before your trip. Always carry personal prescription medications in their original labeled packaging alongside a doctor's explanatory note.",
      "Pack a compact medical travel kit containing basic pain relievers, motion sickness tablets, electrolyte hydration packets, and sterile adhesive bandages.",
    ],
    highlights: [
      "Check required vs recommended immunizations for tropical regions",
      "Keep all daily medications in your personal carry-on, never checked baggage",
      "Bring reef-safe sunscreen and high-protection mosquito repellent",
    ],
  },
  {
    id: "tip-4",
    order: 4,
    title: "Visa Requirement",
    topicId: "visa-entry",
    paragraphs: [
      "Verify passport validity—most international destinations mandate at least six months of remaining passport validity beyond your scheduled date of return.",
      "Check whether your destination requires an eVisa, Visa on Arrival (VoA), or pre-arrival electronic travel authorization (ETA) to avoid boarding denial.",
    ],
    highlights: [
      "Ensure minimum 6 months validity from departure date",
      "Print physical hard copies of approved e-visas and return tickets",
      "Review passport blank page requirements (at least 2 consecutive pages)",
    ],
  },
  {
    id: "tip-5",
    order: 5,
    title: "Travel Insurance",
    topicId: "safety-health",
    paragraphs: [
      "Comprehensive travel insurance is indispensable for overseas travel. Ensure your policy includes medical evacuation, trip cancellation, baggage delay, and coverage for adventure activities.",
      "Save your insurer's 24-hour emergency assistance hotline into your phone contacts before leaving your home country.",
    ],
    highlights: [
      "Verify emergency medical evacuation limits (minimum $100,000 USD)",
      "Confirm coverage for water sports, scuba diving, and scooter rentals",
      "Keep digital policy numbers easily accessible without internet access",
    ],
  },
  {
    id: "tip-6",
    order: 6,
    title: "Travel Day",
    topicId: "flights-airports",
    paragraphs: [
      "Arrive at the airport with ample buffer time: at least 3 hours prior for international departures and 2 hours for domestic connections.",
      "Keep essential items—such as passports, boarding passes, medication, power banks, and a change of clothes—in your carry-on luggage.",
    ],
    highlights: [
      "Dress in comfortable, breathable layers for cabin temperature shifts",
      "Weigh your luggage before leaving the hotel to avoid excess baggage fees",
      "Download airline apps for live gate changes and luggage tracking notifications",
    ],
  },
  {
    id: "tip-7",
    order: 7,
    title: "Flight/Airport Reminders",
    topicId: "flights-airports",
    paragraphs: [
      "Stay hydrated during long-haul flights and move around the cabin periodically to promote blood circulation. Download entertainment and offline maps before boarding.",
      "Comply strictly with international liquid restrictions (containers must be 100ml or under inside a single clear resealable quart-sized bag).",
    ],
    highlights: [
      "Remember lithium batteries and power banks must go in carry-on only",
      "Set your watch and device time to destination zone upon takeoff",
      "Use noise-canceling headphones and hydration eye drops for restful transit",
    ],
  },
  {
    id: "tip-8",
    order: 8,
    title: "Self-Drive Travel Reminders",
    topicId: "transport",
    paragraphs: [
      "Obtain an International Driving Permit (IDP) alongside your domestic driver's license if planning to rent a vehicle abroad. Familiarize yourself with local traffic laws.",
      "Inspect rental vehicles thoroughly before driving away, photographing any pre-existing scratches, dents, or windshield chips with timestamped photos.",
    ],
    highlights: [
      "Check which side of the road the destination drives on (e.g., Thailand drives on the left)",
      "Opt for comprehensive collision damage waiver (CDW) insurance",
      "Download offline GPS navigation maps (Google Maps or Maps.me)",
    ],
  },
  {
    id: "tip-9",
    order: 9,
    title: "On Holiday",
    topicId: "on-holiday",
    paragraphs: [
      "Immerse yourself respectfully into local traditions and etiquette. Learn fundamental greeting phrases in the local language, which is deeply appreciated by local communities.",
      "Stay aware of your personal belongings in bustling tourist districts and keep small denominations of local currency for street markets and gratuities.",
    ],
    highlights: [
      "Respect sacred sites with appropriate shoulder and knee coverings",
      "Support local ethical artisans, markets, and family-owned dining spots",
      "Keep hotel business cards in local script for taxi directions",
    ],
  },
  {
    id: "tip-10",
    order: 10,
    title: "Phuket Thailand Hotels",
    topicId: "accommodation",
    paragraphs: [
      "Phuket offers an extraordinary spectrum of accommodations, from vibrant beachfront resorts in Patong and Kata to tranquil luxury pool villas in Laguna and Cape Panwa.",
      "Book directly through reputable operators or vetted travel partners to secure complimentary airport transfers and flexible cancellation policies.",
    ],
    highlights: [
      "Choose Patong/Karon for lively dining, nightlife & watersports",
      "Choose Bang Tao/Laguna or Mai Khao for peaceful family luxury escapes",
      "Confirm air-conditioning, complimentary bottled water & breakfast inclusions",
    ],
  },
  {
    id: "tip-11",
    order: 11,
    title: "Travel Directory",
    topicId: "destinations",
    paragraphs: [
      "Access our centralized travel directory for verified emergency consular contacts, trusted local transport providers, and official tourism office locations across Southeast Asia.",
      "Directory contacts are updated on a quarterly basis by our on-the-ground destination management teams.",
    ],
    highlights: [
      "Tourist Police emergency contact numbers (e.g. 1155 in Thailand)",
      "English-speaking accredited hospital & international clinic hotlines",
      "Consular assistance liaison offices for major embassies",
    ],
  },
  {
    id: "tip-12",
    order: 12,
    title: "Travel Tourism Directory",
    topicId: "destinations",
    paragraphs: [
      "Discover certified tour operators, eco-tourism certified guides, national park visitor centers, and accredited adventure excursion providers.",
      "Using accredited operators guarantees adherence to international marine, trekking, and vehicle safety protocols.",
    ],
    highlights: [
      "Tourism Authority registered agency licensing verification",
      "Certified marine safety standards for speedboats and diving charters",
      "Ethical animal sanctuary guidelines (no riding, observation only)",
    ],
  },
  {
    id: "tip-13",
    order: 13,
    title: "World Travel Directory",
    topicId: "destinations",
    paragraphs: [
      "Explore our global index of curated destination partners, inter-island ferry schedules, high-speed rail networks, and cross-border customs regulations.",
      "Bookmark this reference to streamline multi-country overland and island-hopping journeys across the globe.",
    ],
    highlights: [
      "Inter-island ferry & speedboat seasonal timetable databases",
      "Customs duty-free allowances and prohibited import warnings",
      "Trusted currency exchange hubs with fair interbank rates",
    ],
  },
];

export const FIXTURE_CHECKLIST_ITEMS: TravelChecklistItem[] = [
  { id: "check-1", label: "Check passport validity", isDefaultChecked: true },
  { id: "check-2", label: "Apply for visa (if required)", isDefaultChecked: true },
  { id: "check-3", label: "Get travel insurance", isDefaultChecked: true },
  { id: "check-4", label: "Book flights & accommodation", isDefaultChecked: true },
  { id: "check-5", label: "Prepare important documents", isDefaultChecked: true },
  { id: "check-6", label: "Pack according to destination", isDefaultChecked: true },
  { id: "check-7", label: "Check local entry requirements", isDefaultChecked: true },
];

export const FIXTURE_POPULAR_TIPS: PopularTravelTip[] = [
  {
    id: "pop-1",
    slug: "10-important-things-to-check-before-international-travel",
    title: "10 Important Things to Check Before International Travel",
    image: {
      url: "/images/travel-tips/popular-passports.jpg",
      alt: "Passports and travel documentation",
    },
    readTime: "5 min read",
    category: "Planning Tips",
  },
  {
    id: "pop-2",
    slug: "how-to-save-money-while-travelling",
    title: "How to Save Money While Travelling",
    image: {
      url: "/images/travel-tips/popular-flight.jpg",
      alt: "Flight sunset over clouds",
    },
    readTime: "4 min read",
    category: "Budget Tips",
  },
  {
    id: "pop-3",
    slug: "airport-tips-for-a-smooth-journey",
    title: "Airport Tips for a Smooth Journey",
    image: {
      url: "/images/travel-tips/popular-airport.jpg",
      alt: "Airport passenger concourse and gates",
    },
    readTime: "6 min read",
    category: "Flights",
  },
  {
    id: "pop-4",
    slug: "what-to-pack-for-a-beach-holiday",
    title: "What to Pack for a Beach Holiday",
    image: {
      url: "/images/travel-tips/popular-beach.jpg",
      alt: "Tropical turquoise beach coastline",
    },
    readTime: "4 min read",
    category: "Packing",
  },
  {
    id: "pop-5",
    slug: "travel-insurance-do-you-really-need-it",
    title: "Travel Insurance: Do You Really Need It?",
    image: {
      url: "/images/travel-tips/popular-insurance.jpg",
      alt: "Travel insurance brochure and packing essentials",
    },
    readTime: "5 min read",
    category: "Safety & Health",
  },
];
