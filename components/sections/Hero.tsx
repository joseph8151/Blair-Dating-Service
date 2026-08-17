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
      <Container className="ambient-glow hidden pb-16 pt-28 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-40">
        <div>
          <span className="gold-rule" />
          <p className="mb-6 mt-4 font-body text-xs font-semibold uppercase tracking-widest2 text-ink-light">
            Private Matchmaking, Curated Introductions
          </p>
          <h1 className="font-display text-5xl leading-[1.1] tracking-[-0.01em] text-ink xl:text-[3.6rem]">
            Meet Someone
            <br />
            Worth Meeting.
          </h1>
          <p className="mt-8 font-body text-xl font-medium leading-[1.6] text-ink/85">
            당신에게 어울리는 만남은,
            <br />
            더 신중하게 설계되어야 합니다.
          </p>
          <p className="mt-5 max-w-md font-body text-[15px] leading-[1.9] text-ink/55">
            외국인과의 자연스러운 만남, 매력이 분명한 이성과의 프리미엄
            매칭, 종교와 가치관을 함께 고려한 소개까지 — BLAIR DATING은
            상담을 기반으로 한 프라이빗 매치메이킹을 제안합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/consultation"
              size="lg"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
            >
              프라이빗 상담 신청하기
            </Button>
            <Button
              href="/apply"
              variant="outline"
              size="lg"
              onClick={() => trackEvent("cta_apply_click", { location: "hero" })}
            >
              매칭 후보로 등록하기
            </Button>
          </div>

          <dl className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                <dt className="font-body text-xs font-medium uppercase tracking-wide text-ink/50">
                  {point}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-ink/[0.06]">
            <Image
              src={HERO_IMAGE}
              alt="세련된 루프탑에서 데이트하는 남녀"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-cream px-6 py-5 shadow-card xl:block">
            <p className="font-display text-2xl text-blush-soft">Est. 2021</p>
            <p className="mt-1 font-body text-[11px] uppercase tracking-wide text-ink-light">
              Private Curation Since
            </p>
          </div>
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
          <span
            className="block h-px w-8"
            style={{ background: "linear-gradient(90deg, #C8B38A, transparent)" }}
          />
          <h1 className="mt-4 font-display text-[2.6rem] leading-[1.08] text-cream">
            Meet Someone
            <br />
            Worth Meeting.
          </h1>
          <p className="mt-4 font-body text-[17px] font-medium leading-[1.6] text-cream/90">
            당신에게 어울리는 만남은,
            <br />
            더 신중하게 설계되어야 합니다.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Button
              href="/consultation"
              size="lg"
              className="w-full"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero_mobile" })}
            >
              프라이빗 상담 신청하기
            </Button>
            <Button
              href="/apply"
              variant="ghost"
              size="lg"
              className="w-full"
              onClick={() => trackEvent("cta_apply_click", { location: "hero_mobile" })}
            >
              매칭 후보로 등록하기
            </Button>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-cream py-6 lg:hidden">
        <Container className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="font-body text-[11px] font-medium uppercase tracking-wide text-ink/50"
            >
              {point}
            </span>
          ))}
        </Container>
      </div>
    </section>
  );
}
