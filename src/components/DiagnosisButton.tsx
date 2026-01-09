import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

interface DiagnosisButtonProps {
  href?: string;
}

const DiagnosisButton: React.FC<DiagnosisButtonProps> = (props) => {
  const diagnosisHref = props.href || "/diagnosis";
  
  return (
    <Link href={diagnosisHref}>
      <button
        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-emerald-700 transition-all active:scale-95 flex items-center justify-center gap-3"
      >
        <Zap size={24} />
        診断スタート
      </button>
    </Link>
  );
};

export default DiagnosisButton;
