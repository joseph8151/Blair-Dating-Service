"use client";

import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqCategories, faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";

const byQuestion = new Map(faqItems.map((item) => [item.question, item]));

// Grouped by topic; every answer stays in the HTML so it can be read and indexed.
export function Faq() {
  return (
    <section id="faq" className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading title="자주 묻는 질문" />
              <nav aria-label="질문 분류" className="mt-8 hidden flex-col gap-2 lg:flex">
                {faqCategories.map((cat) => (
                  <a
                    key={cat.title}
                    href={`#faq-${cat.title}`}
                    className="font-body text-sm text-ink-light transition-colors hover:text-ink"
                  >
                    {cat.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-14 lg:col-span-8">
            {faqCategories.map((cat) => (
              <div key={cat.title} id={`faq-${cat.title}`} className="scroll-mt-28">
                <h3 className="mb-2 font-body text-[13px] font-medium text-accent">{cat.title}</h3>
                <div className="border-t border-ink/80">
                  {cat.questions.map((q) => {
                    const item = byQuestion.get(q);
                    if (!item) return null;
                    return (
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-body text-[16px] font-medium text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                          {item.question}
                          <Plus
                            size={16}
                            strokeWidth={1.5}
                            className="flex-none text-ink-light transition-transform duration-300 group-open:rotate-45"
                          />
                        </summary>
                        <p className="max-w-2xl pb-6 pr-10 font-body text-[15px] leading-[1.9] text-ink-light">
                          {item.answer}
                        </p>
                      </details>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
