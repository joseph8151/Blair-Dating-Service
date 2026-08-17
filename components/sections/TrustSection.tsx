import { Lock, Compass, Sparkles, Headset, EyeOff, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { trustSectionItems, type TrustPoint } from "@/data/trust";

const icons: Record<TrustPoint["icon"], LucideIcon> = {
  lock: Lock,
  compass: Compass,
  sparkles: Sparkles,
  headset: Headset,
  eyeOff: EyeOff,
};

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Blair Dating"
            title="Trust, Built Into Every Step."
            description="더 나은 만남은 더 정교한 기준에서 시작됩니다. BLAIR DATING이 상담부터 소개까지 지키는 원칙입니다."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {trustSectionItems.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-cream p-6 transition-colors duration-300 hover:border-blush-soft/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/[0.04] text-blush-soft">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-ink">{item.title}</h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.75] text-ink/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
