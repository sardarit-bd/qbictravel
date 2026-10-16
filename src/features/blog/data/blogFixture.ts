/**
 * Blog Development Fixtures & In-Memory Query Engine
 *
 * This module isolates demonstration content for development and testing.
 * All records strictly conform to the `BlogPost`, `BlogCategory`, and `BlogListResponse` contracts.
 * It is consumed by the development API route handlers and test suites, never mixed into production code.
 */

import {
  BlogPost,
  BlogCategory,
  PopularPost,
  BlogQueryParams,
  BlogListResponse,
} from "../types/blog.types";

export const FIXTURE_CATEGORIES: BlogCategory[] = [
  {
    id: "all",
    name: "All Posts",
    slug: "all",
    iconName: "LayoutGrid",
    count: 87,
    description: "Browse all travel articles, tips, and inspiration",
  },
  {
    id: "travel-guides",
    name: "Travel Guides",
    slug: "travel-guides",
    iconName: "Compass",
    count: 24,
    description: "In-depth destination itineraries and comprehensive city guides",
  },
  {
    id: "destination-tips",
    name: "Destination Tips",
    slug: "destination-tips",
    iconName: "MapPin",
    count: 18,
    description: "Insider advice and top highlights for world destinations",
  },
  {
    id: "travel-stories",
    name: "Travel Stories",
    slug: "travel-stories",
    iconName: "BookOpen",
    count: 15,
    description: "First-hand experiences, road trips, and traveler journeys",
  },
  {
    id: "planning-tips",
    name: "Planning Tips",
    slug: "planning-tips",
    iconName: "Calendar",
    count: 12,
    description: "Budgeting, packing checklists, and stress-free trip planning",
  },
  {
    id: "food-culture",
    name: "Food & Culture",
    slug: "food-culture",
    iconName: "UtensilsCrossed",
    count: 10,
    description: "Culinary journeys, street food guides, and cultural etiquette",
  },
  {
    id: "adventure",
    name: "Adventure",
    slug: "adventure",
    iconName: "Mountain",
    count: 14,
    description: "Hiking, water sports, wildlife safaris, and outdoor thrills",
  },
  {
    id: "news-updates",
    name: "News & Updates",
    slug: "news-updates",
    iconName: "Bell",
    count: 8,
    description: "Travel advisories, visa requirements, and agency announcements",
  },
];

