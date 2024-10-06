import React from "react";
import SortableImageCard from "./SortableImageCard";

interface SortableImageListProps {
  fileList: File[];
  onRemoveFile: (file: File) => void;
}

const SortableImageList: React.FC<SortableImageListProps> = ({
  fileList,
  onRemoveFile,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-5 space-y-5 p-4">
      {fileList.map((file, index) => (
        <SortableImageCard
          key={index}
          file={file}
          index={index}
          onRemoveFile={onRemoveFile}
        />
      ))}
    </div>
  );
};

export default SortableImageList;
