"use client";

// External Imports----------
import { Plus } from "lucide-react";
import { useRef } from "react";
// Internal Imports----------
import ButtonToolbar from "./button-toolbar";
import { useFileContext } from "@/context/file-context";
import { useToast } from "@/hooks/use-toast";

interface FileInputButtonProps {
  isDisabled: boolean;
  setIsLoadingFiles: (isDisabled: boolean) => void;
}

export default function FileInputButton({
  isDisabled = false,
  setIsLoadingFiles,
}: FileInputButtonProps) {
  const { toast } = useToast();
  // fileList----------
  const { fileList, setFileList } = useFileContext();

  // Handle File Selection
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFiles = Array.from(event.target.files || []);
    try {
      // Handle Unsupported Files with Detailed Errors
      const unsupportedFiles = selectedFiles.filter(
        (file) => !file.type.includes("jpeg"),
      );

      if (unsupportedFiles.length > 0) {
        toast({
          title: "Unsupported file(s) detected!",
          description: `The following files were rejected: ${unsupportedFiles
            .map((file) => file.name)
            .join(", ")}`,
        });
      }

      // Detect Duplicate Files
      const duplicateFiles = selectedFiles.filter((newFile) =>
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
      const filteredFiles = selectedFiles.filter(
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
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg"
        multiple
        disabled={isDisabled}
        onChange={handleFileSelect}
        className="hidden"
      />

      <ButtonToolbar
        disabled={isDisabled}
        caption="Add Files"
        icon={Plus}
        handleOnClick={handleButtonClick}
      />
    </div>
  );
}
