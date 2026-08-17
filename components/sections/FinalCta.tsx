"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="bg-blush-soft py-20 sm:py-28">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl">
          Your Next Introduction
          <br />
          Could Be Different.
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-white/90">
          누군가를 만나기 위해 수백 개의 프로필을 넘길 필요는 없습니다.
          BLAIR DATING이 당신에게 어울리는 한 사람을 찾아드립니다.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            href="/consultation"
            variant="dark"
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
            소개팅 지원자로 등록하기
          </Button>
        </div>
      </Container>
    </section>
  );
}
