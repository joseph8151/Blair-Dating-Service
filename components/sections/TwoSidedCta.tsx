"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export function TwoSidedCta() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-off-white p-8 sm:p-10">
              <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-blush-soft">
                Find a Match
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">
                원하는 상대를 찾고 계신가요?
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-[1.8] text-ink/55">
                개인 상담을 통해 원하는 사람의 조건과 취향을 파악하고 적합한
                후보를 큐레이션합니다.
              </p>
              <div className="mt-7">
                <Button
                  href="/consultation"
                  variant="dark"
                  size="md"
                  onClick={() => trackEvent("cta_consultation_click", { location: "two_sided_cta" })}
                >
                  상담 신청
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-2xl bg-ink p-8 text-cream sm:p-10">
              <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                Become a Match
              </p>
              <h3 className="mt-3 font-display text-2xl text-cream">
                좋은 사람을 만나볼 의향이 있으신가요?
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-[1.8] text-cream/60">
                BLAIR DATING의 Match Pool에 등록하고, 당신에게 잘 맞는 회원이
                있을 때 소개를 제안받으세요.
              </p>
              <div className="mt-7">
                <Button
                  href="/apply"
                  variant="primary"
                  size="md"
                  onClick={() => trackEvent("cta_apply_click", { location: "two_sided_cta" })}
                >
                  Match Pool 등록
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
