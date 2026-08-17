import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { matchPreferenceTags } from "@/data/matchPreferences";

export function MatchPreference() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Match Preference" title="Your Type Matters." />
            <p className="mt-6 font-body text-[15px] leading-[1.9] text-ink/55">
              조건을 많이 적는다고 좋은 매칭이 되는 것은 아닙니다.
              <br />
              BLAIR DATING은 상담을 통해 당신에게 정말 중요한 기준을 함께
              찾아드립니다.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2.5">
              {matchPreferenceTags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-default rounded-full border border-ink/12 bg-off-white px-5 py-2.5 font-body text-sm text-ink/65 transition-colors duration-300 hover:border-blush-soft/50 hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
