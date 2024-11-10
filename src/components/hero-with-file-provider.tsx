"use client";

//External Imports----------
import { useState } from "react";
import { Download, Trash2 } from "lucide-react";

//Internal Imports----------
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import SectionHeader from "@/components/section-header";
import HeroButtonToolbar from "@/components/hero-button-toolbar";
import HeroFileInputButton from "@/components/hero-file-input-button";
import HeroSettingsSheet from "@/components/hero-settings-sheet";
import HeroDropZoneBox from "@/components/hero-drop-zone-box";
import { useFileContext } from "@/context/file-context";

import { useUser } from "@/context/user-context";

const HeroWithFileProvider = () => {
  //FileList----------
  const { fileList, setFileList } = useFileContext();
  const handleClearList = () => {
    setFileList([]);
    window.scrollTo({ top: 0 });
  };

  //Conversion--------
  const [isConvertingFiles, setIsConvertingFiles] = useState(false);
  const [orientation, setOrientation] = useState(PageOrientationEnum.portrait);
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  const [pageSize, setPageSize] = useState(PageSizeEnum.A4);
  const handlePageSizeChange = (newPageSize: PageSizeEnum) => {
    setPageSize(newPageSize);
  };
  const [margin, setMargin] = useState(MarginEnum.None);
  const handleMarginChange = (newMargin: MarginEnum) => {
    setMargin(newMargin);
  };
  const [mergeAllImages, setMergeAllImages] = useState(true);
  const handleMergeAllImagesChange = (shouldMerge: boolean) => {
    setMergeAllImages(shouldMerge);
  };

  const handleConversion = async () => {
    setIsConvertingFiles(true);
    try {
      await handleConvertToPdf(fileList, orientation, pageSize, margin);
    } catch (error) {
      console.error("Conversion error:", error);
    } finally {
      setIsConvertingFiles(false);
    }
  };

  // Adding file
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  const { userStatus } = useUser();
  return (
    <div className="flex flex-col">
      {fileList.length === 0 ? (
        <SectionHeader
          className="pb-5 pt-5 sm:pt-10 md:pt-12 lg:pb-10 lg:pt-16"
          caption={`${userStatus === "trial" ? "Free " : ""}JPG to PDF Converter`}
          desc={
            "Combine multiple JPG images into a single multi-page PDF | Convert each JPG image into an individual single-page PDF | Customize page orientation | Choose from multiple page sizes | Adjust page margins"
          }
        />
      ) : (
        // Main toolbar with convert and add file buttons
        <div className="mt-5 flex w-full flex-wrap items-center justify-end gap-3 py-3 lg:mt-10">
          {/* Add file button */}
          <HeroFileInputButton
            buttonType="toolbar"
            isDisabled={isConvertingFiles || isLoadingFiles}
            setIsLoadingFiles={setIsLoadingFiles}
          />
          {/* Remove all button */}
          <HeroButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Remove All"
            handleOnClick={handleClearList}
            icon={Trash2}
          ></HeroButtonToolbar>
          {/* Setting button */}
          <HeroSettingsSheet
            disabled={isConvertingFiles || isLoadingFiles}
            orientation={orientation}
            pageSize={pageSize}
            margin={margin}
            mergeAllImages={mergeAllImages}
            onOrientationChange={handleOrientationChange}
            onPageSizeChange={handlePageSizeChange}
            onMarginChange={handleMarginChange}
            onMergeAllImagesChange={handleMergeAllImagesChange}
          />
          {/* Convert button */}
          <HeroButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Convert"
            handleOnClick={handleConversion}
            icon={Download}
          ></HeroButtonToolbar>
        </div>
      )}
      {/* Dropzone with file count and preview on/off*/}
      <HeroDropZoneBox
        isDisabled={isConvertingFiles || isLoadingFiles}
        setIsLoadingFiles={setIsLoadingFiles}
      />
    </div>
  );
};

export default HeroWithFileProvider;
