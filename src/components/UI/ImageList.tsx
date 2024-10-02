import React from "react";
import HeroIcons, { IconNames } from "./HeroIcons";

interface ImageListProps {
  fileList: File[];
  onRemoveFile: (file: File) => void;
}

const ImageList: React.FC<ImageListProps> = ({ fileList, onRemoveFile }) => {
  console.log(fileList.length);
  return (
    <div className="flex flex-wrap items-center justify-center border border-red-900">
      {fileList.map((file, index) => (
        <div key={index} className="flex h-[242px] w-[196px] p-4">
          <figure className="rounded bg-white p-4 shadow-lg">
            <div className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt={`Thumbnail-${index}`}
                className="object-scale-down"
              />

              <button
                onClick={() => onRemoveFile(file)}
                className={`absolute right-[calc(10px)] top-[calc(10px)] inline-flex items-center justify-center rounded bg-black-800 p-1 text-white opacity-80 transition-all duration-300 hover:bg-blue-ultramarine hover:opacity-100 active:bg-blue-ultramarine active:opacity-100`}
              >
                <HeroIcons
                  iconName={IconNames.XMark}
                  className="size-6 font-bold"
                  strokeWidth={1.5}
                />
              </button>

              <p className="mt-2 truncate text-center text-xs text-gray-500">
                {file.name}
              </p>
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
