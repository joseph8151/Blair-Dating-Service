import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/data/howItWorks";

export function Process() {
  return (
    <section id="process" className="border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Process" title="다섯 단계로 진행합니다." />
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-6 lg:block lg:pb-0"
            >
              <span className="font-display text-lg text-ink-light">{step.number}</span>
              <div className="lg:mt-6">
                <h3 className="font-body text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 font-body text-sm leading-[1.8] text-ink-light">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
