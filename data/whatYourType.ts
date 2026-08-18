export type TypeCard = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

// NOTE: Unsplash placeholder photos — confirmed-live IDs are reused across
// cards here rather than risking new, unverified ones. Swap for real curated
// photography before launch.
const PHOTO_ROOFTOP =
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop";
const PHOTO_CAFE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop";
const PHOTO_LIFESTYLE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop";

export const typeCards: TypeCard[] = [
  {
    id: "attractive-match",
    number: "01",
    eyebrow: "ATTRACTIVE MATCH",
    title: "끌리는 사람을 만나고 싶다면",
    description:
      "외모, 스타일, 분위기, 첫인상 등 실제로 당신이 매력을 느끼는 타입을 상담을 통해 파악합니다.",
    tags: ["Attractive", "Stylish", "Charming", "Confident", "Sophisticated"],
    cta: "Attractive Match 알아보기",
    ctaHref: "/consultation?interest=premium",
    image: PHOTO_ROOFTOP,
    imageAlt: "세련된 루프탑 바에서의 라이프스타일 컷",
  },
  {
    id: "faith-match",
    number: "02",
    eyebrow: "FAITH MATCH",
    title: "같은 믿음과 가치관을 원한다면",
    description:
      "연애뿐 아니라 장기적인 관계에서 종교와 가치관이 중요하다고 생각하는 회원을 위한 매칭. 종교만 일치시키는 것이 아니라 신앙의 중요도, 예배 및 종교생활, 결혼관, 가족관, 라이프스타일까지 함께 고려합니다.",
    tags: ["Faith", "Values", "Marriage", "Family", "Lifestyle"],
    cta: "Faith Match 상담하기",
    ctaHref: "/consultation?interest=faith",
    image: PHOTO_CAFE,
    imageAlt: "차분한 분위기의 카페에서 대화하는 모습",
  },
  {
    id: "global-match",
    number: "03",
    eyebrow: "GLOBAL MATCH",
    title: "특정 국가와 문화권에 끌린다면",
    description:
      "외국인이라는 하나의 범주로 묶지 않습니다. 일본, 중국, 유럽, 북미 등 회원이 선호하는 국가와 문화권을 구체적으로 상담합니다.",
    tags: ["Japan", "China", "Europe", "North America", "Other"],
    cta: "Global Match 알아보기",
    ctaHref: "/consultation?interest=global",
    image: PHOTO_ROOFTOP,
    imageAlt: "도시 야경을 배경으로 한 라이프스타일 컷",
  },
  {
    id: "lifestyle-match",
    number: "04",
    eyebrow: "LIFESTYLE MATCH",
    title: "나와 비슷한 삶을 사는 사람을 원한다면",
    description:
      "직업이나 학력만 보는 것이 아니라 여행, 문화, 커리어, 운동, 음식, 패션, 예술, 비즈니스, 가족관, 국제적 라이프스타일 등 실제 삶의 방식을 함께 살펴봅니다.",
    tags: ["Travel", "Culture", "Career", "Fitness", "Food", "Fashion"],
    cta: "Lifestyle Match 상담하기",
    ctaHref: "/consultation?interest=premium",
    image: PHOTO_LIFESTYLE,
    imageAlt: "함께 일하고 대화하는 라이프스타일 컷",
  },
];
