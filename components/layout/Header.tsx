"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The homepage hero is a full-bleed photo on mobile, so the header needs a
  // light (white) wordmark/icon until the user scrolls past it or opens the
  // menu. Every other page — and desktop, where the hero image never sits
  // under the header — keeps the standard dark text.
  const lightHeader = pathname === "/" && !scrolled && !open;

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-off-white/95 shadow-soft backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8 xl:px-10">
        <Link
          href="/"
          className={cn(
            "flex-none font-display text-lg tracking-[0.14em] sm:text-xl lg:text-ink",
            lightHeader ? "text-white" : "text-ink"
          )}
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-medium text-ink/70 transition-colors hover:text-ink whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-2.5 lg:flex">
          <Button
            href="/consultation"
            variant="outline"
            size="sm"
            onClick={() => trackEvent("cta_consultation_click", { location: "header" })}
          >
            상담 신청
          </Button>
          <Button
            href="/apply"
            variant="primary"
            size="sm"
            onClick={() => trackEvent("cta_apply_click", { location: "header" })}
          >
            소개팅 지원하기
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className={cn(
            "flex h-10 w-10 items-center justify-center lg:hidden",
            lightHeader ? "text-white" : "text-ink"
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-off-white px-5 pb-28 pt-6 lg:hidden">
          <nav className="flex flex-col gap-1">
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
          <div className="mt-8 flex flex-col gap-3">
            <Button
              href="/apply"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                trackEvent("cta_apply_click", { location: "mobile_menu" });
                setOpen(false);
              }}
            >
              소개팅 지원자로 등록하기
            </Button>
            <Button
              href="/consultation"
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => {
                trackEvent("cta_consultation_click", { location: "mobile_menu" });
                setOpen(false);
              }}
            >
              상담 신청하기
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
