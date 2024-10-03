import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageList from "./ImageList";
import Button from "./Button";
import HeroIcons, { IconNames } from "./HeroIcons";
import { handleConvertToPdf } from "@/lib/pdf-lib";

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
          className={`${fileList.length === 0 && "hidden"} sticky top-[100px] z-[996] ml-auto flex w-full flex-row items-end justify-between border border-red-900 p-3`}
        >
          {/* Right box */}
          <div className="border border-r-red-900"></div>
          {/* Left box */}
          <div className="flex flex-col items-end space-y-2 border border-red-900 md:flex-row">
            {/* Item---1 */}
            <div className="relative mr-3 border border-blue-900">
              <p
                className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 top-0 z-[1] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white bg-blue-ultramarine text-white`}
              >
                {"All"}
              </p>
              <button
                onClick={() => {
                  setFileList([]);
                }}
                className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} z-[0] ml-[15px] mt-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
              >
                <HeroIcons
                  iconName={IconNames.XMark}
                  className="size-6 font-bold"
                  strokeWidth={1.5}
                />
              </button>
            </div>
            {/* Item---2 */}
            <div className="relative mr-3 border border-blue-900">
              <p
                className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 top-0 z-[1] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white bg-blue-ultramarine text-white`}
              >
                {fileList.length}
              </p>
              <button
                onClick={open}
                className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} z-[0] ml-[15px] mt-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
              >
                <HeroIcons
                  iconName={IconNames.Plus}
                  className="size-6 font-bold"
                  strokeWidth={1.5}
                />
              </button>
            </div>
            {/* Item---3 */}
            <Button
              className={`${fileList.length > 0 ? "visible" : "invisible"} sticky top-[100px]`}
              caption="Convert"
              icon={IconNames.DownArrowCircle}
              handleClick={() => handleConvertToPdf(fileList)}
            />
          </div>
        </div>
        {/* Drag and drop area */}
        <div
          className={`flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-center transition md:min-h-[300px] ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <ImageList fileList={fileList} onRemoveFile={onRemoveFile} />
          <div className={`${fileList.length > 0 && "hidden"}`}>
            <Button
              caption="Add Files"
              icon={IconNames.PlusCircle}
              handleClick={open}
            />
            <p className="mt-3 font-bold text-black-500">or drop files here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
