import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { reassuranceLines, preferenceFrames } from "@/data/whyBlair";

export function TellUsYourType() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Tell Us Your Type" title="Tell Us Your Type." />
            <div className="mt-7 flex flex-col gap-2.5">
              {reassuranceLines.map((line) => (
                <p key={line} className="font-body text-base font-medium text-ink/80">
                  &ldquo;{line}&rdquo;
                </p>
              ))}
            </div>
            <p className="mt-6 font-body text-[15px] leading-[1.9] text-ink/55">
              좋은 만남의 기준은 사람마다 다릅니다. BLAIR DATING에서는 당신이
              원하는 사람의 기준을 솔직하게 이야기할 수 있습니다. 다만 단순한
              조건 검색에서 끝나지 않습니다 — 매니저가 상담을 통해 아래
              세 가지를 구분하고, 현실적으로 잘 맞는 후보를 큐레이션합니다.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4">
              {preferenceFrames.map((frame) => (
                <div
                  key={frame.title}
                  className="rounded-2xl border border-line bg-off-white p-6"
                >
                  <p className="font-display text-lg text-blush-soft">{frame.title}</p>
                  <p className="mt-1 font-body text-sm font-medium text-ink">
                    {frame.koTitle}
                  </p>
                  <p className="mt-2 font-body text-[13px] leading-[1.7] text-ink/55">
                    {frame.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
