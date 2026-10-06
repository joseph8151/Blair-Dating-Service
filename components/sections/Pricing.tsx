import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPhotos } from "@/data/brandPhotos";
import { pricePlans, pricingNote } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading title="일정이 잡힌 만남만 차감됩니다." />

            <dl className="mt-10 border-t border-ink">
              {pricePlans.map((plan) => (
                <div
                  key={plan.name}
                  className="grid grid-cols-[4.5rem_1fr] items-baseline gap-x-6 gap-y-1 border-b border-line py-5 sm:grid-cols-[6rem_1fr_auto]"
                >
                  <dt className="font-body text-[15px] text-ink">{plan.name}</dt>
                  <dd className="font-display text-2xl font-medium text-ink">{plan.price}</dd>
                  <dd className="col-start-2 font-body text-[13px] text-ink-light sm:col-start-3 sm:text-right">
                    {plan.detail ?? ""}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 font-body text-[13px] leading-[1.8] text-ink-light">
              {pricingNote}
            </p>
          </div>

          <div className="grid max-w-[22rem] grid-cols-2 gap-3 lg:col-span-5 lg:ml-auto lg:mt-16">
            <BrandImage
              photo={brandPhotos.womanPortrait}
              sizes="(min-width: 1024px) 170px, 45vw"
              className="aspect-[3/4]"
            />
            <BrandImage
              photo={brandPhotos.manPortrait}
              sizes="(min-width: 1024px) 170px, 45vw"
              className="aspect-[3/4]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
