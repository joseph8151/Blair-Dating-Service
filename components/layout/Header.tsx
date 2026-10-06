"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-sm transition-colors duration-300",
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex-none font-display text-[1.35rem] tracking-[0.01em] text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.wordmark}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-body text-[13px] text-ink-light transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-6 lg:flex">
          <Link
            href="/apply"
            onClick={() => trackEvent("cta_apply_click", { location: "header" })}
            className="font-body text-[13px] text-ink-light transition-colors hover:text-ink"
          >
            매칭 후보 등록
          </Link>
          <Button
            href="/consultation"
            size="sm"
            onClick={() => trackEvent("cta_consultation_click", { location: "header" })}
          >
            상담 신청
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-paper px-5 pb-28 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-body text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col items-start gap-5">
            <Button
              href="/consultation"
              size="lg"
              className="w-full"
              onClick={() => {
                trackEvent("cta_consultation_click", { location: "mobile_menu" });
                setOpen(false);
              }}
            >
              상담 신청
            </Button>
            <Link
              href="/apply"
              onClick={() => {
                trackEvent("cta_apply_click", { location: "mobile_menu" });
                setOpen(false);
              }}
              className="font-body text-sm text-ink-light underline decoration-line underline-offset-[6px]"
            >
              매칭 후보로 등록
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
