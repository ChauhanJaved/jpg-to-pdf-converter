"use client";
//External  imports
import { useState } from "react";
//Internal imports
import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import SortableImageList from "./UI/SortableImageList";

export default function Hero() {
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
      <SortableImageList
        fileList={fileList}
        onRemoveFile={removeFile}
        setFileList={setFileList}
      />
    </section>
  );
}
