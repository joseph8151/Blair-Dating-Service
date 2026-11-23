import { Hero } from "@/components/sections/Hero";
import { Focus } from "@/components/sections/Focus";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { Fit } from "@/components/sections/Fit";
import { Criteria } from "@/components/sections/Criteria";
import { IntroExample } from "@/components/sections/IntroExample";
import { Process } from "@/components/sections/Process";
import { CafeBand } from "@/components/sections/CafeBand";
import { Faq } from "@/components/sections/Faq";
import { AfterMeeting } from "@/components/sections/AfterMeeting";
import { PoolLink } from "@/components/sections/PoolLink";
import type { Metadata } from "next";
import { businessInfo, siteConfig } from "@/data/site";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.url}/`,
    types: { "application/rss+xml": `${siteConfig.url}/rss.xml` },
  },
};

// Structured data for search engines (Naver, Google): the business and the FAQ.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.companyName,
    alternateName: ["블레어 데이팅", "Blair Dating"],
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image.png`,
    sameAs: [siteConfig.instagramUrl],
    areaServed: [
      { "@type": "City", name: "서울" },
      { "@type": "AdministrativeArea", name: "경기도" },
      { "@type": "City", name: "인천" },
    ],
    knowsAbout: ["1:1 소개팅", "30대·40대 소개팅", "기독교·크리스천 소개팅", "직장인 소개팅"],
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressCountry: "KR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: ["블레어 데이팅", "Blair Dating"],
    url: siteConfig.url,
    inLanguage: "ko-KR",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Focus />
      <Pricing />
      <Comparison />
      <Fit />
      <IntroExample />
      <Criteria />
      {/* TODO(owner): 매니저 소개 섹션 "상담은 매니저가 직접 합니다" — [이름 또는 직함],
          [경력 한두 줄], [상담 원칙 한 문장], [매니저 사진 파일(선택)]을 알려 주시면 이 자리에 넣습니다. */}
      <Process />
      <CafeBand />
      <AfterMeeting />
      <Faq />
      <PoolLink />
    </>
  );
}
