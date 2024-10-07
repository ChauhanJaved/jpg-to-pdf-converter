"use client";

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { FileProvider } from "@/context/FileContext"; // Import the context provider

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 xl:max-w-screen-xl"
      >
        <SectionHeader
          caption="JPG to PDF Converter"
          desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
        />
        <Dropzone />
      </section>
    </FileProvider>
  );
};

export default Hero;
