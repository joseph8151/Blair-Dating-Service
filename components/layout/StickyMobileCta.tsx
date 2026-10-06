"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

// Consultation is the primary action; pool registration stays a quiet text link.
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-sm lg:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button
        href="/consultation"
        size="md"
        className="flex-1"
        onClick={() => trackEvent("cta_consultation_click", { location: "sticky_mobile" })}
      >
        상담 신청
      </Button>
      <Link
        href="/apply"
        onClick={() => trackEvent("cta_apply_click", { location: "sticky_mobile" })}
        className="flex-none px-2 font-body text-[13px] text-ink-light underline decoration-line underline-offset-4"
      >
        후보 등록
      </Link>
    </div>
  );
}
