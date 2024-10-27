"use client";
//Internal Imports
import { HeaderNavItems } from "@/data/website-data";
import { FileProvider } from "@/context/file-context";
import HeroWithFileProvider from "@/components/hero-with-file-provider";

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="container m-auto mt-[83px] w-full scroll-m-[83px] xl:max-w-screen-xl"
      >
        <HeroWithFileProvider />
      </section>
    </FileProvider>
  );
};

export default Hero;
