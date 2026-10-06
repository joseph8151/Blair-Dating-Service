import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MemberProfileForm } from "@/components/forms/MemberProfileForm";

// Unlisted page: members get this link from their manager after signing up.
// Not in the menu or sitemap, and kept out of search results.
export const metadata: Metadata = {
  title: "회원 프로필 작성",
  description: "블레어데이팅 회원 프로필 작성 페이지입니다.",
  robots: { index: false, follow: false },
};

export default function ProfilePage() {
  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          회원 프로필 작성
        </h1>
        <p className="mt-4 font-body text-[15px] leading-[1.85] text-ink-light">
          소개할 분을 고를 때 쓰는 내용입니다. 매니저만 확인하며, 상대에게는
          동의하신 범위 안에서만 전달합니다.
        </p>

        <div className="mt-10 rounded-[3px] border border-line bg-cream p-6 sm:p-10">
          <MemberProfileForm />
        </div>
      </Container>
    </div>
  );
}
