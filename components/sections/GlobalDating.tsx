import { ArrowUpRight, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { regionCards } from "@/data/globalRegions";

export function GlobalDating() {
  return (
    <section
      id="global-dating"
      className="relative -mt-8 rounded-t-[2.5rem] bg-ink py-24 text-cream sm:py-32 lg:-mt-10 lg:rounded-t-[3rem]"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Global & Cultural Matching"
            title="The World Is Full of Different Types."
            light
            description={
              <>
                국적보다 중요한 것은 당신이 어떤 문화와 사람에게 끌리는지입니다.
                <br className="hidden sm:block" />
                BLAIR DATING은 글로벌 회원을 단순히 &lsquo;외국인&rsquo;으로
                묶지 않습니다. 회원이 선호하는 국가, 문화, 언어,
                라이프스타일을 상담하고 그에 적합한 후보를 찾습니다.
              </>
            }
          />
        </Reveal>

        <div className="mt-14 lg:hidden">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {regionCards.map((region) => (
              <div key={region.id} className="w-[82%] flex-none snap-center">
                <RegionCardView region={region} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 hidden grid-cols-3 gap-5 lg:grid">
          {regionCards.map((region, i) => (
            <Reveal key={region.id} delay={i * 80}>
              <RegionCardView region={region} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RegionCardView({ region }: { region: (typeof regionCards)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-cream/12 bg-cream/[0.04] p-7 transition-colors duration-300 hover:border-gold/40">
      <div className="flex items-center gap-2 text-cream/40">
        <Globe2 size={16} strokeWidth={1.5} />
        <p className="font-body text-[11px] font-semibold uppercase tracking-widest2">
          {region.eyebrow}
        </p>
      </div>
      <h3 className="mt-3 font-display text-xl text-cream">{region.title}</h3>
      <p className="mt-3 flex-1 font-body text-[13px] leading-[1.8] text-cream/55">
        {region.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {region.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cream/15 px-3 py-1 font-body text-[11px] text-cream/60"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <Button href={region.ctaHref} variant="primary" size="sm" className="w-full sm:w-auto">
          {region.cta}
          <ArrowUpRight size={14} />
        </Button>
      </div>
    </article>
  );
}
