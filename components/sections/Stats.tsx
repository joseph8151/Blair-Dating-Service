import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

// NOTE: figures are sample/placeholder values — see data/stats.ts.
export function Stats() {
  return (
    <section className="bg-blush/15 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="font-display text-4xl text-rose sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-xs font-medium uppercase tracking-wide text-ink/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
