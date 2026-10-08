import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPhotos } from "@/data/brandPhotos";

// Prices are not listed on the site; they are explained after the phone
// consultation. Only the deduction rule is stated here.
export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading
              title="가격은 상담 후 안내합니다."
              description="전화 상담에서 원하시는 기준을 들은 뒤, 이용 방법과 비용을 안내해 드립니다."
            />
            <ul className="mt-10 border-t border-line font-body text-[15px] leading-[1.7] text-ink">
              <li className="border-b border-line py-4">등록비는 없습니다.</li>
              <li className="border-b border-line py-4">
                두 분 모두 수락하고 만남 일정이 확정된 경우에만 횟수가 차감됩니다.
              </li>
              <li className="border-b border-line py-4">
                프로필만 확인하고 거절한 경우에는 차감되지 않습니다.
              </li>
            </ul>
          </div>

          <div className="grid max-w-[22rem] grid-cols-2 gap-3 lg:col-span-5 lg:ml-auto">
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
