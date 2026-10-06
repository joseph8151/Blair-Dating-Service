export const comparisonColumns = ["소개팅 앱", "결혼정보회사", "블레어"] as const;

export const comparisonRows: { label: string; values: [string, string, string] }[] = [
  {
    label: "고르는 방식",
    values: ["프로필을 직접 넘깁니다", "등급과 조건을 봅니다", "매니저가 한 명만 제안합니다"],
  },
  {
    label: "상담하는 것",
    values: ["없음", "등급과 조건", "외모, 신앙, 생활. 등급은 없습니다"],
  },
  {
    label: "비용",
    values: ["구독", "수백만 원", "12만 원부터"],
  },
];
