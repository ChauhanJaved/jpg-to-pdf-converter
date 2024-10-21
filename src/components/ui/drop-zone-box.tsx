"use client";

//External Imports----------
import { useDropzone, FileRejection } from "react-dropzone";

//Internal Imports----------
import SortableImageList from "./sortable-image-list";
import { useFileContext } from "@/context/file-context";
import { useToast } from "@/hooks/use-toast";

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
  return (
    <div {...getRootProps()} className="w-full">
      <input {...getInputProps()} />
      <div
        className={`flex min-h-[150px] w-full flex-wrap items-center justify-center gap-5 rounded border p-5 text-center shadow-sm transition sm:min-h-[300px] ${isDragActive && "border-primary bg-secondary"}`}
      >
        {fileList.length > 0 ? (
          <SortableImageList disabled={isDisabled} />
        ) : (
          <div>
            <p className="m-auto mt-2 px-3 text-base text-gray-500 sm:w-3/4 sm:text-base md:w-3/5 md:text-lg lg:w-1/2">
              Click the <strong>Add Files</strong> button or{" "}
              <strong>Drop</strong> your files here. Adjust your settings as
              needed, then click <strong>Convert</strong> to begin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
