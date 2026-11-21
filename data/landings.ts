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
  // Heading for the groups block; defaults to "소개 지역".
  groupsTitle?: string;
  // Links to related pages (e.g. /area → its sub-area pages).
  links?: { label: string; href: string; description: string }[];
  faq: { question: string; answer: string }[];
  ctaHref: string;
  photos: [BrandPhoto, BrandPhoto];
};

export const landings: Record<string, Landing> = {
  christian: {
    slug: "christian",
    metaTitle: "기독교·천주교 소개팅",
    metaDescription:
      "기독교·천주교·크리스천 소개팅. 30대·40대 직장인을 중심으로, 같은 종교를 원하시는지와 종교 생활이 실제 생활에서 얼마나 중요한지까지 전화로 듣고 한 분씩 소개합니다.",
    eyebrow: "기독교·천주교 소개팅",
    title: "종교 생활까지 맞춰, 한 분씩 소개합니다.",
    intro:
      "기독교, 천주교의 같은 종교 분을 원하시면 상담에서 꼭 필요한 기준으로 정리합니다. 종교 표시만 보지 않고, 종교가 실제 생활에서 얼마나 중요한지까지 듣습니다.",
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
        question: "천주교도 상담할 수 있나요?",
        answer: "네. 천주교도 기독교와 같은 방식으로 상담합니다.",
      },
      {
        question: "무교인데 종교가 있는 분을 만나도 되나요?",
        answer:
          "네. 상대의 종교 생활을 존중하실 수 있는지 상담에서 여쭙고, 두 분의 기준이 맞을 때 소개합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation?interest=faith",
    photos: [brandPhotos.womanCafe, brandPhotos.manCafe],
  },
  "30s-40s": {
    slug: "30s-40s",
    metaTitle: "30대·40대 직장인 소개팅",
    metaDescription:
      "30대·40대 직장인 1:1 소개팅. 프로필을 넘기지 않고, 매니저가 전화로 기준을 듣고 한 분씩 소개합니다. 무교·기독교·천주교, 결혼을 전제로 한 만남과 재혼 상담도 가능합니다.",
    eyebrow: "30대·40대 직장인 소개팅",
    title: "바쁜 30대·40대 직장인을 위해, 한 분씩.",
    intro:
      "많은 프로필을 볼 시간보다 맞는 한 분을 만나는 것이 중요한 직장인을 위한 1:1 소개팅입니다. 상담은 전화로 진행합니다.",
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
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
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
    links: [
      {
        label: "강남·서초",
        href: "/area/gangnam",
        description: "테헤란로·강남대로 업무지구로 출퇴근하는 생활권",
      },
      {
        label: "분당·판교",
        href: "/area/bundang",
        description: "판교테크노밸리와 신분당선 생활권",
      },
      {
        label: "송도·인천",
        href: "/area/songdo",
        description: "송도국제도시와 서울을 오가는 생활권",
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
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanPortrait, brandPhotos.manPortrait],
  },
  remarriage: {
    slug: "remarriage",
    metaTitle: "재혼·돌싱 소개팅",
    metaDescription:
      "재혼·돌싱 소개팅. 이혼·사별 후 다시 만남을 찾는 30대·40대를 위해, 혼인 이력과 자녀 유무, 원하는 기준을 전화로 듣고 한 분씩 소개합니다. 두 분 모두 수락해야 소개됩니다.",
    eyebrow: "재혼·돌싱 소개팅",
    title: "다시 시작하는 만남도, 한 분씩 신중하게.",
    intro:
      "이혼이나 사별 후 다시 만남을 찾는 30대·40대를 위한 1:1 소개팅입니다. 혼인 이력과 자녀 유무는 상담에서 먼저 여쭙고, 상대에게 어디까지 알릴지도 함께 정합니다.",
    points: [
      "혼인 이력과 자녀 유무를 상담에서 먼저 여쭙습니다.",
      "상대도 재혼이기를 원하시는지, 상관없는지 기준으로 정리합니다.",
      "자녀와 함께하는 생활, 결혼 후 생활에 대한 생각을 함께 봅니다.",
      "프로필은 목록에 노출되지 않고, 두 분 모두 수락해야 소개됩니다.",
    ],
    faq: [
      {
        question: "혼인 이력은 상대에게 언제 알려지나요?",
        answer: "소개를 제안할 때, 동의하신 범위 안에서 전달합니다. 동의 없이 먼저 알리지 않습니다.",
      },
      {
        question: "자녀가 있어도 상담할 수 있나요?",
        answer: "네. 자녀 유무와 함께 원하시는 기준을 듣고 정합니다.",
      },
      {
        question: "미혼인 분을 소개받을 수도 있나요?",
        answer: "상대의 기준과 맞을 때 가능합니다. 두 분 모두 수락하신 경우에만 소개합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanWindow, brandPhotos.manWindow],
  },
  "no-religion": {
    slug: "no-religion",
    metaTitle: "무교 소개팅",
    metaDescription:
      "무교 소개팅. 종교가 없는 30대·40대 직장인도 같은 방식으로 전화 상담 후 한 분씩 소개합니다. 상대도 무교이길 원하시는지, 종교가 있는 분도 괜찮은지부터 여쭙습니다.",
    eyebrow: "무교 소개팅",
    title: "종교가 없어도, 같은 방식으로 한 분씩.",
    intro:
      "종교가 없는 분도 같은 방식으로 전화 상담 후 한 분씩 소개합니다. 상대도 무교이길 원하시는지, 종교가 있는 분도 괜찮은지부터 여쭙습니다.",
    points: [
      "상대도 무교이길 원하시는지, 종교가 있어도 괜찮은지 먼저 정합니다.",
      "종교가 있는 분을 만나신다면, 서로의 종교 생활을 존중할 수 있는지 확인합니다.",
      "주말을 보내는 방식과 결혼관처럼 생활에서 맞아야 하는 부분을 함께 봅니다.",
      "두 분 모두 수락해야 소개되며, 프로필만 보고 거절하면 횟수가 차감되지 않습니다.",
    ],
    faq: [
      {
        question: "무교인데 종교가 있는 분을 만나도 되나요?",
        answer:
          "네. 상대의 종교 생활을 존중하실 수 있는지 상담에서 여쭙고, 두 분의 기준이 맞을 때 소개합니다.",
      },
      {
        question: "상대가 같은 종교만 원하면 어떻게 되나요?",
        answer: "상대의 기준도 함께 봅니다. 두 분의 기준이 모두 맞을 때만 소개합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation?interest=lifestyle",
    photos: [brandPhotos.womanAlley, brandPhotos.manAlley],
  },
  global: {
    slug: "global",
    metaTitle: "해외 경험·교포 소개팅",
    metaDescription:
      "해외 경험·교포 소개팅. 국적만으로 판단하지 않고, 해외 생활 경험과 사용 언어, 생활 방식을 전화로 듣고 서울·경기·인천에 사는 분을 한 분씩 소개합니다.",
    eyebrow: "해외 경험·교포 소개팅",
    title: "국적보다, 살아온 문화와 언어를.",
    intro:
      "해외에서 살아 본 경험이 있거나, 해외 경험이 있는 분을 원하시는 분을 위한 1:1 소개팅입니다. 국적만으로 판단하지 않고, 살아온 문화와 사용하는 언어를 함께 봅니다.",
    points: [
      "해외 생활 경험과 사용 언어를 상담에서 여쭙니다.",
      "국적보다 생활 방식과 가치관이 맞는지 봅니다.",
      "교포이거나 해외 생활을 오래 하신 분도 같은 방식으로 상담합니다.",
      "소개는 서울·경기·인천에 사는 분을 대상으로, 두 분 모두 수락하신 경우에만 진행합니다.",
    ],
    faq: [
      {
        question: "해외 경험이 있는 분만 소개받을 수 있나요?",
        answer:
          "원하시면 기준으로 정합니다. 다만 소개는 기준에 맞는 분이 있을 때만 가능해서, 시기를 미리 약속드리기는 어렵습니다.",
      },
      {
        question: "외국 국적이어도 상담할 수 있나요?",
        answer:
          "네. 사용하시는 언어와 사는 곳을 상담에서 여쭙고, 기준에 맞는 분이 있을 때 소개합니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation?interest=global",
    photos: [brandPhotos.womanCafe, brandPhotos.manCafe],
  },
  "area/gangnam": {
    slug: "area/gangnam",
    metaTitle: "강남·서초 소개팅",
    metaDescription:
      "강남·서초 소개팅. 역삼, 삼성동, 선릉, 서초, 반포 등 강남·서초에 살거나 출퇴근하는 30대·40대 직장인을 전화 상담 후 한 분씩 소개합니다.",
    eyebrow: "강남·서초 소개팅",
    title: "강남·서초, 빠듯한 평일 사이의 한 분.",
    intro:
      "강남·서초에 살거나 이 근처로 출퇴근하는 분들을 소개합니다. 상담은 전화로 진행합니다.",
    points: [
      "사는 곳과 출퇴근 동선을 상담에서 함께 여쭙습니다.",
      "두 분 모두 수락해야 만남 일정을 잡습니다.",
    ],
    groupsTitle: "강남·서초 생활권",
    groups: [
      {
        name: "평일과 출퇴근",
        areas: [
          "테헤란로·강남대로·서초동 일대 업무지구로 출퇴근하는 생활권입니다.",
          "2호선, 신분당선, 9호선이 지나 퇴근 후 시간을 맞추기 수월한 편입니다.",
        ],
      },
      {
        name: "주말",
        areas: [
          "반포 한강공원, 서래마을, 양재천처럼 걷기 좋은 곳이 가깝습니다.",
          "주말을 동네에서 보내시는지, 다른 곳으로 나가시는지도 상담에서 여쭙습니다.",
        ],
      },
      {
        name: "함께 보는 동네",
        areas: ["역삼 · 삼성동 · 선릉 · 논현 · 신사 · 압구정 · 청담", "서초 · 교대 · 반포 · 잠원 · 방배 · 양재"],
      },
    ],
    faq: [
      {
        question: "강남·서초에 살지 않아도 되나요?",
        answer:
          "네. 서울·경기·인천에 사시면 상담할 수 있습니다. 출퇴근하는 곳과 자주 다니는 곳도 함께 여쭙습니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanAlley, brandPhotos.manAlley],
  },
  "area/bundang": {
    slug: "area/bundang",
    metaTitle: "분당·판교 소개팅",
    metaDescription:
      "분당·판교 소개팅. 판교테크노밸리, 정자, 수내, 서현 등 분당·판교에 살거나 출퇴근하는 30대·40대 직장인을 전화 상담 후 한 분씩 소개합니다.",
    eyebrow: "분당·판교 소개팅",
    title: "분당·판교, 퇴근 후와 주말이 맞는 한 분.",
    intro:
      "분당·판교에 살거나 판교로 출퇴근하는 분들을 소개합니다. 상담은 전화로 진행합니다.",
    points: [
      "사는 곳과 출퇴근 동선을 상담에서 함께 여쭙습니다.",
      "두 분 모두 수락해야 만남 일정을 잡습니다.",
    ],
    groupsTitle: "분당·판교 생활권",
    groups: [
      {
        name: "평일과 출퇴근",
        areas: [
          "판교테크노밸리를 중심으로 IT·스타트업 회사가 모인 생활권입니다.",
          "신분당선과 수인분당선으로 강남, 서울 도심과 오가는 생활권이기도 합니다.",
        ],
      },
      {
        name: "주말",
        areas: [
          "율동공원, 탄천, 정자동 카페거리처럼 동네 안에서 주말을 보내기 좋은 곳이 많습니다.",
          "서울로 나가는 주말인지, 동네에서 보내는 주말인지 함께 봅니다.",
        ],
      },
      {
        name: "함께 보는 동네",
        areas: ["분당 · 판교 · 정자 · 수내 · 서현 · 미금 · 성남"],
      },
    ],
    faq: [
      {
        question: "판교로 출퇴근만 해도 되나요?",
        answer: "네. 사는 곳과 함께 출퇴근하는 곳, 자주 다니는 곳을 상담에서 여쭙습니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanCafe, brandPhotos.manCafe],
  },
  "area/songdo": {
    slug: "area/songdo",
    metaTitle: "송도·인천 소개팅",
    metaDescription:
      "송도·인천 소개팅. 송도국제도시, 청라, 부평, 구월동 등 인천에 사는 30대·40대 직장인을 전화 상담 후 한 분씩 소개합니다.",
    eyebrow: "송도·인천 소개팅",
    title: "송도·인천, 서울과 오가는 생활 속의 한 분.",
    intro:
      "송도를 비롯해 인천에 사는 분들을 소개합니다. 상담은 전화로 진행합니다.",
    points: [
      "사는 곳과 출퇴근 동선을 상담에서 함께 여쭙습니다.",
      "두 분 모두 수락해야 만남 일정을 잡습니다.",
    ],
    groupsTitle: "송도·인천 생활권",
    groups: [
      {
        name: "평일과 출퇴근",
        areas: [
          "송도국제도시의 바이오 단지, 국제기구, 대학 캠퍼스 주변으로 출퇴근하는 생활권입니다.",
          "인천 1호선과 광역버스로 서울과 오가는 분도 있는 생활권입니다.",
        ],
      },
      {
        name: "주말",
        areas: [
          "센트럴파크와 해안 산책로처럼 동네에서 주말을 보내기 좋은 곳이 있습니다.",
          "서울에서 만나는 것이 편한지, 인천에서 만나는 것이 편한지도 여쭙습니다.",
        ],
      },
      {
        name: "함께 보는 동네",
        areas: ["송도 · 청라 · 부평 · 구월동"],
      },
    ],
    faq: [
      {
        question: "인천에 살면 서울 분은 소개받기 어렵나요?",
        answer:
          "사는 곳과 원하시는 범위를 상담에서 여쭙고, 서울·경기·인천 안에서 기준에 맞는 분을 찾습니다.",
      },
      {
        question: "가격은 어떻게 되나요?",
        answer: "전화 상담 후 안내해 드립니다. 1회권도 구입하실 수 있고, 등록비는 없습니다.",
      },
    ],
    ctaHref: "/consultation",
    photos: [brandPhotos.womanWindow, brandPhotos.manWindow],
  },
};
