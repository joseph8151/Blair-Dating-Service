import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandPhotos } from "@/data/brandPhotos";

// Full-width photo pair with an oversized statement line underneath.
export function CafeBand() {
  return (
    <section className="border-t border-line pb-20 sm:pb-28">
      <div className="grid grid-cols-2 gap-[2px]">
        <BrandImage photo={brandPhotos.womanCafe} sizes="50vw" className="aspect-[3/2]" />
        <BrandImage photo={brandPhotos.manCafe} sizes="50vw" className="aspect-[3/2]" />
      </div>
      <Container>
        <Reveal className="mt-14 grid grid-cols-1 items-end gap-8 sm:mt-20 lg:grid-cols-12">
          <p className="font-display text-[2.2rem] font-medium leading-[1.25] tracking-[-0.04em] text-ink sm:text-[3.4rem] lg:col-span-8 lg:text-[4rem]">
            한 분을 만나는 일에,
            <br />
            충분한 시간을.
          </p>
          <p className="max-w-sm font-body text-[15px] leading-[1.85] text-ink-light lg:col-span-4 lg:justify-self-end">
            소개의 수보다 한 번의 소개가 맞는지를 먼저 봅니다. 두 분 모두 수락하신 경우에만 만남이
            이어집니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
