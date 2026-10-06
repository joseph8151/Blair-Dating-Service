// All plans are prepaid. A meeting is deducted only when both people accept
// and the meeting date is confirmed; declining at the profile stage is free.
export type PricePlan = {
  name: string;
  price: string;
  detail?: string;
  // One line for the plan guide under the price table.
  suits: string;
};

export const pricePlans: PricePlan[] = [
  {
    name: "1회",
    price: "17만 원",
    suits: "소개 방식이 나와 맞는지 먼저 경험해 보고 싶은 분",
  },
  {
    name: "3회권",
    price: "48만 원",
    detail: "회당 16만 원 · 2개월",
    suits: "몇 번의 소개를 천천히 받아 보고 싶은 분",
  },
  {
    name: "7회권",
    price: "105만 원",
    detail: "회당 15만 원 · 4개월",
    suits: "기간을 넉넉히 두고 소개를 이어 가고 싶은 분",
  },
];

export const pricingNote =
  "모든 이용권은 선불입니다. 두 분 모두 수락하고 만남 일정이 확정된 경우에만 차감되며, 프로필만 확인하고 거절한 경우에는 차감되지 않습니다.";
