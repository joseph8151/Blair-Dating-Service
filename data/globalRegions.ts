export type RegionCard = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
  ctaHref: string;
};

export const regionCards: RegionCard[] = [
  {
    id: "japan",
    eyebrow: "JAPAN",
    title: "Japanese Dating",
    description:
      "일본인과의 자연스러운 만남을 원하는 회원을 위한 매칭입니다. 일본인이라는 조건만 보는 것이 아니라 언어, 성격, 문화적 이해도, 라이프스타일까지 확인합니다.",
    tags: ["Tokyo", "Osaka", "Seoul-based Japanese", "International Professionals"],
    cta: "일본인 매칭 상담",
    ctaHref: "/consultation?interest=global&region=japan",
  },
  {
    id: "china",
    eyebrow: "CHINA",
    title: "Chinese Dating",
    description:
      "한국에 거주하거나 국제적인 라이프스타일을 가진 중국인 회원과의 만남을 원하는 분을 위한 서비스입니다.",
    tags: ["Seoul", "Shanghai", "Beijing", "International Professionals"],
    cta: "중국인 매칭 상담",
    ctaHref: "/consultation?interest=global&region=china",
  },
  {
    id: "europe",
    eyebrow: "EUROPE",
    title: "European Dating",
    description:
      "유럽 문화와 라이프스타일에 관심이 있거나 유럽인과의 만남을 원하는 회원을 위한 매칭입니다. 특정 국가 지정도 가능합니다.",
    tags: ["France", "Italy", "Germany", "UK", "Spain", "Northern Europe"],
    cta: "유럽인 매칭 상담",
    ctaHref: "/consultation?interest=global&region=europe",
  },
  {
    id: "north-america",
    eyebrow: "NORTH AMERICA",
    title: "US & Canada Dating",
    description:
      "미국·캐나다 문화권의 사람을 선호하는 회원을 위한 매칭입니다.",
    tags: ["American", "Canadian", "Korean-American", "International Professionals"],
    cta: "북미권 매칭 상담",
    ctaHref: "/consultation?interest=global&region=north-america",
  },
  {
    id: "other",
    eyebrow: "OTHER COUNTRIES",
    title: "Tell Us Your Preference",
    description:
      "위에 없는 국가 또는 문화권도 상담을 통해 요청하실 수 있습니다. 호주, 뉴질랜드, 싱가포르 등 원하시는 지역을 직접 말씀해주세요.",
    tags: ["Australia", "New Zealand", "Singapore", "Direct Input"],
    cta: "원하는 국가 상담하기",
    ctaHref: "/consultation?interest=global&region=other",
  },
];
