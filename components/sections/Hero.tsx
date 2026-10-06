"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { brandPhotos } from "@/data/brandPhotos";
import { pricePlans } from "@/data/pricing";
import { trackEvent } from "@/lib/analytics";

const promises = [
  "등록비는 없고, 소개를 받는 분만 비용을 냅니다.",
  "거절된 소개는 횟수가 차감되지 않습니다.",
  "프로필은 목록에 노출되지 않습니다.",
];

export function Hero() {
  return (
    <section className="pb-16 pt-24 sm:pt-28 lg:pb-24 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h1 className="font-display text-[2.3rem] font-medium leading-[1.3] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.2rem]">
              수백 명 대신, 한 명.
            </h1>
            <p className="mt-5 max-w-md font-body text-base leading-[1.8] text-ink-light sm:text-[17px]">
              프로필을 넘기지 않습니다. 기준을 듣고, 두 분 모두 수락하면 소개합니다.
            </p>

            <ul className="mt-7 flex flex-col gap-2 border-l border-line pl-4 font-body text-[14px] leading-[1.7] text-ink">
              {promises.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <Link
              href="/#pricing"
              className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-1 font-body text-[13px] text-ink-light"
            >
              {pricePlans.map((plan) => (
                <span key={plan.name}>
                  {plan.name} <span className="font-medium text-ink">{plan.price}</span>
                </span>
              ))}
            </Link>

            <Button
              href="/consultation"
              size="lg"
              className="mt-5"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
            >
              전화 상담 신청
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-6">
            <BrandImage
              photo={brandPhotos.womanWindow}
              priority
              sizes="(min-width: 1024px) 28vw, 50vw"
              className="aspect-[3/4]"
            />
            <BrandImage
              photo={brandPhotos.manWindow}
              priority
              sizes="(min-width: 1024px) 28vw, 50vw"
              className="aspect-[3/4]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
