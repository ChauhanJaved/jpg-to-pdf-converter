"use client";
import { useDropzone } from "react-dropzone";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./Button";
import SortableImageList from "./SortableImageList";
import { useFileContext } from "@/context/FileContext";
import { Menubar } from "./menubar";

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
    <div className={`w-full p-5`}>
      {/* z-index 996 */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {/* Drag and drop area */}
        <Menubar className="mb-3 w-full px-3 py-7">
          <Button variant="outline" onClick={open}>
            Add Files
          </Button>
          <Button variant="outline" onClick={handleClearList}>
            Clear List
          </Button>
          <Button
            variant="outline"
            onClick={() => handleConvertToPdf(fileList)}
          >
            Convert
          </Button>
        </Menubar>

        <div
          className={`flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border text-center transition md:min-h-[300px] ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <SortableImageList />
          <div className={`${fileList.length > 0 && "hidden"}`}>
            <p className="font-bold text-black-500">Drop files here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
