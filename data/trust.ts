// Trust section content. Icon names map to lucide-react components in TrustSection.tsx.

export type TrustPoint = {
  icon: "lock" | "compass" | "sparkles" | "headset" | "eyeOff";
  title: string;
  description: string;
};

export const trustSectionItems: TrustPoint[] = [
  {
    icon: "lock",
    title: "프라이빗 상담",
    description:
      "모든 상담은 1:1 비공개로 진행됩니다. 상담 내용은 매칭 목적 외에는 사용되지 않습니다.",
  },
  {
    icon: "compass",
    title: "정교한 매칭 기준",
    description:
      "국적, 매력, 종교와 가치관 등 표면적 조건이 아닌 실제로 잘 맞는 요소를 함께 살펴봅니다.",
  },
  {
    icon: "sparkles",
    title: "회원별 맞춤 제안",
    description:
      "동일한 기준을 모두에게 적용하지 않습니다. 매니저가 각 회원에게 맞는 방향을 개별적으로 설계합니다.",
  },
  {
    icon: "headset",
    title: "상담 중심 운영",
    description:
      "알고리즘이 아닌 사람이 직접 상담하고, 후보를 검토하고, 소개를 조율합니다.",
  },
  {
    icon: "eyeOff",
    title: "철저한 개인정보 보호",
    description:
      "프로필은 불특정 다수에게 노출되지 않으며, 매칭이 검토되는 상대에게만 제한적으로 공유됩니다.",
  },
];
