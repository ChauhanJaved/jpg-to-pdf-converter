import React from "react";

interface FilePreview {
  file: File;
  preview: string;
}

interface ImageListProps {
  filePreviews: FilePreview[];
  onRemove: (fileName: string) => void; // Optional: Function to handle file removal
}

const ImageList: React.FC<ImageListProps> = ({ filePreviews, onRemove }) => {
  return (
    <div className="flex space-x-4 overflow-x-scroll p-2">
      {filePreviews.map((filePreview, index) => (
        <div key={index} className="relative flex-shrink-0">
          <img
            src={filePreview.preview}
            alt={`Thumbnail-${index}`}
            className="h-24 w-24 rounded object-cover"
          />
          <button
            className="absolute right-1 top-1 rounded bg-red-500 px-2 py-1 text-xs text-white opacity-0 transition hover:opacity-100"
            onClick={() => onRemove(filePreview.file.name)}
          >
            Remove
          </button>
          <p className="mt-2 truncate text-center text-xs text-gray-500">
            {filePreview.file.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
