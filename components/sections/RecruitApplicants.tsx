"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { applyPolicyPoints, applyTargetAudience } from "@/data/config";
import { trackEvent } from "@/lib/analytics";

export function RecruitApplicants() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest2 text-blush-soft">
              Apply as a Match
            </p>
            <h2 className="font-display text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Someone Wants
              <br />
              to Meet You.
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-white/75">
              BLAIR DATING의 소개팅 파트너로 등록해보세요.
              <br />
              당장 소개팅을 원하지 않아도 좋은 매칭이 있을 때 연락받을 수
              있습니다.
            </p>

            <div className="mt-8">
              <Button
                href="/apply"
                variant="primary"
                size="lg"
                onClick={() => trackEvent("cta_apply_click", { location: "recruit_section" })}
              >
                소개팅 지원자로 등록하기
              </Button>
            </div>

            <ul className="mt-8 flex flex-col gap-2">
              {applyPolicyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 font-body text-[13px] text-white/55"
                >
                  <span className="h-1 w-1 rounded-full bg-blush-soft" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-sm font-medium uppercase tracking-wide text-white/50">
              지원 대상
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {applyTargetAudience.map((target) => (
                <span
                  key={target}
                  className="rounded-full border border-white/20 px-5 py-2.5 font-body text-sm text-white/80"
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
