"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { ChevronLeft, CheckCircle2 } from "lucide-react";

export default function DiagnosisPage() {
  const [step, setStep] = React.useState(1);

  const symptoms = [
    { id: 1, name: "首の痛み", category: "首" },
    { id: 2, name: "肩こり", category: "肩" },
    { id: 3, name: "背中の張り", category: "背中" },
    { id: 4, name: "腰痛", category: "腰" },
    { id: 5, name: "脚の疲労", category: "脚" },
  ];

  const handleDiagnose = () => {
    setStep(2);
  };

  return (
    <>
      <Header title="症状診断" />
      <main className="flex-1 p-4 pb-8">
        {/* 戻るボタン */}
        <Link href="/">
          <button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-600 mb-6 font-semibold">
            <ChevronLeft size={20} />
            戻る
          </button>
        </Link>

        {step === 1 ? (
          <>
            {/* ステップ1: 症状選択 */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                症状を選択してください
              </h1>
              <p className="text-gray-600 mb-6">
                当てはまる症状をタップして、診断結果を確認しましょう。
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {symptoms.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={handleDiagnose}
                  className="w-full bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-2 border-emerald-100 hover:border-emerald-400 text-left"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-emerald-500" />
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {symptom.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        部位: {symptom.category}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* ステップ2: 診断結果 */}
            <div className="mb-8 text-center">
              <div className="mb-4">
                <CheckCircle2 size={64} className="text-emerald-500 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                診断完了！
              </h1>
              <p className="text-gray-600 mb-6">
                あなたの症状に最適な筋膜リリース方法をお勧めします。
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-emerald-500">
              <p className="text-gray-700 mb-4">
                推奨される施術部位：
              </p>
              <p className="text-xl font-bold text-emerald-600">
                首と肩のリリース
              </p>
            </div>

            <Link href="/">
              <button className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-emerald-600 transition-colors mb-4">
                トップに戻る
              </button>
            </Link>

            <button
              onClick={() => setStep(1)}
              className="w-full bg-white text-emerald-500 py-3 px-4 rounded-lg font-bold border-2 border-emerald-500 hover:bg-emerald-50 transition-colors"
            >
              もう一度診断する
            </button>
          </>
        )}
      </main>
    </>
  );
}
