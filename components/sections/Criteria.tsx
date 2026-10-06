"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPhotos } from "@/data/brandPhotos";
import { criteria } from "@/data/criteria";
import { trackEvent } from "@/lib/analytics";

export function Criteria() {
  return (
    <section id="criteria" className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Criteria"
              title="무엇을 중요하게 보는지부터 듣습니다."
              description="조건을 나열하기보다, 실제로 끌리는 이유와 양보할 수 없는 것을 함께 정리합니다. 네 가지 중 하나에서 시작하면 됩니다."
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <BrandImage
                photo={brandPhotos.womanAlley}
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="aspect-[3/4]"
              />
              <BrandImage
                photo={brandPhotos.manAlley}
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="aspect-[3/4]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full flex-col border-t border-line pb-10 pt-6">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-4 flex-1 font-body text-sm leading-[1.85] text-ink-light">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  onClick={() =>
                    trackEvent("cta_consultation_click", {
                      location: "criteria",
                      interest: item.href.split("interest=")[1],
                    })
                  }
                  className="group mt-6 inline-flex items-center gap-1.5 self-start font-body text-[13px] font-medium text-accent"
                >
                  이 기준으로 상담
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
