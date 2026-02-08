export const SITE_CONFIG = {
  /** Brand */
  name: 'Bungstays',
  tagline: 'Remote work stays in the mountains',

  /** URL (safe for all envs) */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    'http://localhost:3000',

  /** Locale */
  country: 'IN',
  language: 'en-IN',

  /** SEO defaults */
  description:
    'Bungstays helps you book peaceful mountain stays designed for remote work.',

  /** Contact / socials (optional) */
  email: 'pthakur3320@gmail.com',
};
