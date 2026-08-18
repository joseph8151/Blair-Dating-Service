import { Hero } from "@/components/sections/Hero";
import { WhatsYourType } from "@/components/sections/WhatsYourType";
import { Intro } from "@/components/sections/Intro";
import { GlobalDating } from "@/components/sections/GlobalDating";
import { Programs } from "@/components/sections/Programs";
import { TellUsYourType } from "@/components/sections/TellUsYourType";
import { PreferenceMatch } from "@/components/sections/PreferenceMatch";
import { WhoFor } from "@/components/sections/WhoFor";
import { WhyBlair } from "@/components/sections/WhyBlair";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustSection } from "@/components/sections/TrustSection";
import { MemberQuality } from "@/components/sections/MemberQuality";
import { TwoSidedCta } from "@/components/sections/TwoSidedCta";
import { MatchCode } from "@/components/sections/MatchCode";
import { RecruitApplicants } from "@/components/sections/RecruitApplicants";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { TrustBar } from "@/components/sections/TrustBar";
import { Concierge } from "@/components/sections/Concierge";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { featureFlags } from "@/data/config";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatsYourType />
      <Intro />
      <GlobalDating />
      <Programs />
      <TellUsYourType />
      <PreferenceMatch />
      <WhoFor />
      <WhyBlair />
      <HowItWorks />
      <TrustSection />
      <MemberQuality />
      <TwoSidedCta />
      <MatchCode />
      <RecruitApplicants />
      {featureFlags.successStoriesEnabled ? <SuccessStories /> : null}
      <TrustBar />
      <Concierge />
      <PrivacySection />
      <Faq />
      <FinalCta />
    </>
  );
}
