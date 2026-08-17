import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Programs } from "@/components/sections/Programs";
import { WhoFor } from "@/components/sections/WhoFor";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustSection } from "@/components/sections/TrustSection";
import { MatchPreference } from "@/components/sections/MatchPreference";
import { MemberQuality } from "@/components/sections/MemberQuality";
import { RecruitApplicants } from "@/components/sections/RecruitApplicants";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Stats } from "@/components/sections/Stats";
import { Concierge } from "@/components/sections/Concierge";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { featureFlags } from "@/data/config";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Programs />
      <WhoFor />
      <HowItWorks />
      <TrustSection />
      <MatchPreference />
      <MemberQuality />
      <RecruitApplicants />
      {featureFlags.successStoriesEnabled ? <SuccessStories /> : null}
      {featureFlags.statsEnabled ? <Stats /> : null}
      <Concierge />
      <Faq />
      <FinalCta />
    </>
  );
}
