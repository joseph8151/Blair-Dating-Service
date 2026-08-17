import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

// NOTE: testimonials are demo content — see data/testimonials.ts for details.
export function SuccessStories() {
  return (
    <section id="success-stories" className="bg-off-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Success Stories" title="Real Introductions, Real Chemistry." />
        </Reveal>
      </Container>

      <Container className="mt-14">
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.attribution}
              className="w-[82%] flex-none snap-center sm:w-auto"
            >
              <figure className="relative flex h-full flex-col rounded-2xl border border-line bg-cream p-8 shadow-soft transition-shadow duration-300 hover:shadow-card">
                <Quote className="text-gold" size={24} strokeWidth={1.5} />
                <blockquote className="mt-6 flex-1 font-body text-[15px] leading-[1.85] text-ink/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="h-px w-6 bg-blush-soft" />
                  <figcaption className="font-body text-xs font-medium uppercase tracking-wide text-ink-light">
                    {t.attribution}
                  </figcaption>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
