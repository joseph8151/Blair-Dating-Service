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
    <section id="faq" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="left" />
        </Reveal>

        <div className="mt-12 divide-y divide-line border-t border-line">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
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
                  <Plus
                    size={18}
                    className={cn(
                      "flex-none text-rose transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-sm leading-relaxed text-ink/60">
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
