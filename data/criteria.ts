export type Criterion = {
  title: string;
  description: string;
  href: string;
};

// `interest` values must match the options in components/forms/ConsultationForm.tsx.
export const criteria: Criterion[] = [
  {
    title: "외모와 분위기",
    description:
      "끌리는 인상과 스타일을 구체적으로 듣습니다. 사진 몇 장보다 대화가 더 정확합니다.",
    href: "/consultation?interest=premium",
  },
  {
    title: "신앙과 결혼관",
    description:
      "종교의 이름보다 신앙의 깊이, 결혼 후 함께 그리는 생활을 봅니다.",
    href: "/consultation?interest=faith",
  },
  {
    title: "국가와 문화",
    description:
      "선호하는 국가나 문화권이 있다면 말씀해 주세요. 기준에 맞는 분이 있을 때 소개합니다.",
    href: "/consultation?interest=global",
  },
  {
    title: "라이프스타일",
    description:
      "일하는 방식, 주말을 보내는 방식, 사는 곳. 일상이 맞아야 오래 갑니다.",
    href: "/consultation?interest=lifestyle",
  },
];
