"use client";
import { useDropzone } from "react-dropzone";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./Button";
import SortableImageList from "./SortableImageList";
import { useFileContext } from "@/context/FileContext";
import { Card } from "./card";
import { Download, Plus, Settings, X } from "lucide-react";

const Dropzone = () => {
  const { fileList, setFileList } = useFileContext();

  const onDrop = (acceptedFiles: File[]) => {
    setFileList((prevFileList) => [
      ...prevFileList,
      ...acceptedFiles.map((file) => ({
        file,
        id: `${file.name}-${file.size}-${file.lastModified}`,
      })),
    ]);
  };
  const handleClearList = () => {
    setFileList([]);
  };
  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  return (
    <div className={`mb-5 mt-5 flex w-full flex-col items-center`}>
      <div className="mb-3 flex w-full flex-wrap items-center justify-end rounded-md border py-3 pr-3 shadow-sm">
        <Button
          onClick={open}
          className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
        >
          <Plus className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
          Add Files
        </Button>
        <Button
          onClick={handleClearList}
          className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
        >
          <X className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
          Clear All
        </Button>
        <Button className="m-2 w-[114px] lg:w-[140px] lg:text-lg">
          <Settings className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
          Settings
        </Button>
        <Button
          onClick={() => handleConvertToPdf(fileList)}
          className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
        >
          <Download className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
          Convert
        </Button>
      </div>

      <div className="w-full">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Card
            className={`flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border text-center transition sm:min-h-[300px] ${isDragActive && "border-blue-500 bg-blue-50"}`}
          >
            {fileList.length > 0 ? (
              <SortableImageList />
            ) : (
              <div>
                <p className="text-base text-black-500">
                  Click &rdquo;Add Files&rdquo; or
                </p>
                <p className="text-base text-black-500">Drop files here and</p>
                <p className="text-base text-black-500">
                  Click &rdquo;Convert&rdquo;
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
