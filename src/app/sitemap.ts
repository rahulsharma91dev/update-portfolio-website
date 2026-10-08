import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.itsrahulsharma.com", lastModified: new Date() }];
}
