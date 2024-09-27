import React, { Fragment, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "./Button";
import ImageList from "./ImageList";

const Dropzone: React.FC = () => {
  const [filePreviews, setFilePreviews] = useState<
    { file: File; preview: string }[]
  >([]);
  // Handle file drop or selection
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFilePreviews((prev) => [...prev, ...newFiles]);
  }, []);

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
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
        <Fragment>
          <Button caption="Select JPG Images" handleClick={open} />
          <p className="font-bold text-black-500">or drop JPG images here</p>
        </Fragment>
        {filePreviews.length > 0 && (
          <ImageList filePreviews={filePreviews} onRemove={handleRemoveFile} />
        )}
      </div>
    </div>
  );
};

export default Dropzone;
