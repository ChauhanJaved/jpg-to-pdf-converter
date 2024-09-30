"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { useState } from "react";
import ImageList from "./UI/ImageList";

const Hero = () => {
  const [filePreviews, setFilePreviews] = useState<
    { file: File; preview: string }[]
  >([]);
  // Handle removing files in the parent component
  const handleRemoveFile = (fileName: string) => {
    const updatedPreviews = filePreviews.filter(
      (f) => f.file.name !== fileName,
    );
    setFilePreviews(updatedPreviews);
  };
  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="JPG to PDF Converter"
        desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
      />
      <Dropzone setFilePreviews={setFilePreviews} />
      {filePreviews.length > 0 && (
        <ImageList filePreviews={filePreviews} onRemove={handleRemoveFile} />
      )}
    </section>
  );
};
export default Hero;