export const FIXTURE_FEATURED_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "top-10-most-beautiful-islands-to-visit-in-2026",
    title: "Top 10 Most Beautiful Islands to Visit in 2026",
    excerpt:
      "Discover breathtaking island destinations with crystal clear waters, white sand beaches and unforgettable experiences.",
    content: `From the serene turquoise atolls of the Maldives to the dramatic volcanic cliffs of Bora Bora, the world is blessed with pristine island sanctuaries. 

Whether you crave secluded luxury overwater villas, untouched coral reefs teeming with marine life, or vibrant coastal cultures, our handpicked collection of the ten most breathtaking island escapes will ignite your wanderlust for 2026.

### Highlights:
- **Maldives Atolls:** Unrivaled underwater visibility and world-class overwater hospitality.
- **Phi Phi Islands, Thailand:** Majestic limestone karsts surrounding emerald lagoons.
- **Santorini, Greece:** Whitewashed cliffside villas perched above the Aegean caldera.
- **Bora Bora, French Polynesia:** Mount Otemanu rising dramatically over a sapphire lagoon.`,
    image: {
      url: "/images/blog/islands-maldives.jpg",
      alt: "Top 10 Most Beautiful Islands overwater bungalows",
    },
    category: "Destination Tips",
    categoryId: "destination-tips",
    publishedAt: "Oct 16, 2026",
    readingTimeMinutes: 5,
    author: {
      id: "auth-1",
      name: "Sophia Martinez",
      role: "Senior Travel Editor",
      bio: "Passionate globetrotter specializing in tropical island explorations.",
    },
    tags: ["Islands", "Beaches", "Luxury Travel", "Trending 2026"],
    isFeatured: true,
    featuredRank: 1,
    viewsCount: 14200,
  },
  {
    id: "post-2",
    slug: "a-complete-travel-guide-to-bali",
    title: "A Complete Travel Guide to Bali",
    excerpt:
      "Everything you need to know before you go – where to stay, what to do and travel tips.",
    content: `Bali, the Island of the Gods, seamlessly blends lush emerald rice terraces, ancient Hindu temples, dramatic surf beaches, and a vibrant culinary scene.

This comprehensive guide covers everything you need to navigate the island with ease: from the cultural heartland of Ubud to the cliffside shores of Uluwatu.`,
    image: {
      url: "/images/blog/bali-temple.jpg",
      alt: "Balinese temple pagoda with volcano backdrop",
    },
    category: "Travel Guides",
    categoryId: "travel-guides",
    publishedAt: "Oct 12, 2026",
    readingTimeMinutes: 4,
    author: {
      id: "auth-2",
      name: "Liam Henderson",
      role: "Southeast Asia Specialist",
    },
    tags: ["Bali", "Indonesia", "Culture", "Itinerary"],
    isFeatured: true,
    featuredRank: 2,
    viewsCount: 9800,
  },
  {
    id: "post-3",
    slug: "how-to-plan-the-perfect-vacation",
    title: "How to Plan the Perfect Vacation",
    excerpt:
      "Simple steps to plan a smooth, stress-free and unforgettable trip.",
    content: `Planning an unforgettable holiday doesn't have to be overwhelming. With a structured approach to budgeting, destination research, and flexible itinerary pacing, you can ensure a seamless journey from departure to homecoming.`,
    image: {
      url: "/images/blog/vacation-cliff.jpg",
      alt: "Traveler overlooking picturesque turquoise bay",
    },
    category: "Planning Tips",
    categoryId: "planning-tips",
    publishedAt: "Oct 10, 2026",
    readingTimeMinutes: 6,
    author: {
      id: "auth-3",
      name: "Elena Rostova",
      role: "Travel Logistics Consultant",
    },
    tags: ["Planning", "Tips", "Budget", "Preparation"],
    isFeatured: true,
    featuredRank: 3,
    viewsCount: 8400,
  },
];

