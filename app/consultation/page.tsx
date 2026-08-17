import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "비공개 상담 신청",
  description:
    "BLAIR DATING에 비공개 상담을 신청하세요. 상담 내용은 비공개로 관리되며 상담을 기반으로 어울리는 상대를 큐레이션합니다.",
};

export default function ConsultationPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest2 text-rose">
          Private Consultation
        </p>
        <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          Tell Us Who You&rsquo;re Looking For.
        </h1>
        <p className="mt-5 inline-block rounded-full bg-blush/15 px-4 py-2 font-body text-xs font-medium text-rose">
          상담 내용은 비공개로 관리됩니다.
        </p>

        <div className="mt-12">
          <Suspense fallback={null}>
            <ConsultationForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
