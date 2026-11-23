import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footerGuideItems, footerNavItems } from "@/data/nav";
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
    <footer className="border-t border-line pb-28 pt-20 lg:pb-14">
      <Container>
        <div className="mb-16 flex flex-col gap-8 border-b border-line pb-16 lg:flex-row lg:items-end lg:justify-between">
          <p className="font-display text-[2.2rem] font-medium leading-[1.2] tracking-[-0.04em] text-ink sm:text-[3rem]">
            기준부터
            <br />
            천천히 이야기해 보세요.
          </p>
          <Button href="/consultation" size="lg" className="self-start lg:self-auto">
            전화 상담 신청
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-baseline lg:justify-between">
          <p className="font-display text-[1.2rem] font-medium tracking-[-0.02em] text-ink">{siteConfig.wordmark}</p>
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

        <nav aria-label="소개팅 안내" className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-line pt-7">
          {footerGuideItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[12px] text-ink-light transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* TODO(owner): 값을 알려 주시면 아래 사업자 정보 줄에 추가합니다. 값이 없어 지금은 노출하지 않습니다.
            - 사업자등록번호 [ ] (이전에 하단에서 빼 달라고 하셨습니다. 다시 넣을지 정해 주세요.)
            - 결혼중개업 신고번호 [ ] (신고필증 정보가 있을 때만)
            - 대표 연락처 [ ], 이메일 [ ] (이전에 메일 주소는 모두 빼 달라고 하셨습니다.)
            - 상담 운영 시간 [ ] */}
        <div className="mt-10 flex flex-col gap-1.5 border-t border-line pt-7 font-body text-xs leading-relaxed text-ink-light sm:flex-row sm:flex-wrap sm:gap-x-6">
          <InfoItem label="상호" value={businessInfo.companyName} />
          <InfoItem label="대표자" value={businessInfo.representative} />
          <InfoItem label="주소" value={businessInfo.address} />
        </div>
      </Container>
    </footer>
  );
}
