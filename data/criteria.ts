export type Criterion = {
  title: string;
  description: string;
  // What the manager actually asks about this criterion on the call.
  asks: string;
  href: string;
};

// `interest` values must match the options in components/forms/ConsultationForm.tsx.
export const criteria: Criterion[] = [
  {
    title: "종교와 결혼관",
    description: "종교를 얼마나 중요하게 생각하는지, 생활에 어떤 영향을 주는지 봅니다.",
    asks: "종교와 종교 생활을 하는 정도, 같은 종교를 원하시는지, 결혼 계획을",
    href: "/consultation?interest=faith",
  },
  {
    title: "외모와 분위기",
    description: "사진보다 실제로 끌리는 분위기를 여쭙니다.",
    asks: "희망 연령대와 끌리는 분위기, 꼭 필요한 조건과 맞지 않는 조건을",
    href: "/consultation?interest=premium",
  },
  {
    title: "국가와 문화",
    description: "국적만으로 판단하지 않습니다.",
    asks: "해외 생활 경험과 사용하는 언어를",
    href: "/consultation?interest=global",
  },
  {
    title: "생활 방식",
    description: "직업보다 주말을 보내는 방식이 비슷한지 봅니다.",
    asks: "평일과 주말을 보내는 방식, 음주와 흡연을",
    href: "/consultation?interest=lifestyle",
  },
];
