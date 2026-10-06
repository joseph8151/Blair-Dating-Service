export type Criterion = {
  title: string;
  description: string;
  href: string;
};

// `interest` values must match the options in components/forms/ConsultationForm.tsx.
export const criteria: Criterion[] = [
  {
    title: "외모와 분위기",
    description: "사진이 아니라 실제로 끌리는 쪽을 듣습니다.",
    href: "/consultation?interest=premium",
  },
  {
    title: "신앙과 결혼관",
    description: "종교 표시가 아니라 생활에서 얼마나 중요한지 봅니다.",
    href: "/consultation?interest=faith",
  },
  {
    title: "국가와 문화",
    description: "외국인을 한 묶음으로 보지 않습니다.",
    href: "/consultation?interest=global",
  },
  {
    title: "생활 방식",
    description: "직업란이 아니라 주말이 비슷한지 봅니다.",
    href: "/consultation?interest=lifestyle",
  },
];
