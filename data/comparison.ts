export const comparisonColumns = ["소개팅 앱", "결혼정보회사", "블레어"] as const;

export const comparisonRows: { label: string; values: [string, string, string] }[] = [
  {
    label: "소개 방식",
    values: ["직접 프로필을 넘겨 봅니다", "등급과 조건을 우선합니다", "매니저가 한 분만 제안합니다"],
  },
  {
    label: "상담 내용",
    values: ["없음", "등급과 조건", "외모·종교·생활 방식, 등급 없음"],
  },
  {
    label: "비용",
    values: ["구독", "수백만 원", "17만 원부터"],
  },
];
