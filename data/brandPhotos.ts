// Brand photography. These are brand images only — never use them as member
// profiles, sample members, or testimonial faces. Every placement pairs one
// woman and one man so the page reads as balanced.

export type BrandPhoto = {
  src: string;
  width: number;
  height: number;
  // Describes the scene for screen readers and image search.
  alt: string;
};

const portrait = { width: 784, height: 1168 };
const landscape = { width: 1168, height: 784 };

export const brandPhotos = {
  womanWindow: { src: "/images/brand/woman-window.jpg", ...portrait, alt: "창가에 앉아 창밖을 바라보는 아이보리 코트 차림의 여성" },
  manWindow: { src: "/images/brand/man-window.jpg", ...portrait, alt: "창가에 앉아 창밖을 바라보는 아이보리 코트 차림의 남성" },
  womanAlley: { src: "/images/brand/woman-alley.jpg", ...portrait, alt: "주택가 골목에 서 있는 아이보리 코트 차림의 여성" },
  manAlley: { src: "/images/brand/man-alley.jpg", ...portrait, alt: "주택가 골목을 걷는 아이보리 코트 차림의 남성" },
  womanCafe: { src: "/images/brand/woman-cafe.jpg", ...landscape, alt: "식물이 놓인 밝은 카페 창가에 앉은 흰 셔츠 차림의 여성" },
  manCafe: { src: "/images/brand/man-cafe.jpg", ...landscape, alt: "식물이 놓인 밝은 카페 테이블에 앉은 흰 셔츠 차림의 남성" },
  womanPortrait: { src: "/images/brand/woman-portrait.jpg", ...portrait, alt: "흰 셔츠를 입은 단발머리 여성의 인물 사진" },
  manPortrait: { src: "/images/brand/man-portrait.jpg", ...portrait, alt: "흰 셔츠를 입은 남성의 인물 사진" },
} satisfies Record<string, BrandPhoto>;
