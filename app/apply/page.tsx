import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { applyPolicyPoints } from "@/data/config";

export const metadata: Metadata = {
  title: "매칭 후보 등록",
  description:
    "등록비 없이 매칭 후보로 등록합니다. 기준이 맞는 분이 있으면 먼저 여쭙고, 동의하시면 소개합니다.",
};

export default function ApplyPage() {
  return (
    <div className="ambient-glow bg-off-white pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          매칭 후보 등록
        </h1>
        <p className="mt-4 font-body text-[15px] leading-[1.85] text-ink-light">
          기준이 맞는 분이 있으면 매니저가 먼저 연락드립니다. 프로필은
          목록에 노출되지 않으며, 동의 없이 소개하지 않습니다.
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
          {applyPolicyPoints.map((point) => (
            <li key={point} className="font-body text-xs text-ink-light">
              · {point}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-[3px] border border-line bg-cream p-6 sm:p-10">
          <ApplyForm />
        </div>
      </Container>
    </div>
  );
}
