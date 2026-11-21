import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { consultQuestionGroups } from "@/data/consultQuestions";

export const metadata: Metadata = {
  title: "소개팅 전화 상담 신청",
  description:
    "블레어데이팅 1:1 소개팅 전화 상담 신청. 원하는 상대의 외모, 종교, 생활 방식을 매니저가 전화로 듣고 한 분씩 소개합니다. 상담 내용은 비공개로 관리됩니다.",
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: "소개팅 전화 상담 신청 | 블레어데이팅",
    description: "원하는 상대의 외모, 종교, 생활 방식을 매니저가 전화로 듣고 한 분씩 소개합니다.",
    url: "/consultation",
    type: "website",
    locale: "ko_KR",
    siteName: "블레어데이팅",
    images: ["/opengraph-image.png"],
  },
};

export default function ConsultationPage() {
  return (
    <div className="ambient-glow bg-off-white pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          전화 상담 신청
        </h1>
        <p className="mt-4 font-body text-[15px] leading-[1.85] text-ink-light">
          번호를 남겨 주시면 매니저가 전화로 원하시는 기준을 듣습니다. 상담 내용은 비공개로
          관리됩니다. 상담을 받았다고 바로 시작하지 않으셔도 됩니다.
        </p>
        {/* TODO(owner): 상담 소요 시간과 회신 시간을 알려 주시면 여기에 한 줄로 넣습니다. */}

        {/* Server-rendered so crawlers see it even though the form itself is client-side. */}
        <section aria-labelledby="consult-topics" className="mt-10 border-t border-line pt-8">
          <h2 id="consult-topics" className="font-display text-lg font-medium text-ink">
            상담에서는 이런 것을 여쭙니다
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {consultQuestionGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-body text-sm font-medium text-ink">{group.title}</h3>
                <p className="mt-1.5 font-body text-[13px] leading-[1.75] text-ink-light">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[13px] text-ink-light">
            처음 통화에서 모두 정하지 않아도 됩니다. 중요한 것부터 함께 정리합니다.
          </p>
        </section>

        <div className="mt-10 rounded-[3px] border border-line bg-cream p-6 sm:p-10">
          <Suspense fallback={null}>
            <ConsultationForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
