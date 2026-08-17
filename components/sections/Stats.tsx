import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

// NOTE: figures are sample/placeholder values — see data/stats.ts.
export function Stats() {
  return (
    <section className="border-y border-line bg-cream py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 divide-y divide-line lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="px-4 py-6 text-center">
                <p className="font-display text-4xl text-blush-soft sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-xs font-medium uppercase tracking-wide text-ink-light">
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
