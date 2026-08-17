export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Private Consultation",
    description: "상담폼을 작성하거나 비공개 상담을 신청합니다.",
  },
  {
    number: "02",
    title: "Preference Interview",
    description:
      "원하는 상대의 외모, 성격, 직업, 라이프스타일, 가치관 등을 파악합니다.",
  },
  {
    number: "03",
    title: "Curated Match",
    description: "BLAIR DATING이 회원 중 적합한 상대를 선별합니다.",
  },
  {
    number: "04",
    title: "Introduction",
    description: "양측의 의사를 확인한 후 소개를 진행합니다.",
  },
  {
    number: "05",
    title: "Feedback & Next Match",
    description: "만남 후 피드백을 반영해 다음 매칭 정확도를 높입니다.",
  },
];
