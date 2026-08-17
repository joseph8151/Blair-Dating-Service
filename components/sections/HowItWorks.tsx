import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/data/howItWorks";

export function HowItWorks() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From Consultation to Connection."
            light
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="flex gap-5 border-t border-white/15 py-6 lg:flex-col lg:gap-8 lg:border-t-0 lg:py-0">
                <span className="font-display text-3xl text-blush-soft lg:text-4xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-lg text-white">{step.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
