import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "전화 상담 신청",
  description:
    "번호를 남겨 주시면 매니저가 전화로 기준을 듣습니다. 상담 내용은 비공개로 관리됩니다.",
};

export default function ConsultationPage() {
  return (
    <div className="ambient-glow bg-off-white pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          전화 상담 신청
        </h1>
        <p className="mt-4 font-body text-sm text-ink-light">
          상담 내용은 비공개로 관리됩니다.
        </p>

        <div className="mt-10 rounded-[3px] border border-line bg-cream p-6 sm:p-10">
          <Suspense fallback={null}>
            <ConsultationForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
