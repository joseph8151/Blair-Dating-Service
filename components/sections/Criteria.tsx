"use client";

import Link from "next/link";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandPhotos } from "@/data/brandPhotos";
import { criteria } from "@/data/criteria";
import { trackEvent } from "@/lib/analytics";

// The four criteria together with what is actually asked on the call.
export function Criteria() {
  return (
    <section id="criteria" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <h2 className="font-display text-[1.8rem] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[2.35rem]">
                전화로 여쭙는 것들
              </h2>
              <p className="mt-5 font-body text-[15px] leading-[1.85] text-ink-light">
                조건표를 채우는 대신 통화로 듣습니다. 처음부터 다 정하지 않아도 되고, 중요한 것부터
                정리합니다.
              </p>
              <div className="mt-10 grid max-w-sm grid-cols-2 gap-3">
                <BrandImage photo={brandPhotos.womanAlley} sizes="(min-width: 1024px) 14vw, 45vw" className="aspect-[3/4]" />
                <BrandImage photo={brandPhotos.manAlley} sizes="(min-width: 1024px) 14vw, 45vw" className="mt-6 aspect-[3/4]" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {criteria.map((item) => (
              <Reveal key={item.title} className="border-t border-line py-9 first:border-t-0 first:pt-0">
                <h3 className="font-display text-[1.5rem] font-medium tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[16px] leading-[1.85] text-ink">{item.description}</p>
                <p className="mt-2 font-body text-[14px] leading-[1.8] text-ink-light">
                  상담에서는 {item.asks} 여쭙니다.
                </p>
                <Link
                  href={item.href}
                  onClick={() =>
                    trackEvent("cta_consultation_click", {
                      location: "criteria",
                      interest: new URLSearchParams(item.href.split("?")[1]).get("interest") ?? "",
                    })
                  }
                  className="mt-4 inline-block font-body text-[13px] text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                >
                  이 기준으로 상담 신청
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
