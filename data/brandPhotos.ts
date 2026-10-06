// Brand photography. These are brand images only — never use them as member
// profiles, sample members, or testimonial faces. Every placement pairs one
// woman and one man so the page reads as balanced.

export type BrandPhoto = {
  src: string;
  width: number;
  height: number;
};

export const brandPhotoAlt = "블레어 데이팅 브랜드 사진";

const portrait = { width: 784, height: 1168 };
const landscape = { width: 1168, height: 784 };

export const brandPhotos = {
  womanWindow: { src: "/images/brand/woman-window.jpg", ...portrait },
  manWindow: { src: "/images/brand/man-window.jpg", ...portrait },
  womanAlley: { src: "/images/brand/woman-alley.jpg", ...portrait },
  manAlley: { src: "/images/brand/man-alley.jpg", ...portrait },
  womanCafe: { src: "/images/brand/woman-cafe.jpg", ...landscape },
  manCafe: { src: "/images/brand/man-cafe.jpg", ...landscape },
  womanPortrait: { src: "/images/brand/woman-portrait.jpg", ...portrait },
  manPortrait: { src: "/images/brand/man-portrait.jpg", ...portrait },
} satisfies Record<string, BrandPhoto>;
