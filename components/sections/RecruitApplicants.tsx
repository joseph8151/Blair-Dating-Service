"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { applyPolicyPoints, applyTargetAudience } from "@/data/config";
import { trackEvent } from "@/lib/analytics";

export function RecruitApplicants() {
  return (
    <section className="ambient-glow-dark relative -mt-8 rounded-t-[2.5rem] bg-ink py-24 text-cream sm:py-32 lg:-mt-10 lg:rounded-t-[3rem]">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="gold-rule" />
            <p className="mb-4 mt-4 font-body text-xs font-semibold uppercase tracking-widest2 text-cream/60">
              Apply as a Match
            </p>
            <h2 className="font-display text-3xl leading-[1.18] text-cream sm:text-4xl lg:text-[2.85rem]">
              Someone Wants
              <br />
              to Meet You.
            </h2>
            <p className="mt-6 font-body text-base leading-[1.8] text-cream/70">
              BLAIR DATING의 매칭 후보로 등록해보세요.
              <br />
              당장 소개팅을 원하지 않아도, 좋은 인연이 있을 때 가장 먼저
              연락받을 수 있습니다.
            </p>

            <div className="mt-9">
              <Button
                href="/apply"
                variant="primary"
                size="lg"
                onClick={() => trackEvent("cta_apply_click", { location: "recruit_section" })}
              >
                매칭 후보로 등록하기
              </Button>
            </div>

            <ul className="mt-9 flex flex-col gap-2.5">
              {applyPolicyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 font-body text-[13px] text-cream/50"
                >
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-cream/50">
              지원 대상
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {applyTargetAudience.map((target) => (
                <span
                  key={target}
                  className="rounded-full border border-cream/15 px-5 py-2.5 font-body text-sm text-cream/75 transition-colors duration-300 hover:border-gold/50 hover:text-cream"
                >
                  {target}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
