import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  label?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 300,
  height = 200,
  label = "画像",
}) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="bg-gray-200 rounded-lg flex items-center justify-center"
    >
      <div className="text-center">
        <ImageIcon size={48} className="text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500 text-sm">{label}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
