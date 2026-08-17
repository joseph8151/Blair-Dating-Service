import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="bg-off-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Match"
            title="Three Ways We Curate Your Match."
            description="BLAIR DATING이 특히 전문성을 가진 세 가지 매칭 영역입니다. 상담을 통해 당신에게 맞는 방향을 함께 찾아드립니다."
          />
        </Reveal>
      </Container>

      {programs.map((program) => (
        <span
          key={program.id}
          id={program.id}
          className="block scroll-mt-24"
          aria-hidden
        />
      ))}

      <div className="mt-14 lg:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {programs.map((program) => (
            <div key={program.id} className="w-[86%] flex-none snap-center">
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>

      <Container className="mt-14 hidden grid-cols-3 gap-7 lg:grid">
        {programs.map((program, i) => (
          <Reveal key={program.id} delay={i * 100}>
            <ProgramCard program={program} />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <div className="group relative h-full">
      <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-gradient-to-br from-blush-soft/25 to-gold/20 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />

      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream shadow-soft transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-card">
        <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={program.image}
            alt={program.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 86vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-blush-soft">
            {program.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-ink">
            {program.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="mt-4 font-body text-sm leading-[1.8] text-ink/60">
            {program.description}
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {program.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 font-body text-[13px] leading-snug text-ink/55"
              >
                <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button href={program.ctaHref} variant="dark" size="md" className="w-full sm:w-auto">
              {program.cta}
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
