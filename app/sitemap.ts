import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date(SITE_CONFIG.contentLastUpdated);

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/vision/`, lastModified },
    { url: `${baseUrl}/locations/`, lastModified },
    { url: `${baseUrl}/faq/`, lastModified },
    { url: `${baseUrl}/contact/`, lastModified },
    { url: `${baseUrl}/list-your-property/`, lastModified },

    { url: `${baseUrl}/locations/jibhi-sunshine-cafe/`, lastModified },
    { url: `${baseUrl}/locations/the-martins-manali/`, lastModified },
    { url: `${baseUrl}/locations/nagar-mountain-loft-xl/`, lastModified },
    { url: `${baseUrl}/locations/jibhi-tree-house/`, lastModified },
  ];
}
