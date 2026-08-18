import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { matchCodePoints } from "@/data/matchCode";

const orbitPositions = [
  { top: "6%", left: "50%" },
  { top: "28%", left: "88%" },
  { top: "72%", left: "88%" },
  { top: "94%", left: "50%" },
  { top: "72%", left: "12%" },
  { top: "28%", left: "12%" },
];

export function MatchCode() {
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Method"
            title="The BLAIR MATCH CODE™"
            align="center"
            description="BLAIR DATING이 모든 매칭에서 확인하는 여섯 가지 기준입니다."
          />
        </Reveal>

        {/* Desktop — orbital diagram */}
        <div className="mx-auto mt-16 hidden aspect-square w-full max-w-[560px] lg:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-[14%] rounded-full border border-dashed border-blush-soft/30" />
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink text-center shadow-card">
              <span className="font-display text-sm leading-tight text-gold">BLAIR</span>
              <span className="font-display text-sm leading-tight text-cream">MATCH CODE</span>
              <span className="mt-1 font-body text-[10px] text-cream/40">™</span>
            </div>

            {matchCodePoints.map((point, i) => (
              <div
                key={point.number}
                className="absolute w-[168px] -translate-x-1/2 -translate-y-1/2 text-center"
                style={orbitPositions[i]}
              >
                <Reveal delay={i * 70}>
                  <div className="rounded-2xl border border-line bg-cream p-4 shadow-soft">
                    <span className="font-display text-lg text-blush-soft">{point.number}</span>
                    <p className="mt-1 font-body text-xs font-semibold tracking-wide text-ink">
                      {point.title}
                    </p>
                    <p className="mt-1.5 font-body text-[11px] leading-[1.5] text-ink/50">
                      {point.question}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — simple list */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {matchCodePoints.map((point) => (
            <div key={point.number} className="rounded-2xl border border-line bg-cream p-5">
              <span className="font-display text-xl text-blush-soft">{point.number}</span>
              <p className="mt-1 font-body text-sm font-semibold tracking-wide text-ink">
                {point.title}
              </p>
              <p className="mt-1.5 font-body text-[13px] leading-[1.6] text-ink/50">
                {point.question}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
