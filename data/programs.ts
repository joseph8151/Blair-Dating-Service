export type Program = {
  id: string;
  eyebrow: string;
  headline: string[];
  description: string;
  points: string[];
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    id: "global-dating",
    eyebrow: "GLOBAL DATING",
    headline: ["Different Culture.", "Same Chemistry."],
    description:
      "외국인과의 자연스러운 만남을 원하는 분들을 위한 글로벌 매칭입니다. 미국, 캐나다, 유럽 등 다양한 국적의 회원과 연결해드립니다.",
    points: [
      "한국 거주 외국인",
      "해외 경험이 많은 한국인",
      "국제적인 라이프스타일을 선호하는 회원",
      "영어 커뮤니케이션이 가능한 회원",
    ],
    cta: "Global Dating 상담하기",
    ctaHref: "/consultation?interest=global",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "루프탑 바에서 대화를 나누는 커플",
  },
  {
    id: "premium-dating",
    eyebrow: "PREMIUM DATING",
    headline: ["Attraction Matters."],
    description:
      "매력적인 이성과의 수준 높은 만남을 원하는 회원을 위한 프리미엄 큐레이션. 단순 스펙이 아닌 실제 만남에서 중요한 요소를 종합적으로 고려합니다.",
    points: [
      "외모와 첫인상 (Attractive)",
      "직업 및 라이프스타일 (Confident)",
      "대화 스타일 (Interesting)",
      "취향과 가치관 (Well-Matched)",
    ],
    cta: "Premium Matching 알아보기",
    ctaHref: "/consultation?interest=premium",
    image:
      "https://images.unsplash.com/photo-1521543387913-ce02bec1889b?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "고급 레스토랑에서 만나는 두 사람",
  },
  {
    id: "faith-dating",
    eyebrow: "FAITH DATING",
    headline: ["Shared Faith.", "Shared Direction."],
    description:
      "종교와 가치관을 중요하게 생각하는 사람을 위한 매칭입니다. 종교, 신앙의 중요도, 결혼에 대한 생각, 라이프스타일, 가족관 등을 상담 과정에서 세밀하게 확인합니다.",
    points: [
      "종교",
      "신앙의 중요도",
      "결혼에 대한 생각",
      "라이프스타일과 가족관",
    ],
    cta: "Faith Dating 상담하기",
    ctaHref: "/consultation?interest=faith",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "카페에서 진지하게 이야기 나누는 커플",
  },
];
