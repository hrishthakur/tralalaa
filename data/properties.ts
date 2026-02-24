/**
 * SINGLE SOURCE OF TRUTH FOR PROPERTIES
 *
 * Rules:
 * - No pricing logic outside pricing.ts
 * - UI, SEO, booking, and content read from here
 * - Pages should NEVER hardcode descriptions
 */

export type PricingTier = {
  id: "short" | "weekly" | "monthly";
  label: string;
  minNights: number;
  pricePerDay: number;
  gstPercent: number;
  maxGuests: number;
  extraGuestPrice: number;
};

export type Property = {
  slug: string;
  name: string;
  location: string;
  roomCapacity: number;
  
  wifiSpeed: number;

  images: {
    cover: string;
    gallery: string[]; // ALWAYS present
  };

  seo: {
    title: string;
    description: string;
  };

  content: {
    about: string;
    idealFor: string[];
  };

  amenities: string[];
  highlights: string[];

  policies: {
    cancellation: string;
    houseRules: string[];
  };

  pricing: PricingTier[];
};

/* ================= DATA ================= */

export const properties: Property[] = [
  {
    slug: "tirthan-sunshine-cafe",
    name: "Tirthan Sunshine Cafe",
    location: "Tirthan",
    roomCapacity: 2,

    wifiSpeed: 40, //mbps

    images: {
      cover: "/images/properties/tirthan/1.avif",
      gallery: [
        "/images/properties/tirthan/1.avif",
        "/images/properties/tirthan/2.jpeg",
        "/images/properties/tirthan/3.webp",
        "/images/properties/tirthan/4.webp",
      ],
    },

    seo: {
      title: "Tirthan Sunshine Cafe | Remote Work Stay in Tirthan",
      description:
        "Remote-work friendly stay in tirthan valley with mountain and river views, WIFI, power backup and long stay discounts.",
    },

    content: {
      about:
        "Tirthan Sunshine Café & Stay is a simple, comfortable place set close to the river in Tirthan Valley. We offer clean private rooms, hot water, homely food, and a quiet outdoor area where guests can sit, relax, or enjoy tea with a view of the mountains. It’s a peaceful spot for travellers who want a calm stay, good meals, and easy access to nearby viewpoints, trails, and local attractions. We provide work from hills accomodation as well. We’re always around to help with travel tips, directions, or anything you need during your visit.",
      idealFor: [
        "Remote professionals",
        "Long stays",
        "Work from hills",
        "Solo travelers",
        "Couples",
      ],
    },

    amenities: [
      "High-speed WiFi",
      "Power Backup",
      "Dedicated Workspace",
      "Mountain View",
      "Fully Equipped Kitchen",
    ],

    highlights: [
      "Quiet & nature-focused",
      "Long-stay discounts available",
      "Designed for work from hills",
    ],

    policies: {
      cancellation: "Free cancellation up to 7 days before check-in",
      houseRules: [
        
        "Do not throw plastic cans or garbage outside",
      ],
    },

    pricing: [
      {
        id: "short",
        label: "Short stay",
        minNights: 1,
        pricePerDay: 1700,
        gstPercent: 0,
        maxGuests: 2,
        extraGuestPrice: 1000,
      },
      {
        id: "weekly",
        label: "Weekly stay",
        minNights: 7,
        pricePerDay: 1500,
        gstPercent: 0,
        maxGuests: 2,
        extraGuestPrice: 1000,
      },
      {
        id: "monthly",
        label: "Monthly stay",
        minNights: 31,
        pricePerDay: 1000,
        gstPercent: 0,
        maxGuests: 2,
        extraGuestPrice: 500,
      },
      {
        id: "weekly",
        label: "Weekly stay",
        minNights: 7,
        pricePerDay: 1300,
        gstPercent: 5,
        maxGuests: 2,
        extraGuestPrice: 400,
      },
      {
        id: "monthly",
        label: "Monthly stay",
        minNights: 31,
        pricePerDay: 950,
        gstPercent: 5,
        maxGuests: 2,
        extraGuestPrice: 300,
      },
    ],
  },

  {
    slug: "jibhi-mountain-pine",
    name: "Jibhi Mountain Pine",
    location: "Jibhi",
    roomCapacity: 2,

    wifiSpeed: 30, //mbps


    images: {
      cover: "/images/properties/jibhi/1.jpeg",
      gallery: [
        "/images/properties/jibhi/1.jpeg",
        "/images/properties/jibhi/2.jpeg",
        "/images/properties/jibhi/3pine.jpeg",
        "/images/properties/jibhi/4pine.jpeg",
        "/images/properties/jibhi/5pine.jpeg",
        "/images/properties/jibhi/6pine.jpeg",
        "/images/properties/jibhi/7pine.jpeg",
        "/images/properties/jibhi/8pine.jpeg",
        "/images/properties/jibhi/9pine.jpeg",
        "/images/properties/jibhi/10pine.jpeg",

      ],
    },

    seo: {
      title: "Jibhi Mountain Pine | Work from home Stay in Jibhi",
      description:
        "wfh from hills friendly tree house stay in Jibhi with WiFi, power backup, and mountain views.",
    },

    content: {
      about:
        "Mountain Pine Majesty — Jibhi is a peaceful forest retreat designed for travelers seeking nature, comfort, and uninterrupted remote work in the Himalayas. Nestled among tall pine trees in the serene village of Jibhi, this property offers the perfect balance of productivity and relaxation for digital nomads, remote professionals, couples, and long-stay guests. This property is specially suited for Work From Mountains stays",
      idealFor: [
        "working professionals",
        "Couples",
        "Nature lovers",
      ],
    },

    amenities: [
      "High-speed WiFi",
      "Power Backup",
      "Dedicated Workspace",
      "Mountain View",
    ],

    highlights: [
      "Tree house experience",
      "Nature immersion",
      "Work-friendly setup",
    ],

    policies: {
      cancellation: "Free cancellation up to 1 day before check-in",
      houseRules: [
         "Do not throw plastic cans or garbage outside",
      ],
    },

    pricing: [
      {
        id: "short",
        label: "Short stay",
        minNights: 1,
        pricePerDay: 2500,
        gstPercent: 0,
        maxGuests: 2,
        extraGuestPrice: 1500,
      },
      {
        id: "weekly",
        label: "Weekly stay",
        minNights: 7,
        pricePerDay: 2200,
        gstPercent: 0,
        maxGuests: 2,
        extraGuestPrice: 1300,
      },
      {
        id: "monthly",
        label: "Monthly stay",
        minNights: 31,
        pricePerDay: 2000,
        gstPercent: 0,
        maxGuests: 2,
        extraGuestPrice: 1,
      },
    ],
  },
];
