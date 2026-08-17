"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trustPoints } from "@/data/whoFor";
import { trackEvent } from "@/lib/analytics";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      {/* Desktop / tablet layout */}
      <Container className="hidden pb-16 pt-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24 lg:pt-36">
        <div>
          <p className="mb-6 font-body text-xs font-semibold uppercase tracking-widest2 text-rose">
            {"Curated Connections. Meaningful Chemistry."}
          </p>
          <h1 className="font-display text-5xl leading-[1.08] text-ink xl:text-6xl">
            Meet Someone
            <br />
            Worth Meeting.
          </h1>
          <p className="mt-7 font-body text-lg font-medium leading-relaxed text-ink/80">
            아무나 소개하지 않습니다.
            <br />
            당신의 취향과 가치관에 맞는 사람을 큐레이션합니다.
          </p>
          <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-ink/60">
            외국인 소개팅부터 매력적인 이성과의 프리미엄 매칭, 종교와 가치관을
            고려한 소개팅까지. BLAIR DATING은 상담을 기반으로 당신에게
            어울리는 연결을 제안합니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              href="/consultation"
              size="lg"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
            >
              내 매칭 상담 신청하기
            </Button>
            <Button
              href="/apply"
              variant="outline"
              size="lg"
              onClick={() => trackEvent("cta_apply_click", { location: "hero" })}
            >
              소개팅 지원자로 등록하기
            </Button>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-rose" />
                <dt className="font-body text-xs font-medium uppercase tracking-wide text-ink/60">
                  {point}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={HERO_IMAGE}
            alt="세련된 루프탑에서 데이트하는 남녀"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </Container>

      {/* Mobile layout — image-forward, asymmetric text overlay */}
      <div className="relative flex h-[92vh] min-h-[560px] w-full flex-col justify-end lg:hidden">
        <Image
          src={HERO_IMAGE}
          alt="세련된 루프탑에서 데이트하는 남녀"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/45 to-transparent" />

        <div className="relative px-5 pb-8">
          <h1 className="font-display text-[2.6rem] leading-[1.05] text-white">
            Meet Someone
            <br />
            Worth Meeting.
          </h1>
          <p className="mt-4 font-body text-base font-medium leading-relaxed text-white/90">
            아무나 소개하지 않습니다.
            <br />
            당신의 취향과 가치관에 맞는 사람을 큐레이션합니다.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              href="/consultation"
              size="lg"
              className="w-full"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero_mobile" })}
            >
              내 매칭 상담 신청하기
            </Button>
            <Button
              href="/apply"
              variant="ghost"
              size="lg"
              className="w-full"
              onClick={() => trackEvent("cta_apply_click", { location: "hero_mobile" })}
            >
              소개팅 지원자로 등록하기
            </Button>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-white py-6 lg:hidden">
        <Container className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="font-body text-[11px] font-medium uppercase tracking-wide text-ink/60"
            >
              {point}
            </span>
          ))}
        </Container>
      </div>
    </section>
  );
}
