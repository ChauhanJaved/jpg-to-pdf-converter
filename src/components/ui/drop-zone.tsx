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
import SectionHeader from "./section-header";

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
        <SectionHeader
          caption="JPG to PDF Converter"
          className={`mb-2 mt-10`}
          desc="Combine all JPG images into Multi-Page PDF or Convert each JPG into Single-Page PDF"
        />
      )}
      <div
        className={`mt-5 flex w-full flex-col items-center rounded border shadow-sm`}
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
