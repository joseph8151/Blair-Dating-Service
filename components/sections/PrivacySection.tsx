import { Lock, EyeOff, Handshake, ShieldCheck, FileLock, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { privacyBadges } from "@/data/privacy";

const icons: Record<(typeof privacyBadges)[number]["icon"], LucideIcon> = {
  lock: Lock,
  eyeOff: EyeOff,
  handshake: Handshake,
  shieldCheck: ShieldCheck,
  fileLock: FileLock,
};

export function PrivacySection() {
  return (
    <section className="bg-ink py-24 text-cream sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Confidential by Design"
            title="Your Preferences Stay Private."
            light
            description="누구에게나 말하기 어려운 이상형과 조건이 있을 수 있습니다. BLAIR DATING의 상담 내용과 개인의 선호 기준은 공개 프로필처럼 노출하지 않습니다."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {privacyBadges.map((badge, i) => {
            const Icon = icons[badge.icon];
            return (
              <Reveal key={badge.title} delay={i * 70}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-cream/12 bg-cream/[0.04] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/[0.06] text-gold">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-cream">{badge.title}</h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.7] text-cream/50">
                      {badge.description}
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
