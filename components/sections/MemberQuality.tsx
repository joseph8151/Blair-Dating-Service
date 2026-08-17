import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { memberQualitySteps } from "@/data/memberQuality";

const MEMBER_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop";
const MEMBER_IMAGE_DETAIL =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop";

export function MemberQuality() {
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-gradient-to-tr from-gold/25 via-blush-soft/15 to-transparent lg:-bottom-5 lg:-left-5" />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_35px_70px_-28px_rgba(34,33,38,0.4)] ring-1 ring-cream/50">
                <Image
                  src={MEMBER_IMAGE}
                  alt="도시 야경을 배경으로 한 라이프스타일 사진"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/[0.06]" />
              </div>

              <div className="absolute -right-8 -top-8 hidden h-32 w-28 overflow-hidden rounded-2xl border-[3px] border-cream shadow-card lg:block">
                <Image
                  src={MEMBER_IMAGE_DETAIL}
                  alt="차분한 분위기의 카페 디테일 컷"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
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
