export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "가격", href: "/#pricing" },
  { label: "비교", href: "/#compare" },
  { label: "기준", href: "/#criteria" },
  { label: "진행", href: "/#process" },
  { label: "질문", href: "/#faq" },
];

export const footerNavItems: NavItem[] = [
  { label: "전화 상담 신청", href: "/consultation" },
  { label: "매칭 후보 등록", href: "/apply" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
];

// Guide pages for each audience and area, listed in the footer so every
// landing page is reachable from every page.
export const footerGuideItems: NavItem[] = [
  { label: "30대·40대 직장인 소개팅", href: "/30s-40s" },
  { label: "기독교·천주교 소개팅", href: "/christian" },
  { label: "무교 소개팅", href: "/no-religion" },
  { label: "재혼·돌싱 소개팅", href: "/remarriage" },
  { label: "해외 경험·교포 소개팅", href: "/global" },
  { label: "서울·경기·인천 소개팅", href: "/area" },
  { label: "강남·서초 소개팅", href: "/area/gangnam" },
  { label: "분당·판교 소개팅", href: "/area/bundang" },
  { label: "송도·인천 소개팅", href: "/area/songdo" },
];
