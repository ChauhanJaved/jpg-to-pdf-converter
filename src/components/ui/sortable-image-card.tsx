/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Grip, RotateCw, Trash2 } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useFileContext } from "@/context/file-context";

interface FileObject {
  file: File;
  id: string;
}

interface SortableImageCardProps {
  fileObject: FileObject;
}

function formatFileSize(size: number): string {
  if (size === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

const SortableImageCard = React.memo(function SortableImageCard({
  fileObject,
}: SortableImageCardProps) {
  const { removeFile } = useFileContext();
  const { id, file } = fileObject;

  const { attributes, listeners, setNodeRef, transform, transition, index } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // State to store the image URL
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  // Create a URL for the image and clean it up on unmount
  useEffect(() => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => {
      URL.revokeObjectURL(url); // Clean up URL when component is unmounted
    };
  }, [file]);

  return (
    <div ref={setNodeRef} style={style} className="">
      <div className="flex flex-col items-center justify-center gap-2 rounded border shadow-sm">
        {/* Box-1 Toolbar--------- */}
        <div className="mt-2 flex w-full items-center justify-end gap-2 pr-2">
          <Button variant="outline" aria-label="Rotate CW" size={"icon"}>
            <RotateCw />
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
        {false ? (
          <figure className="relative flex h-[350px] w-[250px] items-center justify-center overflow-hidden border-t bg-primary-foreground">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`Thumbnail for ${file.name}`}
                className="object-contain"
              />
            ) : (
              <p>Loading...</p>
            )}

            <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1 bg-black p-2 text-xs text-white opacity-70">
              <div className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary text-sm">
                {index + 1}
              </div>
              <div className="ml-2 text-left">{file.name}</div>
              <div>{formatFileSize(file.size)}</div>
            </figcaption>
          </figure>
        ) : (
          <div className="flex h-[75px] w-[250px] items-center justify-center overflow-hidden border-t bg-primary-foreground text-xs">
            <div className="roun flex min-h-11 min-w-11 items-center justify-center border-r text-sm">
              {index + 1}
            </div>
            <div className="border-r px-2 text-left">{file.name}</div>
            <div className="px-2">{formatFileSize(file.size)}</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default SortableImageCard;
