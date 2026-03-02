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

    coverImage: "/images/packages/4.jpeg",
    gallery: [
      "/images/packages/4.jpeg"
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
        "Experience a 3-day work friendly mountain retreat designed for professionals. High-speed WiFi, curated hikes, stargazing, and authentic local immersion.",
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
  slug: "7-day-dual-campus-work-immersion",

  title: "7 Day Work From Mountains — Dual Campus Experience (Tirthan & Jibhi)",
  tagline:
    "Work remotely from the Himalayas across two premium locations — river and forest.",

  shortDescription:
    "A premium 7-day work-from-mountains experience in Himachal Pradesh across Tirthan Valley and Jibhi. Reliable high-speed WiFi, distraction-free workdays, guided trek, village immersion, and authentic Himalayan living.",

  description:
    "The 7 Day Work From Mountains — Dual Campus Experience is Bungstays’ flagship remote-work retreat in Himachal Pradesh, designed for professionals who want deep productivity without disconnecting from nature. Guests stay across two carefully selected properties in Tirthan Valley and Jibhi — a riverside campus and a forest campus — experiencing both environments during the week. This program combines stable high-speed internet, dedicated workspaces, structured quiet hours, and small curated groups to ensure uninterrupted professional output. Evenings and weekends introduce authentic Himalayan experiences including forest walks, cultural interaction, community dinners, and a signature guided trek to an offbeat mountain village with overnight stay and stargazing. Ideal for remote employees, startup founders, freelancers, and digital nomads seeking a meaningful workation in the Indian Himalayas.",

  duration: "7-days",
  intensity: "balanced",
  category: "deep-immersion",

  price: 25000,
  currency: "INR",
  priceIncludesStay: true,

  coverImage: "/images/packages/3.jpeg",
  gallery: [
    "/images/packages/dual-campus.jpeg",
    "/images/packages/tirthan.jpeg",
    "/images/packages/jibhi.jpeg"
  ],

  highlights: [
    "Work remotely from the Himalayas with reliable high-speed WiFi",
    "Dual-location stay across Tirthan Valley and Jibhi",
    "Small curated cohort limited to 8 professionals",
    "Dedicated quiet work hours and distraction-free environment",
    "Mid-week property rotation for renewed productivity",
    "Riverside living experience in Tirthan",
    "Forest immersion stay in Jibhi including duplex and treehouse options",
    "Guided Himalayan trek with village homestay",
    "Professional stargazing experience",
    "Community dinners and authentic local cuisine",
    "Ideal balance of work, nature, and cultural immersion"
  ],

  includes: [
    "7 nights accommodation across two premium mountain properties",
    "High-speed WiFi at both Tirthan and Jibhi locations",
    "Dedicated work-friendly spaces",
    "Power backup support",
    "Daily breakfast and dinner",
    "Mid-week transfer between properties",
    "Guided trek to offbeat Himalayan village",
    "Overnight village stay or campsite",
    "Stargazing session under minimal light pollution skies",
    "Community dinner experience",
    "On-ground host coordination and support",
    "Local orientation and activity planning"
  ],

  excludes: [
    "Transportation to and from Tirthan Valley/Jibhi",
    "Personal travel insurance",
    "Lunch (flexible café or local options available)",
    "Private transportation or sightseeing outside program",
    "Personal trekking gear",
    "Optional add-on experiences"
  ],

  idealFor: [
    "Remote working professionals in tech, consulting, or corporate roles",
    "Startup founders and entrepreneurs",
    "Freelancers and independent consultants",
    "Digital nomads seeking stable infrastructure in India",
    "Creators and writers needing deep focus",
    "Professionals experiencing burnout who cannot take long leave",
    "Teams of 2–4 people wanting a focused workation",
    "Urban professionals from Delhi, Bangalore, Mumbai, and Hyderabad"
  ],

  difficultyLevel: "moderate",

  workFriendly: {
    coworkingAccess: true,
    wifiSpeed: "50–100 Mbps at both campuses",
    powerBackup: true,
    quietHours:
      "Dedicated silent work hours during weekdays to ensure uninterrupted productivity"
  },

  itinerary: [
  {
    day: "Day 1 (Monday)",
    title: "Arrival & Check-in — Tirthan and Jibhi",
    description:
      "Guests arrive in the Tirthan Valley region and check in to their assigned accommodation — either the riverside property in Tirthan or the forest property in Jibhi. After settling in and setting up workspaces, the evening is reserved for relaxation, a gentle walk around the surroundings, and a home-style dinner to ease into the mountain rhythm."
  },
  {
    day: "Day 2 (Tuesday)",
    title: "Focused Workday in Nature",
    description:
      "A full productivity day supported by reliable high-speed internet and a calm environment. Guests work from their respective locations with flexible meal breaks and optional evening downtime such as riverside sitting in Tirthan or forest walks in Jibhi."
  },
  {
    day: "Day 3 (Wednesday)",
    title: "Mid-Week Location Exchange",
    description:
      "Guests switch properties to experience the contrasting landscapes of the region. Those staying in Tirthan move to Jibhi, while guests from Jibhi relocate to Tirthan. After a short scenic transfer, the day continues with workspace setup, exploration of the new surroundings, and relaxed evening time."
  },
  {
    day: "Day 4 (Thursday)",
    title: "Deep Work & Slow Living",
    description:
      "Another full workday in the new environment, offering fresh inspiration and renewed focus. Optional morning yoga or stretching session may be available. Evening is free for personal downtime, reading, or quiet nature walks."
  },
  {
    day: "Day 5 (Friday)",
    title: "Final Workday & Weekend Preparation",
    description:
      "Guests wrap up their professional commitments for the week. The afternoon and evening are intentionally relaxed to prepare for the upcoming mountain experience. A briefing session covers safety, packing essentials, and trek details."
  },
  {
    day: "Day 6 (Saturday)",
    title: "Mountain Trek, 360° Viewpoint & Camping",
    description:
      "All guests gather for a guided trek to a high-altitude viewpoint offering panoramic Himalayan views. The experience includes forest trails, scenic rest points, and an overnight camping stay or village homestay. Evening activities include bonfire, traditional dinner, storytelling, and stargazing under minimal light pollution."
  },
  {
    day: "Day 7 (Sunday)",
    title: "Return, Breakfast & Departure",
    description:
      "Guests descend back to the base property in the morning for breakfast and freshening up. The program concludes with departures, leaving participants with renewed clarity, meaningful connections, and a memorable Himalayan experience."
  }
],

  safety: {
    guidedActivities: true,
    insuranceCovered: false,
    medicalSupportAvailable: true
  },

  seo: {
    metaTitle:
      "Work From Mountains — 7 Day Workation in Tirthan & Jibhi | Bungstays",
    metaDescription:
      "Join a 7-day work-from-mountains experience in Tirthan Valley and Jibhi with high-speed WiFi, dual-location stay, guided trek, village immersion, and authentic Himalayan living.",
    keywords: [
      "work from mountains India",
      "workation Himachal Pradesh",
      "Tirthan Valley workation",
      "Jibhi workation",
      "remote work retreat India",
      "digital nomad Himalayas",
      "coworking stay Himachal",
      "work from mountains Himachal",
      "remote work stay Tirthan",
      "Himalayan workation experience"
    ]
  }
}
];