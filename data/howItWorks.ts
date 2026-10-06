export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "상담",
    description: "상담 신청서를 받은 뒤, 매니저가 직접 연락해 이야기를 듣습니다.",
  },
  {
    number: "02",
    title: "기준 정리",
    description: "꼭 필요한 것과 양보할 수 있는 것을 함께 나눠 우선순위를 정합니다.",
  },
  {
    number: "03",
    title: "후보 선별",
    description: "정리한 기준으로 매칭 후보 중에서 맞는 분을 고릅니다.",
  },
  {
    number: "04",
    title: "양측 동의 후 소개",
    description: "두 분 모두 수락했을 때만 연락처를 전하고 일정을 잡습니다.",
  },
  {
    number: "05",
    title: "피드백",
    description: "만남 후 이야기를 듣고, 다음 소개의 기준을 다듬습니다.",
  },
];
