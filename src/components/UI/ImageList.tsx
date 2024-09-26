import React from 'react';

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
    <div className="flex overflow-x-scroll space-x-4 p-2">
      {filePreviews.map((filePreview, index) => (
        <div key={index} className="relative flex-shrink-0">
          <img
            src={filePreview.preview}
            alt={`Thumbnail-${index}`}
            className="w-24 h-24 object-cover rounded"
          />
          <button
            className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition"
            onClick={() => onRemove(filePreview.file.name)}
          >
            Remove
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center truncate">{filePreview.file.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
