import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notForList, steps } from "@/data/howItWorks";

// Steps as a horizontal timeline on desktop, a vertical one on mobile.
export function Process() {
  return (
    <section id="process" className="border-t border-line bg-[#efeae3] py-20 sm:py-28">
      <Container>
        <SectionHeading index="07" title="다섯 단계로 진행됩니다" />

        <ol className="relative mt-14 grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          <span aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-accent/20 lg:block" />
          {steps.map((step) => (
            <li key={step.number} className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 lg:block">
              <span className="relative inline-flex h-[2.3rem] items-center bg-[#efeae3] pr-4 font-display text-[1.75rem] leading-none text-accent">
                {step.number}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-body text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-sm leading-[1.8] text-ink-light">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-accent/15 pt-10 lg:grid-cols-12 lg:gap-20">
          <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-ink lg:col-span-5">
            이런 경우에는 소개를 진행하지 않습니다
          </h3>
          <ul className="flex flex-wrap gap-3 lg:col-span-7">
            {notForList.map((item) => (
              <li
                key={item}
                className="border border-accent/20 px-4 py-2 font-body text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
