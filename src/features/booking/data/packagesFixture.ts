/**
 * Development Data Fixtures for Packages
 *
 * IMPORTANT:
 * - This file contains development demonstration content ONLY.
 * - It must NOT be mixed into production API results.
 * - Used exclusively by the local development mock route provider (/api/v1/packages)
 *   until a production backend is connected.
 */

import {
  Package,
  PackageCategory,
  PackagePromotion,
  PackageQueryParams,
  PackageListResponse,
} from "../types/packages";

export const FIXTURE_CATEGORIES: PackageCategory[] = [
  {
    id: "island-tours",
    name: "Island Tours",
    slug: "island-tours",
    count: 18,
    iconName: "Palmtree",
    subcategories: [
      { id: "phuket-tours", name: "Phuket Tours, Shows & Transport", slug: "phuket-tours", count: 12 },
      { id: "phi-phi", name: "Phi Phi Island", slug: "phi-phi", count: 8 },
      { id: "james-bond", name: "James Bond Island", slug: "james-bond", count: 6 },
      { id: "coral-island", name: "Coral Island", slug: "coral-island", count: 5 },
      { id: "racha-island", name: "Racha Island", slug: "racha-island", count: 4 },
      { id: "similan-island", name: "Similan Island", slug: "similan-island", count: 7 },
      { id: "koh-lanta", name: "Koh Lanta", slug: "koh-lanta", count: 3 },
    ],
  },
  {
    id: "adventure-tours",
    name: "Adventure Tours",
    slug: "adventure-tours",
    count: 24,
    iconName: "Mountain",
    subcategories: [
      { id: "zipline-canopy", name: "Zipline & Jungle Canopy", slug: "zipline-canopy", count: 8 },
      { id: "atv-quad", name: "ATV & Quad Biking", slug: "atv-quad", count: 10 },
      { id: "rafting-trekking", name: "White Water Rafting & Trekking", slug: "rafting-trekking", count: 6 },
    ],
  },
  {
    id: "city-safari",
    name: "City & Safari Tours",
    slug: "city-safari",
    count: 16,
    iconName: "Compass",
    subcategories: [
      { id: "elephant-sanctuary", name: "Ethical Elephant Sanctuary", slug: "elephant-sanctuary", count: 6 },
      { id: "phuket-old-town", name: "Phuket Old Town Heritage", slug: "phuket-old-town", count: 5 },
      { id: "temples-viewpoints", name: "Temples & Panoramic Viewpoints", slug: "temples-viewpoints", count: 5 },
    ],
  },
  {
    id: "cabaret-shows",
    name: "Cabaret Shows",
    slug: "cabaret-shows",
    count: 9,
    iconName: "Sparkles",
    subcategories: [
      { id: "simon-cabaret", name: "Simon Cabaret Phuket", slug: "simon-cabaret", count: 5 },
      { id: "siam-niramit", name: "Siam Niramit Show & Buffet", slug: "siam-niramit", count: 4 },
    ],
  },
  {
    id: "taxi-ferry",
    name: "Taxi & Ferry Service",
    slug: "taxi-ferry",
    count: 12,
    iconName: "Car",
    subcategories: [
      { id: "airport-transfers", name: "Private Airport Transfers", slug: "airport-transfers", count: 6 },
      { id: "ferry-tickets", name: "Island Ferry & Speedboat Tickets", slug: "ferry-tickets", count: 6 },
    ],
  },
  {
    id: "car-transport",
    name: "Car & Transport",
    slug: "car-transport",
    count: 10,
    iconName: "Truck",
    subcategories: [
      { id: "private-minivan", name: "Minivan with Private Chauffeur", slug: "private-minivan", count: 6 },
      { id: "car-rental", name: "Self-Drive Luxury Car Rental", slug: "car-rental", count: 4 },
    ],
  },
  {
    id: "private-tours",
    name: "Private Tours",
    slug: "private-tours",
    count: 15,
    iconName: "Clock",
    subcategories: [
      { id: "vip-yacht", name: "VIP Private Yacht Charter", slug: "vip-yacht", count: 8 },
      { id: "custom-charter", name: "Tailored Speedboat Charter", slug: "custom-charter", count: 7 },
    ],
  },
  {
    id: "diving-snorkeling",
    name: "Diving & Snorkeling",
    slug: "diving-snorkeling",
    count: 14,
    iconName: "LifeBuoy",
    subcategories: [
      { id: "scuba-padi", name: "PADI Certified Scuba Diving", slug: "scuba-padi", count: 8 },
      { id: "coral-snorkeling", name: "Coral Reef Snorkeling Day Trips", slug: "coral-snorkeling", count: 6 },
    ],
  },
  {
    id: "water-sports",
    name: "Water Sports",
    slug: "water-sports",
    count: 11,
    iconName: "Waves",
    subcategories: [
      { id: "jet-ski", name: "Jet Ski Coastal Safaris", slug: "jet-ski", count: 6 },
      { id: "parasailing-wake", name: "Parasailing & Wakeboarding", slug: "parasailing-wake", count: 5 },
    ],
  },
  {
    id: "cultural-tours",
    name: "Cultural Tours",
    slug: "cultural-tours",
    count: 8,
    iconName: "Landmark",
    subcategories: [
      { id: "big-buddha-temples", name: "Big Buddha & Sacred Temples", slug: "big-buddha-temples", count: 5 },
      { id: "thai-cooking", name: "Authentic Thai Cooking Classes", slug: "thai-cooking", count: 3 },
    ],
  },
  {
    id: "day-trips",
    name: "Day Trips",
    slug: "day-trips",
    count: 20,
    iconName: "Calendar",
    subcategories: [
      { id: "phang-nga-day", name: "Phang Nga Bay & Sea Caves", slug: "phang-nga-day", count: 11 },
      { id: "khao-sok-day", name: "Khao Sok Rainforest & Lake", slug: "khao-sok-day", count: 9 },
    ],
  },
  {
    id: "multi-day",
    name: "Multi-day Packages",
    slug: "multi-day",
    count: 17,
    iconName: "Package",
    subcategories: [
      { id: "island-hop-3d2n", name: "3 Days 2 Nights Island Hop", slug: "island-hop-3d2n", count: 9 },
      { id: "andaman-5d4n", name: "5 Days 4 Nights Ultimate Andaman", slug: "andaman-5d4n", count: 8 },
    ],
  },
];

