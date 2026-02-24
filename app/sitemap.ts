import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site";
import { properties } from "@/data/properties";
import { packages } from "@/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    const siteUrl = SITE_CONFIG.url.replace(/\/$/, "");
    const lastModified = SITE_CONFIG.contentLastUpdated
      ? new Date(SITE_CONFIG.contentLastUpdated)
      : new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
      { url: `${siteUrl}/`, lastModified },
      { url: `${siteUrl}/vision`, lastModified },
      { url: `${siteUrl}/locations`, lastModified },
      { url: `${siteUrl}/packages`, lastModified },
      { url: `${siteUrl}/faq`, lastModified },
      { url: `${siteUrl}/contact`, lastModified },
      { url: `${siteUrl}/list-your-property`, lastModified },
      { url: `${siteUrl}/blog`, lastModified },
    ];

    const locationRoutes: MetadataRoute.Sitemap =
      Array.isArray(properties)
        ? properties
            .filter((p) => p?.slug)
            .map((p) => ({
              url: `${siteUrl}/locations/${p.slug}`,
              lastModified,
            }))
        : [];

    const packageRoutes: MetadataRoute.Sitemap =
      Array.isArray(packages)
        ? packages
            .filter((pkg) => pkg?.slug)
            .map((pkg) => ({
              url: `${siteUrl}/packages/${pkg.slug}`,
              lastModified,
            }))
        : [];

    return [...staticRoutes, ...locationRoutes, ...packageRoutes];
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return [];
  }
}