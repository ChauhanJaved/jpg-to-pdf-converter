import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageList from "./ImageList";
import Button from "./Button";
import { IconNames } from "./HeroIcons";

interface DropzoneProps {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
  setOpenFileDialog: (open: () => void) => void;
  onRemoveFile: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({
  fileList,
  setFileList,
  setOpenFileDialog,
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

  React.useEffect(() => {
    if (setOpenFileDialog) {
      setOpenFileDialog(open);
    }
  }, [open, setOpenFileDialog]);

  return (
    <div className={`${fileList.length === 0 && "mt-10"} w-full`}>
      {/* Drag and drop area */}
      <div
        {...getRootProps()}
        className={`flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-center transition md:min-h-[300px] ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {fileList.length > 0 ? (
          <ImageList fileList={fileList} onRemoveFile={onRemoveFile} />
        ) : (
          <div className="">
            <Button
              caption="Add Files"
              icon={IconNames.PlusCircle}
              handleClick={open}
            />
            <p className="mt-3 font-bold text-black-500">or drop files here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
