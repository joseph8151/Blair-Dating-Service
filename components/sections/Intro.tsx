import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { coreValues } from "@/data/whoFor";
import { comparisonRows } from "@/data/comparison";

export function Intro() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About Blair Dating"
            title="Dating Should Feel Personal."
            description={
              <>
                소개팅 앱에서 수백 명의 프로필을 넘겨보는 대신, BLAIR
                DATING에서는 전문 매니저가 당신의 성향, 취향, 라이프스타일,
                가치관을 파악한 뒤 어울리는 사람을 직접 선별합니다.
                <br className="hidden sm:block" />
                빠른 매칭보다 중요한 것은, 잘 맞는 연결입니다.
              </>
            }
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-3 bg-cream p-7 sm:p-8">
                <span className="font-display text-xl text-blush-soft">
                  {value.title}
                </span>
                <span className="font-body text-sm leading-relaxed text-ink/60">
                  {value.description}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-cream shadow-soft">
            <div className="grid grid-cols-2">
              <div className="border-r border-line px-6 py-5 sm:px-10 sm:py-7">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-light">
                  일반 소개팅 앱
                </p>
              </div>
              <div className="bg-ink/[0.03] px-6 py-5 sm:px-10 sm:py-7">
                <p className="font-display text-base text-blush-soft sm:text-lg">
                  BLAIR DATING
                </p>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.app}
                className={`grid grid-cols-2 ${i > 0 ? "border-t border-line" : "border-t border-line"}`}
              >
                <div className="flex items-start gap-3 px-6 py-5 sm:px-10">
                  <X size={16} className="mt-0.5 flex-none text-ink/30" />
                  <span className="font-body text-sm leading-relaxed text-ink/50">
                    {row.app}
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-ink/[0.03] px-6 py-5 sm:px-10">
                  <Check size={16} className="mt-0.5 flex-none text-blush-soft" />
                  <span className="font-body text-sm leading-relaxed text-ink/75">
                    {row.blair}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