export const FIXTURE_PROMOTION: PackagePromotion = {
  id: "promo-special-48",
  eyebrow: "SPECIAL OFFER",
  heading: "Get Up to 48% Off",
  discountPercentage: 48,
  subtext: "On selected travel packages worldwide!",
  ctaText: "View All Deals →",
  ctaHref: "/packages",
  imageUrl: "/images/packages/promo-banner.jpg",
};

export const FIXTURE_PACKAGES: Package[] = [
  {
    id: "pkg-1",
    slug: "jet-ski-tour-phuket",
    title: "Jet Ski Tour Phuket",
    location: "Phuket, Thailand",
    description: "Feel the thrill of riding a jet ski and explore Phuket's stunning coastline.",
    category: "Water Sports",
    categoryId: "water-sports",
    subcategory: "phuket-tours",
    subcategoryId: "phuket-tours",
    pricing: {
      amount: 89,
      currency: "USD",
      originalAmount: 120,
      discountPercentage: 25,
      perPersonLabel: "per person",
    },
    duration: {
      display: "1 Hour",
      hours: 1,
    },
    rating: {
      average: 4.8,
      reviewCount: 320,
    },
    image: {
      url: "/images/packages/jetski-phuket.jpg",
      alt: "Jet Ski Tour in Phuket waters",
    },
    includedServices: ["Hotel Transfer", "Safety Gear", "Fuel", "Insurance"],
    includedServiceSummary: "Hotel Transfer",
    hasGuide: true,
    isBestseller: true,
    isAvailable: true,
    price: 89,
    currency: "USD",
    includedService: "Hotel Transfer",
    reviewsCount: 320,
  },
  {
    id: "pkg-2",
    slug: "phuket-to-phi-phi-speedboat",
    title: "Phuket to Phi Phi by Speed Boat",
    location: "Phuket, Thailand",
    description: "Visit the world-famous Phi Phi Islands with crystal clear waters and white sandy beaches.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "phi-phi",
    subcategoryId: "phi-phi",
    pricing: {
      amount: 99,
      currency: "USD",
      originalAmount: 140,
      discountPercentage: 29,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 8,
    },
    rating: {
      average: 4.7,
      reviewCount: 280,
    },
    image: {
      url: "/images/packages/phuket-speedboat.jpg",
      alt: "Speedboat cruise to Phi Phi Islands",
    },
    includedServices: ["Lunch Included", "National Park Fees", "Snorkeling Gear", "Hotel Transfer"],
    includedServiceSummary: "Lunch Included",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 99,
    currency: "USD",
    includedService: "Lunch Included",
    reviewsCount: 280,
  },
  {
    id: "pkg-3",
    slug: "james-bond-tour-speedboat",
    title: "James Bond Tour by Speed Boat",
    location: "Phuket, Thailand",
    description: "Explore the iconic James Bond Island and surrounding limestone cliffs.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "james-bond",
    subcategoryId: "james-bond",
    pricing: {
      amount: 95,
      currency: "USD",
      originalAmount: 130,
      discountPercentage: 26,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 8,
    },
    rating: {
      average: 4.6,
      reviewCount: 210,
    },
    image: {
      url: "/images/packages/james-bond.jpg",
      alt: "James Bond Island limestone rock formation",
    },
    includedServices: ["Lunch Included", "Canoeing Tour", "National Park Fees", "Hotel Transfer"],
    includedServiceSummary: "Lunch Included",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 95,
    currency: "USD",
    includedService: "Lunch Included",
    reviewsCount: 210,
  },
  {
    id: "pkg-4",
    slug: "coral-island-snorkeling-tour",
    title: "Coral Island Snorkeling Tour",
    location: "Phuket, Thailand",
    description: "Enjoy snorkeling, swimming and relaxing on the beautiful Coral Island.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "coral-island",
    subcategoryId: "coral-island",
    pricing: {
      amount: 75,
      currency: "USD",
      originalAmount: 100,
      discountPercentage: 25,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Half Day",
      hours: 4,
    },
    rating: {
      average: 4.8,
      reviewCount: 190,
    },
    image: {
      url: "/images/packages/coral-island.jpg",
      alt: "Snorkeling in Coral Island clear waters",
    },
    includedServices: ["Hotel Transfer", "Snorkel Equipment", "Life Jacket", "Seasonal Fruits"],
    includedServiceSummary: "Hotel Transfer",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 75,
    currency: "USD",
    includedService: "Hotel Transfer",
    reviewsCount: 190,
  },
  {
    id: "pkg-5",
    slug: "racha-island-catamaran-cruise",
    title: "Racha Island Catamaran Cruise",
    location: "Phuket, Thailand",
    description: "Sail on a luxury catamaran to Racha Island for pristine turquoise snorkeling and relaxation.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "racha-island",
    subcategoryId: "racha-island",
    pricing: {
      amount: 115,
      currency: "USD",
      originalAmount: 160,
      discountPercentage: 28,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 7,
    },
    rating: {
      average: 4.9,
      reviewCount: 165,
    },
    image: {
      url: "/images/packages/hero-packages.jpg",
      alt: "Luxury catamaran cruise to Racha Island",
    },
    includedServices: ["Lunch Included", "Paddle Board", "Snorkel Gear", "Refreshments"],
    includedServiceSummary: "Lunch Included",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 115,
    currency: "USD",
    includedService: "Lunch Included",
    reviewsCount: 165,
  },
  {
    id: "pkg-6",
    slug: "similan-islands-snorkeling-trip",
    title: "Similan Islands Day Trip with Snorkeling",
    location: "Phuket, Thailand",
    description: "Discover world-class coral reefs and crystal waters in the protected Similan National Park.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "similan-island",
    subcategoryId: "similan-island",
    pricing: {
      amount: 129,
      currency: "USD",
      originalAmount: 180,
      discountPercentage: 28,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 9,
    },
    rating: {
      average: 4.9,
      reviewCount: 240,
    },
    image: {
      url: "/images/packages/coral-island.jpg",
      alt: "Similan Islands national marine reserve",
    },
    includedServices: ["Hotel Transfer", "Buffet Lunch", "National Park Entry", "Snorkel Equipment"],
    includedServiceSummary: "Hotel Transfer",
    hasGuide: true,
    isBestseller: true,
    isAvailable: true,
    price: 129,
    currency: "USD",
    includedService: "Hotel Transfer",
    reviewsCount: 240,
  },
  {
    id: "pkg-7",
    slug: "koh-lanta-sunset-speedboat",
    title: "Koh Lanta Sunset Speedboat Tour",
    location: "Phuket, Thailand",
    description: "Cruise across tranquil Andaman waters and witness breathtaking sunsets over Koh Lanta.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "koh-lanta",
    subcategoryId: "koh-lanta",
    pricing: {
      amount: 85,
      currency: "USD",
      originalAmount: 110,
      discountPercentage: 22,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Half Day",
      hours: 5,
    },
    rating: {
      average: 4.7,
      reviewCount: 130,
    },
    image: {
      url: "/images/packages/phuket-speedboat.jpg",
      alt: "Sunset over Andaman sea near Koh Lanta",
    },
    includedServices: ["Hotel Transfer", "Sunset Cocktail", "Snacks", "Insurance"],
    includedServiceSummary: "Hotel Transfer",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 85,
    currency: "USD",
    includedService: "Hotel Transfer",
    reviewsCount: 130,
  },
  {
    id: "pkg-8",
    slug: "phuket-siam-niramit-show",
    title: "Phuket Siam Niramit Cultural Show",
    location: "Phuket, Thailand",
    description: "Witness Thailand's rich history, spectacular stage acrobatics, and authentic cultural dining.",
    category: "Cabaret Shows",
    categoryId: "cabaret-shows",
    subcategory: "phuket-tours",
    subcategoryId: "phuket-tours",
    pricing: {
      amount: 65,
      currency: "USD",
      originalAmount: 90,
      discountPercentage: 27,
      perPersonLabel: "per person",
    },
    duration: {
      display: "3 Hours",
      hours: 3,
    },
    rating: {
      average: 4.8,
      reviewCount: 310,
    },
    image: {
      url: "/images/packages/jetski-phuket.jpg",
      alt: "Siam Niramit stage performance",
    },
    includedServices: ["Hotel Transfer", "Show Ticket", "Dinner Buffet"],
    includedServiceSummary: "Hotel Transfer",
    hasGuide: false,
    isBestseller: false,
    isAvailable: true,
    price: 65,
    currency: "USD",
    includedService: "Hotel Transfer",
    reviewsCount: 310,
  },
  {
    id: "pkg-9",
    slug: "phang-nga-bay-kayaking",
    title: "Phang Nga Bay Sea Cave Kayaking",
    location: "Phuket, Thailand",
    description: "Paddle through hidden lagoons, limestone sea caves, and mangrove forests in Phang Nga Bay.",
    category: "Adventure Tours",
    categoryId: "adventure-tours",
    subcategory: "phuket-tours",
    subcategoryId: "phuket-tours",
    pricing: {
      amount: 92,
      currency: "USD",
      originalAmount: 125,
      discountPercentage: 26,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 8,
    },
    rating: {
      average: 4.9,
      reviewCount: 225,
    },
    image: {
      url: "/images/packages/james-bond.jpg",
      alt: "Kayaking through Phang Nga Bay caves",
    },
    includedServices: ["Lunch Included", "Kayak Equipment", "Guide", "National Park Fees"],
    includedServiceSummary: "Lunch Included",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 92,
    currency: "USD",
    includedService: "Lunch Included",
    reviewsCount: 225,
  },
  {
    id: "pkg-10",
    slug: "phuket-white-water-rafting-atv",
    title: "Phuket White Water Rafting & ATV",
    location: "Phuket, Thailand",
    description: "Combine high-octane river rafting with all-terrain jungle quad biking in lush tropical rainforests.",
    category: "Adventure Tours",
    categoryId: "adventure-tours",
    subcategory: "phuket-tours",
    subcategoryId: "phuket-tours",
    pricing: {
      amount: 79,
      currency: "USD",
      originalAmount: 110,
      discountPercentage: 28,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Half Day",
      hours: 5,
    },
    rating: {
      average: 4.7,
      reviewCount: 175,
    },
    image: {
      url: "/images/packages/hero-packages.jpg",
      alt: "White water river rafting in jungle",
    },
    includedServices: ["Hotel Transfer", "Safety Helmets", "Buffet Lunch", "Insurance"],
    includedServiceSummary: "Hotel Transfer",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 79,
    currency: "USD",
    includedService: "Hotel Transfer",
    reviewsCount: 175,
  },
  {
    id: "pkg-11",
    slug: "phi-phi-sunrise-early-bird",
    title: "Phi Phi Sunrise & Maya Bay Early Bird",
    location: "Phuket, Thailand",
    description: "Beat the crowds to iconic Maya Bay and snorkel in pristine waters during golden hour sunrise.",
    category: "Island Tours",
    categoryId: "island-tours",
    subcategory: "phi-phi",
    subcategoryId: "phi-phi",
    pricing: {
      amount: 110,
      currency: "USD",
      originalAmount: 155,
      discountPercentage: 29,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 8,
    },
    rating: {
      average: 4.8,
      reviewCount: 290,
    },
    image: {
      url: "/images/packages/phuket-speedboat.jpg",
      alt: "Maya Bay early morning sunrise",
    },
    includedServices: ["Lunch Included", "Early Hotel Pickup", "Snorkel Gear", "Park Fees"],
    includedServiceSummary: "Lunch Included",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 110,
    currency: "USD",
    includedService: "Lunch Included",
    reviewsCount: 290,
  },
  {
    id: "pkg-12",
    slug: "phuket-vip-yacht-charter",
    title: "Phuket VIP Private Yacht Charter",
    location: "Phuket, Thailand",
    description: "Exclusive private luxury catamaran charter around Andaman islands with personalized concierge.",
    category: "Private Tours",
    categoryId: "private-tours",
    subcategory: "phuket-tours",
    subcategoryId: "phuket-tours",
    pricing: {
      amount: 450,
      currency: "USD",
      originalAmount: 600,
      discountPercentage: 25,
      perPersonLabel: "per person",
    },
    duration: {
      display: "Full Day",
      hours: 8,
    },
    rating: {
      average: 5.0,
      reviewCount: 95,
    },
    image: {
      url: "/images/packages/jetski-phuket.jpg",
      alt: "Luxury private catamaran sailing",
    },
    includedServices: ["Lunch Included", "Private Crew", "Champagne", "Hotel Limousine"],
    includedServiceSummary: "Lunch Included",
    hasGuide: true,
    isBestseller: false,
    isAvailable: true,
    price: 450,
    currency: "USD",
    includedService: "Lunch Included",
    reviewsCount: 95,
  },
];

