import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavItems } from "@/data/nav";
import { businessInfo, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-16 lg:pb-16">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <p className="font-display text-xl text-ink">{siteConfig.wordmark}</p>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-[13px] text-ink-light transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-body text-[13px] text-ink-light transition-colors hover:text-ink"
            >
              인스타그램
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-1 border-t border-line pt-8 font-body text-xs leading-relaxed text-ink-light sm:flex-row sm:flex-wrap sm:gap-x-6">
          <p>상호 {businessInfo.companyName}</p>
          <p>대표자 {businessInfo.representative}</p>
          <p>사업자등록번호 {businessInfo.registrationNumber}</p>
          <p>이메일 {businessInfo.email}</p>
          <p>주소 {businessInfo.address}</p>
        </div>

        <p className="mt-6 font-body text-xs text-ink-light/70">
          © {new Date().getFullYear()} {businessInfo.companyName}
        </p>
      </Container>
    </footer>
  );
}
