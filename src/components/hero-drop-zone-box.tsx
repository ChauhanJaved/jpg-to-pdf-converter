//External Imports----------
import { useDropzone, FileRejection } from "react-dropzone";
import { ShieldCheck } from "lucide-react";

//Internal Imports----------
import { useFileContext } from "@/context/file-context";
import HeroSortableImageList from "@/components/hero-sortable-image-list";
import { useToast } from "@/hooks/use-toast";

interface HeroDropZoneBoxProps {
  isDisabled: boolean;
  setIsLoadingFiles: (isDisabled: boolean) => void;
  isPreviewVisible: boolean;
}

export default function HeroDropZoneBox({
  isDisabled = false,
  setIsLoadingFiles,
  isPreviewVisible,
}: HeroDropZoneBoxProps) {
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
    <div className={`w-full`}>
      {/* Dropzone Area ---------- */}
      <div
        {...getRootProps()}
        className={`flex w-full flex-wrap items-center justify-center gap-5 p-5 text-center transition ${isDragActive && "bg-secondary"} overflow-hidden border-b-2 border-l-2 border-r-2 border-dashed bg-background`}
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
              <div className="mb-3 flex items-center justify-center gap-1">
                <div>
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <strong className="text-base font-semibold lg:text-lg">
                  Local & Secure File Conversion
                </strong>
              </div>
              {/* Box 2 ---------- Drop files here */}
              <p className="text-center text-base md:w-1/2 lg:text-lg">
                Click <span className="font-semibold">Add Files</span> or{" "}
                <span className="font-semibold">Drop</span> your files here.
                Adjust your <span className="font-semibold">Settings</span> as
                needed, then click{" "}
                <span className="font-semibold">Convert</span> to generate your
                PDF.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
