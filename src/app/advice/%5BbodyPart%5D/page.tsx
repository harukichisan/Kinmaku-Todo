import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { bodyPartsData } from "@/data/adviceData";
import { ChevronLeft } from "lucide-react";

interface AdvicePageProps {
  params: {
    bodyPart: string;
  };
}

export default function AdvicePage({ params }: AdvicePageProps) {
  const advice = bodyPartsData.find((bp) => bp.id === params.bodyPart);

  if (!advice) {
    return (
      <div>
        <Header />
        <main className="flex-1 p-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              ページが見つかりません
            </h1>
            <Link href="/">
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
                トップに戻る
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Header title={advice.title} />
      <main className="flex-1 p-4 pb-8">
        {/* 戻るボタン */}
        <Link href="/">
          <button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-600 mb-6 font-semibold">
            <ChevronLeft size={20} />
            戻る
          </button>
        </Link>

        {/* アドバイスタイトル */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {advice.title}
          </h1>
          <p className="text-gray-600 leading-relaxed">{advice.description}</p>
        </div>

        {/* 画像プレースホルダー */}
        <div className="mb-8 flex justify-center">
          <ImagePlaceholder height={300} label={`${advice.name}の筋膜リリース方法`} />
        </div>

        {/* アドバイス詳細 */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">効果的な方法</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                1
              </span>
              <p>リラックスできる姿勢を取ってください。</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                2
              </span>
              <p>ゆっくり深呼吸しながら、該当部位をリリースします。</p>
            </div>
            <div className="flex gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                3
              </span>
              <p>無理のない範囲で、毎日続けることが大切です。</p>
            </div>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-xs text-yellow-800">
            ⚠️ 痛みを感じる場合や、症状が続く場合は医師の診察をお受けください。
          </p>
        </div>

        {/* 別の部位を選ぶボタン */}
        <Link href="/">
          <button className="w-full mt-8 bg-emerald-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-emerald-600 transition-colors">
            別の部位を選ぶ
          </button>
        </Link>
      </main>
    </>
  );
}