export const FIXTURE_BLOG_POSTS: BlogPost[] = [
  ...FIXTURE_FEATURED_POSTS,
  {
    id: "post-4",
    slug: "exploring-the-hidden-gems-of-japan",
    title: "Exploring the Hidden Gems of Japan",
    excerpt:
      "From ancient temples to modern cities, discover the magic of Japan.",
    content: `Beyond the neon lights of Tokyo and the historic shrines of Kyoto lies an intimate world of misty alpine onsen villages, coastal samurai towns, and centuries-old cedar forests.`,
    image: {
      url: "/images/blog/japan-fuji.jpg",
      alt: "Mount Fuji with blooming pink cherry blossoms",
    },
    category: "Travel Stories",
    categoryId: "travel-stories",
    publishedAt: "Oct 06, 2026",
    readingTimeMinutes: 5,
    tags: ["Japan", "Hidden Gems", "Cherry Blossoms", "Culture"],
    isPopular: true,
    viewsCount: 11200,
  },
  {
    id: "post-5",
    slug: "top-adventure-activities-in-thailand",
    title: "Top Adventure Activities in Thailand",
    excerpt:
      "From island hopping to jungle trekking, explore the best adventure experiences.",
    content: `Thailand is a playground for adventure seekers. Ride roaring jet skis along Phuket's coast, rock climb the limestone pinnacles of Railay Beach, and kayak through sacred sea caves in Phang Nga Bay.`,
    image: {
      url: "/images/blog/thailand-adventure.jpg",
      alt: "Tropical emerald lagoon in Thailand surrounded by cliffs",
    },
    category: "Adventure",
    categoryId: "adventure",
    publishedAt: "Oct 03, 2026",
    readingTimeMinutes: 4,
    tags: ["Thailand", "Adventure", "Water Sports", "Islands"],
    isPopular: true,
    viewsCount: 7600,
  },
  {
    id: "post-6",
    slug: "a-food-lovers-guide-to-southeast-asia",
    title: "A Food Lover's Guide to Southeast Asia",
    excerpt:
      "Explore delicious local cuisines and must-try dishes on your next trip.",
    content: `Southeast Asian street food represents one of the most vibrant culinary tapestries on earth. Savor aromatic bowls of Vietnamese pho, spicy Bangkok pad thai, and rich Malaysian laksa.`,
    image: {
      url: "/images/blog/southeast-asia-food.jpg",
      alt: "Asian stir-fried noodles bowl with authentic seasonings",
    },
    category: "Food & Culture",
    categoryId: "food-culture",
    publishedAt: "Sep 30, 2026",
    readingTimeMinutes: 6,
    tags: ["Food", "Culture", "Southeast Asia", "Street Food"],
    viewsCount: 6500,
  },
  {
    id: "post-7",
    slug: "10-travel-tips-for-first-time-travelers",
    title: "10 Travel Tips for First Time Travelers",
    excerpt:
      "Essential insights for stress-free international travel, from document backups to packing smart.",
    content: `Traveling abroad for the first time is thrilling, but it comes with unique challenges. Learn our essential checklist to avoid common pitfalls.`,
    image: {
      url: "/images/blog/popular-temple.jpg",
      alt: "Temple sanctuary overlooking misty mountain range",
    },
    category: "Planning Tips",
    categoryId: "planning-tips",
    publishedAt: "Oct 08, 2026",
    readingTimeMinutes: 5,
    isPopular: true,
    viewsCount: 15400,
  },
  {
    id: "post-8",
    slug: "best-time-to-visit-japan",
    title: "Best Time to Visit Japan",
    excerpt:
      "A seasonal guide to Japan's weather, cherry blossom blooms, and autumn foliage spectacles.",
    content: `Timing your journey to Japan makes all the difference. From spring sakura blossoms to snowy winter festivals in Hokkaido, explore seasonal highlights.`,
    image: {
      url: "/images/blog/popular-japan.jpg",
      alt: "Traditional Japanese lantern-lit street in Kyoto",
    },
    category: "Travel Guides",
    categoryId: "travel-guides",
    publishedAt: "Oct 05, 2026",
    readingTimeMinutes: 4,
    isPopular: true,
    viewsCount: 13900,
  },
  {
    id: "post-9",
    slug: "how-to-save-money-while-traveling",
    title: "How to Save Money While Traveling",
    excerpt:
      "Smart budgeting strategies, flight booking hacks, and local dining tips to extend your travels.",
    content: `Traveling the world on a reasonable budget is entirely achievable with careful flight tracking, off-peak scheduling, and utilizing public transit.`,
    image: {
      url: "/images/blog/popular-budget.jpg",
      alt: "Longtail boat anchored beside tranquil island shore",
    },
    category: "Planning Tips",
    categoryId: "planning-tips",
    publishedAt: "Sep 28, 2026",
    readingTimeMinutes: 5,
    isPopular: true,
    viewsCount: 12100,
  },
  {
    id: "post-10",
    slug: "the-secret-beaches-of-the-greek-islands",
    title: "The Secret Beaches of the Greek Islands",
    excerpt:
      "Escape the tourist hubs to uncover hidden coves and crystalline waters across the Cyclades.",
    content: `Beyond the bustling promenades of Mykonos and Santorini lie undiscovered pebble shores and turquoise bays accessible only by foot or local fishing caique.`,
    image: {
      url: "/images/blog/islands-maldives.jpg",
      alt: "Secluded crystalline cove in the Greek islands",
    },
    category: "Destination Tips",
    categoryId: "destination-tips",
    publishedAt: "Sep 22, 2026",
    readingTimeMinutes: 7,
    viewsCount: 5200,
  },
  {
    id: "post-11",
    slug: "hiking-the-swiss-alps-a-beginners-journey",
    title: "Hiking the Swiss Alps: A Beginner's Journey",
    excerpt:
      "A scenic guide to accessible day trails, mountain huts, and breathtaking glacier panoramas.",
    content: `The Swiss Alps boast one of the world's most comprehensively marked trail networks. Here is how beginners can safely experience high alpine vistas.`,
    image: {
      url: "/images/blog/vacation-cliff.jpg",
      alt: "Alpine trail winding through scenic mountain range",
    },
    category: "Adventure",
    categoryId: "adventure",
    publishedAt: "Sep 18, 2026",
    readingTimeMinutes: 6,
    viewsCount: 4700,
  },
  {
    id: "post-12",
    slug: "cultural-etiquette-and-customs-in-southeast-asia",
    title: "Cultural Etiquette and Customs in Southeast Asia",
    excerpt:
      "Respectful travel practices, temple dress codes, and greetings across Thailand, Bali, and Vietnam.",
    content: `Immersing yourself in local traditions enriches every journey. Master these foundational etiquette guidelines before stepping onto sacred temple grounds.`,
    image: {
      url: "/images/blog/bali-temple.jpg",
      alt: "Traditional temple grounds with respectful visitors",
    },
    category: "Food & Culture",
    categoryId: "food-culture",
    publishedAt: "Sep 12, 2026",
    readingTimeMinutes: 5,
    viewsCount: 3900,
  },
];

