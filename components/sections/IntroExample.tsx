import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { introExample } from "@/data/introExample";

export function IntroExample() {
  return (
    <section id="example" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="실제 소개는 이렇게 진행됩니다"
          description="이해를 돕기 위해 만든 예시입니다. 실제 회원 정보가 아닙니다."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="border-t border-ink pt-5 lg:col-span-5">
            <p className="font-body text-[13px] text-ink-light">{introExample.profileLabel}</p>
            <ul className="mt-5 flex flex-col gap-2.5 font-body text-[15px] leading-[1.7] text-ink">
              {introExample.profile.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <ol className="border-t border-ink lg:col-span-7">
            {introExample.steps.map((step, i) => (
              <li
                key={step}
                className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-4 font-body text-[15px] leading-[1.7] text-ink"
              >
                <span className="text-ink-light">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
