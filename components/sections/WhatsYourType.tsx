import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { typeCards } from "@/data/whatYourType";

export function WhatsYourType() {
  return (
    <section id="your-type" className="bg-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What's Your Type?"
            title="당신은 어떤 사람에게 끌리나요?"
            description={
              <>
                좋은 사람의 기준은 모두 다릅니다. 누군가에게는 외모와
                분위기가 중요하고, 누군가에게는 종교가 중요하며, 누군가에게는
                문화적 배경과 국적이 중요한 기준일 수 있습니다.
                <br className="hidden sm:block" />
                BLAIR DATING은 획일적인 조건이 아니라 각 회원이 실제로
                중요하게 생각하는 기준을 중심으로 매칭합니다.
              </>
            }
          />
        </Reveal>
      </Container>

      <div className="mt-14 lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {typeCards.map((card) => (
            <div key={card.id} className="w-[86%] flex-none snap-center">
              <TypeCardView card={card} />
            </div>
          ))}
        </div>
      </div>

      <Container className="mt-14 hidden grid-cols-2 gap-6 lg:grid xl:grid-cols-4">
        {typeCards.map((card, i) => (
          <Reveal key={card.id} delay={i * 90}>
            <TypeCardView card={card} />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

function TypeCardView({ card }: { card: (typeof typeCards)[number] }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-off-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
      <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 45vw, 86vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        <span className="absolute bottom-3 left-4 font-display text-3xl text-cream/90">
          {card.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-blush-soft">
          {card.eyebrow}
        </p>
        <h3 className="mt-2.5 font-display text-lg leading-snug text-ink">{card.title}</h3>
        <p className="mt-3 font-body text-[13px] leading-[1.75] text-ink/55">
          {card.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blush-pale px-3 py-1 font-body text-[11px] text-blush-soft"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Button href={card.ctaHref} variant="dark" size="sm" className="w-full sm:w-auto">
            {card.cta}
            <ArrowUpRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
}
