"use client";

import { Button } from "@/components/ui/Button";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPhotos } from "@/data/brandPhotos";
import { trackEvent } from "@/lib/analytics";

const poolPoints = ["등록비 없음", "소개 전 본인 동의", "프로필 비공개"];

export function PoolRegister() {
  return (
    <section id="pool" className="border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <BrandImage
              photo={brandPhotos.womanCafe}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[3/2]"
            />
            <BrandImage
              photo={brandPhotos.manCafe}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[3/2]"
            />
          </div>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-20">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="Match pool"
            title="누군가 찾는 사람이 당신일 수 있습니다."
            description="매칭 후보로 등록해 두면, 기준이 맞는 분이 있을 때 매니저가 먼저 연락드립니다. 동의하신 경우에만 소개합니다."
          />
          <div className="lg:col-span-5">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-body text-[13px] text-ink-light">
              {poolPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Button
              href="/apply"
              variant="outline"
              size="md"
              className="mt-6"
              onClick={() => trackEvent("cta_apply_click", { location: "pool_block" })}
            >
              매칭 후보로 등록
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
