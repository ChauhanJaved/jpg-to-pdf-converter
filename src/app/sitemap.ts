import { websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${websiteURL}/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/help/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/how-batch-convert-jpg-pdf/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/how-to-merge-jpg-to-pdf/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/how-to-export-scanned-jpg-to-pdf/`,
      lastModified: lastModified,
    },
    {
      url: `${websiteURL}/jpg-vs-pdf/`,
      lastModified: lastModified,
    },
  ];
}
