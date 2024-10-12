"use client";
import { useDropzone } from "react-dropzone";
import { handleConvertToPdf } from "@/lib/pdf-lib";
import { Button } from "./button";
import SortableImageList from "./SortableImageList";
import { useFileContext } from "@/context/FileContext";
import { Download, Loader2, Plus, Settings, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useToast } from "@/hooks/use-toast";
import { Fragment, useLayoutEffect, useState } from "react";

const Dropzone = () => {
  const { toast } = useToast();
  const { fileList, setFileList } = useFileContext();
  const [isConvertingFiles, setIsConvertingFiles] = useState(false);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  const onFileDialogCancel = () => {
    setIsLoadingFiles(false);
  };
  const onError = () => {
    setIsLoadingFiles(false);
  };
  const onDrop = async (acceptedFiles: File[]) => {
    const filteredFiles = acceptedFiles.filter(
      (newFile) =>
        !fileList.some(
          (existingFile) =>
            existingFile.file.name === newFile.name &&
            existingFile.file.size === newFile.size &&
            existingFile.file.lastModified === newFile.lastModified,
        ),
    );
    // Add only the new, non-duplicate files to the list
    if (filteredFiles.length > 0) {
      setFileList((prevFileList) => [
        ...prevFileList,
        ...filteredFiles.map((file) => ({
          file,
          id: `${file.name}-${file.size}-${file.lastModified}`,
        })),
      ]);
    } else {
      setIsLoadingFiles(false);
      toast({
        title: "File(s) already added !",
      });
    }
  };
  const handleClearList = () => {
    setFileList([]);
    window.scrollTo({ top: 0 });
  };
  // Set up the dropzone, restricting to JPG files only
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    onFileDialogCancel,
    noClick: true,
    noKeyboard: true,
    accept: { "image/jpeg": [".jpg", ".jpeg"] }, // Only allow JPG files
    multiple: true, // Allow multiple file selection
    onError,
    disabled: isConvertingFiles || isLoadingFiles,
  });

  const handleConversion = async () => {
    setIsConvertingFiles(true); // Show dialog and lock screen
    await handleConvertToPdf(fileList); // Perform conversion
    setIsConvertingFiles(false); // Hide dialog when done
  };
  // When the file picker is opened, show a pre-loading state
  const handleOpenFilePicker = () => {
    setIsLoadingFiles(true); // Start loader when the file picker is opened

    open(); // Trigger file picker to open
  };

  useLayoutEffect(() => {
    if (fileList.length > 0) {
      // The DOM has been updated, and the browser is about to repaint
      setIsLoadingFiles(false); // Set loading state to false here
    }
  }, [fileList]);
  return (
    <Fragment>
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
          <div className="sticky top-[82px] z-[10] m-auto w-full bg-white py-3">
            <div className="container m-auto flex w-full flex-wrap items-center justify-center rounded-md border bg-white py-3 pr-3 shadow-sm sm:justify-end xl:max-w-screen-xl">
              <Button
                disabled={isConvertingFiles || isLoadingFiles}
                onClick={handleOpenFilePicker}
                className={`m-2 w-[114px] lg:w-[140px] lg:text-lg`}
              >
                {isLoadingFiles ? (
                  <Loader2
                    className={`mr-2 h-4 w-4 animate-spin lg:h-6 lg:w-6`}
                  />
                ) : (
                  <Plus className={`mr-2 h-4 w-4 lg:h-6 lg:w-6`} />
                )}
                Add Files
              </Button>
              <Button
                disabled={isConvertingFiles || isLoadingFiles}
                onClick={handleClearList}
                className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
              >
                <X className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
                Clear All
              </Button>
              <Button
                disabled={isConvertingFiles || isLoadingFiles}
                className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
              >
                <Settings className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
                Settings
              </Button>
              <Button
                disabled={isConvertingFiles || isLoadingFiles}
                onClick={handleConversion}
                className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
              >
                {isConvertingFiles ? (
                  <Loader2 className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
                ) : (
                  <Download className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
                )}
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
                <SortableImageList
                  disabled={isLoadingFiles || isConvertingFiles}
                />
              ) : (
                <div>
                  <Button
                    disabled={isConvertingFiles || isLoadingFiles}
                    onClick={handleOpenFilePicker}
                    className="m-2 w-[114px] lg:w-[140px] lg:text-lg"
                  >
                    {isLoadingFiles ? (
                      <Loader2
                        className={`mr-2 h-4 w-4 animate-spin lg:h-6 lg:w-6`}
                      />
                    ) : (
                      <Plus className={`mr-2 h-4 w-4 lg:h-6 lg:w-6`} />
                    )}
                    Add Files
                  </Button>
                  <p className="text-base text-black-500">or drop your files</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Converting files */}
      {/* <Dialog open={isConvertingFiles}>
        <DialogContent className="flex items-center justify-center">
          <div className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Converting your files...
          </div>
        </DialogContent>
      </Dialog> */}
      {/* Loading files */}
      {/* <Dialog open={isLoadingFiles}>
        <DialogContent className="flex items-center justify-center">
          <div className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading your files...
          </div>
        </DialogContent>
      </Dialog> */}
    </Fragment>
  );
};

export default Dropzone;
