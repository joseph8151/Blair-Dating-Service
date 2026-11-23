"use client";

import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";

export function Faq() {
  return (
    <section id="faq" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <SectionHeading className="lg:col-span-4" title="자주 묻는 질문" />

          <div className="border-t border-line lg:col-span-8">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-line"
                onToggle={(e) =>
                  trackEvent("faq_toggle", {
                    question: item.question,
                    open: (e.currentTarget as HTMLDetailsElement).open,
                  })
                }
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-body text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus
                    size={16}
                    className="flex-none text-ink-light transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-7 pr-10 font-body text-sm leading-[1.9] text-ink-light">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
