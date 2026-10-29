import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { siteConfig } from "@/data/site";
import { seoKeywords } from "@/data/seoKeywords";
import "./globals.css";

// Headlines: Korean myeongjo.
const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

// Body text is Pretendard, self-hosted from the npm package as a dynamic
// subset (unicode-range split), so only the glyphs a page uses are fetched.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  ...(siteConfig.naverSiteVerification
    ? { verification: { other: { "naver-site-verification": siteConfig.naverSiteVerification } } }
    : {}),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: `${siteConfig.url}/`,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
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
      className={notoSerifKR.variable}
    >
      {/*
        Analytics placeholder:
        Insert Google Analytics (gtag.js) and/or Meta Pixel snippets here
        (e.g. via next/script). Once added, lib/analytics.ts will pick up
        window.gtag / window.fbq automatically — no other file needs to change.
      */}
      <body className="bg-paper font-body text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
