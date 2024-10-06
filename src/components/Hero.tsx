"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { useState } from "react";

//Testing

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
import { SortableItem } from "./UI/SortableItem";
import SortableImageList from "./UI/SortableImageList";

//testing

const Hero = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const removeFile = (fileToRemove: File) => {
    setFileList((prevFileList) =>
      prevFileList.filter(
        (file) =>
          file.lastModified !== fileToRemove.lastModified ||
          file.size !== fileToRemove.size,
      ),
    );
  };

  //testing
  const [items, setItems] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(Number(active.id)); // ids are strings now
        const newIndex = items.indexOf(Number(over.id)); // ids are strings now

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  //testing

  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="JPG to PDF Converter"
        desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
        className={`${fileList.length > 0 && "hidden"} pt-10`}
      />

      <Dropzone
        fileList={fileList}
        setFileList={setFileList}
        onRemoveFile={removeFile}
      />

      {/* tsting */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </SortableContext>
      </DndContext>
      {/* tsting */}
      <SortableImageList fileList={fileList} onRemoveFile={removeFile} />
    </section>
  );
};
export default Hero;