export const FIXTURE_POPULAR_POSTS: PopularPost[] = [
  {
    id: "post-7",
    slug: "10-travel-tips-for-first-time-travelers",
    title: "10 Travel Tips for First Time Travelers",
    publishedAt: "Oct 08, 2026",
    image: {
      url: "/images/blog/popular-temple.jpg",
      alt: "10 Travel Tips for First Time Travelers",
    },
    readingTimeMinutes: 5,
    category: "Planning Tips",
  },
  {
    id: "post-8",
    slug: "best-time-to-visit-japan",
    title: "Best Time to Visit Japan",
    publishedAt: "Oct 05, 2026",
    image: {
      url: "/images/blog/popular-japan.jpg",
      alt: "Best Time to Visit Japan",
    },
    readingTimeMinutes: 4,
    category: "Travel Guides",
  },
  {
    id: "post-9",
    slug: "how-to-save-money-while-traveling",
    title: "How to Save Money While Traveling",
    publishedAt: "Sep 28, 2026",
    image: {
      url: "/images/blog/popular-budget.jpg",
      alt: "How to Save Money While Traveling",
    },
    readingTimeMinutes: 5,
    category: "Planning Tips",
  },
];

/**
 * Pure In-Memory Filtering, Searching, and Pagination
 */
export function filterAndPaginateBlogPosts(
  params: BlogQueryParams = {},
): BlogListResponse {
  const {
    search,
    category,
    page = 1,
    limit = 3, // Default to 3 items per page for "More Travel Inspiration" grid
    sort = "latest",
  } = params;

  // 1. Separate featured posts for the top editorial area
  const featuredPosts = FIXTURE_FEATURED_POSTS;

  // 2. Base pool for standard listing: all posts
  let filtered = [...FIXTURE_BLOG_POSTS];

  // 3. Category Filter
  if (category && category !== "all") {
    const normalizedCat = category.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.categoryId.toLowerCase() === normalizedCat ||
        p.category.toLowerCase().replace(/[^a-z0-9]/g, "-") === normalizedCat,
    );
  }

  // 4. Search Filter
  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q))),
    );
  }

  // 5. Sorting
  if (sort === "popular") {
    filtered.sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0));
  } else if (sort === "oldest") {
    filtered.sort((a, b) => a.id.localeCompare(b.id));
  } else {
    // "latest" default
    filtered.sort((a, b) => b.id.localeCompare(a.id));
  }

  // 6. Pagination
  const total = filtered.length;
  const safeLimit = Math.max(1, limit);
  const totalPages = Math.max(1, Math.ceil(total / safeLimit));
  const safePage = Math.min(Math.max(1, page), totalPages);

  const startIndex = (safePage - 1) * safeLimit;
  const paginatedPosts = filtered.slice(startIndex, startIndex + safeLimit);

  // 7. Calculate available category counts
  const availableCategories = FIXTURE_CATEGORIES.map((cat) => ({
    id: cat.id,
    name: cat.name,
    count:
      cat.id === "all"
        ? FIXTURE_BLOG_POSTS.length
        : FIXTURE_BLOG_POSTS.filter((p) => p.categoryId === cat.id).length,
  }));

  return {
    posts: paginatedPosts,
    featuredPosts,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages,
      hasNextPage: safePage < totalPages,
      hasPrevPage: safePage > 1,
    },
    filters: {
      availableCategories,
      totalAvailable: FIXTURE_BLOG_POSTS.length,
    },
    appliedQuery: {
      search,
      category,
      sort,
      page: safePage,
      limit: safeLimit,
    },
  };
}
