/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Grip, Pencil, Trash2, ZoomIn } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useFileContext } from "@/context/file-context";
import { Badge } from "./badge";

interface FileObject {
  file: File;
  id: string;
}

function formatFileSize(size: number): string {
  if (size === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
interface SortableImageCardProps {
  fileObject: FileObject;
  isPreviewVisible: boolean;
}
const SortableImageCard = React.memo(function SortableImageCard({
  fileObject,
  isPreviewVisible,
}: SortableImageCardProps) {
  const { removeFile } = useFileContext();
  const { id, file } = fileObject;

  const { attributes, listeners, setNodeRef, transform, transition, index } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return (
    <div ref={setNodeRef} style={style} className="">
      <div className="flex flex-col items-center justify-center rounded border shadow-sm">
        {/* Box-1 Toolbar--------- */}

        <div className="mt-2 flex w-full items-center justify-end gap-2 pr-2">
          <Button variant="outline" aria-label="Edit Image" size={"icon"}>
            <Pencil />
          </Button>
          <Button variant="outline" aria-label="Zoom In" size={"icon"}>
            <ZoomIn />
          </Button>
          <Button
            onClick={() => removeFile(id)}
            variant="outline"
            size={"icon"}
            aria-label="Remove Image"
          >
            <Trash2 />
          </Button>
          <Button
            {...listeners}
            {...attributes}
            variant="outline"
            size="icon"
            aria-label="Reorder Image"
            className="touch-none"
          >
            <Grip />
          </Button>
        </div>

        {/* Box-2---------- */}
        {isPreviewVisible && (
          <div className="relative mt-2 flex h-[250px] w-[250px] items-center justify-center overflow-hidden border-t bg-primary-foreground">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`Thumbnail for ${file.name}`}
                className=""
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
        <div
          className={`${!isPreviewVisible && "mt-2"} flex h-[75px] w-[250px] items-center border-t p-2`}
        >
          <Badge variant={"secondary"}>{index + 1}</Badge>
          <div className="ml-2 flex flex-col items-start gap-1 text-left">
            <div className="text-sm">{file.name}</div>
            <div className="text-xs">{formatFileSize(file.size)}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SortableImageCard;
