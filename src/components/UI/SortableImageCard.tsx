/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "./card";
import { Button } from "./Button";
import { X } from "lucide-react";

//testing
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
//testing

interface SortableImageCardProps {
  id: string;
  index: number;
  file: File;
  onRemoveFile: (file: File) => void;
}

export default function SortableImageCard({
  id,
  index,
  file,
  onRemoveFile,
}: SortableImageCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card key={index} className="overflow-hidden">
        <figure className="relative flex h-[242px] w-[196px] items-center justify-center overflow-hidden p-4">
          <img
            src={URL.createObjectURL(file)}
            alt={`Thumbnail-${index}`}
            className="object-contain"
          />
          <Button
            onClick={() => onRemoveFile(file)}
            size="icon"
            variant="outline"
            className={`absolute right-[calc(10px)] top-[calc(10px)]`}
          >
            <X className="h-4 w-4" />
          </Button>
          <figcaption className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-black p-2 text-sm text-white opacity-75">
            {`(${index + 1}) ${file.name}`}
          </figcaption>
        </figure>
      </Card>
    </div>
  );
}
