"use client";
//External  imports

//Internal imports

import { HeaderNavItems } from "@/data/website-data";
import Dropzone from "./UI/Dropzone";
import SectionHeader from "./UI/SectionHeader";
import { useState } from "react";
import HeroIcons, { IconNames } from "./UI/HeroIcons";
import Button from "./UI/Button";
import { handleConvertToPdf } from "@/lib/pdf-lib";

const Hero = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [openFileDialog, setOpenFileDialog] = useState<(() => void) | null>(
    null,
  );
  const removeFile = (fileToRemove: File) => {
    setFileList((prevFileList) =>
      prevFileList.filter(
        (file) =>
          file.lastModified !== fileToRemove.lastModified ||
          file.size !== fileToRemove.size,
      ),
    );
  };
  const handleOpenFileDialog = () => {
    if (openFileDialog) {
      openFileDialog();
    }
  };
  return (
    <section
      id={HeaderNavItems.Home}
      className="relative m-auto mt-[80px] flex w-full scroll-m-[80px] flex-col items-center justify-start px-3 py-10 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="JPG to PDF Converter"
        desc="Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
        className={`${fileList.length > 0 && "hidden"}`}
      />
      <div
        className={`${fileList.length === 0 && "hidden"} sticky top-[100px] z-[996] ml-auto flex w-full flex-row items-end justify-between border border-red-900 p-3`}
      >
        {/* Right box */}
        <div className="border border-r-red-900"></div>
        {/* Left box */}
        <div className="flex flex-col items-end space-y-2 border border-red-900 md:flex-row">
          {/* Item---1 */}
          <div className="relative mr-3 border border-blue-900">
            <p
              className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 top-0 z-[1] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white bg-blue-ultramarine text-white`}
            >
              {"All"}
            </p>
            <button
              onClick={() => {
                setFileList([]);
              }}
              className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} z-[0] ml-[15px] mt-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
            >
              <HeroIcons
                iconName={IconNames.XMark}
                className="size-6 font-bold"
                strokeWidth={1.5}
              />
            </button>
          </div>
          {/* Item---2 */}
          <div className="relative mr-3 border border-blue-900">
            <p
              className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 top-0 z-[1] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white bg-blue-ultramarine text-white`}
            >
              {fileList.length}
            </p>
            <button
              onClick={handleOpenFileDialog}
              className={`${fileList.length > 0 ? "visible opacity-100" : "invisible opacity-0"} z-[0] ml-[15px] mt-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-blue-ultramarine text-white transition-all duration-300 hover:opacity-90 active:opacity-90`}
            >
              <HeroIcons
                iconName={IconNames.Plus}
                className="size-6 font-bold"
                strokeWidth={1.5}
              />
            </button>
          </div>
          {/* Item---3 */}
          <Button
            className={`${fileList.length > 0 ? "visible" : "invisible"} sticky top-[100px]`}
            caption="Convert"
            icon={IconNames.DownArrowCircle}
            handleClick={() => handleConvertToPdf(fileList)}
          />
        </div>
      </div>
      <Dropzone
        fileList={fileList}
        setFileList={setFileList}
        setOpenFileDialog={setOpenFileDialog}
        onRemoveFile={removeFile}
      />
    </section>
  );
};
export default Hero;
