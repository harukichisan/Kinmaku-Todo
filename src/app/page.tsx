import React from "react";
import Header from "@/components/Header";
import BodyPartButton from "@/components/BodyPartButton";
import DiagnosisButton from "@/components/DiagnosisButton";
import { bodyPartsData } from "@/data/adviceData";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 p-4 pb-8">
        {/* ウェルカムセクション */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            今日もお疲れ様です
          </h2>
          <p className="text-gray-600 text-sm">
            気になる身体の部位を選んで、簡単ケアを始めましょう。
          </p>
        </div>

        {/* 診断モード */}
        <div className="mb-8">
          <DiagnosisButton />
          <p className="text-center text-xs text-gray-500 mt-2">
            症状から診断することもできます
          </p>
        </div>

        {/* 部位選択モード */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            部位を選択してください
          </h2>
          <div className="space-y-3">
            {bodyPartsData.map((bodyPart) => (
              <BodyPartButton
                key={bodyPart.id}
                bodyPartName={bodyPart.name}
                bodyPartId={bodyPart.id}
                icon={bodyPart.icon}
                description={bodyPart.description}
              />
            ))}
          </div>
        </div>

        {/* フッターメッセージ */}
        <div className="bg-emerald-100 rounded-lg p-4 text-center">
          <p className="text-xs text-emerald-800">
            💡 定期的に行うことで、より効果を実感できます。
          </p>
        </div>
      </main>
    </>
  );
}
