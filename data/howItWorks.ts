export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  { number: "01", title: "상담", description: "원하는 상대에 대해 전화로 듣습니다." },
  { number: "02", title: "기준 정리", description: "꼭 필요한 것과 양보할 수 있는 것을 나눕니다." },
  { number: "03", title: "후보 선별", description: "기준에 맞는 한 분을 고릅니다." },
  { number: "04", title: "두 분 모두 수락 후 소개", description: "두 분 모두 수락하면 일정을 잡습니다." },
  { number: "05", title: "만남 후 피드백", description: "만남 후 이야기를 듣고 다음 기준을 조정합니다." },
];

// People Blair does not introduce. Keep short.
export const notForList: string[] = [
  "무례한 태도",
  "허위 프로필",
  "교제 의사가 없는 접근",
];
