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

export default function Home() {
  return (
    <>
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
