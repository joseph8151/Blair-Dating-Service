export type Program = {
  id: string;
  eyebrow: string;
  headline: string[];
  tagline: string;
  description: string;
  points: string[];
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

// Global Dating now has its own full section (components/sections/GlobalDating.tsx) —
// this file covers the two deeper specialty matches: Premium and Faith.
export const programs: Program[] = [
  {
    id: "premium-dating",
    eyebrow: "PREMIUM DATING",
    headline: ["Attraction Matters."],
    tagline: "좋은 사람이면서, 내가 끌리는 사람이어야 합니다.",
    description:
      "소개팅에서 외모와 첫인상이 중요하다고 생각하는 것은 자연스럽습니다. 하지만 BLAIR DATING의 Premium Match는 사진만 보고 연결하지 않습니다. Appearance, Style, Presence, Personality, Lifestyle, Conversation, Values를 함께 고려합니다.",
    points: [
      "Attraction gets you interested.",
      "Compatibility makes it last.",
    ],
    cta: "Premium Match 알아보기",
    ctaHref: "/consultation?interest=premium",
    image:
      "https://images.unsplash.com/photo-1521543387913-ce02bec1889b?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "고급 레스토랑에서 만나는 두 사람",
  },
  {
    id: "faith-dating",
    eyebrow: "FAITH DATING",
    headline: ["Shared Faith.", "Shared Direction."],
    tagline: "같은 믿음은 같은 방향을 바라보게 합니다.",
    description:
      "종교가 단순한 프로필 정보가 아니라 연애와 결혼에서 중요한 가치인 회원을 위한 서비스입니다. 종교 종류만 맞추는 것이 아니라 신앙의 깊이와 실제 생활방식까지 상담을 통해 확인합니다.",
    points: [
      "Religion",
      "Faith Commitment",
      "Church / Religious Lifestyle",
      "Marriage",
      "Family & Children",
      "Values & Lifestyle",
    ],
    cta: "Faith Match 상담하기",
    ctaHref: "/consultation?interest=faith",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "카페에서 진지하게 이야기 나누는 커플",
  },
];
