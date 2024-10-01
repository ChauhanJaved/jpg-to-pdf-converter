"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { useState } from "react";

const Hero = () => {
  const [filePreviews, setFilePreviews] = useState<
    { file: File; preview: string }[]
  >([]);

  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="JPG to PDF Converter"
        desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
      />
      <Dropzone filePreviews={filePreviews} setFilePreviews={setFilePreviews} />
    </section>
  );
};
export default Hero;
