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
    <section className="pb-20 pt-24 sm:pt-28 lg:pb-28 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-[11px] font-medium uppercase tracking-widest2 text-ink-light">
              Private introductions
            </p>
            <h1 className="mt-6 font-display text-[2.4rem] leading-[1.3] tracking-[-0.015em] text-ink sm:text-5xl lg:text-[3.1rem]">
              <span className="block whitespace-nowrap">당신이 찾는 사람을,</span>
              <span className="block">한 명씩.</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-base leading-[1.9] text-ink-light sm:text-[17px]">
              프로필을 넘기지 않습니다. 기준을 듣고, 맞는 사람만 소개합니다.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button
                href="/consultation"
                size="lg"
                onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
              >
                상담 신청
              </Button>
              <Link
                href="/apply"
                onClick={() => trackEvent("cta_apply_click", { location: "hero" })}
                className="group inline-flex items-center gap-1.5 font-body text-sm text-ink-light underline decoration-line underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ink/40"
              >
                매칭 후보로 등록
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Woman first, then man — stacked on mobile, side by side from sm up. */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            <BrandImage
              photo={brandPhotos.womanWindow}
              priority
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/5] sm:aspect-[3/4]"
            />
            <BrandImage
              photo={brandPhotos.manWindow}
              priority
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/5] sm:aspect-[3/4] sm:mt-12"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
