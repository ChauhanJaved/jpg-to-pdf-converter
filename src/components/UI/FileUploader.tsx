import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageList from "./ImageList";

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFilesSelected }) => {
  const [filePreviews, setFilePreviews] = useState<
    { file: File; preview: string }[]
  >([]);

  // Handle file drop or selection
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFilePreviews((prev) => [...prev, ...newFiles]);
      onFilesSelected([...filePreviews.map((f) => f.file), ...acceptedFiles]);
    },
    [filePreviews, onFilesSelected],
  );

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  const handleRemoveFile = (fileName: string) => {
    const updatedPreviews = filePreviews.filter(
      (f) => f.file.name !== fileName,
    );
    setFilePreviews(updatedPreviews);
  };

  return (
    <div className="w-[90%] p-6">
      {/* Drag and drop area */}
      <div
        {...getRootProps()}
        className={`flex h-[300px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center transition ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {filePreviews.length > 0 ? (
          <ImageList filePreviews={filePreviews} onRemove={handleRemoveFile} />
        ) : (
          <p className="font-bold text-black-500">Drop Your Files Here</p>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