/**
 * Pure reference implementation of server-side filtering, sorting, and pagination
 * used by development mock endpoints.
 */
export function filterAndPaginateFixturePackages(
  params: PackageQueryParams = {}
): PackageListResponse {
  let result = [...FIXTURE_PACKAGES];
  const {
    categoryId,
    subcategoryId,
    search,
    sort = "popular",
    page = 1,
    limit = 4,
  } = params;

  // 1. Filter by category
  if (categoryId && categoryId !== "all") {
    const catObj = FIXTURE_CATEGORIES.find((c) => c.id === categoryId);
    if (catObj) {
      result = result.filter((pkg) => {
        if (subcategoryId) {
          return (
            pkg.subcategoryId === subcategoryId ||
            pkg.subcategory === subcategoryId ||
            (subcategoryId === "phuket-tours" &&
              (pkg.subcategoryId === "phuket-tours" ||
                pkg.location.toLowerCase().includes("phuket")))
          );
        }
        return (
          pkg.categoryId === catObj.id ||
          pkg.category.toLowerCase() === catObj.name.toLowerCase() ||
          Boolean(catObj.subcategories?.some((s) => s.id === pkg.subcategoryId)) ||
          (categoryId === "island-tours" &&
            (pkg.category === "Island Tours" || Boolean(pkg.subcategory)))
        );
      });
    }
  }

  // 2. Filter by search query (COMPOSED with category filter)
  if (search?.trim()) {
    const q = search.toLowerCase().trim();
    result = result.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(q) ||
        pkg.location.toLowerCase().includes(q) ||
        pkg.category.toLowerCase().includes(q) ||
        pkg.description.toLowerCase().includes(q) ||
        pkg.includedServices.some((s) => s.toLowerCase().includes(q)) ||
        Boolean(pkg.includedServiceSummary?.toLowerCase().includes(q))
    );
  }

  // 3. Sort results
  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.pricing.amount - b.pricing.amount);
      break;
    case "price-desc":
      result.sort((a, b) => b.pricing.amount - a.pricing.amount);
      break;
    case "rating":
      result.sort((a, b) => b.rating.average - a.rating.average);
      break;
    case "name":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "popular":
    default:
      result.sort((a, b) => b.rating.reviewCount - a.rating.reviewCount);
      break;
  }

  // 4. Pagination
  const total = result.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (safePage - 1) * limit;
  const paginatedItems = result.slice(startIndex, startIndex + limit);

  return {
    packages: paginatedItems,
    pagination: {
      page: safePage,
      limit,
      total,
      totalPages,
      hasNextPage: safePage < totalPages,
      hasPrevPage: safePage > 1,
    },
    filters: {
      availableCategories: FIXTURE_CATEGORIES.map((c) => ({
        id: c.id,
        name: c.name,
        count: c.count,
      })),
      minPrice: 65,
      maxPrice: 450,
      totalAvailable: FIXTURE_PACKAGES.length,
    },
    appliedQuery: params,
  };
}
