export type Criterion = {
  title: string;
  description: string;
  href: string;
};

// `interest` values must match the options in components/forms/ConsultationForm.tsx.
export const criteria: Criterion[] = [
  {
    title: "외모와 분위기",
    description: "사진보다, 실제로 끌리는 쪽을 듣습니다.",
    href: "/consultation?interest=premium",
  },
  {
    title: "종교와 결혼관",
    description: "종교를 얼마나 중요하게 생각하는지, 생활에 어떤 영향을 주는지 봅니다.",
    href: "/consultation?interest=faith",
  },
  {
    title: "국가와 문화",
    description: "국적 하나로 묶어 보지 않습니다.",
    href: "/consultation?interest=global",
  },
  {
    title: "생활 방식",
    description: "직업보다, 주말을 보내는 방식이 비슷한지 봅니다.",
    href: "/consultation?interest=lifestyle",
  },
];
