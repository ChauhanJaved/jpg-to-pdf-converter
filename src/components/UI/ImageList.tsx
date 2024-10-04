import React from "react";
import { Card } from "./card";
import { Button } from "./Button";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ImageListProps {
  fileList: File[];
  onRemoveFile: (file: File) => void;
}

const ImageList: React.FC<ImageListProps> = ({ fileList, onRemoveFile }) => {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-5 space-y-5 p-4">
      {fileList.map((file, index) => (
        <Card
          key={index}
          className="relative flex h-[242px] w-[196px] justify-center overflow-hidden p-4"
        >
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
          <Badge
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            variant="secondary"
          >
            {file.name}
          </Badge>
        </Card>
      ))}
    </div>
  );
};

export default ImageList;
