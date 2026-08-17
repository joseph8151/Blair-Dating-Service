import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { featureFlags } from "@/data/config";
import { conciergeServices } from "@/data/concierge";

// Toggle via featureFlags.conciergeEnabled in data/config.ts
export function Concierge() {
  if (!featureFlags.conciergeEnabled) return null;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond Matching"
              title={
                <>
                  Dating
                  <br />
                  Concierge
                </>
              }
              description="매칭뿐 아니라, 만남이 더 좋은 결과로 이어지도록 돕는 프리미엄 서비스입니다."
            />
            <div className="mt-8">
              <Button href="/consultation" variant="dark" size="md">
                Concierge 서비스 문의하기
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {conciergeServices.map((service) => (
                <li
                  key={service}
                  className="rounded-2xl border border-line bg-off-white px-6 py-5 font-body text-sm text-ink/65 transition-colors duration-300 hover:border-blush-soft/40"
                >
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
