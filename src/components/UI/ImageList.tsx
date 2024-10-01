import React from "react";
import HeroIcons, { IconNames } from "./HeroIcons";

interface FilePreview {
  file: File;
  preview: string;
}

interface ImageListProps {
  filePreviews: FilePreview[];
  onRemove: (fileName: string) => void; // Optional: Function to handle file removal
}

const ImageList: React.FC<ImageListProps> = ({ filePreviews, onRemove }) => {
  console.log(filePreviews.length);
  return (
    <div className="flex flex-wrap items-center justify-center border border-red-900">
      {filePreviews.map((filePreview, index) => (
        <div key={index} className="flex h-[242px] w-[196px] p-4">
          <figure className="rounded bg-white p-4 shadow-lg">
            <div className="relative">
              <img
                src={filePreview.preview}
                alt={`Thumbnail-${index}`}
                className="object-scale-down"
              />

              <button
                onClick={() => onRemove(filePreview.file.name)}
                className={`absolute right-[calc(10px)] top-[calc(10px)] inline-flex items-center justify-center rounded bg-black-800 p-1 text-white opacity-80 transition-all duration-300 hover:bg-blue-ultramarine hover:opacity-100 active:bg-blue-ultramarine active:opacity-100`}
              >
                <HeroIcons
                  iconName={IconNames.XMark}
                  className="size-6 font-bold"
                  strokeWidth={1.5}
                />
              </button>

              <p className="mt-2 truncate text-center text-xs text-gray-500">
                {filePreview.file.name}
              </p>
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
