export type PreferenceCategory = {
  key: string;
  label: string;
  koLabel: string;
  options: string[];
  multi: boolean;
};

export const preferenceCategories: PreferenceCategory[] = [
  {
    key: "appearance",
    label: "Appearance",
    koLabel: "외모·분위기",
    options: ["Cute", "Elegant", "Sexy", "Sophisticated", "Intellectual", "Sporty", "Natural", "Fashionable"],
    multi: true,
  },
  {
    key: "culture",
    label: "Culture",
    koLabel: "국적·문화권",
    options: ["한국", "일본", "중국", "미국", "캐나다", "유럽", "기타"],
    multi: true,
  },
  {
    key: "faith",
    label: "Faith",
    koLabel: "종교",
    options: ["Christian", "Catholic", "Buddhist", "No Religion", "Other"],
    multi: false,
  },
  {
    key: "personality",
    label: "Personality",
    koLabel: "성격",
    options: ["Outgoing", "Calm", "Intellectual", "Warm", "Humorous", "Ambitious", "Romantic"],
    multi: true,
  },
  {
    key: "lifestyle",
    label: "Lifestyle",
    koLabel: "라이프스타일",
    options: ["Travel", "Fitness", "Business", "Arts", "Food", "Fashion", "Family", "International Lifestyle"],
    multi: true,
  },
  {
    key: "relationship",
    label: "Relationship",
    koLabel: "관계 목적",
    options: ["Dating", "Serious Relationship", "Marriage"],
    multi: false,
  },
];
