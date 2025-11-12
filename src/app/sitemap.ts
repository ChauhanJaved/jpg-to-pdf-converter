import { websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${websiteURL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteURL}/help`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/how-batch-convert-jpg-pdf`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/how-to-merge-jpg-to-pdf`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/how-to-export-scanned-jpg-to-pdf`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/jpg-vs-pdf`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
