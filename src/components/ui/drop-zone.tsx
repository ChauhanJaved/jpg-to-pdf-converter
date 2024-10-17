"use client";

//External Imports----------
import React, { createRef, RefObject } from "react";
import Dropzone, { DropzoneRef } from "react-dropzone";
import { Fragment, useState } from "react";
import { FileRejection } from "react-dropzone";
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import { Download, Plus, X } from "lucide-react";

//Internal Imports----------
import SortableImageList from "./sortable-image-list";
import ButtonToolbar from "./button-toolbar";
import SettingsSheet from "./settings-sheet";
import { useFileContext } from "@/context/file-context";
import { useToast } from "@/hooks/use-toast";

const DropzoneCustom = () => {
  const { toast } = useToast();

  //fileList----------
  const { fileList, setFileList } = useFileContext();
  const handleClearList = () => {
    setFileList([]);
    window.scrollTo({ top: 0 });
  };

  //Conversion--------
  const [isConvertingFiles, setIsConvertingFiles] = useState(false);
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
  const handleConversion = async () => {
    setIsConvertingFiles(true);
    await handleConvertToPdf(fileList, orientation, pageSize, margin);
    setIsConvertingFiles(false);
  };

  //DropZone----------
  const dropzoneRef: RefObject<DropzoneRef> = createRef<DropzoneRef>();
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
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

      // If no new files were added
      if (filteredFiles.length === 0 && duplicateFiles.length > 0) {
        toast({
          title: "No new files added!",
          description:
            "All selected files are either duplicates or unsupported.",
        });
      }
      // Stop Loading State Once All Files are Processed
      setIsLoadingFiles(false);
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
      setIsLoadingFiles(false);
    }
  };
  // const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  //   onDrop,
  //   onFileDialogCancel,
  //   accept: {
  //     "image/jpeg": [".jpg", ".jpeg"],
  //   },
  //   multiple: true,
  //   onError,
  //   disabled: isConvertingFiles || isLoadingFiles,
  // });
  const handleOpenFilePicker = () => {
    setIsLoadingFiles(true);
    //open();
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  return (
    <Fragment>
      <div className={`mb-5 flex w-full flex-col items-center`}>
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
              disabled={
                fileList.length === 0 || isConvertingFiles || isLoadingFiles
              }
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
              disabled={
                fileList.length === 0 || isConvertingFiles || isLoadingFiles
              }
              caption="Convert"
              handleOnClick={handleConversion}
              icon={Download}
            ></ButtonToolbar>
          </div>
        </div>
        {/* Dropzone */}
        <Dropzone
          ref={dropzoneRef}
          noClick
          noKeyboard
          onDrop={onDrop}
          onError={onError}
          onFileDialogCancel={onFileDialogCancel}
          multiple={true}
          disabled={isConvertingFiles || isLoadingFiles}
          accept={{
            "image/jpeg": [".jpg", ".jpeg"],
          }}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div className="container w-full xl:max-w-screen-xl">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div
                    className={`flex min-h-[150px] w-full flex-wrap items-center justify-center rounded-lg border-2 border-dashed text-center transition sm:min-h-[300px] ${isDragActive && "border-primary bg-secondary"}`}
                  >
                    {fileList.length > 0 ? (
                      <SortableImageList
                        disabled={isLoadingFiles || isConvertingFiles}
                      />
                    ) : (
                      <div>
                        <p className="m-auto mt-2 px-3 text-base text-gray-500 sm:w-3/4 sm:text-base md:w-3/5 md:text-lg lg:w-1/2">
                          Click the <strong>Add Files</strong> button or{" "}
                          <strong>Drop</strong> your files here. Adjust your
                          settings as needed, then click{" "}
                          <strong>Convert</strong> to begin.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        </Dropzone>
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

export default DropzoneCustom;

// import React, { createRef, RefObject } from "react";
// import Dropzone, { DropzoneRef } from "react-dropzone";

// const dropzoneRef: RefObject<DropzoneRef> = createRef<DropzoneRef>();
// const openDialog = () => {
//   // Note that the ref is set async,
//   // so it might be null at some point
//   if (dropzoneRef.current) {
//     dropzoneRef.current.open();
//   }
// };

// // Disable click and keydown behavior on the <Dropzone>
// <Dropzone ref={dropzoneRef} noClick noKeyboard>
//   {({ getRootProps, getInputProps, acceptedFiles }) => {
//     return (
//       <div className="container">
//         <div {...getRootProps({ className: "dropzone" })}>
//           <input {...getInputProps()} />
//           <p>Drag drop some files here</p>
//           <button type="button" onClick={openDialog}>
//             Open File Dialog
//           </button>
//         </div>
//         <aside>
//           <h4>Files</h4>
//           <ul>
//             {acceptedFiles.map((file) => (
//               <li key={file.name}>
//                 {file.name} - {file.size} bytes
//               </li>
//             ))}
//           </ul>
//         </aside>
//       </div>
//     );
//   }}
// </Dropzone>;
