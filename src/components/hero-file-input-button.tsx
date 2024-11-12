"use client";

// External Imports----------
import { Plus } from "lucide-react";
import { useRef } from "react";
// Internal Imports----------
import HeroButtonToolbar from "@/components/hero-button-toolbar";
import { useFileContext } from "@/context/file-context";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface HeroFileInputButtonProps {
  isDisabled: boolean;
  setIsLoadingFiles: (isDisabled: boolean) => void;
  buttonType: string;
}
export default function HeroFileInputButton(props: HeroFileInputButtonProps) {
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
      props.setIsLoadingFiles(false);
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
      props.setIsLoadingFiles(false);
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
        disabled={props.isDisabled}
        onChange={handleFileSelect}
        className="hidden"
      />
      {props.buttonType === "toolbar" ? (
        <HeroButtonToolbar
          disabled={props.isDisabled}
          caption="Add Files"
          icon={Plus}
          handleOnClick={handleButtonClick}
        />
      ) : (
        <Button
          className={"py-6 text-xl"}
          disabled={props.isDisabled}
          onClick={handleButtonClick}
        >
          <Plus className="mr-3 h-8 w-8" /> Add JPG Files
        </Button>
      )}
    </div>
  );
}
