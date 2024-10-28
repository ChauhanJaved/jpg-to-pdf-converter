"use client";
//Internal Imports
import { HeaderNavItems } from "@/data/website-data";
import { FileProvider } from "@/context/file-context";
import HeroWithFileProvider from "@/components/hero-with-file-provider";
import { ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <FileProvider>
      <section
        id={HeaderNavItems.Home}
        className="container m-auto mt-[83px] w-full scroll-m-[83px] xl:max-w-screen-xl"
      >
        <div className="mx-5 sm:mx-7 md:mx-9 lg:mx-11">
          <HeroWithFileProvider />
          {/* Product description */}
          <div className="mt-5 flex flex-row">
            <div>
              <ShieldCheck className="mr-3 inline h-9 w-9 text-primary sm:h-10 sm:w-10" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-lg font-bold sm:text-xl">
                Local, Secure, and Private File Conversion
              </div>
              <p className="text-base sm:text-lg">
                Our JPG to PDF converter prioritizes your file privacy and
                security by processing everything locally on your device. Unlike
                other converters that require uploading files to external
                servers, our tool ensures that your images never leave your
                device. This no-upload approach guarantees maximum data privacy,
                making it the ideal solution for users handling sensitive or
                personal files. All conversions happen directly in your browser,
                ensuring complete security and giving you peace of mind knowing
                your files are processed safely and remain in your control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FileProvider>
  );
};

export default Hero;
