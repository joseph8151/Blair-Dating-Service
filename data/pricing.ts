export type PricePlan = {
  name: string;
  price: string;
  detail?: string;
};

export const pricePlans: PricePlan[] = [
  { name: "1회", price: "12만 원" },
  { name: "5회권", price: "50만 원", detail: "회당 10만 원 · 3개월" },
  { name: "10회권", price: "90만 원", detail: "회당 9만 원 · 6개월" },
];

export const pricingNote =
  "1회는 양쪽이 수락하고 일정이 잡힌 만남입니다. 프로필만 보내고 거절되면 차감하지 않습니다.";
