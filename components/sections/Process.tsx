import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notForList, steps } from "@/data/howItWorks";

export function Process() {
  return (
    <section id="process" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <SectionHeading title="다섯 단계" />
            <ol className="mt-10 border-t border-line">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-4 font-body text-[15px] sm:grid-cols-[2.5rem_11rem_1fr]"
                >
                  <span className="text-ink-light">{step.number}</span>
                  <span className="font-medium text-ink">{step.title}</span>
                  <span className="col-start-2 text-sm text-ink-light sm:col-start-3 sm:text-[15px]">
                    {step.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4">
            <SectionHeading title="소개하지 않는 사람" />
            <ul className="mt-10 border-t border-line font-body text-[15px] text-ink">
              {notForList.map((item) => (
                <li key={item} className="border-b border-line py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
