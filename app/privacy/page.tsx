import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { businessInfo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
};

// Placeholder policy text — replace with counsel-reviewed content before launch.
export default function PrivacyPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">개인정보처리방침</h1>
        <div className="mt-8 flex flex-col gap-6 font-body text-sm leading-relaxed text-ink/70">
          <p>
            {siteConfig.name}(이하 &ldquo;회사&rdquo;)는 이용자의 개인정보를
            중요시하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본
            방침은 회사가 제공하는 상담 신청 및 지원자 등록 서비스 이용 과정에서
            수집하는 개인정보의 처리에 관한 사항을 안내합니다. (본 페이지는
            placeholder이며 실제 서비스 운영 전 법률 검토가 필요합니다.)
          </p>
          <section>
            <h2 className="font-display text-xl text-ink">1. 수집하는 개인정보 항목</h2>
            <p className="mt-2">
              이름, 성별, 나이, 연락처, 이메일, 거주지역, 직업, 사진, 상담
              내용 등 상담 및 매칭에 필요한 정보를 수집합니다.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">2. 개인정보의 이용 목적</h2>
            <p className="mt-2">
              수집된 정보는 상담 진행, 매칭 서비스 제공, 회원 관리 목적으로만
              사용되며 목적 외 용도로 사용되지 않습니다.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">3. 개인정보의 제3자 제공</h2>
            <p className="mt-2">
              회사는 이용자의 사전 동의 없이 개인정보를 외부에 제공하지
              않습니다. 매칭 상대에게는 상호 의사가 확인된 경우에 한해
              제한적인 정보만 공유됩니다.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">4. 문의</h2>
            <p className="mt-2">개인정보 관련 문의: {businessInfo.email}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
