"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="ambient-glow-dark relative -mt-8 rounded-t-[2.5rem] bg-ink py-24 sm:py-32 lg:-mt-10 lg:rounded-t-[3rem]">
      <Container className="text-center">
        <span className="gold-rule mx-auto" style={{ background: "#CBB99A" }} />
        <p className="mt-5 font-body text-xs font-semibold uppercase tracking-widest2 text-cream/55">
          Your Type. Your Values. Your Connection.
        </p>
        <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-[1.18] text-cream sm:text-4xl lg:text-5xl">
          Somewhere, Someone
          <br />
          Fits Your Type.
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-body text-base leading-[1.85] text-cream/65">
          당신이 찾는 사람을 더 이상 우연에 맡기지 마세요. 어떤 사람에게
          끌리는지, 어떤 삶과 가치관을 원하는지 알려주세요. BLAIR DATING이
          당신에게 어울리는 다음 만남을 찾아보겠습니다.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            href="/consultation"
            variant="primary"
            size="lg"
            onClick={() => trackEvent("cta_consultation_click", { location: "final_cta" })}
          >
            Tell Us Your Type
          </Button>
          <Button
            href="/apply"
            variant="ghost"
            size="lg"
            onClick={() => trackEvent("cta_apply_click", { location: "final_cta" })}
          >
            Match Pool 등록하기
          </Button>
        </div>
        <p className="mt-8 font-body text-xs uppercase tracking-widest2 text-cream/40">
          Private · Personalized · Confidential
        </p>
      </Container>
    </section>
  );
}
