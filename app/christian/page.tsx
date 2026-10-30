import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { landings } from "@/data/landings";

const landing = landings["christian"];

export const metadata: Metadata = {
  title: landing.metaTitle,
  description: landing.metaDescription,
  alternates: { canonical: "/christian" },
  openGraph: {
    title: `${landing.metaTitle} | 블레어데이팅`,
    description: landing.metaDescription,
    url: "/christian",
    type: "website",
    locale: "ko_KR",
    siteName: "블레어데이팅",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return <LandingPage landing={landing} />;
}
