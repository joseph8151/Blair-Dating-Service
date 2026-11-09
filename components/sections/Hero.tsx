"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { brandPhotos } from "@/data/brandPhotos";
import { trackEvent } from "@/lib/analytics";

const promises = [
  "등록비는 없습니다. 소개를 받으시는 분만 비용을 부담합니다.",
  "프로필만 보고 거절하신 소개는 횟수에서 차감되지 않습니다.",
  "내 프로필은 목록에 올라가지 않고, 동의 없이 공개되지 않습니다.",
  "무교, 기독교, 천주교 중 같은 종교를 원하시는지까지 상담에서 정리합니다.",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pt-28 lg:pb-28 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            {/* The small keyword line is part of the h1 so search engines read it as the page topic. */}
            <h1>
              <span className="mb-6 flex items-center gap-3 font-body text-[13px] font-normal tracking-[0.02em] text-ink-light">
                <span aria-hidden className="h-px w-8 bg-accent/40" />
                30대·40대 직장인 · 무교·기독교·천주교 1:1 소개팅
              </span>
              <span className="block font-display text-[2.7rem] font-medium leading-[1.18] tracking-[-0.045em] text-ink sm:text-[3.8rem] lg:text-[4.6rem]">
                수백 명 대신,
                <br />
                한 명.
              </span>
            </h1>
            <p className="mt-7 max-w-[30rem] font-body text-base leading-[1.85] text-ink-light sm:text-[17px]">
              바쁜 직장 생활 중에 프로필을 끝없이 넘기지 않아도 됩니다. 결혼관과 종교 생활까지
              전화로 충분히 듣고, 기준에 맞는 한 분을 골라 두 분 모두 수락하신 경우에만 소개해
              드립니다.
            </p>

            <ul className="mt-8 flex flex-col gap-2.5 border-l border-accent/25 pl-5 font-body text-[14px] leading-[1.7] text-ink">
              {promises.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button
                href="/consultation"
                size="lg"
                onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
              >
                전화 상담 신청
                <ArrowRight size={16} />
              </Button>
              <p className="font-body text-[13px] leading-[1.6] text-ink-light">
                가격은 전화 상담에서
                <br className="hidden sm:block" /> 원하시는 방식에 맞춰 안내해 드립니다.
              </p>
            </div>
          </div>

          {/* Woman and man side by side; the second frame sits lower for an editorial rhythm. */}
          <div className="relative grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-6">
            <p
              aria-hidden
              className="absolute -right-8 top-0 hidden font-body text-[11px] tracking-[0.3em] text-ink-light [writing-mode:vertical-rl] xl:block"
            >
              서울 · 경기 · 인천 — 한 분씩 소개합니다
            </p>
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
              className="mt-10 aspect-[3/4] sm:mt-16"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
