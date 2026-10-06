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
