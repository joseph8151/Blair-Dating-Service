import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "이용약관",
};

// Placeholder terms text — replace with counsel-reviewed content before launch.
export default function TermsPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">이용약관</h1>
        <div className="mt-8 flex flex-col gap-6 font-body text-sm leading-relaxed text-ink/70">
          <section>
            <h2 className="font-display text-xl text-ink">제1조 (목적)</h2>
            <p className="mt-2">
              본 약관은 {siteConfig.name}(이하 &ldquo;회사&rdquo;)이 제공하는
              상담 기반 매칭 서비스의 이용조건 및 절차, 회사와 이용자의
              권리·의무를 규정함을 목적으로 합니다. (본 페이지는
              placeholder이며 실제 서비스 운영 전 법률 검토가 필요합니다.)
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">제2조 (서비스의 내용)</h2>
            <p className="mt-2">
              회사는 상담을 기반으로 회원 간 소개를 주선하는 큐레이션형
              매칭 서비스를 제공합니다. 소개 여부 및 최종 만남은 양측
              회원의 자발적 의사에 따릅니다.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">제3조 (회원의 의무)</h2>
            <p className="mt-2">
              이용자는 신청 시 정확한 정보를 제공해야 하며, 허위 정보 제공,
              타인의 정보 도용 등의 행위를 해서는 안 됩니다.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-ink">제4조 (서비스 이용의 제한)</h2>
            <p className="mt-2">
              회사는 부적절한 가입 목적, 허위 프로필 등이 확인되는 경우
              서비스 이용을 제한할 수 있습니다.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
