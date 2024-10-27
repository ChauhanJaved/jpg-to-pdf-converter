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
import { Button } from "./button";
import { Plus } from "lucide-react";

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

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onFileDialogOpen,
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
    <div {...getRootProps()} className="w-full rounded border">
      <input {...getInputProps()} />
      <div className="flex items-center justify-end gap-5 p-3 text-sm sm:text-base">
        <div
          className={`${fileList.length === 0 && "hidden"} flex items-center justify-center gap-1`}
        >
          <Badge className="">{`${fileList.length}`}</Badge>
          <Label>Total Files</Label>
        </div>
        {fileList.length > 0 && (
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
        )}
      </div>
      <div
        className={`flex w-full flex-wrap items-center justify-center gap-5 p-5 text-center transition ${isDragActive && "bg-secondary"}`}
      >
        {fileList.length > 0 ? (
          <SortableImageList
            disabled={isDisabled}
            isPreviewVisible={isPreviewVisible}
          />
        ) : (
          <div className="flex flex-col items-start justify-start rounded bg-background text-left">
            {/* Box----------1 */}
            <div className="flex flex-row">
              <div className="flex flex-col items-center gap-1">
                <Button onClick={open} className="p-8 text-2xl">
                  <Plus className="mr-3 h-8 w-8" /> Add Files
                </Button>
                <p className="text-base sm:text-lg">or drop files here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
