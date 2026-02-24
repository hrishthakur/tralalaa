export type PackageDuration = "3-days" | "7-days" | "14-days" | "custom";
export type PackageIntensity = "light" | "balanced" | "immersive";

export type PackageType = {
  slug: string;

  /** Core Identity */
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;

  /** Classification */
  duration: PackageDuration;
  intensity: PackageIntensity;
  category: "work-reset" | "deep-immersion" | "community" | "custom";

  /** Pricing */
  price: number;
  currency: "INR";
  priceIncludesStay: boolean;

  /** Media */
  coverImage: string;
  gallery: string[];

  /** Experience Structure */
  highlights: string[];
  includes: string[];
  excludes: string[];
  idealFor: string[];
  difficultyLevel: "easy" | "moderate" | "active";

  /** Work Integration */
  workFriendly: {
    coworkingAccess: boolean;
    wifiSpeed: string;
    powerBackup: boolean;
    quietHours: string;
  };

  /** Sample Itinerary */
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];

  /** Safety & Compliance */
  safety: {
    guidedActivities: boolean;
    insuranceCovered: boolean;
    medicalSupportAvailable: boolean;
  };

  /** SEO */
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
};

export const packages: PackageType[] = [
  {
    slug: "3-day-mountain-reset",

    title: "3 Day Mountain Reset",
    tagline: "Work remotely. Disconnect intentionally. Reconnect deeply.",

    shortDescription:
      "A curated 3-day work-friendly mountain immersion designed for professionals seeking nature, balance, and authentic local connection.",

    description:
      "The 3 Day Mountain Reset is designed for working professionals who want more than a weekend getaway. This experience blends productive remote work mornings with guided evening explorations, stargazing sessions, and meaningful local interaction. It is intentionally paced to provide clarity, recovery, and creative recharge without disrupting your professional commitments.",

    duration: "3-days",
    intensity: "balanced",
    category: "work-reset",

    price: 14999,
    currency: "INR",
    priceIncludesStay: true,

    coverImage: "/images/packages/mountain-reset.jpg",
    gallery: [
      "/images/packages/mountain-reset-1.jpg",
      "/images/packages/mountain-reset-2.jpg",
      "/images/packages/mountain-reset-3.jpg"
    ],

    highlights: [
      "Guided sunset mountain hike",
      "Professional stargazing session",
      "Curated local community dinner",
      "Remote-work optimized environment",
      "Small group format (max 6 participants)"
    ],

    includes: [
      "Premium mountain stay accommodation",
      "High-speed WiFi (minimum 50 Mbps)",
      "Access to quiet coworking space",
      "Evening guided hike",
      "Stargazing experience with equipment",
      "1 curated local dinner",
      "On-ground experience host support"
    ],

    excludes: [
      "Transportation to location",
      "Personal travel insurance",
      "Additional private experiences",
      "Personal equipment for advanced hikes"
    ],

    idealFor: [
      "Remote working professionals",
      "Founders & startup teams",
      "Consultants & freelancers",
      "Creative professionals seeking reset",
      "Digital nomads"
    ],

    difficultyLevel: "easy",

    workFriendly: {
      coworkingAccess: true,
      wifiSpeed: "50-100 Mbps",
      powerBackup: true,
      quietHours: "6 AM – 6 PM dedicated work hours"
    },

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Grounding",
        description:
          "Check-in and workspace setup. Evening guided orientation walk followed by a curated local dinner experience."
      },
      {
        day: "Day 2",
        title: "Work + Exploration",
        description:
          "Focused remote work hours during the day. Late afternoon guided sunset hike. Night stargazing session with telescope and storytelling."
      },
      {
        day: "Day 3",
        title: "Reflection & Departure",
        description:
          "Morning work block followed by optional forest walk. Group reflection session and departure."
      }
    ],

    safety: {
      guidedActivities: true,
      insuranceCovered: false,
      medicalSupportAvailable: true
    },

    seo: {
      metaTitle:
        "3 Day Mountain Reset | Work-Friendly Retreat in the Mountains | Bungstays",
      metaDescription:
        "Experience a 3-day work-friendly mountain retreat designed for professionals. High-speed WiFi, curated hikes, stargazing, and authentic local immersion.",
      keywords: [
        "work from mountains",
        "remote work retreat India",
        "mountain coworking stay",
        "professional retreat India",
        "work and travel India"
      ]
    }
  },

  {
    slug: "7-day-work-explore-immersion",

    title: "7 Day Work & Explore Immersion",
    tagline: "Build momentum during the week. Explore deeply on weekends.",

    shortDescription:
      "A balanced 7-day immersion combining structured workdays with curated weekday evenings and full weekend exploration.",

    description:
      "The 7 Day Work & Explore Immersion is built for professionals who want sustained productivity while experiencing authentic mountain life. Structured weekday routines ensure uninterrupted work focus, while evenings and weekends unlock curated hikes, community engagement, and immersive local experiences.",

    duration: "7-days",
    intensity: "balanced",
    category: "deep-immersion",

    price: 38999,
    currency: "INR",
    priceIncludesStay: true,

    coverImage: "/images/packages/work-explore.jpg",
    gallery: [
      "/images/packages/work-explore-1.jpg",
      "/images/packages/work-explore-2.jpg",
      "/images/packages/work-explore-3.jpg"
    ],

    highlights: [
      "Weekend full-day exploration",
      "Local cultural immersion session",
      "Evening forest walks",
      "Networking dinner with fellow professionals",
      "Guided fishing or camping experience"
    ],

    includes: [
      "7 nights premium stay",
      "High-speed WiFi",
      "Coworking access",
      "3 curated evening experiences",
      "1 full weekend immersion",
      "Community dinner",
      "On-ground host coordination"
    ],

    excludes: [
      "Transportation",
      "Optional private guided sessions",
      "Personal equipment rental"
    ],

    idealFor: [
      "Remote teams",
      "Startup founders",
      "Location-independent professionals",
      "Product builders",
      "Consultants"
    ],

    difficultyLevel: "moderate",

    workFriendly: {
      coworkingAccess: true,
      wifiSpeed: "100 Mbps",
      powerBackup: true,
      quietHours: "Dedicated silent work zones during weekdays"
    },

    itinerary: [
      {
        day: "Days 1–5",
        title: "Structured Workdays",
        description:
          "Morning to afternoon focused work sessions. Curated evening activities including hikes, cultural immersion, and community interaction."
      },
      {
        day: "Day 6",
        title: "Weekend Deep Exploration",
        description:
          "Full-day guided offbeat mountain trail or fishing experience with local experts."
      },
      {
        day: "Day 7",
        title: "Slow Living & Reflection",
        description:
          "Relaxed morning, optional forest immersion, departure."
      }
    ],

    safety: {
      guidedActivities: true,
      insuranceCovered: false,
      medicalSupportAvailable: true
    },

    seo: {
      metaTitle:
        "7 Day Work & Explore Immersion | Mountain Remote Work Experience | Bungstays",
      metaDescription:
        "A 7-day professional work-from-mountains experience combining productivity with curated exploration and authentic local immersion.",
      keywords: [
        "7 day work retreat India",
        "remote work mountains",
        "coworking mountain stay",
        "digital nomad India",
        "workation India"
      ]
    }
  }
];