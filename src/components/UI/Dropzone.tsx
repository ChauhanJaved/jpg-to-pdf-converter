import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageList from "./ImageList";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./Button";
import { ArrowRight, CirclePlus, Settings } from "lucide-react";

interface DropzoneProps {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
  onRemoveFile: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({
  fileList,
  setFileList,
  onRemoveFile,
}) => {
  // Handle file drop or selection
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => file);
      setFileList((prev) => [...prev, ...newFiles]);
    },
    [setFileList],
  );

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  return (
    <div className={`${fileList.length === 0 && "mt-10"} w-full`}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {/* Tool bar */}
        <div
          className={`mb-2 ${fileList.length === 0 && "hidden"} sticky top-[100px] z-[996] flex w-full flex-row justify-end space-x-1 border border-red-900 bg-black-100 p-3`}
        >
          {/* Item---Fixed */}
          <div className="fixed bottom-[50px] right-[24px]">
            <Button onClick={open} size="icon">
              <CirclePlus className="" />
            </Button>
          </div>

          <Button size="icon">
            <Settings />
          </Button>
          {/* Item---2 */}
          <Button
            className={`sticky top-[100px] text-lg`}
            onClick={() => handleConvertToPdf(fileList)}
          >
            Convert
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        {/* Drag and drop area */}
        <div
          className={`flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-center transition md:min-h-[300px] ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <ImageList fileList={fileList} onRemoveFile={onRemoveFile} />
          <div className={`${fileList.length > 0 && "hidden"}`}>
            <Button className="text-lg" onClick={open}>
              Add Files
              <CirclePlus className="ml-2" />
            </Button>
            <p className="mt-3 font-bold text-black-500">or drop files here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
