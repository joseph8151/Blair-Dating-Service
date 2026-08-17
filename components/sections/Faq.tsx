"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-off-white py-24 sm:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-cream transition-colors duration-300",
                  isOpen ? "border-blush-soft/40" : "border-line"
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                  onClick={() => {
                    const next = isOpen ? null : index;
                    setOpenIndex(next);
                    trackEvent("faq_toggle", { question: item.question, open: next !== null });
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-[15px] font-medium text-ink sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-7 w-7 flex-none items-center justify-center rounded-full transition-colors duration-300",
                      isOpen ? "bg-blush-soft text-cream" : "bg-ink/[0.04] text-ink/50"
                    )}
                  >
                    <Plus
                      size={14}
                      className={cn("transition-transform duration-300", isOpen && "rotate-45")}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden px-6 pb-6 sm:px-7">
                    <p className="font-body text-sm leading-[1.85] text-ink/60">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
