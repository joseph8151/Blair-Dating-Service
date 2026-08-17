import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { applyPolicyPoints } from "@/data/config";

export const metadata: Metadata = {
  title: "소개팅 지원자 등록",
  description:
    "BLAIR DATING의 소개팅 파트너로 등록해보세요. 등록비 없이, 원하지 않는 소개는 언제든 거절할 수 있습니다.",
};

export default function ApplyPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-widest2 text-rose">
          Apply as a Match
        </p>
        <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          소개팅 지원자로 등록하기
        </h1>
        <p className="mt-5 font-body text-sm leading-relaxed text-ink/60">
          작성해주신 정보는 담당 매니저의 검토 후 매칭 목적으로만 활용됩니다.
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
          {applyPolicyPoints.map((point) => (
            <li key={point} className="font-body text-xs text-ink/45">
              · {point}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ApplyForm />
        </div>
      </Container>
    </div>
  );
}
