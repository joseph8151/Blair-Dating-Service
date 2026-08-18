import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { applyPolicyPoints } from "@/data/config";

export const metadata: Metadata = {
  title: "Match Pool 등록",
  description:
    "누군가가 찾고 있는 사람이 당신일 수도 있습니다. BLAIR Match Pool에 등록하면, 잘 맞는 회원이 있을 때 매니저가 먼저 연락합니다.",
};

export default function ApplyPage() {
  return (
    <div className="ambient-glow bg-off-white pb-24 pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <span className="gold-rule" />
        <p className="mb-4 mt-4 font-body text-xs font-semibold uppercase tracking-widest2 text-ink-light">
          Become a Match
        </p>
        <h1 className="font-display text-3xl leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
          Someone May Be Looking
          <br />
          for Someone Like You.
        </h1>
        <p className="mt-5 font-body text-[15px] leading-[1.85] text-ink/55">
          누군가가 찾고 있는 사람이 당신일 수도 있습니다. BLAIR Match
          Pool에 등록하면, 당신과 잘 맞는 회원이 있을 때 BLAIR 매니저가
          먼저 연락합니다. 프로필이 불특정 다수에게 무작위로 노출되는 앱
          방식과는 다릅니다.
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
          {applyPolicyPoints.map((point) => (
            <li key={point} className="font-body text-xs text-ink/40">
              · {point}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-[1.75rem] border border-line bg-cream p-6 shadow-soft sm:p-10">
          <ApplyForm />
        </div>
      </Container>
    </div>
  );
}
