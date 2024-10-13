/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { Grip, X } from "lucide-react";
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
    <div ref={setNodeRef} style={style}>
      <div className="m-3 my-5 overflow-hidden rounded border shadow-sm">
        <figure className="relative flex h-[300px] w-[200px] items-center justify-center overflow-hidden p-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`Thumbnail for ${file.name}`}
              className="object-contain"
            />
          ) : (
            <p>Loading...</p>
          )}

          <p className="absolute left-1 top-1 flex h-[34px] w-[34px] touch-none items-center justify-center rounded-full bg-black text-sm text-white opacity-70">
            {index + 1}
          </p>
          <Button
            {...listeners}
            {...attributes}
            variant="outline"
            size="icon"
            className="absolute right-1 top-1 touch-none"
            aria-label="Reorder Image"
          >
            <Grip className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => removeFile(id)}
            size="icon"
            variant="outline"
            className="absolute right-[calc(45px)] top-1"
            aria-label="Remove Image"
          >
            <X className="h-4 w-4" />
          </Button>
          <figcaption className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-black p-2 text-sm text-white opacity-70">
            {file.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
});

export default SortableImageCard;
