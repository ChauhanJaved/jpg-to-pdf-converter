import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  setFilePreviews: React.Dispatch<
    React.SetStateAction<{ file: File; preview: string }[]>
  >;
  setOpenFileDialog: (open: () => void) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({
  setFilePreviews,
  setOpenFileDialog,
}) => {
  // Handle file drop or selection
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFilePreviews((prev) => [...prev, ...newFiles]);
    },
    [setFilePreviews],
  );

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  // Pass the open function to the parent
  useEffect(() => {
    setOpenFileDialog(() => open); // Correctly set the open function
  }, [open, setOpenFileDialog]);

  return (
    <div className="mt-10 w-full">
      {/* Drag and drop area */}
      <div
        {...getRootProps()}
        className={`flex h-[300px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-center transition ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="font-bold text-black-500">Drop JPG images here</p>
      </div>
    </div>
  );
};

export default Dropzone;
