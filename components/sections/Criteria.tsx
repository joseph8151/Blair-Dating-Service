"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandImage } from "@/components/ui/BrandImage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPhotos } from "@/data/brandPhotos";
import { criteria } from "@/data/criteria";
import { trackEvent } from "@/lib/analytics";

export function Criteria() {
  return (
    <section id="criteria" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-20">
          <SectionHeading
            className="lg:col-span-5"
            title="네 가지를 여쭙니다."
            description="조건표 대신 전화로 직접 듣습니다."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7">
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
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item) => (
            <div key={item.title} className="flex flex-col border-t border-line pb-8 pt-5">
              <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-3 flex-1 font-body text-sm leading-[1.8] text-ink-light">
                {item.description}
              </p>
              <Link
                href={item.href}
                onClick={() =>
                  trackEvent("cta_consultation_click", {
                    location: "criteria",
                    interest: new URLSearchParams(item.href.split("?")[1]).get("interest") ?? "",
                  })
                }
                className="group mt-5 inline-flex items-center gap-1.5 self-start font-body text-[13px] font-medium text-accent"
              >
                이 기준으로 상담하기
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
