"use client";

import { HeaderNavItems } from "@/data/website-data";
import DropzoneCustom from "./ui/drop-zone";

import { FileProvider } from "@/context/file-context";
import SectionHeader from "./ui/section-header";
import { CircleCheck } from "lucide-react";

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
        <DropzoneCustom />
        <div className="flex text-base sm:text-lg">
          <div className="flex space-x-2">
            <div>
              <CircleCheck className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
            </div>
            <div className="flex flex-col">
              <strong>Local, Secure, and Private File Conversion</strong>
              <p>
                Our JPG to PDF converter prioritizes your{" "}
                <strong>file privacy and security</strong> by processing
                everything locally on your device. Unlike other converters that
                require uploading files to external servers, our tool ensures
                that your images never leave your device. This no-upload
                approach guarantees maximum data privacy, making it the ideal
                solution for users handling sensitive or personal files. All
                conversions happen directly in your browser, ensuring complete
                security and giving you peace of mind knowing your files are
                processed safely and remain in your control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FileProvider>
  );
};

export default Hero;
