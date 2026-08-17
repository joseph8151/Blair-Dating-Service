"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="ambient-glow-dark relative -mt-8 rounded-t-[2.5rem] bg-ink py-24 sm:py-32 lg:-mt-10 lg:rounded-t-[3rem]">
      <Container className="text-center">
        <span className="gold-rule mx-auto" style={{ background: "#C8B38A" }} />
        <p className="mt-5 font-body text-xs font-semibold uppercase tracking-widest2 text-cream/55">
          더 나은 만남은, 더 정교한 기준에서 시작됩니다
        </p>
        <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-[1.18] text-cream sm:text-4xl lg:text-5xl">
          Your Next Introduction
          <br />
          Could Be Different.
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-base leading-[1.85] text-cream/65">
          누군가를 만나기 위해 수백 개의 프로필을 넘길 필요는 없습니다.
          BLAIR DATING이 당신에게 어울리는 한 사람을 찾아드립니다.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            href="/consultation"
            variant="primary"
            size="lg"
            onClick={() => trackEvent("cta_consultation_click", { location: "final_cta" })}
          >
            내 매칭 상담 시작하기
          </Button>
          <Button
            href="/apply"
            variant="ghost"
            size="lg"
            onClick={() => trackEvent("cta_apply_click", { location: "final_cta" })}
          >
            매칭 후보로 등록하기
          </Button>
        </div>
      </Container>
    </section>
  );
}
