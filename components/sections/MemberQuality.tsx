import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { memberQualitySteps } from "@/data/memberQuality";

export function MemberQuality() {
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                alt="도시 야경을 배경으로 한 라이프스타일 사진"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/[0.06]" />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={100}>
            <SectionHeading
              eyebrow="Member Quality"
              title="Not Everyone Is Accepted."
              description="지원자가 모두 자동으로 회원이 되는 것은 아닙니다. 더 많은 회원보다, 더 좋은 회원을 만드는 것이 BLAIR DATING의 기준입니다."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {memberQualitySteps.map((step) => (
                <li
                  key={step}
                  className="rounded-xl border border-line bg-cream px-5 py-4 font-body text-sm text-ink/65"
                >
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
