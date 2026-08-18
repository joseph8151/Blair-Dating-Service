"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { preferenceCategories } from "@/data/preferenceBuilder";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function PreferenceMatch() {
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  function toggle(categoryKey: string, option: string, multi: boolean) {
    setSelections((prev) => {
      const current = prev[categoryKey] ?? [];
      if (multi) {
        const next = current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option];
        return { ...prev, [categoryKey]: next };
      }
      return { ...prev, [categoryKey]: current.includes(option) ? [] : [option] };
    });
  }

  const hasSelections = useMemo(
    () => Object.values(selections).some((v) => v.length > 0),
    [selections]
  );

  const briefLines = useMemo(
    () =>
      preferenceCategories
        .map((cat) => ({ cat, values: selections[cat.key] ?? [] }))
        .filter((c) => c.values.length > 0),
    [selections]
  );

  const consultationHref = useMemo(() => {
    if (!hasSelections) return "/consultation";
    const summary = briefLines
      .map((c) => `${c.cat.koLabel}: ${c.values.join(", ")}`)
      .join(" / ");
    return `/consultation?prefill=${encodeURIComponent(summary)}`;
  }, [briefLines, hasSelections]);

  return (
    <section id="build-your-type" className="bg-off-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Build Your Type"
            title="Your Preference, Your Match."
            description="소개팅에서 중요하게 생각하는 기준을 선택해보세요. 선택이 끝나면 당신만의 Blair Brief가 만들어집니다."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {preferenceCategories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 60}>
              <div className="rounded-2xl border border-line bg-cream p-6">
                <p className="font-body text-[11px] font-semibold uppercase tracking-widest2 text-ink-light">
                  {cat.label}
                </p>
                <p className="mt-1 font-display text-lg text-ink">{cat.koLabel}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.options.map((option) => {
                    const checked = (selections[cat.key] ?? []).includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggle(cat.key, option, cat.multi)}
                        className={cn(
                          "rounded-full border px-4 py-2 font-body text-sm transition-all duration-200",
                          checked
                            ? "border-blush-soft bg-blush-pale text-blush-soft"
                            : "border-line text-ink/65 hover:border-ink/25"
                        )}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {hasSelections ? (
          <Reveal className="mt-10">
            <div className="rounded-2xl border border-gold/40 bg-ink p-8 text-cream sm:p-10">
              <div className="flex items-center gap-2 text-gold">
                <Sparkles size={18} strokeWidth={1.6} />
                <p className="font-body text-[11px] font-semibold uppercase tracking-widest2">
                  Your Blair Brief
                </p>
              </div>
              <h3 className="mt-3 font-display text-2xl text-cream">Your Type is Ready.</h3>
              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {briefLines.map(({ cat, values }) => (
                  <div key={cat.key}>
                    <dt className="font-body text-[11px] uppercase tracking-wide text-cream/45">
                      {cat.label}
                    </dt>
                    <dd className="mt-1 font-body text-sm text-cream/85">{values.join(" / ")}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 font-body text-sm leading-[1.8] text-cream/60">
                이 기준으로 BLAIR 매니저에게 상담을 요청하시겠습니까? 단순한 조건표가
                아니라, 상담을 통해 실제로 잘 맞는 후보를 함께 찾아드립니다.
              </p>
              <div className="mt-6">
                <Button
                  href={consultationHref}
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    trackEvent("cta_consultation_click", { location: "preference_match" })
                  }
                >
                  이 조건으로 매칭 상담
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </Reveal>
        ) : (
          <p className="mt-10 text-center font-body text-sm text-ink/40">
            위에서 원하는 기준을 선택하면 나만의 Blair Brief가 만들어집니다.
          </p>
        )}
      </Container>
    </section>
  );
}
