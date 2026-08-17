import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-28">
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

      <Container className="mt-14 hidden grid-cols-3 gap-6 lg:grid">
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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-off-white shadow-card">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 86vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-rose">
          {program.eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink">
          {program.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink/65">
          {program.description}
        </p>
        <ul className="mt-5 flex flex-col gap-2">
          {program.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 font-body text-[13px] leading-snug text-ink/60"
            >
              <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-rose" />
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
  );
}
