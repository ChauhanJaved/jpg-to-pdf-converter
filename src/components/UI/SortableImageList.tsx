"use client";
//External  imports
import { useFileContext } from "@/context/FileContext";
import SortableImageCard from "./SortableImageCard";

//Internal imports
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

const SortableImageList = () => {
  const { fileList, setFileList } = useFileContext();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFileList((fileList) => {
        const oldIndex = fileList.findIndex((file) => file.id === active.id);
        const newIndex = fileList.findIndex((file) => file.id === over.id);

        return arrayMove(fileList, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={fileList.map((fileObj) => fileObj.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="p-5">
          {fileList.map((fileObj, index) => (
            <SortableImageCard
              key={fileObj.id}
              fileObject={fileObj}
              index={index}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableImageList;
