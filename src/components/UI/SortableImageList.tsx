"use client";
//External  imports
import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  DragStartEvent,
  DragOverlay,
  MeasuringConfiguration,
  MeasuringStrategy,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
//Internal imports
import { useFileContext } from "@/context/FileContext";
import SortableImageCard from "./SortableImageCard";

const SortableImageList = () => {
  const { fileList, setFileList } = useFileContext();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 100, tolerance: 10 },
    }),
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
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    if (active) {
      setActiveId(active.id as string);
    }
  };
  const measuring: MeasuringConfiguration = {
    droppable: {
      strategy: MeasuringStrategy.Always,
    },
  };
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      measuring={measuring}
    >
      <SortableContext items={fileList} strategy={rectSwappingStrategy}>
        <div className="p-5">
          {fileList.map((fileObj) => (
            <SortableImageCard key={fileObj.id} fileObject={fileObj} />
          ))}
        </div>
        <DragOverlay>
          {activeId
            ? // Safely find the fileObject and its index
              (() => {
                const fileObject = fileList.find(
                  (file) => file.id === activeId,
                );
                // Only render SortableImageCard if fileObject is found
                return fileObject ? (
                  <SortableImageCard fileObject={fileObject} />
                ) : null;
              })()
            : null}
        </DragOverlay>
      </SortableContext>
    </DndContext>
  );
};

export default SortableImageList;
