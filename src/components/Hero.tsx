"use client";

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { FileProvider } from "@/context/FileContext";

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 xl:max-w-screen-xl"
      >
        <SectionHeader caption="JPG to PDF Converter" className="mt-10" />
        <Dropzone />
      </section>
    </FileProvider>
  );
};

export default Hero;
