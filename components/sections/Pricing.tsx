import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPhotos } from "@/data/brandPhotos";
import { pricePlans, pricingNote } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <SectionHeading eyebrow="Pricing" title="만남이 성사될 때만 차감합니다." />

            <dl className="mt-12 border-t border-ink/80">
              {pricePlans.map((plan) => (
                <div
                  key={plan.name}
                  className="grid grid-cols-[5rem_1fr] items-baseline gap-x-6 gap-y-1 border-b border-line py-6 sm:grid-cols-[7rem_1fr_auto]"
                >
                  <dt className="font-body text-[15px] text-ink">{plan.name}</dt>
                  <dd className="font-display text-[1.75rem] leading-none text-ink">
                    {plan.price}
                  </dd>
                  <dd className="col-start-2 font-body text-[13px] text-ink-light sm:col-start-3 sm:text-right">
                    {plan.perMeeting ? `${plan.perMeeting} · ${plan.validity}` : "단건"}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-xl font-body text-[13px] leading-[1.85] text-ink-light">
              {pricingNote}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-24" delay={120}>
            <div className="grid max-w-sm grid-cols-2 gap-4 lg:ml-auto">
              <BrandImage
                photo={brandPhotos.womanPortrait}
                sizes="(min-width: 1024px) 190px, 45vw"
                className="aspect-[3/4]"
              />
              <BrandImage
                photo={brandPhotos.manPortrait}
                sizes="(min-width: 1024px) 190px, 45vw"
                className="aspect-[3/4]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
