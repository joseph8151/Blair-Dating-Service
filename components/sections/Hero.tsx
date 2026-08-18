"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { trustPoints } from "@/data/whoFor";
import { trackEvent } from "@/lib/analytics";

// NOTE: Unsplash photo IDs occasionally get retired upstream (one was already
// found dead in production). These two are confirmed live in production as
// of this pass — swap for real curated photography before launch either way.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop";
const HERO_IMAGE_DETAIL =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      {/* Desktop / tablet layout */}
      <Container className="ambient-glow hidden pb-16 pt-28 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-40">
        <div>
          <span className="gold-rule" />
          <p className="mb-6 mt-4 font-body text-xs font-semibold uppercase tracking-widest2 text-ink-light">
            Curated Dating, Built Around Your Preferences
          </p>
          <h1 className="font-display text-5xl leading-[1.1] tracking-[-0.01em] text-ink xl:text-[3.6rem]">
            Meet Your Type.
          </h1>
          <p className="mt-8 font-body text-xl font-medium leading-[1.6] text-ink/85">
            당신이 원하는 사람은 어떤 사람인가요?
            <br />
            외모, 분위기, 국적, 문화, 종교, 라이프스타일까지 —
            <br />
            사람마다 중요하게 생각하는 기준은 다릅니다.
          </p>
          <p className="mt-5 max-w-md font-body text-[15px] leading-[1.9] text-ink/55">
            수백 개의 프로필을 직접 찾지 마세요. BLAIR DATING이 당신의
            취향을 듣고 어울리는 상대를 직접 찾아드립니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/consultation"
              size="lg"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero" })}
            >
              내 이상형 상담하기
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
          {/* Offset color panel — the base layer that reads as depth behind the photo */}
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[1.75rem] bg-gradient-to-br from-blush-soft/30 via-gold/20 to-transparent xl:-right-5 xl:-top-5" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-30px_rgba(39,39,42,0.45)] ring-1 ring-cream/50">
            <Image
              src={HERO_IMAGE}
              alt="세련된 루프탑에서 데이트하는 남녀"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent" />
          </div>

          {/* Overlapping detail shot — creates a stacked, layered composition */}
          <div className="absolute -left-10 -top-10 hidden h-36 w-28 overflow-hidden rounded-2xl border-[3px] border-cream shadow-card xl:block">
            <Image
              src={HERO_IMAGE_DETAIL}
              alt="파리 카페에서의 디테일 컷"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-line bg-cream px-6 py-5 shadow-card xl:block">
            <p className="font-display text-2xl text-blush-soft">Curated</p>
            <p className="mt-1 font-body text-[11px] uppercase tracking-wide text-ink-light">
              Around Your Preferences
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
            style={{ background: "linear-gradient(90deg, #CBB99A, transparent)" }}
          />
          <h1 className="mt-4 font-display text-[2.8rem] leading-[1.08] text-cream">
            Meet Your Type.
          </h1>
          <p className="mt-4 font-body text-[17px] font-medium leading-[1.6] text-cream/90">
            외모, 국적, 종교, 라이프스타일까지 —
            <br />
            당신이 원하는 기준을 알려주세요.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Button
              href="/consultation"
              size="lg"
              className="w-full"
              onClick={() => trackEvent("cta_consultation_click", { location: "hero_mobile" })}
            >
              내 이상형 상담하기
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
