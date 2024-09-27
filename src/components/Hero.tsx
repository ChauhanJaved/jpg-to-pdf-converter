"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import FileUploader from "./UI/FileUploader";
import { useState } from "react";
import SectionHeader from "./UI/SectionHeader";

const Hero = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
  };
  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader caption="JPG to PDF Converter" />
      <div className="mt-10 flex w-full items-center justify-center rounded border-2">
        <FileUploader onFilesSelected={handleFilesSelected} />
      </div>
      {/* Display selected files */}
      {selectedFiles.length > 0 && (
        <ul className="mt-4">
          {selectedFiles.map((file, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Hero;
