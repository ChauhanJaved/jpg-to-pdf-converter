"use client";

//External Imports----------
import { useDropzone, FileRejection } from "react-dropzone";

//Internal Imports----------
import SortableImageList from "./sortable-image-list";
import { useFileContext } from "@/context/file-context";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "./check-box";
import { useState } from "react";
import { Label } from "./label";
import { Badge } from "./badge";
import { ShieldCheck } from "lucide-react";

interface DropZoneBoxProps {
  isDisabled: boolean;
  setIsLoadingFiles: (isDisabled: boolean) => void;
}

export default function DropZoneBox({
  isDisabled = false,
  setIsLoadingFiles,
}: DropZoneBoxProps) {
  //Uer message----------
  const { toast } = useToast();

  //fileList----------
  const { fileList, setFileList } = useFileContext();

  //DropZone----------
  const onFileDialogCancel = () => {
    setIsLoadingFiles(false);
  };
  const onError = () => {
    setIsLoadingFiles(false);
  };
  const onFileDialogOpen = () => {
    setIsLoadingFiles(true);
  };
  const onDrop = async (
    acceptedFiles: File[],
    rejectedFiles: FileRejection[],
  ) => {
    try {
      setIsLoadingFiles(true);
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onFileDialogOpen,
    noClick: true,
    noKeyboard: true,
    onDrop,
    onFileDialogCancel,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
    },
    multiple: true,
    onError,
    disabled: isDisabled,
  });
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);
  const togglePreview = () => {
    setIsPreviewVisible((prevState) => !prevState);
  };
  return (
    <div {...getRootProps()} className="w-full">
      <input {...getInputProps()} />
      <div className="flex items-center justify-end gap-5 border-t p-3 text-sm sm:text-base">
        <div
          className={`${fileList.length === 0 && "hidden"} flex items-center justify-center gap-1`}
        >
          <Badge className="">{`${fileList.length}`}</Badge>
          <Label>Total Files</Label>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Checkbox
            id="preview"
            className="mr-1"
            checked={isPreviewVisible}
            onCheckedChange={togglePreview}
          />
          <Label htmlFor="preview" className="cursor-pointer">
            File Preview
          </Label>
        </div>
      </div>
      <div
        className={`flex w-full flex-wrap items-center justify-center gap-5 border-t p-5 text-center transition ${isDragActive && "bg-secondary"}`}
      >
        {fileList.length > 0 ? (
          <SortableImageList
            disabled={isDisabled}
            isPreviewVisible={isPreviewVisible}
          />
        ) : (
          <div className="flex flex-col items-start justify-start text-left sm:w-4/5 md:w-3/4 lg:w-3/5">
            <p className="">
              Click the <strong>Add Files</strong> button or{" "}
              <strong>Drop</strong> your files here. Adjust your settings as
              needed, then click <strong>Convert</strong> to begin.
            </p>
            <div className="mt-3">
              <ShieldCheck className="mr-1 inline text-primary" />
              <p className="inline text-base">
                <strong>Local, Secure, and Private File Conversion:</strong> Our
                JPG to PDF converter prioritizes your file privacy and security
                by processing everything <strong>locally</strong> on your
                device. Unlike other converters that require uploading files to
                external servers, our tool ensures that your images{" "}
                <strong>never leave</strong> your device. This no-upload
                approach guarantees maximum data privacy, making it the ideal
                solution for users handling sensitive or personal files. All
                conversions happen directly in your browser, ensuring complete
                security and giving you peace of mind knowing your files are
                processed safely and remain in your control.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
