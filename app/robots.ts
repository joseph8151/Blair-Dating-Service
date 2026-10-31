import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// AI search / answer engines are allowed explicitly so the site can be cited
// (ChatGPT search, Claude, Perplexity, Google AI). The private /profile form
// is kept out of results by its own noindex tag, which crawlers must be able
// to read, so it is not disallowed here.
const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bingbot",
  "Yeti",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
