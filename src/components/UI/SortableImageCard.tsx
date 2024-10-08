/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "./card";
import { Button } from "./Button";
import { Grip, X } from "lucide-react";

//testing
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
//testing

interface FileObject {
  file: File;
  id: string;
}
interface SortableImageCardProps {
  index: number;
  fileObject: FileObject;
}

export default function SortableImageCard({
  index,
  fileObject,
}: SortableImageCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: fileObject.id,
      transition: {
        duration: 150, // milliseconds
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style}>
      <Card key={index} className="mt-5 overflow-hidden">
        <figure className="relative flex w-[196px] items-center justify-center overflow-hidden p-4">
          <img
            src={URL.createObjectURL(fileObject.file)}
            alt={`Thumbnail-${index}`}
            className="object-contain"
          />
          <Button
            {...listeners}
            {...attributes}
            variant="outline"
            size="icon"
            className={`absolute right-0 top-0 touch-none`}
          >
            <Grip className="h-4 w-4" />
          </Button>
          <Button
            // onClick={() => onRemoveFile(file)}
            onClick={() => {
              console.log("click");
            }}
            size="icon"
            variant="outline"
            className={`absolute right-[calc(40px)] top-0`}
          >
            <X className="h-4 w-4" />
          </Button>
          <figcaption className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-black p-2 text-sm text-white opacity-75">
            {`(${index + 1}) ${fileObject.file.name}`}
          </figcaption>
        </figure>
      </Card>
    </div>
  );
}
