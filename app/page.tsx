import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { Fit } from "@/components/sections/Fit";
import { Criteria } from "@/components/sections/Criteria";
import { IntroExample } from "@/components/sections/IntroExample";
import { Process } from "@/components/sections/Process";
import { CafeBand } from "@/components/sections/CafeBand";
import { Faq } from "@/components/sections/Faq";
import { PoolLink } from "@/components/sections/PoolLink";
import type { Metadata } from "next";
import { businessInfo, siteConfig } from "@/data/site";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Structured data for search engines (Naver, Google): the business and the FAQ.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.companyName,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressCountry: "KR",
    },
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
      <Pricing />
      <Comparison />
      <Fit />
      <IntroExample />
      <Criteria />
      <Process />
      <CafeBand />
      <Faq />
      <PoolLink />
    </>
  );
}
