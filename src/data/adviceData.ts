export interface BodyPartAdvice {
  id: string;
  name: string;
  icon: keyof typeof import("lucide-react");
  title: string;
  description: string;
  imageUrl?: string;
}

export const bodyPartsData: BodyPartAdvice[] = [
  {
    id: "neck",
    name: "首",
    icon: "CircleDot",
    title: "首の筋膜リリース",
    description:
      "デスクワークで凝り固まった首の筋肉をリリース。頭痛やストレス軽減に効果的です。",
  },
  {
    id: "shoulder",
    name: "肩",
    icon: "Dumbbell",
    title: "肩の筋膜リリース",
    description:
      "肩こりの原因となる筋肉の緊張を緩和。上半身のリラックスが期待できます。",
  },
  {
    id: "back",
    name: "背中",
    icon: "Shirt",
    title: "背中の筋膜リリース",
    description:
      "背中全体の筋肉をほぐします。姿勢改善と疲労回復に役立ちます。",
  },
  {
    id: "waist",
    name: "腰",
    icon: "Activity",
    title: "腰の筋膜リリース",
    description:
      "腰痛の予防と改善。運動不足による腰の疲労をスッキリ解消します。",
  },
  {
    id: "leg",
    name: "脚",
    icon: "Footprints",
    title: "脚の筋膜リリース",
    description:
      "脚の疲労を回復。むくみ改善と血流促進で健康的な脚をサポートします。",
  },
];
