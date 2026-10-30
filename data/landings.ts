import type { BrandPhoto } from "@/data/brandPhotos";
import { brandPhotos } from "@/data/brandPhotos";

// Search landing pages. Keep every statement true to how Blair actually works:
// phone consultation, one introduction at a time, both must accept, prices
// explained after consultation, no registration fee.
export type Landing = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  groups?: { name: string; areas: string[] }[];
  faq: { question: string; answer: string }[];
  ctaHref: string;
  photos: [BrandPhoto, BrandPhoto];
};

export const landings: Record<string, Landing> = {
  christian: {
    slug: "christian",
    metaTitle: "기독교·크리스천 소개팅",
    metaDescription:
      "기독교·크리스천 소개팅. 같은 종교를 원하시는지, 종교 생활이 실제 생활에서 얼마나 중요한지까지 전화로 듣고 한 분씩 소개합니다. 두 분 모두 수락해야 소개됩니다.",
    eyebrow: "기독교·크리스천 소개팅",
    title: "종교 생활까지 맞춰, 한 분씩 소개합니다.",
    intro:
      "같은 종교를 원하시면 상담에서 꼭 필요한 기준으로 정리합니다. 종교 표시만 보지 않고, 종교가 실제 생활에서 얼마나 중요한지까지 듣습니다.",
    points: [
      "같은 종교의 분을 원하시는지, 종교 생활을 존중하는 분이면 되는지 먼저 정합니다.",
      "주말을 보내는 방식처럼 생활에서 맞아야 하는 부분을 함께 봅니다.",
      "결혼관과 가치관도 함께 여쭙니다.",
      "두 분 모두 수락해야 소개되며, 프로필만 확인하고 거절하면 횟수가 차감되지 않습니다.",
    ],
    faq: [
      {
        question: "같은 종교의 분만 소개받을 수 있나요?",
        answer:
          "원하시는 기준에 맞춥니다. 같은 종교의 분만 원하시면 그 기준으로, 종교 생활을 존중하는 분이면 된다면 그 기준으로 찾습니다.",
      },
      {
        question: "다른 종교도 상담할 수 있나요?",
        answer: "네. 천주교, 불교 등 다른 종교도 같은 방식으로 상담합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation?interest=faith",
    photos: [brandPhotos.womanCafe, brandPhotos.manCafe],
  },
  "30s-40s": {
    slug: "30s-40s",
    metaTitle: "30대·40대 소개팅",
    metaDescription:
      "30대·40대 1:1 소개팅. 프로필을 넘기지 않고, 매니저가 전화로 기준을 듣고 한 분씩 소개합니다. 결혼을 전제로 한 만남, 재혼 상담도 가능합니다.",
    eyebrow: "30대·40대 소개팅",
    title: "바쁜 30대·40대를 위해, 한 분씩.",
    intro:
      "많은 프로필을 볼 시간보다 맞는 한 분을 만나는 것이 중요한 분들을 위한 1:1 소개팅입니다.",
    points: [
      "전화 상담에서 원하는 상대의 기준을 정리합니다.",
      "결혼을 전제로 한 만남인지, 진지한 연애인지 목적을 먼저 확인합니다.",
      "이혼·사별 후 다시 만남을 찾는 분도 상담할 수 있습니다.",
      "프로필은 목록에 노출되지 않고, 두 분 모두 수락해야 소개됩니다.",
    ],
    faq: [
      {
        question: "30대 후반, 40대도 소개받을 수 있나요?",
        answer: "네. 나이와 관계없이 같은 방식으로 상담 후 한 분씩 소개합니다.",
      },
      {
        question: "나이 차이는 어떻게 정하나요?",
        answer: "원하시는 연령대를 상담에서 듣고 기준으로 정합니다.",
      },
      {
        question: "재혼 상대도 찾을 수 있나요?",
        answer: "네. 상담에서 혼인 이력과 원하는 기준을 함께 듣고 정합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanAlley, brandPhotos.manAlley],
  },
  area: {
    slug: "area",
    metaTitle: "서울·경기·인천 소개팅",
    metaDescription:
      "서울·경기·인천 1:1 소개팅. 강남, 서초, 송파, 여의도, 분당, 판교, 수원, 일산, 송도 등 수도권에 사는 분들을 전화 상담 후 한 분씩 소개합니다.",
    eyebrow: "서울·경기·인천 소개팅",
    title: "수도권에서 한 분씩 소개합니다.",
    intro:
      "블레어데이팅은 서울·경기·인천에 사는 분들을 소개합니다. 상담은 전화로 진행합니다.",
    points: [
      "사는 곳과 자주 다니는 곳을 상담에서 함께 여쭙니다.",
      "두 분 모두 수락해야 만남 일정을 잡습니다.",
    ],
    groups: [
      {
        name: "서울",
        areas: [
          "강남 · 역삼 · 삼성동 · 선릉 · 논현 · 신사 · 압구정 · 청담",
          "서초 · 교대 · 반포 · 잠원 · 방배 · 양재",
          "송파 · 잠실 · 강동",
          "여의도 · 영등포 · 목동",
          "마포 · 합정 · 홍대 · 공덕",
          "성수 · 광진 · 건대",
          "용산 · 이태원 · 한남동",
          "종로 · 광화문 · 을지로 · 중구",
          "노원 · 성북 · 동작 · 관악",
        ],
      },
      {
        name: "경기",
        areas: [
          "분당 · 판교 · 정자 · 수내 · 성남",
          "수원 · 광교 · 용인 · 동탄 · 화성 · 평택",
          "하남 · 미사 · 남양주 · 구리",
          "안양 · 평촌 · 과천 · 의왕 · 군포",
          "부천 · 광명 · 안산 · 시흥",
          "일산 · 고양 · 김포 · 파주 · 의정부",
        ],
      },
      {
        name: "인천",
        areas: ["송도 · 청라 · 부평 · 구월동"],
      },
    ],
    faq: [
      {
        question: "수도권 밖에 살아도 신청할 수 있나요?",
        answer:
          "상담은 전화로 어디서든 받으실 수 있습니다. 다만 소개는 서울·경기·인천에 사는 분들을 대상으로 진행합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanPortrait, brandPhotos.manPortrait],
  },
};
