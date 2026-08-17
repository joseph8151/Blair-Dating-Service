// Feeds the "dating apps vs. Blair Dating" contrast block in the About section.

export type ComparisonRow = {
  app: string;
  blair: string;
};

export const comparisonRows: ComparisonRow[] = [
  { app: "알고리즘이 무작위로 추천", blair: "전문 매니저가 직접 선별" },
  { app: "프로필 수백 개를 직접 스와이프", blair: "상담을 바탕으로 한 사람을 제안" },
  { app: "조건 태그로만 필터링", blair: "취향, 가치관, 라이프스타일까지 고려" },
  { app: "누구에게나 프로필 노출", blair: "제한된 범위 내에서만 정보 공유" },
];
