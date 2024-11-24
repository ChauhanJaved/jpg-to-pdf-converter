import React from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

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
        <div className="flex items-center justify-center gap-3">
          <LoaderCircle className="animate-spin" />
          <span>Processing...</span>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
