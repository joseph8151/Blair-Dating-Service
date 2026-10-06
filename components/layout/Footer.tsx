import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavItems } from "@/data/nav";
import { businessInfo, siteConfig } from "@/data/site";

// Empty values still show their label, so the slot stays visible until filled.
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <p>
      {label}{" "}
      {value ? value : <span className="inline-block w-24 border-b border-line align-middle" />}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-14 lg:pb-14">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-baseline lg:justify-between">
          <p className="font-display text-lg font-medium text-ink">{siteConfig.wordmark}</p>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-[13px] text-ink-light transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-line pt-7 font-body text-xs leading-relaxed text-ink-light sm:flex-row sm:flex-wrap sm:gap-x-6">
          <InfoItem label="상호" value={businessInfo.companyName} />
          <InfoItem label="대표자" value={businessInfo.representative} />
          <InfoItem label="사업자등록번호" value={businessInfo.registrationNumber} />
          <InfoItem label="주소" value={businessInfo.address} />
        </div>
      </Container>
    </footer>
  );
}
