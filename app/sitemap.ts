import type { MetadataRoute } from "next";
import { posts } from "./lib/posts";
import { services } from "./lib/services";
import { absoluteUrl } from "./lib/site";

const LAST_MODIFIED = new Date("2026-11-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/blog"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.6 },
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
