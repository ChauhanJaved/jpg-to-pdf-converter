"use client";

//External Imports----------
import { useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";

//Internal Imports----------
import { useFileContext } from "@/context/file-context";
import HeroSortableImageList from "@/components/hero-sortable-image-list";
import HeroFileInputButton from "@/components/hero-file-input-button";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/check-box";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

interface HeroDropZoneBoxProps {
  isDisabled: boolean;
  setIsLoadingFiles: (isDisabled: boolean) => void;
}

export default function HeroDropZoneBox({
  isDisabled = false,
  setIsLoadingFiles,
}: HeroDropZoneBoxProps) {
  //Preview On/off
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);
  const togglePreview = () => {
    setIsPreviewVisible((prevState) => !prevState);
  };

  //User message----------
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

  return (
    <div className="w-full">
      {/* Toolbar for file preview and count ---------- */}
      {fileList.length > 0 && (
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
      )}
      {/* Dropzone Area ---------- */}
      <div
        {...getRootProps()}
        className={`flex w-full flex-wrap items-center justify-center gap-5 p-5 text-center transition ${isDragActive && "bg-secondary"} border-2 border-dashed lg:min-h-72`}
      >
        <input {...getInputProps()} />
        {fileList.length > 0 ? (
          <HeroSortableImageList
            disabled={isDisabled}
            isPreviewVisible={isPreviewVisible}
          />
        ) : (
          <div className="flex flex-col items-start justify-start gap-1 text-left">
            <div className="flex flex-col items-center gap-1">
              {/* Box 1 ---------- Local & Secure File Conversion */}
              <div className="mb-3 flex items-center gap-1 text-lg">
                <div className="">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span>Local & Secure File Conversion</span>
              </div>
              {/* Box 2 ---------- Add JPG Files */}
              <HeroFileInputButton
                buttonType="main"
                isDisabled={false}
                setIsLoadingFiles={setIsLoadingFiles}
              />
              {/* Box 3 ---------- Drop files here */}
              <p className="text-lg">or drop files here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
