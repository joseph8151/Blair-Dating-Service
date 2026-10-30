import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/consultation", priority: 0.8 },
  { path: "/christian", priority: 0.8 },
  { path: "/30s-40s", priority: 0.8 },
  { path: "/area", priority: 0.7 },
  { path: "/apply", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
