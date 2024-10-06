import React from "react";
import SortableImageCard from "./SortableImageCard";

//testing

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

//testing

interface SortableImageListProps {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
  onRemoveFile: (file: File) => void;
}

const SortableImageList: React.FC<SortableImageListProps> = ({
  fileList,
  setFileList,
  onRemoveFile,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFileList((fileList) => {
        const oldIndex = fileList.findIndex(
          (file) =>
            `${file.name}-${file.size}-${file.lastModified}` === active.id,
        );
        const newIndex = fileList.findIndex(
          (file) =>
            `${file.name}-${file.size}-${file.lastModified}` === over.id,
        );
        return arrayMove(fileList, oldIndex, newIndex);
      });
    }
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={fileList.map(
          (file) => `${file.name}-${file.size}-${file.lastModified}`,
        )}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-wrap items-center justify-center space-x-5 space-y-5 p-4">
          {fileList.map((file, index) => (
            <SortableImageCard
              id={`${file.name}-${file.size}-${file.lastModified}`}
              key={`${file.name}-${file.size}-${file.lastModified}`}
              file={file}
              index={index}
              onRemoveFile={onRemoveFile}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableImageList;
