import { siteConfig } from "@/data/site";
import { landings } from "@/data/landings";

// RSS feed for Naver Search Advisor (요청 → RSS 제출). Lists the public pages.
export const dynamic = "force-static";

const items = [
  { path: "/", title: siteConfig.seoTitle, description: siteConfig.description },
  {
    path: "/consultation",
    title: "소개팅 전화 상담 신청 | 블레어데이팅",
    description:
      "원하는 상대의 외모, 종교, 생활 방식을 매니저가 전화로 듣고 한 분씩 소개합니다.",
  },
  {
    path: "/apply",
    title: "소개팅 매칭 후보 등록 | 블레어데이팅",
    description: "등록비 없이 매칭 후보로 등록하고, 기준이 맞는 분이 있으면 먼저 여쭙습니다.",
  },
  ...Object.values(landings).map((l) => ({
    path: `/${l.slug}`,
    title: `${l.metaTitle} | 블레어데이팅`,
    description: l.metaDescription,
  })),
];

function escape(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const now = new Date().toUTCString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${escape(siteConfig.name)}</title>
<link>${siteConfig.url}/</link>
<description>${escape(siteConfig.description)}</description>
<language>ko</language>
<lastBuildDate>${now}</lastBuildDate>
${items
  .map(
    (item) => `<item>
<title>${escape(item.title)}</title>
<link>${siteConfig.url}${item.path}</link>
<guid>${siteConfig.url}${item.path}</guid>
<description>${escape(item.description)}</description>
<pubDate>${now}</pubDate>
</item>`
  )
  .join("\n")}
</channel>
</rss>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
