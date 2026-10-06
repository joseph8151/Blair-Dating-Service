"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCta() {
  const pathname = usePathname();
  // The form pages already are the destination; don't cover their fields.
  if (["/consultation", "/apply", "/profile"].some((p) => pathname?.startsWith(p))) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-sm lg:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button
        href="/consultation"
        size="md"
        className="w-full"
        onClick={() => trackEvent("cta_consultation_click", { location: "sticky_mobile" })}
      >
        전화 상담 신청
      </Button>
    </div>
  );
}
