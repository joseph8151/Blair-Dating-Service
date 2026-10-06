import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { introExample } from "@/data/introExample";

export function IntroExample() {
  const columns = [introExample.request, introExample.priorities, introExample.proposal];

  return (
    <section id="example" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="한 명은 이렇게 정해집니다"
          description="이해를 돕기 위해 만든 예시입니다. 실제 회원 정보가 아닙니다."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
          {columns.map((col, i) => (
            <div key={col.label} className="border-t border-ink pt-5">
              <p className="font-body text-[13px] text-ink-light">
                <span className="mr-2 text-ink">{String(i + 1).padStart(2, "0")}</span>
                {col.label}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5 font-body text-[15px] leading-[1.7] text-ink">
                {col.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 font-body text-sm text-ink">{introExample.proposal.result}</p>
      </Container>
    </section>
  );
}
