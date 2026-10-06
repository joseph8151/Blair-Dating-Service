export type PricePlan = {
  name: string;
  price: string;
  perMeeting?: string;
  validity?: string;
};

export const pricePlans: PricePlan[] = [
  { name: "1회", price: "12만 원" },
  { name: "5회권", price: "50만 원", perMeeting: "회당 10만 원", validity: "3개월" },
  { name: "10회권", price: "90만 원", perMeeting: "회당 9만 원", validity: "6개월" },
];

export const pricingNote =
  "1회는 양측이 수락하고 일정이 잡힌 만남입니다. 프로필만 전달되고 거절된 소개는 차감하지 않습니다. 5회권은 3개월, 10회권은 6개월 안에 사용합니다.";
