"use client";
import { useDropzone, FileRejection } from "react-dropzone";
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import SortableImageList from "./sortable-image-list";
import { useFileContext } from "@/context/file-context";
import { Download, Plus, X } from "lucide-react";
import SectionHeader from "./section-header";
import { useToast } from "@/hooks/use-toast";
import { Fragment, useLayoutEffect, useState } from "react";
import ButtonToolbar from "./button-toolbar";
import SettingsSheet from "./settings-sheet";

const Dropzone = () => {
  const { toast } = useToast();
  const { fileList, setFileList } = useFileContext();
  const [isConvertingFiles, setIsConvertingFiles] = useState(false);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  //Conversion settings Start--------
  const [orientation, setOrientation] = useState(PageOrientationEnum.portrait);
  const [pageSize, setPageSize] = useState(PageSizeEnum.A4);
  const [margin, setMargin] = useState(MarginEnum.None);
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  const handlePageSizeChange = (newPageSize: PageSizeEnum) => {
    setPageSize(newPageSize);
  };
  const handleMarginChange = (newMargin: MarginEnum) => {
    setMargin(newMargin);
  };
  //Conversion settings End--------

  const onFileDialogCancel = () => {
    setIsLoadingFiles(false);
  };
  const onError = () => {
    setIsLoadingFiles(false);
  };
  const onDrop = async (
    acceptedFiles: File[],
    rejectedFiles: FileRejection[],
  ) => {
    try {
      // Handle Unsupported Files with Detailed Errors
      if (rejectedFiles.length > 0) {
        const unsupportedFileMessages = rejectedFiles.map((fileRejection) => {
          const reasons = fileRejection.errors.map((error) => error.message);
          return `${fileRejection.file.name}: ${reasons.join(", ")}`;
        });

        toast({
          title: "Unsupported file(s) detected!",
          description: `The following files were rejected: ${unsupportedFileMessages.join(", ")}`,
          variant: "destructive",
        });
      }

      // Detect Duplicate Files
      const duplicateFiles = acceptedFiles.filter((newFile) =>
        fileList.some(
          (existingFile) =>
            existingFile.file.name === newFile.name &&
            existingFile.file.size === newFile.size &&
            existingFile.file.lastModified === newFile.lastModified,
        ),
      );

      if (duplicateFiles.length > 0) {
        toast({
          title: "Duplicate file(s) detected!",
          description: `The following files are already in the list: ${duplicateFiles
            .map((file) => file.name)
            .join(", ")}`,
          variant: "default",
        });
      }

      // Filter out duplicate files from accepted files
      const filteredFiles = acceptedFiles.filter(
        (newFile) =>
          !fileList.some(
            (existingFile) =>
              existingFile.file.name === newFile.name &&
              existingFile.file.size === newFile.size &&
              existingFile.file.lastModified === newFile.lastModified,
          ),
      );

      // Add New Non-Duplicate Files to the List
      if (filteredFiles.length > 0) {
        setFileList((prevFileList) => [
          ...prevFileList,
          ...filteredFiles.map((file) => ({
            file,
            id: `${file.name}-${file.size}-${file.lastModified}`,
          })),
        ]);
      }

      // Stop Loading State Once All Files are Processed
      setIsLoadingFiles(false);

      // If no new files were added
      if (filteredFiles.length === 0 && duplicateFiles.length > 0) {
        toast({
          title: "No new files added!",
          description:
            "All selected files are either duplicates or unsupported.",
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Handle the error, accessing 'message' safely
        toast({
          title: "An unexpected error occurred!",
          description: `${error.message} - Please try again.`,
          variant: "destructive",
        });
      } else {
        // Handle non-Error types (if applicable, but uncommon)
        toast({
          title: "An unexpected issue occurred!",
          description: "Something went wrong, but it's not an Error object.",
          variant: "destructive",
        });
      }
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
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp"],
    }, // Allow all common image files
    multiple: true, // Allow multiple file selection
    onError,
    disabled: isConvertingFiles || isLoadingFiles,
  });

  const handleConversion = async () => {
    setIsConvertingFiles(true); // Show dialog and lock screen
    await handleConvertToPdf(fileList, orientation, pageSize, margin); // Perform conversion
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
            className={`mb-2 mt-10`}
            desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
          />
        )}
        {/* Toolbar */}
        <div className="sticky top-[82px] z-[8] m-auto w-full bg-white py-3">
          <div className="container m-auto flex w-full flex-wrap items-center justify-center space-x-3 rounded-md border bg-white py-3 pr-3 shadow-sm sm:justify-end xl:max-w-screen-xl">
            <ButtonToolbar
              disabled={isConvertingFiles || isLoadingFiles}
              caption="Add Files"
              handleOnClick={handleOpenFilePicker}
              icon={Plus}
            ></ButtonToolbar>
            <ButtonToolbar
              disabled={isConvertingFiles || isLoadingFiles}
              caption="Clear All"
              handleOnClick={handleClearList}
              icon={X}
            ></ButtonToolbar>
            <SettingsSheet
              disabled={isConvertingFiles || isLoadingFiles}
              orientation={orientation}
              pageSize={pageSize}
              margin={margin}
              onOrientationChange={handleOrientationChange}
              onPageSizeChange={handlePageSizeChange}
              onMarginChange={handleMarginChange}
            />
            <ButtonToolbar
              disabled={isConvertingFiles || isLoadingFiles}
              caption="Convert"
              handleOnClick={handleConversion}
              icon={Download}
            ></ButtonToolbar>
          </div>
        </div>

        {/* Dropzone */}
        <div className="container w-full xl:max-w-screen-xl">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div
              className={`flex min-h-[200px] w-full flex-wrap items-center justify-center rounded-lg border-2 border-dashed text-center transition sm:min-h-[300px] ${isDragActive && "border-primary bg-secondary"}`}
            >
              {fileList.length > 0 ? (
                <SortableImageList
                  disabled={isLoadingFiles || isConvertingFiles}
                />
              ) : (
                <div>
                  {/* <Button
                    disabled={isConvertingFiles || isLoadingFiles}
                    onClick={handleOpenFilePicker}
                  >
                    <Plus className={`mr-2 h-5 w-5 sm:h-6 sm:w-6`} />
                    <span className="sm:text-base">Add Files</span>
                  </Button> */}
                  <p className="m-auto mt-2 px-3 text-base text-gray-500 sm:w-3/4 sm:text-base md:w-3/5 md:text-lg lg:w-1/2">
                    Click the <strong>Add Files</strong> button or{" "}
                    <strong>Drop</strong> your files here. Adjust your settings
                    as needed, then click <strong>Convert</strong> to begin.
                  </p>
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
