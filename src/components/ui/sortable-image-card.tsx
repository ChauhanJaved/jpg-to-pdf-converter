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
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Create a URL for the image and clean it up on unmount
  useEffect(() => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => {
      URL.revokeObjectURL(url); // Clean up URL when component is unmounted
    };
  }, [file]);

  return (
    <div ref={setNodeRef} style={style} className="touch-none">
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
          >
            <Grip />
          </Button>
        </div>
        {/* Box-2---------- */}
        <figure className="relative flex h-[350px] w-[250px] items-center justify-center overflow-hidden border-t bg-primary-foreground p-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`Thumbnail for ${file.name}`}
              className="object-contain"
            />
          ) : (
            <p>Loading...</p>
          )}
          <p className="absolute left-2 top-2 flex h-auto min-h-11 w-auto min-w-11 items-center justify-center rounded-full bg-black text-sm text-white opacity-70">
            {index + 1}
          </p>
          <figcaption className="absolute bottom-2 left-4 right-4 bg-black p-2 text-sm text-white opacity-70">
            {file.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
});

export default SortableImageCard;
