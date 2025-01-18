import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { LoaderCircle } from "lucide-react";
interface DialogProcessingProps {
  isConvertingFiles: boolean;
  setIsConvertingFiles: (value: boolean) => void;
}
export default function DialogProcessing({
  isConvertingFiles,
}: DialogProcessingProps) {
  return (
    <AlertDialog open={isConvertingFiles}>
      <AlertDialogContent className="flex flex-col items-center justify-center gap-4 text-center">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-row items-center justify-center gap-3">
            <LoaderCircle className="animate-spin text-primary" />
            <span>Processing...</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            Processing your files
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
