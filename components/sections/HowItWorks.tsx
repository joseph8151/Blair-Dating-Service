import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/data/howItWorks";

export function HowItWorks() {
  return (
    <section className="relative -mt-8 rounded-t-[2.5rem] bg-ink py-24 text-cream sm:py-32 lg:-mt-10 lg:rounded-t-[3rem]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From Consultation to Connection."
            light
          />
        </Reveal>

        {/* Desktop — horizontal connected timeline */}
        <div className="relative mt-24 hidden lg:block">
          <div className="absolute left-[10%] right-[10%] top-7 h-px bg-cream/15" />
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <div className="flex flex-col">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink font-display text-lg text-gold">
                    {step.number}
                  </div>
                  <h3 className="mt-6 font-display text-lg text-cream">{step.title}</h3>
                  <p className="mt-2.5 font-body text-sm leading-[1.8] text-cream/55">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — vertical connected timeline */}
        <div className="relative mt-16 lg:hidden">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-cream/15" />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <div className="flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold/50 bg-ink font-display text-base text-gold">
                    {step.number}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg text-cream">{step.title}</h3>
                    <p className="mt-2 font-body text-sm leading-[1.8] text-cream/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
