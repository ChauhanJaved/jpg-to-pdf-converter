"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import FileUploader from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";

const Hero = () => {
  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader caption="JPG to PDF Converter" />
      <div className="mt-10 flex w-full items-center justify-center rounded border-2">
        <FileUploader />
      </div>
    </section>
  );
};
export default Hero;
