"use client";

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./ui/drop-zone";

import { FileProvider } from "@/context/file-context";
import SectionHeader from "./ui/section-header";

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="container m-auto mt-[83px] flex w-full scroll-m-[83px] flex-col items-center justify-start px-3 xl:max-w-screen-xl"
      >
        <SectionHeader
          caption="JPG to PDF Converter"
          className={`mb-2 mt-10`}
        />
        <Dropzone />
      </section>
    </FileProvider>
  );
};

export default Hero;
