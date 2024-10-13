"use client";

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/drop-zone";

import { FileProvider } from "@/context/file-context";

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="relative m-auto mt-[83px] flex w-full scroll-m-[83px] flex-col items-center justify-start px-3"
      >
        <Dropzone />
      </section>
    </FileProvider>
  );
};

export default Hero;
