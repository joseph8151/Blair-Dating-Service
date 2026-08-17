import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_KR, Inter, Noto_Sans_KR } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { siteConfig } from "@/data/site";
import "./globals.css";

// Headline pairing: Playfair Display carries Latin headlines; Noto Serif KR
// picks up automatically wherever a headline has Korean characters, since
// Playfair has no Hangul glyphs and the browser falls through the stack.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

// Body pairing, same idea: Inter for Latin, Noto Sans KR for Korean — both
// self-hosted by next/font so they're preloaded and render crisply with no
// external CDN round trip (unlike the previous Pretendard-via-jsdelivr setup).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "소개팅",
    "매칭 서비스",
    "외국인 소개팅",
    "프리미엄 소개팅",
    "종교 소개팅",
    "글로벌 데이팅",
    "블레어데이팅",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${playfair.variable} ${notoSerifKR.variable} ${inter.variable} ${notoSansKR.variable}`}
    >
      {/*
        Analytics placeholder:
        Insert Google Analytics (gtag.js) and/or Meta Pixel snippets here
        (e.g. via next/script). Once added, lib/analytics.ts will pick up
        window.gtag / window.fbq automatically — no other file needs to change.
      */}
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
