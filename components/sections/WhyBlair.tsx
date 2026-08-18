import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyBlairQuotes } from "@/data/whyBlair";

export function WhyBlair() {
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why People Come to Blair"
            title="When Ordinary Dating Isn't Enough."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {whyBlairQuotes.map((quote, i) => (
            <Reveal key={quote} delay={(i % 4) * 60}>
              <div className="flex h-full items-center rounded-2xl border border-line bg-cream px-5 py-6">
                <p className="font-body text-[13px] leading-[1.7] text-ink/65">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-16 max-w-lg text-center font-display text-2xl leading-[1.4] text-ink sm:text-3xl">
            You don&rsquo;t need more profiles.
            <br />
            You need better introductions.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
