"use client";

//External Imports----------
import { useState } from "react";
import {
  handleConvertToPdf,
  MarginEnum,
  PageOrientationEnum,
  PageSizeEnum,
} from "@/lib/pdf-lib";
import { Download, Trash2 } from "lucide-react";

//Internal Imports----------
import ButtonToolbar from "./button-toolbar";
import SettingsSheet from "./settings-sheet";
import { useFileContext } from "@/context/file-context";

import DropZoneBox from "./drop-zone-box";
import FileInputButton from "./file-input-button";
import { raleway } from "@/lib/font";

const Dropzone = () => {
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
    <>
      {fileList.length === 0 && (
        <>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 px-3 lg:mt-10">
            <h1
              className={`${raleway.className} text-4xl font-extrabold tracking-tight lg:text-5xl`}
            >
              Fee JPG to PDF Converter
            </h1>
            <p className={`text-lg leading-7 lg:text-xl`}>
              Combine all JPG images into Multi-Page PDF or Convert each JPG
              into Single-Page PDF
            </p>
          </div>
        </>
      )}
      <div
        className={`mt-5 flex w-full flex-col items-center rounded border bg-muted shadow-sm`}
      >
        {/* Toolbar */}
        <div className="flex w-full flex-wrap items-center justify-end gap-3 p-3">
          <FileInputButton
            isDisabled={isConvertingFiles || isLoadingFiles}
            setIsLoadingFiles={setIsConvertingFiles}
          />
          <ButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Remove All"
            handleOnClick={handleClearList}
            icon={Trash2}
          ></ButtonToolbar>
          <SettingsSheet
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
          <ButtonToolbar
            disabled={
              fileList.length === 0 || isConvertingFiles || isLoadingFiles
            }
            caption="Convert"
            handleOnClick={handleConversion}
            icon={Download}
          ></ButtonToolbar>
        </div>
        <DropZoneBox
          isDisabled={isConvertingFiles || isLoadingFiles}
          setIsLoadingFiles={setIsLoadingFiles}
        />
      </div>
    </>
  );
};

export default Dropzone;
