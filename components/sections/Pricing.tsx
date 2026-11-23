import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandPhotos } from "@/data/brandPhotos";

// Prices are not listed on the site; they are explained after the phone
// consultation. Written as a short note rather than a list.
export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-[1.8rem] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[2.35rem]">
              가격은 상담 후 안내합니다.
            </h2>
            <p className="mt-6 max-w-xl font-body text-[16px] leading-[1.95] text-ink">
              전화로 원하시는 기준을 먼저 듣고, 이용 방법과 비용을 그다음에 말씀드립니다. 등록비는
              없고, 1회권도 구입하실 수 있습니다.
            </p>
            <p className="mt-4 max-w-xl font-body text-[15px] leading-[1.9] text-ink-light">
              횟수는 두 분 모두 수락하고 만남 일정이 확정됐을 때만 차감됩니다. 프로필만 보고
              거절하신 경우에는 차감되지 않습니다.
            </p>
          </Reveal>

          <div className="grid w-full max-w-[20rem] grid-cols-2 gap-3 lg:col-span-5 lg:ml-auto">
            <BrandImage
              photo={brandPhotos.womanPortrait}
              sizes="(min-width: 1024px) 160px, 45vw"
              className="aspect-[3/4]"
            />
            <BrandImage
              photo={brandPhotos.manPortrait}
              sizes="(min-width: 1024px) 160px, 45vw"
              className="mt-8 aspect-[3/4]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
