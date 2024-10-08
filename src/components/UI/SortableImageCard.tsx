/* eslint-disable @next/next/no-img-element */
//External  imports
import React from "react";
import { Card } from "./card";
import { Button } from "./Button";
import { Grip, X } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
//Internal imports
import { useFileContext } from "@/context/FileContext";
interface FileObject {
  file: File;
  id: string;
}
interface SortableImageCardProps {
  fileObject: FileObject;
}

export default function SortableImageCard({
  fileObject,
}: SortableImageCardProps) {
  const { removeFile } = useFileContext();
  const {
    index,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isSorting,
  } = useSortable({
    id: fileObject.id,
  });

  const style = {
    transition,
    transform: isSorting ? undefined : CSS.Translate.toString(transform),
  };
  return (
    <div ref={setNodeRef} style={style}>
      <Card key={index} className="mt-5 overflow-hidden">
        <figure className="relative flex min-h-[300px] w-[200px] items-center justify-center overflow-hidden p-4">
          <img
            src={URL.createObjectURL(fileObject.file)}
            alt={`Thumbnail-${index}`}
            className="object-contain"
          />
          <p
            className={`absolute left-1 top-1 flex h-[34px] w-[34px] touch-none items-center justify-center rounded-full bg-black text-sm text-white opacity-70`}
          >
            {index + 1}
          </p>
          <Button
            {...listeners}
            {...attributes}
            variant="outline"
            size="icon"
            className={`absolute right-1 top-1 touch-none`}
          >
            <Grip className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => removeFile(fileObject.id)}
            size="icon"
            variant="outline"
            className={`b absolute right-[calc(45px)] top-1`}
          >
            <X className="h-4 w-4" />
          </Button>
          <figcaption className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-black p-2 text-sm text-white opacity-70">
            {`${fileObject.file.name}`}
          </figcaption>
        </figure>
      </Card>
    </div>
  );
}
