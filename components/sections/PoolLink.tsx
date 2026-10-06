"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { trackEvent } from "@/lib/analytics";

// Pool registration is secondary: a single text link near the bottom.
export function PoolLink() {
  return (
    <section className="border-t border-line py-14">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-body text-sm text-ink-light">
          소개받을 후보로만 등록할 수도 있습니다. 등록비는 없고, 소개 전에 먼저 묻습니다.
        </p>
        <Link
          href="/apply"
          onClick={() => trackEvent("cta_apply_click", { location: "pool_link" })}
          className="group inline-flex items-center gap-1.5 font-body text-sm text-ink underline decoration-line underline-offset-[6px] hover:decoration-ink/40"
        >
          매칭 후보 등록
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Container>
    </section>
  );
}
