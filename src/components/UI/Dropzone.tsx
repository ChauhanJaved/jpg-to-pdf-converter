"use client";
import { useDropzone } from "react-dropzone";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./Button";
import { ArrowRight, CirclePlus, Settings } from "lucide-react";
import SortableImageList from "./SortableImageList";
import { useFileContext } from "@/context/FileContext";

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

  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
  });

  return (
    <div className={`w-full p-5`}>
      {/* z-index 996 */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {/* Item---Fixed */}
        <div
          className={`${fileList.length === 0 && "hidden"} fixed bottom-[50px] right-[24px] z-[996]`}
        >
          <Button onClick={open} size="icon">
            <CirclePlus className="" />
          </Button>
        </div>
        {/* Tool bar */}
        <div
          className={`mb-2 ${fileList.length === 0 && "hidden"} sticky top-[90px] z-[996] mb-5 flex w-full flex-row justify-end space-x-1`}
        >
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
          <SortableImageList />
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
