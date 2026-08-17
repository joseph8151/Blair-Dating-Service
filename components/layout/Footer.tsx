import Link from "next/link";
import { Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerNavItems } from "@/data/nav";
import { businessInfo, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-white/70 lg:pb-16">
      <Container>
        <div className="flex flex-col gap-12 border-b border-white/10 pb-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-2xl tracking-[0.1em] text-white">
              {siteConfig.name}
            </p>
            <p className="mt-3 font-body text-sm text-white/50">
              Curated Dating Service
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <Instagram size={18} />
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-1 font-body text-xs leading-relaxed text-white/40 sm:grid-cols-2">
          <p>상호 {businessInfo.companyName}</p>
          <p>대표자 {businessInfo.ceo}</p>
          <p>사업자등록번호 {businessInfo.registrationNumber}</p>
          <p>연락처 {businessInfo.phone}</p>
          <p>이메일 {businessInfo.email}</p>
          <p>주소 {businessInfo.address}</p>
        </div>

        <p className="mt-8 font-body text-xs text-white/30">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
