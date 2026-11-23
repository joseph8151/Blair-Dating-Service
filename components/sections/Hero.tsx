"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { brandPhotos } from "@/data/brandPhotos";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 lg:pr-6">
            {/* The small keyword line is part of the h1 so search engines read it as the page topic. */}
            <h1>
              <span className="mb-7 block font-body text-[13px] font-normal text-ink-light">
                30대·40대 직장인 · 무교·기독교·천주교 1:1 소개팅
              </span>
              <span className="block font-display text-[2.8rem] font-medium leading-[1.16] tracking-[-0.045em] text-ink sm:text-[3.9rem] lg:text-[4.6rem]">
                수백 명 대신,
                <br />
                한 명.
              </span>
            </h1>
            <p className="mt-8 max-w-[29rem] font-body text-[17px] leading-[1.85] text-ink-light">
              바쁜 직장 생활 중에 프로필을 끝없이 넘기지 않아도 됩니다. 결혼관과 종교 생활까지 전화로
              충분히 듣고, 기준에 맞는 한 분을 골라 두 분 모두 수락하신 경우에만 소개해 드립니다.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button
                href="/consultation"
                size="lg"
                onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
              >
                전화 상담 신청
                <ArrowRight size={16} />
              </Button>
              <Link
                href="/#process"
                className="font-body text-sm text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink/50"
              >
                어떻게 진행되나요
              </Link>
            </div>
            <p className="mt-5 font-body text-[13px] text-ink-light">
              가격은 전화 상담에서 원하시는 방식에 맞춰 안내해 드립니다.
            </p>
          </div>

          {/* Overlapping pair: woman large, man inset lower-left with a paper-colored frame. */}
          <div className="relative lg:col-span-6">
            <div className="ml-auto w-[78%]">
              <BrandImage
                photo={brandPhotos.womanWindow}
                priority
                sizes="(min-width: 1024px) 36vw, 78vw"
                className="aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-10 left-0 w-[44%] border-[10px] border-paper sm:border-[14px]">
              <BrandImage
                photo={brandPhotos.manWindow}
                priority
                sizes="(min-width: 1024px) 22vw, 44vw"
                className="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
