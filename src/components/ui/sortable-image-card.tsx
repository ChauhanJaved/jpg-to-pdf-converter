/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Grip, Pencil, Trash2, ZoomIn } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useFileContext } from "@/context/file-context";

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

  // State to store the image URL
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  // Thumbnail creation function to limit image dimensions
  const createThumbnail = (
    file: File,
    maxWidth = 300,
    maxHeight = 300,
  ): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
          canvas.width = img.width * ratio;
          canvas.height = img.height * ratio;

          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL(file.type));
        };
      };
      reader.readAsDataURL(file);
    });
  };

  // Create a URL for the image and clean it up on unmount
  useEffect(() => {
    let url: string | undefined;

    if (isPreviewVisible) {
      createThumbnail(file).then((thumbnailUrl) => {
        setImageUrl(thumbnailUrl); // Set the thumbnail URL
      });
    }

    return () => {
      if (url) {
        URL.revokeObjectURL(url); // Clean up URL only if it was created
      }
    };
  }, [file, isPreviewVisible]);

  return (
    <div ref={setNodeRef} style={style} className="">
      <div className="flex flex-col items-center justify-center gap-2 rounded border shadow-sm">
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
        {isPreviewVisible ? (
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

            <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1 bg-black p-2 text-white opacity-70">
              <div className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary text-sm">
                {index + 1}
              </div>
              <div className="ml-2 flex flex-col items-start text-left">
                <div className="text-sm">{file.name}</div>
                <div className="text-xs">{formatFileSize(file.size)}</div>
              </div>
            </figcaption>
          </figure>
        ) : (
          <div className="flex h-[75px] w-[250px] items-center border-t bg-black p-2 text-xs text-white opacity-70">
            <div className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary text-sm">
              {index + 1}
            </div>
            <div className="ml-2 flex flex-col items-start gap-1 text-left">
              <div className="text-sm">{file.name}</div>
              <div className="text-xs">{formatFileSize(file.size)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default SortableImageCard;
