// Qualitative trust markers — used in place of unverifiable numbers
// (member counts, match rates, etc). Only add real figures here once
// they're actually verifiable; until then, keep this qualitative.

export type TrustMark = {
  title: string;
  description: string;
};

export const trustBarItems: TrustMark[] = [
  { title: "Selective Member Pool", description: "무분별하게 모집하지 않습니다" },
  { title: "Personal Match Manager", description: "담당 매니저가 직접 상담합니다" },
  { title: "Private Consultation", description: "모든 상담은 비공개입니다" },
  { title: "Mutual Consent Introductions", description: "양측 의사 확인 후 소개합니다" },
];
