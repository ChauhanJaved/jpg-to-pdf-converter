'use client'
//External  imports


//Internal imports

import {
  HeaderNavItems,


} from "@/data/website-data";
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
      className="relative mt-[80px] flex w-full m-auto scroll-m-[80px] flex-col items-center justify-start   px-3 py-10 xl:max-w-screen-xl "
    >
      <SectionHeader caption="JPG to PDF Converter" />
      <FileUploader onFilesSelected={handleFilesSelected}/>
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
