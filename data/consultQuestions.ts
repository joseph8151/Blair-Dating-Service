// What the manager asks during the phone consultation. Mirrors the actual
// consultation and member profile fields, so keep it in sync with the forms.
export const consultQuestionGroups = [
  {
    title: "기본",
    items: ["나이와 사는 곳", "직업과 평일 생활", "혼인 여부와 결혼 계획"],
  },
  {
    title: "종교와 가치관",
    items: [
      "무교·기독교·천주교 등 종교",
      "종교 생활을 하는 정도",
      "같은 종교를 원하시는지, 존중하는 분이면 되는지",
    ],
  },
  {
    title: "생활 방식",
    items: ["주말을 보내는 방식", "음주와 흡연", "해외 생활 경험과 사용 언어"],
  },
  {
    title: "원하는 상대",
    items: ["희망 연령대와 분위기", "꼭 필요한 조건", "조율할 수 있는 조건과 맞지 않는 조건"],
  },
];
