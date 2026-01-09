import React from "react";
import Link from "next/link";
import { CircleDot, Dumbbell, Shirt, Activity, Footprints, LucideProps } from "lucide-react";

interface BodyPartButtonProps {
  bodyPartName: string;
  bodyPartId: string;
  icon: string;
  description: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  CircleDot,
  Dumbbell,
  Shirt,
  Activity,
  Footprints,
};

const BodyPartButton: React.FC<BodyPartButtonProps> = ({
  bodyPartName,
  bodyPartId,
  icon,
  description,
}) => {
  const IconComponent = iconMap[icon] || CircleDot;

  return (
    <Link href={`/advice/${bodyPartId}`}>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-emerald-100 hover:border-emerald-400">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-50 p-4 rounded-lg flex-shrink-0">
            <IconComponent size={32} className="text-emerald-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {bodyPartName}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <div className="text-emerald-400 flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BodyPartButton;
