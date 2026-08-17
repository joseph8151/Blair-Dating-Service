import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whoForItems } from "@/data/whoFor";

export function WhoFor() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Is This For You?"
            title="If Dating Apps Aren't Working."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {whoForItems.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-white px-6 py-5">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blush/20 text-rose">
                  <Check size={16} />
                </span>
                <span className="font-body text-[15px] text-ink/80">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
