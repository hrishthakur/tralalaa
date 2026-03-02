export const SITE_CONFIG = {
  /** Brand */
  name: "Bungstays",
  tagline: "Remote work stays in the mountains",

  /** URL (safe for all envs) */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.bungstays.com",

  /** Logo */
  logo: {
    src: "/images/bungstays111.png", // /public/logo.png
    alt: "Bungstays",
    width: 90,
    height: 150,
  },
   contentLastUpdated: "2026-02-18T21:30:00+05:30", 
  /** Locale */
  country: "IN",
  language: "en-IN",

  /** SEO defaults */
  description:
    "Bungstays helps professionals book peaceful, high-quality mountain stays designed specifically for remote work and long stays.",

  /** Contact */
  email: "bungstays@gmail.com",
} as const;
