import React from "react";
import { Card } from "@/components/UI/card";
import { Button } from "@/components/UI/Button";
import { X } from "lucide-react";

interface ImageListProps {
  fileList: File[];
  onRemoveFile: (file: File) => void;
}

const ImageList: React.FC<ImageListProps> = ({ fileList, onRemoveFile }) => {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-5 space-y-5 p-4">
      {fileList.map((file, index) => (
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
              <X />
            </Button>
            <figcaption className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-black p-2 text-sm text-white opacity-75">
              {`(${index + 1}) ${file.name}`}
            </figcaption>
            {/* <Badge
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              variant="secondary"
            >
              {file.name}
            </Badge> */}
          </figure>
        </Card>
      ))}
    </div>
  );
};

export default ImageList;
