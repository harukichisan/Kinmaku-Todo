import React from "react";
import { Activity } from "lucide-react";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "筋膜リリースナビ" }) => {
  return (
    <header className="bg-emerald-500 text-white p-6 shadow-md">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <Activity size={28} className="text-white" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <p className="text-emerald-100 text-center mt-2 text-sm">
        隙間時間で身体をリセット
      </p>
    </header>
  );
};

export default Header;
