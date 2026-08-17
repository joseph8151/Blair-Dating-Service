import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { coreValues } from "@/data/whoFor";

export function Intro() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About Blair Dating"
            title="Dating Should Feel Personal."
            description={
              <>
                소개팅 앱에서 수백 명의 프로필을 넘겨보는 대신, BLAIR
                DATING에서는 전문 매니저가 당신의 성향, 외모 선호도,
                라이프스타일, 가치관을 파악한 뒤 어울리는 사람을 직접
                선별합니다.
                <br className="hidden sm:block" />
                단순한 조건 매칭이 아니라 실제로 만나고 싶은 사람을 연결하는
                것이 목표입니다.
              </>
            }
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-3 bg-white p-7 sm:p-8">
                <span className="font-display text-xl text-rose">
                  {value.title}
                </span>
                <span className="font-body text-sm leading-relaxed text-ink/65">
                  {value.description}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
