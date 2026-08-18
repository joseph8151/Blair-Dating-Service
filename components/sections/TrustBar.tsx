import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trustBarItems } from "@/data/trustBar";

// Deliberately qualitative — see data/trustBar.ts. Swap in real, verifiable
// figures (member count, match rate, etc.) only once they exist; until
// then this stays honest rather than making numbers up.
export function TrustBar() {
  return (
    <section className="border-y border-line bg-cream py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 divide-y divide-line lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {trustBarItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="px-4 py-6 text-center">
                <p className="font-display text-lg text-blush-soft sm:text-xl">{item.title}</p>
                <p className="mt-2 font-body text-xs font-medium text-ink-light">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
