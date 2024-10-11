"use client";
import { useDropzone } from "react-dropzone";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./Button";
import SortableImageList from "./SortableImageList";
import { useFileContext } from "@/context/FileContext";
import { Download, Plus, Settings, X } from "lucide-react";
import SectionHeader from "./SectionHeader";

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
    window.scrollTo({ top: 0 });
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
    <div className={`mb-5 flex w-full flex-col items-center`}>
      {fileList.length === 0 && (
        <SectionHeader
          caption="JPG to PDF Converter"
          className={`my-10`}
          desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
        />
      )}
      {/* Toolbar */}
      {fileList.length > 0 && (
        <div className="sticky top-[82px] z-[998] m-auto w-full bg-white py-3">
          <div className="container m-auto flex w-full flex-wrap items-center justify-center rounded-md border bg-white py-3 pr-3 shadow-sm sm:justify-end xl:max-w-screen-xl">
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
        </div>
      )}

      {/* Dropzone */}
      <div className="container w-full xl:max-w-screen-xl">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            className={`flex min-h-[150px] w-full flex-wrap items-center justify-center rounded-lg border text-center shadow-sm transition sm:min-h-[300px] ${isDragActive && "border-blue-500 bg-blue-50"}`}
          >
            {fileList.length > 0 ? (
              <SortableImageList />
            ) : (
              <div>
                <Button
                  onClick={open}
                  className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
                >
                  <Plus className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
                  Add Files
                </Button>
                <p className="text-base text-black-500">or drop your files</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
