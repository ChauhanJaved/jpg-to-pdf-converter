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
import { raleway } from "@/lib/font";
import HeroButtonToolbar from "@/components/hero-button-toolbar";
import HeroSettingsSheet from "@/components/hero-settings-sheet";
import { useFileContext } from "@/context/file-context";
import HeroDropZoneBox from "@/components/hero-drop-zone-box";
import HeroFileInputButton from "@/components/hero-file-input-button";

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
  const [pageSize, setPageSize] = useState(PageSizeEnum.A4);
  const [margin, setMargin] = useState(MarginEnum.None);
  const [imagePreview, setImagePreview] = useState(true);
  const handleOrientationChange = (value: PageOrientationEnum) => {
    setOrientation(value);
  };
  const handlePageSizeChange = (newPageSize: PageSizeEnum) => {
    setPageSize(newPageSize);
  };
  const handleMarginChange = (newMargin: MarginEnum) => {
    setMargin(newMargin);
  };
  const handleImagePreviewChange = (isImgPreview: boolean) => {
    setImagePreview(isImgPreview);
  };
  const handleConversion = async () => {
    setIsConvertingFiles(true);
    await handleConvertToPdf(fileList, orientation, pageSize, margin);
    setIsConvertingFiles(false);
  };
  // Adding file
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  return (
    <div className="flex flex-col">
      {fileList.length === 0 ? (
        // SEO h1 and desc text
        <div className="flex flex-col items-start gap-2 py-6 sm:pt-10 md:pt-12 lg:items-center lg:pt-16">
          <h1
            className={`${raleway.className} text-4xl font-extrabold lg:text-5xl`}
          >
            Fee JPG to PDF Converter
          </h1>
          <p
            className={`text-lg leading-7 text-secondary-foreground lg:text-xl`}
          >
            Combine all JPG images into multi Page PDF or Convert each JPG into
            single page PDF
          </p>
        </div>
      ) : (
        // Main toolbar with convert and add file buttons
        <div className="mt-3 flex w-full flex-wrap items-center justify-end gap-3 py-3">
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
            imgPreview={imagePreview}
            onOrientationChange={handleOrientationChange}
            onPageSizeChange={handlePageSizeChange}
            onMarginChange={handleMarginChange}
            onImgPreviewChange={handleImagePreviewChange}
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
