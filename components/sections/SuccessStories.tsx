import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

// NOTE: testimonials are demo content — see data/testimonials.ts for details.
export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 sm:py-28">
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
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-card">
                <Quote className="text-blush-soft" size={22} />
                <blockquote className="mt-5 flex-1 font-body text-[15px] leading-relaxed text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-body text-xs font-medium uppercase tracking-wide text-ink/45">
                  {t.attribution}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
