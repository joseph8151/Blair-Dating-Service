import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Criteria } from "@/components/sections/Criteria";
import { Process } from "@/components/sections/Process";
import { PoolRegister } from "@/components/sections/PoolRegister";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Criteria />
      <Process />
      <PoolRegister />
      <Faq />
    </>
  );
}
