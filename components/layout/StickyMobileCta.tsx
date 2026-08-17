"use client";

import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-line bg-cream/95 px-4 py-3 shadow-[0_-12px_30px_-18px_rgba(34,33,38,0.25)] backdrop-blur-sm lg:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button
        href="/consultation"
        variant="outline"
        size="md"
        className="flex-1"
        onClick={() => trackEvent("cta_consultation_click", { location: "sticky_mobile" })}
      >
        상담 신청
      </Button>
      <Button
        href="/apply"
        variant="primary"
        size="md"
        className="flex-1"
        onClick={() => trackEvent("cta_apply_click", { location: "sticky_mobile" })}
      >
        지원자 등록
      </Button>
    </div>
  );
}
